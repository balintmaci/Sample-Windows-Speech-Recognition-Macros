
simpleAction = NamedStates.GetNamedStateValue("simpleAction");
log("Target Action: " + simpleAction);

binds = require(mainPath + "binds_loader.js")
var actionKey = binds.getKeyForTask(simpleAction)
Application.SendKeys(actionKey);