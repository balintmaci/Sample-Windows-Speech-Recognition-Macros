##  Writing macros

Structure of a macro XML file: [test file](test/test.WSRMac)

It starts with an XML format definition:
```
<?xml version="1.0" encoding="UTF-8"?>
```

then a *speechMacros* tag
```
<speechMacros>
    ...
</speechMacros>
```

## speechMacros tag

The *speechMacros* tag contains the commands and the signature, but it can also contain some conditions:
 - appIsInForeground
 - appIsRunning
 - condition
 - stateIsSet
 - scriptCondition

and definitions:
 - listenForList
 - rule
 - numbers
 - fontNames
 - wmpMediaItems
 - fileNames
 - ruleScript

It can also contain *listenFor* tags but I'm not sure what that would do.

## Signature
The macros program can be used to sign any macros file in the right click menu
```
<Signature>
LONGSIGNATUREFORTHEFILE
</Signature>
```

## command tag
Command tags can be put inside the speechMacro tag. Command tags can contain all conditions, definitions, and actions.
```
<command priority="1">
    definitions

    conditions

    actions
</command>
```

## Conditions
Put these inside an opening and closing command

### appIsInForeground
```
<appIsInForeground processName="processname.exe" />
<appIsInForeground windowTitleContains="Title of Window" />
```

### appIsRunning
```
<appIsRunning processName="processname.exe" />
<appIsRunning windowTitleContains="Title of Window" />
```

### condition
```
<condition operator="or">
    <appIsInForeground processName="winword.exe"/>
    <appIsInForeground processName="wordpad.exe"/>
</condition>
```

### stateIsSet
```
<stateIsSet name="disableCapTextInDocument" value="1"/>
```

### scriptCondition
TODO

### listenFor
Tag waits for contents to be spoken. Can store parameters from speech. Multiple tags of this type in a command have an *OR* relationship.

```*``` is wildcard, unclear when it may be or may not be nothing

```?word``` means word is optional

```[...]```, ```[....]```, etc as parameter placeholders

```[1to20times]``` is a placeholder for a numbers parameter which has to be defined in the file

```[GoForward]``` is a placeholder for a listenForListItem parameter which has to be defined in the file

```
<listenFor>[GoForward] [1to20times] tracks ?optional *</listenFor>
```

## Definitions

### listenForList
Use in *listenFor* as parameter
```
<!-- Various ways to say, "Go Forward"-->
<listenForList name="GoForward">
    <item>+go +forward</item>
    <item>+go +ahead</item>
    <item>+go +down</item>
    <item>+skip +forward</item>
    <item>+skip +ahead</item>
    <item>+skip +down</item>
</listenForList>
```
Here, inline the propval of the uttered word in place of *symbol* by writing ```<sendKeys>{[symbol.keys]}</sendKeys>``` for example.
```
<listenForList name="symbol" propname="keys">
    <item propval="{u+0027}{{ctrl}}v{u+0027}">quote</item>
    <item propval="{u+0027}{{ctrl}}v{u+0027}">quotes</item>
    <item propval="{u+0022}{{ctrl}}v{u+0022}">double quote</item>
</listenForList>
```

### rule
A detailed *listenFor* parameter format. Example: *the next 3 words*
```
<rule name="something">
    <list>
        <p>
            <o>the</o>
            <o>
                <list>
                    <p>previous</p>
                    <p>next</p>
                </list>
                <o><ruleref name="1to20"/></o>
            </o>
            <list>
                <p>character</p>
                <p>characters</p>
                <p>word</p>
                <p>words</p>
                <p>sentence</p>
                <p>sentences</p>
                <p>paragraph</p>
                <p>paragraphs</p>
                <p>document</p>
            </list>
        </p>
    </list>
</rule>
```

### numbers
Use in *listenFor* as parameter
```
<numbers name="1to20times" propname="times" start="1" stop="20"/>
```

### fontNames
TODO

### wmpMediaItems
TODO

### fileNames
TODO

### ruleScript
TODO

## Actions
Put these after the conditions

### sendKeys

[Information on special keys and combinations](https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.sendkeys?redirectedfrom=MSDN&view=net-5.0)

[Content copied here](special-keys.md)

Wait 250 ms and press CTRL+c
```
<sendKeys times="5">{250 WAIT}{{CTRL}}c</sendKeys>
```

 - ```+(EC)``` is SHIFT+E then SHIFT+C
 - ```{h 10}``` is H sent 10 times
 - ```{LEFT 42}``` is left arrow sent 42 times

### insertText
```
    <insertText>this

tag

respects
whitespace</insertText>
```

### run
Start programs or shell scripts with parameters. [Running script files](running-script-files.md)
```
<run command="C:\full\path\to\file.exe" params="p1 p2 p3"/>
```

### emulateRecognition
```
<emulateRecognition waitForDisambiguation="15">speech for activating a command</emulateRecognition>
```

### waitFor
```
<waitFor seconds="0.01" />
```

### speak
```
<speak speakFlags="2">Stopped</speak>
```

### alert
TODO

### confirm
TODO

### setTextFeedback
```
<setTextFeedback style="warning" speak="false">What was that?</setTextFeedback>
```

### script
Can inline JScript or VBScript. [Examples](script-examples.md)

### wmpMediaPlay
```
<wmpMediaPlay attrname="Name" attrvalue="{[...]}"/>
```

### wmpMediaControl
```
<wmpMediaControl command="previous" times="{[times]}"/>
```
Commands:
 - pause
 - play
 - stop
 - next
 - mute
 - previous
 - loop_on
 - loop_off
 - loop_toggle
 - shuffle_{on/off/toggle}


### sendMessage
This will mute the audio. Not sure how it works.
```
<sendMessage className="Button" windowName="Start" message="793" wParam="6552" lParam="524288"/>
```

### setState
```
<setState name="answers" value="no" />
<setState name="disableCapTextInDocument" value="1"/>
```

### switchToApp
```
<switchToApp windowTitleContains="Google Search" />
```

### minimizeApp
TODO

### maximizeApp
TODO

### restoreApp
TODO

### closeApp
TODO

### prompt
TODO

### mouse
```
<mouse button="left" command="click" position="1230,200" />
<mouse button="left" command="scroll" scrollDirection="up" position="830,582" />
<mouse button="left" command="scroll" scrollDirection="down" position="830,582" />
```

### disambiguate
```
<disambiguate title="Send email to whom?" prompt="Who would you like to send email to?" timeout="30" propname="OutlookContact"/>
```
