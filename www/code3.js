gdjs.GAME_32OFFLINECode = {};
gdjs.GAME_32OFFLINECode.localVariables = [];
gdjs.GAME_32OFFLINECode.idToCallbackMap = new Map();
gdjs.GAME_32OFFLINECode.GDpanel001Objects1= [];
gdjs.GAME_32OFFLINECode.GDpanel001Objects2= [];
gdjs.GAME_32OFFLINECode.GDpanel_9595txtObjects1= [];
gdjs.GAME_32OFFLINECode.GDpanel_9595txtObjects2= [];
gdjs.GAME_32OFFLINECode.GDback_9595btnObjects1= [];
gdjs.GAME_32OFFLINECode.GDback_9595btnObjects2= [];
gdjs.GAME_32OFFLINECode.GDenemy_9595spawnerObjects1= [];
gdjs.GAME_32OFFLINECode.GDenemy_9595spawnerObjects2= [];
gdjs.GAME_32OFFLINECode.GDcoin_9595txtObjects1= [];
gdjs.GAME_32OFFLINECode.GDcoin_9595txtObjects2= [];
gdjs.GAME_32OFFLINECode.GDxp_9595txtObjects1= [];
gdjs.GAME_32OFFLINECode.GDxp_9595txtObjects2= [];
gdjs.GAME_32OFFLINECode.GDwave_9595txtObjects1= [];
gdjs.GAME_32OFFLINECode.GDwave_9595txtObjects2= [];
gdjs.GAME_32OFFLINECode.GDenemy001Objects1= [];
gdjs.GAME_32OFFLINECode.GDenemy001Objects2= [];
gdjs.GAME_32OFFLINECode.GDpat1Objects1= [];
gdjs.GAME_32OFFLINECode.GDpat1Objects2= [];
gdjs.GAME_32OFFLINECode.GDpat2Objects1= [];
gdjs.GAME_32OFFLINECode.GDpat2Objects2= [];
gdjs.GAME_32OFFLINECode.GDpat3Objects1= [];
gdjs.GAME_32OFFLINECode.GDpat3Objects2= [];
gdjs.GAME_32OFFLINECode.GDpat4Objects1= [];
gdjs.GAME_32OFFLINECode.GDpat4Objects2= [];
gdjs.GAME_32OFFLINECode.GDwave_9595txt_9595Objects1= [];
gdjs.GAME_32OFFLINECode.GDwave_9595txt_9595Objects2= [];
gdjs.GAME_32OFFLINECode.GDhealth_9595txtObjects1= [];
gdjs.GAME_32OFFLINECode.GDhealth_9595txtObjects2= [];
gdjs.GAME_32OFFLINECode.GDdefense_95951_9595u_95305Objects1= [];
gdjs.GAME_32OFFLINECode.GDdefense_95951_9595u_95305Objects2= [];
gdjs.GAME_32OFFLINECode.GDdefense_95951Objects1= [];
gdjs.GAME_32OFFLINECode.GDdefense_95951Objects2= [];
gdjs.GAME_32OFFLINECode.GDdefense_9595spawnObjects1= [];
gdjs.GAME_32OFFLINECode.GDdefense_9595spawnObjects2= [];


gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDback_95959595btnObjects1Objects = Hashtable.newFrom({"back_btn": gdjs.GAME_32OFFLINECode.GDback_9595btnObjects1});
gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDenemy001Objects1Objects = Hashtable.newFrom({"enemy001": gdjs.GAME_32OFFLINECode.GDenemy001Objects1});
gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDenemy001Objects1Objects = Hashtable.newFrom({"enemy001": gdjs.GAME_32OFFLINECode.GDenemy001Objects1});
gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDpat1Objects1Objects = Hashtable.newFrom({"pat1": gdjs.GAME_32OFFLINECode.GDpat1Objects1});
gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDenemy001Objects1Objects = Hashtable.newFrom({"enemy001": gdjs.GAME_32OFFLINECode.GDenemy001Objects1});
gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDpat2Objects1Objects = Hashtable.newFrom({"pat2": gdjs.GAME_32OFFLINECode.GDpat2Objects1});
gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDenemy001Objects1Objects = Hashtable.newFrom({"enemy001": gdjs.GAME_32OFFLINECode.GDenemy001Objects1});
gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDpat3Objects1Objects = Hashtable.newFrom({"pat3": gdjs.GAME_32OFFLINECode.GDpat3Objects1});
gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDenemy001Objects1Objects = Hashtable.newFrom({"enemy001": gdjs.GAME_32OFFLINECode.GDenemy001Objects1});
gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDpat4Objects1Objects = Hashtable.newFrom({"pat4": gdjs.GAME_32OFFLINECode.GDpat4Objects1});
gdjs.GAME_32OFFLINECode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("panel001"), gdjs.GAME_32OFFLINECode.GDpanel001Objects1);
{for(var i = 0, len = gdjs.GAME_32OFFLINECode.GDpanel001Objects1.length ;i < len;++i) {
    gdjs.GAME_32OFFLINECode.GDpanel001Objects1[i].getBehavior("Opacity").setOpacity(155);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemy_spawn");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back_btn"), gdjs.GAME_32OFFLINECode.GDback_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDback_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAME MODES", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("coin_txt"), gdjs.GAME_32OFFLINECode.GDcoin_9595txtObjects1);
gdjs.copyArray(runtimeScene.getObjects("health_txt"), gdjs.GAME_32OFFLINECode.GDhealth_9595txtObjects1);
gdjs.copyArray(runtimeScene.getObjects("wave_txt"), gdjs.GAME_32OFFLINECode.GDwave_9595txtObjects1);
gdjs.copyArray(runtimeScene.getObjects("xp_txt"), gdjs.GAME_32OFFLINECode.GDxp_9595txtObjects1);
{for(var i = 0, len = gdjs.GAME_32OFFLINECode.GDcoin_9595txtObjects1.length ;i < len;++i) {
    gdjs.GAME_32OFFLINECode.GDcoin_9595txtObjects1[i].getBehavior("Text").setText("COİN : " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.GAME_32OFFLINECode.GDxp_9595txtObjects1.length ;i < len;++i) {
    gdjs.GAME_32OFFLINECode.GDxp_9595txtObjects1[i].getBehavior("Text").setText("XP : " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
{for(var i = 0, len = gdjs.GAME_32OFFLINECode.GDwave_9595txtObjects1.length ;i < len;++i) {
    gdjs.GAME_32OFFLINECode.GDwave_9595txtObjects1[i].getBehavior("Text").setText("WAVE : " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + " / 35");
}
}
{for(var i = 0, len = gdjs.GAME_32OFFLINECode.GDhealth_9595txtObjects1.length ;i < len;++i) {
    gdjs.GAME_32OFFLINECode.GDhealth_9595txtObjects1[i].getBehavior("Text").setText("HEALTH : " + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "enemy_spawn") >= 5;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.random(0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemy_spawn");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("enemy_spawner"), gdjs.GAME_32OFFLINECode.GDenemy_9595spawnerObjects1);
gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDenemy001Objects1Objects, (( gdjs.GAME_32OFFLINECode.GDenemy_9595spawnerObjects1.length === 0 ) ? 0 :gdjs.GAME_32OFFLINECode.GDenemy_9595spawnerObjects1[0].getPointX("")), (( gdjs.GAME_32OFFLINECode.GDenemy_9595spawnerObjects1.length === 0 ) ? 0 :gdjs.GAME_32OFFLINECode.GDenemy_9595spawnerObjects1[0].getPointY("")), "");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(-1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("wave_txt_"), gdjs.GAME_32OFFLINECode.GDwave_9595txt_9595Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.GAME_32OFFLINECode.GDwave_9595txt_9595Objects1.length ;i < len;++i) {
    gdjs.GAME_32OFFLINECode.GDwave_9595txt_9595Objects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy001"), gdjs.GAME_32OFFLINECode.GDenemy001Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length;i<l;++i) {
    if ( gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariableNumber(gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariables().get("pat")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OFFLINECode.GDenemy001Objects1[k] = gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i];
        ++k;
    }
}
gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32OFFLINECode.GDenemy001Objects1 */
gdjs.copyArray(runtimeScene.getObjects("pat1"), gdjs.GAME_32OFFLINECode.GDpat1Objects1);
{for(var i = 0, len = gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length ;i < len;++i) {
    gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].addForceTowardObject((gdjs.GAME_32OFFLINECode.GDpat1Objects1.length !== 0 ? gdjs.GAME_32OFFLINECode.GDpat1Objects1[0] : null), gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariables().get("speed").getAsNumber(), 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy001"), gdjs.GAME_32OFFLINECode.GDenemy001Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length;i<l;++i) {
    if ( gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariableNumber(gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariables().get("pat")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OFFLINECode.GDenemy001Objects1[k] = gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i];
        ++k;
    }
}
gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32OFFLINECode.GDenemy001Objects1 */
gdjs.copyArray(runtimeScene.getObjects("pat2"), gdjs.GAME_32OFFLINECode.GDpat2Objects1);
{for(var i = 0, len = gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length ;i < len;++i) {
    gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].addForceTowardObject((gdjs.GAME_32OFFLINECode.GDpat2Objects1.length !== 0 ? gdjs.GAME_32OFFLINECode.GDpat2Objects1[0] : null), gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariables().get("speed").getAsNumber(), 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy001"), gdjs.GAME_32OFFLINECode.GDenemy001Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length;i<l;++i) {
    if ( gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariableNumber(gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariables().get("pat")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OFFLINECode.GDenemy001Objects1[k] = gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i];
        ++k;
    }
}
gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32OFFLINECode.GDenemy001Objects1 */
gdjs.copyArray(runtimeScene.getObjects("pat3"), gdjs.GAME_32OFFLINECode.GDpat3Objects1);
{for(var i = 0, len = gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length ;i < len;++i) {
    gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].addForceTowardObject((gdjs.GAME_32OFFLINECode.GDpat3Objects1.length !== 0 ? gdjs.GAME_32OFFLINECode.GDpat3Objects1[0] : null), gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariables().get("speed").getAsNumber(), 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy001"), gdjs.GAME_32OFFLINECode.GDenemy001Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length;i<l;++i) {
    if ( gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariableNumber(gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariables().get("pat")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OFFLINECode.GDenemy001Objects1[k] = gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i];
        ++k;
    }
}
gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32OFFLINECode.GDenemy001Objects1 */
gdjs.copyArray(runtimeScene.getObjects("pat4"), gdjs.GAME_32OFFLINECode.GDpat4Objects1);
{for(var i = 0, len = gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length ;i < len;++i) {
    gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].addForceTowardObject((gdjs.GAME_32OFFLINECode.GDpat4Objects1.length !== 0 ? gdjs.GAME_32OFFLINECode.GDpat4Objects1[0] : null), gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariables().get("speed").getAsNumber(), 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy001"), gdjs.GAME_32OFFLINECode.GDenemy001Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length;i<l;++i) {
    if ( gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariableNumber(gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariables().get("pat")) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OFFLINECode.GDenemy001Objects1[k] = gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i];
        ++k;
    }
}
gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length = k;
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy001"), gdjs.GAME_32OFFLINECode.GDenemy001Objects1);
gdjs.copyArray(runtimeScene.getObjects("pat1"), gdjs.GAME_32OFFLINECode.GDpat1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDenemy001Objects1Objects, gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDpat1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32OFFLINECode.GDenemy001Objects1 */
{for(var i = 0, len = gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length ;i < len;++i) {
    gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].returnVariable(gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariables().get("pat")).setNumber(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy001"), gdjs.GAME_32OFFLINECode.GDenemy001Objects1);
gdjs.copyArray(runtimeScene.getObjects("pat2"), gdjs.GAME_32OFFLINECode.GDpat2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDenemy001Objects1Objects, gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDpat2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32OFFLINECode.GDenemy001Objects1 */
{for(var i = 0, len = gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length ;i < len;++i) {
    gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].returnVariable(gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariables().get("pat")).setNumber(2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy001"), gdjs.GAME_32OFFLINECode.GDenemy001Objects1);
gdjs.copyArray(runtimeScene.getObjects("pat3"), gdjs.GAME_32OFFLINECode.GDpat3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDenemy001Objects1Objects, gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDpat3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32OFFLINECode.GDenemy001Objects1 */
{for(var i = 0, len = gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length ;i < len;++i) {
    gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].returnVariable(gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariables().get("pat")).setNumber(3);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy001"), gdjs.GAME_32OFFLINECode.GDenemy001Objects1);
gdjs.copyArray(runtimeScene.getObjects("pat4"), gdjs.GAME_32OFFLINECode.GDpat4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDenemy001Objects1Objects, gdjs.GAME_32OFFLINECode.mapOfGDgdjs_9546GAME_959532OFFLINECode_9546GDpat4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GAME_32OFFLINECode.GDenemy001Objects1 */
{for(var i = 0, len = gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length ;i < len;++i) {
    gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].returnVariable(gdjs.GAME_32OFFLINECode.GDenemy001Objects1[i].getVariables().get("pat")).setNumber(4);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("wave_txt_"), gdjs.GAME_32OFFLINECode.GDwave_9595txt_9595Objects1);
{for(var i = 0, len = gdjs.GAME_32OFFLINECode.GDwave_9595txt_9595Objects1.length ;i < len;++i) {
    gdjs.GAME_32OFFLINECode.GDwave_9595txt_9595Objects1[i].getBehavior("Opacity").setOpacity(gdjs.GAME_32OFFLINECode.GDwave_9595txt_9595Objects1[i].getBehavior("Opacity").getOpacity() - (2));
}
}
{for(var i = 0, len = gdjs.GAME_32OFFLINECode.GDwave_9595txt_9595Objects1.length ;i < len;++i) {
    gdjs.GAME_32OFFLINECode.GDwave_9595txt_9595Objects1[i].getBehavior("Text").setText("WAVE : " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GAME_32OFFLINECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAME_32OFFLINECode.GDpanel001Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDpanel001Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDpanel_9595txtObjects1.length = 0;
gdjs.GAME_32OFFLINECode.GDpanel_9595txtObjects2.length = 0;
gdjs.GAME_32OFFLINECode.GDback_9595btnObjects1.length = 0;
gdjs.GAME_32OFFLINECode.GDback_9595btnObjects2.length = 0;
gdjs.GAME_32OFFLINECode.GDenemy_9595spawnerObjects1.length = 0;
gdjs.GAME_32OFFLINECode.GDenemy_9595spawnerObjects2.length = 0;
gdjs.GAME_32OFFLINECode.GDcoin_9595txtObjects1.length = 0;
gdjs.GAME_32OFFLINECode.GDcoin_9595txtObjects2.length = 0;
gdjs.GAME_32OFFLINECode.GDxp_9595txtObjects1.length = 0;
gdjs.GAME_32OFFLINECode.GDxp_9595txtObjects2.length = 0;
gdjs.GAME_32OFFLINECode.GDwave_9595txtObjects1.length = 0;
gdjs.GAME_32OFFLINECode.GDwave_9595txtObjects2.length = 0;
gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDenemy001Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDpat1Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDpat1Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDpat2Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDpat2Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDpat3Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDpat3Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDpat4Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDpat4Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDwave_9595txt_9595Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDwave_9595txt_9595Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDhealth_9595txtObjects1.length = 0;
gdjs.GAME_32OFFLINECode.GDhealth_9595txtObjects2.length = 0;
gdjs.GAME_32OFFLINECode.GDdefense_95951_9595u_95305Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDdefense_95951_9595u_95305Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDdefense_95951Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDdefense_95951Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDdefense_9595spawnObjects1.length = 0;
gdjs.GAME_32OFFLINECode.GDdefense_9595spawnObjects2.length = 0;

gdjs.GAME_32OFFLINECode.eventsList0(runtimeScene);
gdjs.GAME_32OFFLINECode.GDpanel001Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDpanel001Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDpanel_9595txtObjects1.length = 0;
gdjs.GAME_32OFFLINECode.GDpanel_9595txtObjects2.length = 0;
gdjs.GAME_32OFFLINECode.GDback_9595btnObjects1.length = 0;
gdjs.GAME_32OFFLINECode.GDback_9595btnObjects2.length = 0;
gdjs.GAME_32OFFLINECode.GDenemy_9595spawnerObjects1.length = 0;
gdjs.GAME_32OFFLINECode.GDenemy_9595spawnerObjects2.length = 0;
gdjs.GAME_32OFFLINECode.GDcoin_9595txtObjects1.length = 0;
gdjs.GAME_32OFFLINECode.GDcoin_9595txtObjects2.length = 0;
gdjs.GAME_32OFFLINECode.GDxp_9595txtObjects1.length = 0;
gdjs.GAME_32OFFLINECode.GDxp_9595txtObjects2.length = 0;
gdjs.GAME_32OFFLINECode.GDwave_9595txtObjects1.length = 0;
gdjs.GAME_32OFFLINECode.GDwave_9595txtObjects2.length = 0;
gdjs.GAME_32OFFLINECode.GDenemy001Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDenemy001Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDpat1Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDpat1Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDpat2Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDpat2Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDpat3Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDpat3Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDpat4Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDpat4Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDwave_9595txt_9595Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDwave_9595txt_9595Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDhealth_9595txtObjects1.length = 0;
gdjs.GAME_32OFFLINECode.GDhealth_9595txtObjects2.length = 0;
gdjs.GAME_32OFFLINECode.GDdefense_95951_9595u_95305Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDdefense_95951_9595u_95305Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDdefense_95951Objects1.length = 0;
gdjs.GAME_32OFFLINECode.GDdefense_95951Objects2.length = 0;
gdjs.GAME_32OFFLINECode.GDdefense_9595spawnObjects1.length = 0;
gdjs.GAME_32OFFLINECode.GDdefense_9595spawnObjects2.length = 0;


return;

}

gdjs['GAME_32OFFLINECode'] = gdjs.GAME_32OFFLINECode;
