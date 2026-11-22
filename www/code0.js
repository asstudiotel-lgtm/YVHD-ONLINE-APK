gdjs.MENUCode = {};
gdjs.MENUCode.localVariables = [];
gdjs.MENUCode.idToCallbackMap = new Map();
gdjs.MENUCode.GDYVHD_9595ONLINE_9595LOGOObjects1= [];
gdjs.MENUCode.GDYVHD_9595ONLINE_9595LOGOObjects2= [];
gdjs.MENUCode.GDNewTextObjects1= [];
gdjs.MENUCode.GDNewTextObjects2= [];
gdjs.MENUCode.GDplay_9595btnObjects1= [];
gdjs.MENUCode.GDplay_9595btnObjects2= [];
gdjs.MENUCode.GDplay_9595txtObjects1= [];
gdjs.MENUCode.GDplay_9595txtObjects2= [];
gdjs.MENUCode.GDcoin_9595txtObjects1= [];
gdjs.MENUCode.GDcoin_9595txtObjects2= [];
gdjs.MENUCode.GDxp_9595txtObjects1= [];
gdjs.MENUCode.GDxp_9595txtObjects2= [];
gdjs.MENUCode.GDLEADERBOARD_9595BTNObjects1= [];
gdjs.MENUCode.GDLEADERBOARD_9595BTNObjects2= [];
gdjs.MENUCode.GDleaderboard_9595txtObjects1= [];
gdjs.MENUCode.GDleaderboard_9595txtObjects2= [];


gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDLEADERBOARD_95959595BTNObjects1Objects = Hashtable.newFrom({"LEADERBOARD_BTN": gdjs.MENUCode.GDLEADERBOARD_9595BTNObjects1});
gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDplay_95959595btnObjects1Objects = Hashtable.newFrom({"play_btn": gdjs.MENUCode.GDplay_9595btnObjects1});
gdjs.MENUCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("coin_txt"), gdjs.MENUCode.GDcoin_9595txtObjects1);
gdjs.copyArray(runtimeScene.getObjects("xp_txt"), gdjs.MENUCode.GDxp_9595txtObjects1);
{for(var i = 0, len = gdjs.MENUCode.GDcoin_9595txtObjects1.length ;i < len;++i) {
    gdjs.MENUCode.GDcoin_9595txtObjects1[i].getBehavior("Text").setText("COİN : " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.MENUCode.GDxp_9595txtObjects1.length ;i < len;++i) {
    gdjs.MENUCode.GDxp_9595txtObjects1[i].getBehavior("Text").setText("XP : " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LEADERBOARD_BTN"), gdjs.MENUCode.GDLEADERBOARD_9595BTNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDLEADERBOARD_95959595BTNObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEADERBOARD", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_btn"), gdjs.MENUCode.GDplay_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDplay_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9935132);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAME MODES", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.adMob.setTestMode(true);
}
{gdjs.adMob.setupBanner("ca-app-pub-1219551641231687/3484401008", "test", true);
}
{gdjs.adMob.showBanner();
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "", true, 55, 1);
}
}

}


};

gdjs.MENUCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MENUCode.GDYVHD_9595ONLINE_9595LOGOObjects1.length = 0;
gdjs.MENUCode.GDYVHD_9595ONLINE_9595LOGOObjects2.length = 0;
gdjs.MENUCode.GDNewTextObjects1.length = 0;
gdjs.MENUCode.GDNewTextObjects2.length = 0;
gdjs.MENUCode.GDplay_9595btnObjects1.length = 0;
gdjs.MENUCode.GDplay_9595btnObjects2.length = 0;
gdjs.MENUCode.GDplay_9595txtObjects1.length = 0;
gdjs.MENUCode.GDplay_9595txtObjects2.length = 0;
gdjs.MENUCode.GDcoin_9595txtObjects1.length = 0;
gdjs.MENUCode.GDcoin_9595txtObjects2.length = 0;
gdjs.MENUCode.GDxp_9595txtObjects1.length = 0;
gdjs.MENUCode.GDxp_9595txtObjects2.length = 0;
gdjs.MENUCode.GDLEADERBOARD_9595BTNObjects1.length = 0;
gdjs.MENUCode.GDLEADERBOARD_9595BTNObjects2.length = 0;
gdjs.MENUCode.GDleaderboard_9595txtObjects1.length = 0;
gdjs.MENUCode.GDleaderboard_9595txtObjects2.length = 0;

gdjs.MENUCode.eventsList0(runtimeScene);
gdjs.MENUCode.GDYVHD_9595ONLINE_9595LOGOObjects1.length = 0;
gdjs.MENUCode.GDYVHD_9595ONLINE_9595LOGOObjects2.length = 0;
gdjs.MENUCode.GDNewTextObjects1.length = 0;
gdjs.MENUCode.GDNewTextObjects2.length = 0;
gdjs.MENUCode.GDplay_9595btnObjects1.length = 0;
gdjs.MENUCode.GDplay_9595btnObjects2.length = 0;
gdjs.MENUCode.GDplay_9595txtObjects1.length = 0;
gdjs.MENUCode.GDplay_9595txtObjects2.length = 0;
gdjs.MENUCode.GDcoin_9595txtObjects1.length = 0;
gdjs.MENUCode.GDcoin_9595txtObjects2.length = 0;
gdjs.MENUCode.GDxp_9595txtObjects1.length = 0;
gdjs.MENUCode.GDxp_9595txtObjects2.length = 0;
gdjs.MENUCode.GDLEADERBOARD_9595BTNObjects1.length = 0;
gdjs.MENUCode.GDLEADERBOARD_9595BTNObjects2.length = 0;
gdjs.MENUCode.GDleaderboard_9595txtObjects1.length = 0;
gdjs.MENUCode.GDleaderboard_9595txtObjects2.length = 0;


return;

}

gdjs['MENUCode'] = gdjs.MENUCode;
