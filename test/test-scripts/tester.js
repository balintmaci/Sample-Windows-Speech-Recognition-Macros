var filePath = "..\\elite-dangerous\\ed-scripts\\binds_loader.js";
var params = "";
var fs = new ActiveXObject("Scripting.FileSystemObject");
var shell  = new ActiveXObject("WScript.Shell");
var env = shell.environment("process") 
var docsPath = shell.SpecialFolders("MyDocuments")
var macrosPath = docsPath + "\\Speech Macros\\";
var mainPath = env("UserProfile") + "\\src\\Sample-Windows-Speech-Recognition-Macros\\utility\\";
var utilityScriptPath = mainPath + "utility-scripts\\utility.js";
eval(fs.GetFile(utilityScriptPath).OpenAsTextStream().ReadAll());