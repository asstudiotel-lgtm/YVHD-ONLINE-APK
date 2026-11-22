gdjs.LEADERBOARDCode = {};
gdjs.LEADERBOARDCode.localVariables = [];
gdjs.LEADERBOARDCode.idToCallbackMap = new Map();
gdjs.LEADERBOARDCode.GDback_9595txtObjects1= [];
gdjs.LEADERBOARDCode.GDback_9595txtObjects2= [];


gdjs.LEADERBOARDCode.mapOfGDgdjs_9546LEADERBOARDCode_9546GDback_95959595txtObjects1Objects = Hashtable.newFrom({"back_txt": gdjs.LEADERBOARDCode.GDback_9595txtObjects1});
gdjs.LEADERBOARDCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back_txt"), gdjs.LEADERBOARDCode.GDback_9595txtObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LEADERBOARDCode.mapOfGDgdjs_9546LEADERBOARDCode_9546GDback_95959595txtObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "5cc039dc-aafd-4af3-adac-a030e516d4ca", true);
}
}

}


};

gdjs.LEADERBOARDCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LEADERBOARDCode.GDback_9595txtObjects1.length = 0;
gdjs.LEADERBOARDCode.GDback_9595txtObjects2.length = 0;

gdjs.LEADERBOARDCode.eventsList0(runtimeScene);
gdjs.LEADERBOARDCode.GDback_9595txtObjects1.length = 0;
gdjs.LEADERBOARDCode.GDback_9595txtObjects2.length = 0;


return;

}

gdjs['LEADERBOARDCode'] = gdjs.LEADERBOARDCode;
