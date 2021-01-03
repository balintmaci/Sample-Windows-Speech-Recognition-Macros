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
<command>
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
TODO

### stateIsSet
TODO

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

### rule
TODO what does it do? Probably used as a *listenFor* format but unclear how.
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

### insertText
```
    <insertText>this

tag

respects
whitespace</insertText>
```

### run

### emulateRecognition

### waitFor

### speak

### alert

### confirm

### setTextFeedback

### script

### wmpMediaPlay

### wmpMediaControl

### sendMessage

### setState

### switchToApp

### minimizeApp

### maximizeApp

### restoreApp

### closeApp

### prompt

### mouse

### disambiguate
