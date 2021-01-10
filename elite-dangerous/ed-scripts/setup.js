
function stringStartsWith(str, part) {
    if (str && part) {
        return str.indexOf(part) === 0;
    }
    return null;
}

var fileConstants = {
    ForReading: 1,
    ForWriting: 2,
    ForAppending: 8,
    TristateUseDefault: -2,
    TristateTrue: -1,
    TristateFalse: 0
};

function createLog() {
    var logStream = fs.CreateTextFile(mainPath + "logs.txt", true)
    logStream.Write("Log started\n"); // TODO datetime
    logStream.Close();
}

createLog();

function log(text) {
    if (!text) {
        text = "null";
    }
    var logStream = fs.GetFile(mainPath + "logs.txt").OpenAsTextStream(fileConstants.ForAppending, fileConstants.TristateUseDefault);
    logStream.Write(text + "\n");
    logStream.Close();
    // if(WScript) {
    //     WScript.Echo(text);
    // }
}

function evalFile(path) {
    return eval(fs.GetFile(path).OpenAsTextStream().ReadAll());
}

function require(path) {
    exports = {};
    evalFile(path);
    return exports;
}

var config = evalFile(mainPath + "config.json");

evalFile(mainPath + "main.js");
