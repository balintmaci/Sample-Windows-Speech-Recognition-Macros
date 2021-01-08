Set objArgs = WScript.Arguments
WScript.Echo WScript.Arguments.Count
For Each strArg in objArgs
    WScript.Echo strArg
Next

Set shell = CreateObject("Wscript.Shell") 