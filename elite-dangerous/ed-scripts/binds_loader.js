var edBindingsPath = env("LocalAppData") + "\\Frontier Developments\\Elite Dangerous\\Options\\Bindings\\Custom.3.0.binds";
var edBindings = new ActiveXObject("Microsoft.XMLDOM");
edBindings.async = false;
edBindings.load(edBindingsPath);

var edKeyboardLayout = edBindings.getElementsByTagName("KeyboardLayout").item(0).text;
log("Keyboard Layout: " + edKeyboardLayout);

function getKeyboardKey(binding) {
    if (binding) {
        var device = binding.getAttribute("Device");
        if (device == "Keyboard") {
            var key = binding.getAttribute("Key");
            var modifier = binding.getElementsByTagName("Modifier").item(0);
            var mod = null;
            if (modifier) {
                var temp = getKeyboardKey(modifier);
                if (temp) {
                    mod = temp.key
                }
            }
            return {
                key: key,
                mod: mod
            }
        }
    }
    return null;
}

function processKeyCode(keyString) {
    if (keyString) {
        if (stringStartsWith(keyString, "Key_")) {
            var sliced = keyString.substr(4);
            if (sliced.length == 1) {
                return sliced;
            }
            keyword = sliced.toUpperCase();
            if (keyword.indexOf("ARROW") > -1) {
                keyword = keyword.substr(0, keyword.indexOf("ARROW"));
            }
            return "{" + keyword + "}";
        }
    }
    return null;
}

function mergeModWithKey(keyAndMod) {
    if (keyAndMod) {
        if (keyAndMod.key) {
            var combo = "";
            if (keyAndMod.mod) {
                combo = "{" + keyAndMod.mod + "}";
            }
            combo = combo + keyAndMod.key;
            return combo;
        }
    }
    return null;
}

function getKeyForTask(task) {
    var task = edBindings.getElementsByTagName(task).item(0);
    if (task) {
        var primary = task.getElementsByTagName("Primary").item(0);
        var keyAndMod = getKeyboardKey(primary);
        if (keyAndMod == null) {
            var secondary = getElementsByTagName("Secondary").item(0);
            keyAndMod = getKeyboardKey(secondary);
        }
        if (keyAndMod) {
            keyAndMod.key = processKeyCode(keyAndMod.key);
            keyAndMod.mod = processKeyCode(keyAndMod.mod);
            var combo = mergeModWithKey(keyAndMod);
            return combo;
        }
    }
    return null;
}

exports = {
    getKeyForTask: getKeyForTask
};
