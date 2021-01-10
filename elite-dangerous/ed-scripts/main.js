
function getAndClear(name) {
    var value = NamedStates.GetNamedStateValue(name);
    NamedStates.SetNamedStateValue(name, "");
    return value;
}

var simpleAction = getAndClear("simpleAction");
var actionTimesString = getAndClear("actionTimes");
log("Target Action: " + simpleAction);

var actionTimes = 1
if (actionTimesString.length > 0) {
    actionTimes = eval(actionTimesString);
}
log("Action Times: " + actionTimes);

binds = require(mainPath + "binds_loader.js");

var actionKey = binds.getKeyForTask(simpleAction);
log("Action key: " + actionKey);
for (var i = 0; i < actionTimes; i++) {
    Application.SendKeys(actionKey);
    log("Sending " + actionKey);
    Application.Wait(0.001);
}
