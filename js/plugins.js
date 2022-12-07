// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"HIME_PreTitleEvents","status":true,"description":"Build your own sequence of events that should occur before\r\nthe title screen begins","parameters":{"Pre-Title Map ID":"8","Use As Title":"true"}},
{"name":"GALV_AnimatedSplashScreens","status":true,"description":"(v.1.1) Set up animated splash screens that show before the title screen.","parameters":{"----- SPLASH SCREENS -----":"","Splash Images":"MadeWithMv,180,8,0","Splash Background":"#000000","Splash Skip":"ONE"}},
{"name":"YSP_VideoPlayer","status":true,"description":"v1.0.0 Plugin used for playing video.","parameters":{}},
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"--------------","status":false,"description":"","parameters":{}},
{"name":"YEP_SaveEventLocations","status":true,"description":"v1.06 Enable specified maps to memorize the locations of\nevents when leaving and loading them upon reentering map.","parameters":{}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.24 Needed for the majority of Yanfly Engine Scripts. Also\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"714","Screen Height":"546","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_RegionRestrictions","status":true,"description":"v1.03 Use regions to block out Events and/or the player from\nbeing able to venture into those spots.","parameters":{"Player Restrict":"10 255","Event Restrict":"0","All Restrict":"0","Player Allow":"12","Event Allow":"0","All Allow":"0"}},
{"name":"YEP_SaveCore","status":true,"description":"v1.04 Alter the save menu for a more aesthetic layout\nand take control over the file system's rules.","parameters":{"---General---":"","Max Files":"20","Saved Icon":"231","Empty Icon":"230","Return After Saving":"false","Auto New Index":"true","---Action Window---":"","Load Command":"Load","Save Command":"Save","Delete Command":"Delete","---Help Window---":"","Select Help":"Please select a file slot.","Load Help":"Loads the data from the saved game.","Save Help":"Saves the current progress in your game.","Delete Help":"Deletes all data from this save file.","---Delete---":"","Delete Filename":"Damage2","Delete Volume":"50","Delete Pitch":"150","Delete Pan":"0","---Info Window---":"","Show Game Title":"false","Invalid Game Text":"This save is for a different game.","Empty Game Text":"Empty","Map Display Name":"true","Party Display":"0","Party Y Position":"this.lineHeight() + Window_Base._faceHeight","Show Actor Names":"false","Name Font Size":"20","Show Actor Level":"false","Level Font Size":"20","Level Format":"","Data Font Size":"20","Data Column 1":"","Data Column 2":"","Data Column 3":"","Data Column 4":"","---Vocabulary---":"","Map Location":"","Playtime":"Playtime:","Save Count":"Total Saves:","Gold Count":"%1:","---Technical---":"","Save Mode":"auto","Local Config":"config.rpgsave","Local Global":"global.rpgsave","Local Save":"file%1.rpgsave","Web Config":"RPG %1 Config","Web Global":"RPG %1 Global","Web Save":"RPG %1 File%2","---Confirmation---":"","Load Confirmation":"true","Load Text":"Do you wish to load this save file?","Save Confirmation":"true","Save Text":"Do you wish to overwrite this save file?","Delete Confirmation":"true","Delete Text":"Do you wish to delete this save file?","Confirm Yes":"Yes","Confirm No":"No"}},
{"name":"YEP_FpsSynchOption","status":true,"description":"v1.01 Adds a new command to Options menu for synching\nthe FPS of moniters with higher FPS rates.","parameters":{"Command Name":"Synch Monitor FPS","Default Setting":"true"}},
{"name":"YEP_GabWindow","status":true,"description":"v1.05 The Gab Window functions as a window for random\njibber jabber that does not require a message window.","parameters":{"---General---":"","Gab Font Name":"GameFont","Gab Font Size":"28","Character X Pos":"36","Character Y Pos":"60","Base Wait Time":"90","Time Per Character":"4","Fade Rate":"16","Anti-Repeat":"true","---Map---":"","Map Y Location":"72","Map Dim Color 1":"rgba(0, 0, 0, 0.6)","Map Dim Color 2":"rgba(0, 0, 0, 0.3)","---Battle---":"","Battle Y Location":"108","Battle Dim Color 1":"rgba(0, 0, 0, 0.6)","Battle Dim Color 2":"rgba(0, 0, 0, 0)"}},
{"name":"YEP_ButtonCommonEvents","status":true,"description":"v1.01 On the field map, call common events when certain\nbuttons are pressed on the keyboard.","parameters":{"---Top Row---":"","Key ~":"0","Key 1":"0","Key 2":"0","Key 3":"0","Key 4":"0","Key 5":"0","Key 6":"0","Key 7":"0","Key 8":"0","Key 9":"0","Key 0":"0","Key -":"0","Key =":"0","---2nd Row---":"","Key Q (PageUp)":"0","Key W (PageDown)":"0","Key E":"0","Key R":"0","Key T":"0","Key Y":"0","Key U":"0","Key I":"0","Key O":"0","Key P":"0","Key [":"0","Key ]":"0","Key \\":"0","---3rd Row---":"","Key A":"0","Key S":"0","Key D":"0","Key F":"0","Key G":"0","Key H":"0","Key J":"0","Key K":"0","Key L":"0","Key ;":"0","Key \"":"0","Key Enter (OK)":"0","---4th Row---":"","Key Shift (Dash)":"0","Key Z (OK)":"0","Key X (Cancel)":"0","Key C":"1","Key V":"3","Key B":"0","Key N":"0","Key M":"0","Key ,":"0","Key .":"0","Key /":"0","---Misc---":"","Key Space (OK)":"0","Key Left (Left)":"0","Key Up (Up)":"0","Key Right (Right)":"0","Key Down (Down)":"0","Key Insert (Cancel)":"0","Key Delete":"0","Key Home":"0","Key End":"0","Key Page Up (PageUp)":"0","Key Page Down (PageDown)":"0","---NumPad---":"","Key NumPad 0 (Cancel)":"0","Key NumPad 1":"0","Key NumPad 2 (Down)":"0","Key NumPad 3":"0","Key NumPad 4 (Left)":"0","Key NumPad 5":"0","Key NumPad 6 (Right)":"0","Key NumPad 7":"0","Key NumPad 8 (Up)":"0","Key NumPad 9":"0","Key NumPad .":"0","Key NumPad +":"0","Key NumPad -":"0","Key NumPad *":"0","Key NumPad /":"0"}},
{"name":"YEP_LoadCustomFonts","status":true,"description":"v1.00 Load custom fonts from the /fonts/ folder. This will\nallow you to use custom fonts without installing them.","parameters":{"Font Filenames":"novem___.ttf, mplus-1m-regular.ttf","Font Families":"Novem, Original"}},
{"name":"YEP_MoveRouteCore","status":true,"description":"v1.01 Expand the number of movement options for the move\nroute events using this plugin.","parameters":{}},
{"name":"YEP_MessageCore","status":true,"description":"v1.18 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_X_ExtMesPack1","status":true,"description":"v1.10a (Requires YEP_MessageCore.js) Letter Sounds, NameBox\nBackground Types, Choice Control, and more!","parameters":{"---Letter Sounds---":"","Enable Sound":"true","Sound Name":"Knock","Sound Volume":"50","Sound Pitch":"100","Pitch Variance":"10","Sound Pan":"0","Pan Variance":"10","Sound Interval":"2","Reset Sounds":"false","---Message Anchor---":"","Default X":"center","Default Y":"bottom","Auto Row Full Face":"false","---Message Choices---":"","Max Rows":"6","Choice 1 Show Switch":"0","Choice 2 Show Switch":"0","Choice 3 Show Switch":"0","Choice 4 Show Switch":"0","Choice 5 Show Switch":"0","Choice 6 Show Switch":"0","Choice 7 Show Switch":"0","Choice 8 Show Switch":"0","Choice 9 Show Switch":"0","Choice 10 Show Switch":"0","Choice 11 Show Switch":"0","Choice 12 Show Switch":"0","Choice 13 Show Switch":"0","Choice 14 Show Switch":"0","Choice 15 Show Switch":"0","Choice 16 Show Switch":"0","Choice 17 Show Switch":"0","Choice 18 Show Switch":"0","Choice 19 Show Switch":"0","Choice 20 Show Switch":"0","Choice 1 On Switch":"0","Choice 2 On Switch":"0","Choice 3 On Switch":"0","Choice 4 On Switch":"0","Choice 5 On Switch":"0","Choice 6 On Switch":"0","Choice 7 On Switch":"0","Choice 8 On Switch":"0","Choice 9 On Switch":"0","Choice 10 On Switch":"0","Choice 11 On Switch":"0","Choice 12 On Switch":"0","Choice 13 On Switch":"0","Choice 14 On Switch":"0","Choice 15 On Switch":"0","Choice 16 On Switch":"0","Choice 17 On Switch":"0","Choice 18 On Switch":"0","Choice 19 On Switch":"0","Choice 20 On Switch":"0"}},
{"name":"YEP_StopMapMovement","status":true,"description":"v1.01 A utility plugin to stop events from automatically\nmoving by themselves all across your map.","parameters":{"Stop During Events":"true","Stop During Message":"true"}},
{"name":"SRD_ShakingText","status":true,"description":"Allows you to add Shaking Text to your Show Text events!","parameters":{"Reset Shaking per Box":"true","Default Shaking Power":"$.randomNum(0.2, 0.5)","Default Shaking Max":"1","Default Wave Power":"0.5","Default Wave Max":"4","Default Slide Power":"0.5","Default Slide Max":"4","Copy Outline":"true"}},
{"name":"--------------","status":false,"description":"","parameters":{}},
{"name":"MOG_CharParticles","status":true,"description":"(v1.1) Adiciona o sistema de partículas nos characters.","parameters":{}},
{"name":"MOG_PixiFilters","status":true,"description":"(v1.5) Ativa alguns filtros gráficos padrões do Rpg Maker MV.","parameters":{}},
{"name":"MOG_CharacterMotion","status":true,"description":"(v1.2) Sistema de animações dos sprites dos personagens.","parameters":{}},
{"name":"MOG_EventSensor","status":true,"description":"(v1.1) Sistema de distância de eventos.","parameters":{"Self Switch Key":"D"}},
{"name":"--------------","status":false,"description":"","parameters":{}},
{"name":"GALV_VisibilityRange","status":true,"description":"(v.1.2) Use an image to display a visibility range image around the player's position","parameters":{"Zoom Variable":"12","Opacity Variable":"13","Z Position":"10"}},
{"name":"GALV_CamControl","status":true,"description":"Allows greater control over where the game camera is focused. View HELP for plugin commands.","parameters":{"Tile Size":"48"}},
{"name":"Galv_PixelMove","status":true,"description":"(v.1.0) Gives the illusion of pixel movement for the player.","parameters":{"Diagonal Speed":"90","Diagonal Charset":"true","Tile Delay":"30"}},
{"name":"GALV_MapProjectiles","status":true,"description":"(v.1.7) Create projectiles that can interact with the map and map characters","parameters":{"Tile Size":"48","Fade Speed":"100","Disable Mouse Move":"true","Premade 1":"-1,0,9,4,'bulletBlast',0,'|s(A:on)',[10],[],3,1,20","Premade 2":"","Premade 3":"","Premade 4":"","Premade 5":"","Premade 6":"","Premade 7":"","Premade 8":"","Premade 9":"","Premade 10":"","Premade 11":"","Premade 12":"","Premade 13":"","Premade 14":"","Premade 15":"","Premade 16":"","Premade 17":"","Premade 18":"","Premade 19":"","Premade 20":""}},
{"name":"GALV_StationaryTurn","status":true,"description":"(v.1.3) Change movement so the player turns on the spot if direction is tapped.","parameters":{"Delay":"5"}},
{"name":"GALV_MoveRouteExtras","status":true,"description":"Additional SCRIPT commands to use within MOVE ROUTES\r\nView the plugin \"Help\" to view available commands.","parameters":{}},
{"name":"GALV_DisableDash","status":true,"description":"Disable dash in your game.","parameters":{"Disable Option":"false"}},
{"name":"--------------","status":false,"description":"","parameters":{}},
{"name":"OrangeHud","status":true,"description":"<OrangeHud> 2.1 - Creates a custom HUD based on the params","parameters":{"DefaultFontFace":"Verdana","DefaultFontSize":"18","DefaultFontColor":"#FFFFFF","DefaultFontItalic":"false","HudWidth":"0","HudHeight":"0","HudX":"0","HudY":"0","HudOpacity":"0","SwitchId":"0","WindowMargin":"4","WindowPadding":"18","ShowOnMap":"true","ShowOnBattle":"false","ShowOnMenu":"false","ShowOnTitle":"false","ShowUnderTintLayer":"false","AutoRefresh":"true"}},
{"name":"OrangeHudLine","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"Bullets: %1","VariableId":"38","SwitchId":"31","X":"","Y":"","FontFace":"","FontSize":"","FontColor":"","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeHudLine2","status":true,"description":"OrangeHudLine 1.5 - Adds a new Variable to Orange Hud","parameters":{"GroupName":"main","Pattern":"Deaths: %1","VariableId":"20","SwitchId":"31","X":"","Y":"25","FontFace":"","FontSize":"","FontColor":"","FontItalic":"","ScriptPattern":"","VariableX":"0","VariableY":"0"}},
{"name":"OrangeMapshot","status":true,"description":"This plugin will save a picture of the entire map on a Mapshots folder when you press a key. <OrangeMapshot>","parameters":{"useMapName":"true","layerType":"0","drawAutoShadows":"true","drawEvents":"true","keyCode":"44","imageType":"png","imageQuality":"70","imagePath":"./Mapshots"}},
{"name":"--------------","status":false,"description":"","parameters":{}},
{"name":"Idle","status":true,"description":"Allows party leader/followers to have stepping anim on map","parameters":{}},
{"name":"MrTS_EmptyMenu","status":true,"description":"Removes actor data and moves command window.","parameters":{"Show Gold Window":"false","Command X":"Graphics.boxWidth/2 - this._commandWindow.width/2","Command Y":"Graphics.boxHeight/2 - this._commandWindow.height/2","Gold X":"this._commandWindow.x","Gold Y":"this._commandWindow.y + this._commandWindow.height"}},
{"name":"Kaus_Ultimate_Overlay","status":true,"description":"v1.11 Adds Overlay Images on the Map. (Ground,Parallax,Shadow,Light,Fog)","parameters":{"-F I L E  N A M E S-":"","Organized Folders":"false","Parallax Filename":"par","Ground Filename":"ground","Light Filename":"light","Shadow Filename":"shadow","-S E T T I N G S-":"","Light Opacity":"255","Quick Start":"true","Bush Region ID":"7","Bind Pictures":"false","Terrax Lighting":"false","-S W I T C H E S-":"","Fog Switch ID":"37","Light Switch ID":"38","Parallax Switch ID":"39","Shadow Switch ID":"40"}},
{"name":"KSU_ParallaxSmoothing","status":true,"description":"Fixes the blurring for parallax backgrounds if a non-power of 2 background is used.","parameters":{"Parallax Smoothing":"false"}},
{"name":"SRD_TimerUpgrade","status":true,"description":"Gives developers move control over the visual and mechanical aspects of the game's timer system.","parameters":{"Timer Format":"%2:%3:%4","Timer Position":"TOP-R","Timer Start SE":"","Timer Expire SE":"Buzzer1, 90, 100, 0","Pause Color":"#FFFF00","Use Background":"true","== Auto Settings ==":"","Use Auto-Stop":"true","Use Auto-Pause":"false","Auto-Pause Opacity":"120","Use Auto-Abort":"true","== Label Settings ==":"","Default Label":"","Label Font Size":"22","== Font Settings ==":"","Timer Font":"GameFont","Timer Font Size":"32","Timer Italic":"false","Timer Text Color":"#ffffff","Timer Outline Color":"rgba(0, 0, 0, 0.5)"}},
{"name":"--------------","status":false,"description":"","parameters":{}},
{"name":"iavra_gif","status":true,"description":"Allows the usage of animated images (like Gifs), which are present in form of an image strip.\r\n<Iavra Gif>","parameters":{"File Name Format":"_animated_(\\d+)_(\\d+)"}},
{"name":"--------------","status":false,"description":"","parameters":{}},
{"name":"HIME_SyncSaveData","status":true,"description":"v1.0 - allows you to \"synchronize\" game data across different\r\nsave files and during the title screen","parameters":{}},
{"name":"EISStepCounters","status":true,"description":"A plugin that lets you create multiple step counters for your game.","parameters":{}},
{"name":"malmastervolume","status":true,"description":"ver1.1a - Allows players to utilize a single slider for all 4 sound profiles","parameters":{"MasterMode":"1"}},
{"name":"Galv_ScreenButtons","status":true,"description":"(v.1.3) Show buttons on screen that can be touched or clicked.","parameters":{"Precache Buttons":"ClickMe","Disable Mouse Move":"false","Button Fade":"30"}},
{"name":"YEP_KeyboardConfig","status":true,"description":"v1.04 Allows players to adjust their button configuration\nfor keyboards.","parameters":{"---General---":"","Command Name":"Keyboard Config","Button Events":"1 2 3","Button Events List":"[]","---Help Text---":"","Key Help":"Change the configuration of this key?","Default Layout":"Default Keyboard Layout","Default Help":"Reverts your keyboard setting to the default setup.","WASD Layout":"WASD Movement Layout","WASD Help":"Changes your keyboard to WASD movement.","Finish Config":"Finish Configuration","Finish Help":"Are you done configuring your keyboard?","Assigned Color":"21","Action Color":"4","Clear Text":"Clear","---Key Names---":"","OK Key":"OK","OK Text":"OK / Talk","Escape Key":"X","Escape Text":"Cancel / Menu","Cancel Key":"Cancel","Cancel Text":"Cancel","Menu Key":"Menu","Menu Text":"Menu","Shift Key":"Dash","Shift Text":"Dash","PageUp Key":"PgUp","PageUp Text":"Page Up","PageDown Key":"PgDn","PageDown Text":"Page Down","Left Key":"◄","Left Text":"Move ◄ Left","Up Key":"▲","Up Text":"Move ▲ Up","Right Key":"►","Right Text":"Move ► Right","Down Key":"▼","Down Text":"Move ▼ Down"}}
];
