gdjs.GAME_32MODESCode = {};
gdjs.GAME_32MODESCode.localVariables = [];
gdjs.GAME_32MODESCode.idToCallbackMap = new Map();
gdjs.GAME_32MODESCode.GDback_9595txtObjects1= [];
gdjs.GAME_32MODESCode.GDback_9595txtObjects2= [];
gdjs.GAME_32MODESCode.GDsliteObjects1= [];
gdjs.GAME_32MODESCode.GDsliteObjects2= [];
gdjs.GAME_32MODESCode.GDoffline_9595txtObjects1= [];
gdjs.GAME_32MODESCode.GDoffline_9595txtObjects2= [];
gdjs.GAME_32MODESCode.GDonl_95305ne_9595txtObjects1= [];
gdjs.GAME_32MODESCode.GDonl_95305ne_9595txtObjects2= [];
gdjs.GAME_32MODESCode.GDONLINE_9595BTNObjects1= [];
gdjs.GAME_32MODESCode.GDONLINE_9595BTNObjects2= [];
gdjs.GAME_32MODESCode.GDOFFLINE_9595BTNObjects1= [];
gdjs.GAME_32MODESCode.GDOFFLINE_9595BTNObjects2= [];


gdjs.GAME_32MODESCode.mapOfGDgdjs_9546GAME_959532MODESCode_9546GDback_95959595txtObjects1Objects = Hashtable.newFrom({"back_txt": gdjs.GAME_32MODESCode.GDback_9595txtObjects1});
gdjs.GAME_32MODESCode.mapOfGDgdjs_9546GAME_959532MODESCode_9546GDOFFLINE_95959595BTNObjects1Objects = Hashtable.newFrom({"OFFLINE_BTN": gdjs.GAME_32MODESCode.GDOFFLINE_9595BTNObjects1});
gdjs.GAME_32MODESCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(0.1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back_txt"), gdjs.GAME_32MODESCode.GDback_9595txtObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GAME_32MODESCode.mapOfGDgdjs_9546GAME_959532MODESCode_9546GDback_95959595txtObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() <= 0);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OFFLINE_BTN"), gdjs.GAME_32MODESCode.GDOFFLINE_9595BTNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GAME_32MODESCode.mapOfGDgdjs_9546GAME_959532MODESCode_9546GDOFFLINE_95959595BTNObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() <= 0);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAME OFFLINE", false);
}
}

}


};

gdjs.GAME_32MODESCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAME_32MODESCode.GDback_9595txtObjects1.length = 0;
gdjs.GAME_32MODESCode.GDback_9595txtObjects2.length = 0;
gdjs.GAME_32MODESCode.GDsliteObjects1.length = 0;
gdjs.GAME_32MODESCode.GDsliteObjects2.length = 0;
gdjs.GAME_32MODESCode.GDoffline_9595txtObjects1.length = 0;
gdjs.GAME_32MODESCode.GDoffline_9595txtObjects2.length = 0;
gdjs.GAME_32MODESCode.GDonl_95305ne_9595txtObjects1.length = 0;
gdjs.GAME_32MODESCode.GDonl_95305ne_9595txtObjects2.length = 0;
gdjs.GAME_32MODESCode.GDONLINE_9595BTNObjects1.length = 0;
gdjs.GAME_32MODESCode.GDONLINE_9595BTNObjects2.length = 0;
gdjs.GAME_32MODESCode.GDOFFLINE_9595BTNObjects1.length = 0;
gdjs.GAME_32MODESCode.GDOFFLINE_9595BTNObjects2.length = 0;

gdjs.GAME_32MODESCode.eventsList0(runtimeScene);
gdjs.GAME_32MODESCode.GDback_9595txtObjects1.length = 0;
gdjs.GAME_32MODESCode.GDback_9595txtObjects2.length = 0;
gdjs.GAME_32MODESCode.GDsliteObjects1.length = 0;
gdjs.GAME_32MODESCode.GDsliteObjects2.length = 0;
gdjs.GAME_32MODESCode.GDoffline_9595txtObjects1.length = 0;
gdjs.GAME_32MODESCode.GDoffline_9595txtObjects2.length = 0;
gdjs.GAME_32MODESCode.GDonl_95305ne_9595txtObjects1.length = 0;
gdjs.GAME_32MODESCode.GDonl_95305ne_9595txtObjects2.length = 0;
gdjs.GAME_32MODESCode.GDONLINE_9595BTNObjects1.length = 0;
gdjs.GAME_32MODESCode.GDONLINE_9595BTNObjects2.length = 0;
gdjs.GAME_32MODESCode.GDOFFLINE_9595BTNObjects1.length = 0;
gdjs.GAME_32MODESCode.GDOFFLINE_9595BTNObjects2.length = 0;


return;

}

gdjs['GAME_32MODESCode'] = gdjs.GAME_32MODESCode;
