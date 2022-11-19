"use strict";

//=============================================================================
// EISStepCounters.js                                                             
//=============================================================================


/*:
*
* @author Kino
* @plugindesc A plugin that lets you create multiple step counters for your game.
*
*
*
* @help
* Version 1.2.0
*
//=============================================================================
// Introduction                                                           
//=============================================================================
*
* This plugin allows a game developer to create step counters that track the
* players steps in game. This can be useful for systems such as an incubator for
* eggs that need to be hatched. Or, awards that are to be given out for 
* traveling all over the game world. Most importantly, it gives the developer
* more control over which steps to record, and when they want to start recording.
*
* Furthermore, there are no limits on the amount of counters you can create,
* as long as your save data can handle it that is.
* 
//=============================================================================
// Script Calls                                                       
//=============================================================================
* All scripts calls are under the namespace: KR.SC.
* The scripts calls are as follows:
*
* KR.SC.createStepCounter(name)
* Example: KR.SC.createStepCounter("Incubator");
* 
* This creates a step counter with a name you specify that will track the
* players steps in game, while the game is running. No other setup is required.
*
* KR.SC.resetStepCounter(name)
* Example: KR.SC.resetSteps("Incubator");
* 
* This will reset the steps of the step counter named "Incubator" via script call.
* A very useful script call if you want to reuse the counter for different things.
*
* KR.SC.getCounterSteps(name);
* Example: KR.SC.getSteps("Incubator");
* 
* This call will return the number of steps taken by the user since this step
* counters creation. You can store this in a game variable, and make use of it 
* to call a common event, or activate certain switches in game.
* 
//=============================================================================
//  Contact Information
//=============================================================================
* Contact me via twitter: EISKino, or on the rpg maker forums.
* Username on forums: Kino.
*
* Forum Link: http://forums.rpgmakerweb.com/index.php?/profile/75879-kino/
* Twitter Link: https://twitter.com/EISKino
*
* Hope this plugin helps, and enjoy!
* --Kino
*/

var KR = KR || {};
KR.Plugins = KR.Plugins || {};

(function ($) {
  KR.Plugins.SetupStepCounters = function () {
    'use strict';

    //=============================================================================
    // Game_Actor                                                             
    //=============================================================================

    var GameParty_onPlayerWalk = Game_Party.prototype.onPlayerWalk;
    Game_Party.prototype.onPlayerWalk = function () {
      GameParty_onPlayerWalk.call(this);
      StepCounterManager.updateAllCounters();
    };

    //=============================================================================
    // DataManager                                                             
    //=============================================================================
    var EISDataManager_makeSaveContents = DataManager.makeSaveContents;
    DataManager.makeSaveContents = function () {
      // A save data does not contain $gameTemp, $gameMessage, and $gameTroop.
      var contents = {};
      contents = EISDataManager_makeSaveContents.call(this);
      contents.stepCountersList = StepDataManager.stepCounterList;
      return contents;
    };

    var EISDataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function (contents) {
      EISDataManager_extractSaveContents.call(this, contents);
      StepDataManager.stepCounterList = contents.stepCountersList;
    };

    //=============================================================================
    // StepCounterManager                                                         
    //=============================================================================

    function StepCounterManager() {}

    StepCounterManager.createStepCounter = function (name, regions) {
      StepDataManager.addCountertoList(name, regions);
    };

    StepCounterManager.updateAllCounters = function () {
      var list = StepDataManager.getStepCounterList();
      list.forEach(function (stepCounter) {
        StepCounterUtil.updateSteps(stepCounter);
      });
    };

    StepCounterManager.resetCounterSteps = function (name) {
      var stepCounter = StepDataManager.getCounterByName(name);
      StepCounterUtil.resetSteps(stepCounter);
      console.log("Steps Reset");
    };

    StepCounterManager.getCounterSteps = function (name) {
      var stepCounter = StepDataManager.getCounterByName(name);
      return StepCounterUtil.getSteps(stepCounter);
    };

    //=============================================================================
    // StepDataManager                                                             
    //=============================================================================
    function StepDataManager() {}

    StepDataManager.stepCounterList = {
      stepCounters: []
    };

    StepDataManager.addCountertoList = function (name, regions) {
      var stepCounter = regions === undefined ? new StepCounter(name) : new RegionStepCounter(name, regions);
      var list = this.stepCounterList.stepCounters;
      if (!this.isDuplicateCounter(name)) list.push(stepCounter);else console.log("Duplicate Counter Exists For: " + name);
    };

    StepDataManager.removeCounterFromList = function (name) {
      var list = this.stepCounterList.stepCounters;
      var nameRegEx = new RegExp(name, "ig");
      list = list.filter(function (element) {
        if (!nameRegEx.test(element._name)) {
          return true;
        }
      });
      console.log(list);
    };

    StepDataManager.isDuplicateCounter = function (name) {
      var list = this.stepCounterList.stepCounters;
      var counter = this.getCounterByName(name);
      return counter !== null ? true : false;
    };

    StepDataManager.getCounterByName = function (name) {
      var length = this.stepCounterList.stepCounters.length;
      var list = this.stepCounterList.stepCounters;
      var nameRegEx = new RegExp(name, "ig");
      for (var i = 0; i < length; i++) {
        if (nameRegEx.test(list[i]._name)) {
          return list[i];
        }
      }
      return null;
    };

    StepDataManager.getStepCounterList = function () {
      return this.stepCounterList.stepCounters;
    };

    //=============================================================================
    // StepCounter                                                             
    //=============================================================================
    function StepCounter() {
      this.initialize.apply(this, arguments);
    }

    StepCounter.prototype.initialize = function (name) {
      this._steps = 0;
      this._name = name;
    };

    //=============================================================================
    // StepCounterUtil                                                             
    //=============================================================================
    function StepCounterUtil() {}

    StepCounterUtil.updateSteps = function (stepCounter) {
      if (stepCounter._regions !== undefined) {
        StepCounterUtil.updateStepsBasedOnRegion(stepCounter);
      } else {
        stepCounter._steps += 1;
      }
    };

    StepCounterUtil.resetSteps = function (stepCounter) {
      stepCounter._steps = 0;
    };

    StepCounterUtil.getSteps = function (stepCounter) {
      return stepCounter._steps;
    };

    StepCounterUtil.updateStepsBasedOnRegion = function (stepCounter) {
      if (stepCounter._regions.some(function (element) {
        return element === $gamePlayer.regionId();
      })) {
        console.log("Region Step Counter Updated");
        stepCounter._steps += 1;
      }
    };

    //=============================================================================
    // API                                                             
    //=============================================================================
    $.SC = {
      createStepCounter: StepCounterManager.createStepCounter,
      resetSteps: StepCounterManager.resetCounterSteps,
      getSteps: StepCounterManager.getCounterSteps
    };

    console.log($);
  };
  KR.Plugins.SetupStepCounters();
})(KR);