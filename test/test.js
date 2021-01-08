objArgs = WScript.Arguments
WScript.Echo(WScript.Arguments.Count());
for (i=0; i<objArgs.length; i++)
{
    WScript.Echo(objArgs(i))
}

// Copy the selected text into the clipboard and wait 1/4 second
Application.SendKeys("{250 WAIT}^c{250 WAIT}");      

// Get the data out of the clipboard
var text = Application.clipboardData.getData("text");
Application.Speak(text);