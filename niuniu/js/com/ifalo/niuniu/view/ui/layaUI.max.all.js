var com,__extends=this&&this.__extends||function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function i(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}();!function(t){!function(n){!function(n){!function(n){!function(n){!function(n){!function(n){!function(n){!function(n){var e=function(n){function e(){return n.call(this)||this}return __extends(e,n),e.prototype.createChildren=function(){View.regComponent("com.ifalo.utils.scripts.ButtonAct",t.ifalo.utils.scripts.ButtonAct),n.prototype.createChildren.call(this),this.createView(t.ifalo.niuniu.view.ui.res.niuniu.views.lobby.LobbySceneUI.uiView)},e.uiView={type:"View",props:{width:1920,name:"LobbyScene",height:1080},child:[{type:"Image",props:{y:0,x:220,skin:"niuniu/textures/common/Lobby/lobbyBg.png"}},{type:"Box",props:{y:140,x:360,var:"box_zoneButtons"},child:[{type:"Button",props:{width:273,var:"btn_zone1",skin:"niuniu/textures/common/Lobby/btn_zone1.png",name:"btn_zone1",height:388,alpha:1},child:[{type:"Script",props:{scaleWhenDown:1,cursor:"pointer",runtime:"com.ifalo.utils.scripts.ButtonAct"}}]},{type:"Button",props:{x:256,width:273,var:"btn_zone2",skin:"niuniu/textures/common/Lobby/btn_zone1.png",name:"btn_zone2",height:388,alpha:1},child:[{type:"Script",props:{scaleWhenDown:1,cursor:"pointer",runtime:"com.ifalo.utils.scripts.ButtonAct"}}]},{type:"Button",props:{x:776,width:273,var:"btn_zone3",skin:"niuniu/textures/common/Lobby/btn_zone1.png",name:"btn_zone3",height:388,alpha:1},child:[{type:"Script",props:{scaleWhenDown:1,cursor:"pointer",runtime:"com.ifalo.utils.scripts.ButtonAct"}}]},{type:"Button",props:{x:1025,width:273,var:"btn_zone4",skin:"niuniu/textures/common/Lobby/btn_zone1.png",name:"btn_zone4",height:388,alpha:1},child:[{type:"Script",props:{scaleWhenDown:1,cursor:"pointer",runtime:"com.ifalo.utils.scripts.ButtonAct"}}]}]}]},e}(Laya.View);n.LobbySceneUI=e}(n.lobby||(n.lobby={}))}(n.views||(n.views={}))}(n.niuniu||(n.niuniu={}))}(n.res||(n.res={}))}(n.ui||(n.ui={}))}(n.view||(n.view={}))}(n.niuniu||(n.niuniu={}))}(t.ifalo||(t.ifalo={}))}(com||(com={})),function(t){!function(n){!function(n){!function(n){!function(n){!function(n){!function(n){!function(n){!function(n){var e=function(n){function e(){return n.call(this)||this}return __extends(e,n),e.prototype.createChildren=function(){View.regComponent("Text",laya.display.Text),n.prototype.createChildren.call(this),this.createView(t.ifalo.niuniu.view.ui.res.niuniu.views.menu.MenuSceneUI.uiView)},e.uiView={type:"View",props:{width:1920,height:1080},child:[{type:"Image",props:{y:0,x:220,skin:"niuniu/textures/common/Menu/menuBg.png"},child:[{type:"Text",props:{y:30,x:700,var:"txt_time",text:"09:29 PM",strokeColor:"#ffffff",fontSize:24,font:"Arial",color:"#6bc5ba",align:"center"}},{type:"Text",props:{y:8,x:144,width:74,var:"txt_appVersion",text:"1.16.05",name:"txt_appVersion",height:16,fontSize:16,font:"Arial",color:"#9e9e9e",align:"left"}},{type:"Text",props:{y:68,x:700,var:"txt_numPeople",text:"899",fontSize:22,color:"#6bc5ba",align:"left"}},{type:"Text",props:{y:30,x:990,width:146,var:"txt_playerName",text:"\b快樂小均均",overflow:"hidden",height:22,fontSize:22,color:"#dcd2b8"}},{type:"Text",props:{y:67,x:1023,width:113,var:"txt_money",text:"9,999,999",height:23,fontSize:22,color:"#dcd2b8",align:"left"}},{type:"Text",props:{y:31,x:1203,width:141,var:"txt_playerId",text:"AA04785",overflow:"hidden",height:22,fontSize:22,color:"#dcd2b8"}}]}]},e}(Laya.View);n.MenuSceneUI=e}(n.menu||(n.menu={}))}(n.views||(n.views={}))}(n.niuniu||(n.niuniu={}))}(n.res||(n.res={}))}(n.ui||(n.ui={}))}(n.view||(n.view={}))}(n.niuniu||(n.niuniu={}))}(t.ifalo||(t.ifalo={}))}(com||(com={})),function(t){!function(n){!function(n){!function(n){!function(n){!function(n){!function(n){!function(n){!function(n){var e=function(n){function e(){return n.call(this)||this}return __extends(e,n),e.prototype.createChildren=function(){n.prototype.createChildren.call(this),this.createView(t.ifalo.niuniu.view.ui.res.niuniu.views.preload.PreloadSceneUI.uiView)},e.uiView={type:"View",props:{width:1920,name:"PreloadScene",height:1080},child:[{type:"Image",props:{skin:"res/niuniu/startup/bgStartup_zh-TW.jpg",disabled:!1}},{type:"ProgressBar",props:{y:799,x:672,width:577,var:"progress_loading",value:.5,skin:"res/niuniu/startup/progress.png",name:"progress_loading",height:34}}]},e}(Laya.View);n.PreloadSceneUI=e}(n.preload||(n.preload={}))}(n.views||(n.views={}))}(n.niuniu||(n.niuniu={}))}(n.res||(n.res={}))}(n.ui||(n.ui={}))}(n.view||(n.view={}))}(n.niuniu||(n.niuniu={}))}(t.ifalo||(t.ifalo={}))}(com||(com={}));