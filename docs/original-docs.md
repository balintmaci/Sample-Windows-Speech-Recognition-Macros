from <https://webcache.googleusercontent.com/search?q=cache%3ARjpmcrspLFMJ%3Awww.perturbed-koala.co.uk%2FLang%2520Ref%2520-%2520WSRM%2520-%2520Language%2520Listing.docx%20>
# Speech Macros Command Set

The Speech Macros Command Set is an XML set that defines Speech Macros files.


## ```<speechMacros>```
The ```<speechMacros>``` element is the outermost XML element and it initializes a Speech Macro file.  
 
The following example shows how to initialize a Speech Macro using the ```<speechMacros>``` element:
```xml
<speechMacros>
  <command>
    <listenFor>My Address</listenFor>
    <insertText>One Microsoft Way Redmond WA</insertText>
  </command>
</speechMacros>
```

```<command>```
The ```<command>``` element is the container that holds conditions, rule generators and executors.

One or more ```<command>``` elements

The ```<speechMacros>``` element must contain one or more ```<command>``` elements.  
 
The following example contains two ```<command>``` tags:
```xml
<speechMacros>
  <command>
    <listenFor>My Work Address</listenFor>
    <insertText>One Microsoft Way Redmond WA</insertText>
  </command>
  <command>
    <listenFor>My Home Address</listenFor>
    <insertText>Seattle WA</insertText>
  </command>
</speechMacros>
```

## Conditions
Conditions specify when a particular rule should be recognized.  
When a condition is true then the computer should listen for the command phrases specified by the rule generators.  
When a condition is false then the computer should disable the command phrases specified by rule generators.

### Zero Conditions

If there are zero conditions the command is enabled at all times.

### One Condition

If a command has one condition, that condition must be satisfied for the command to be enabled.

### More than one Condition

If a command has more than one conditions, all of the conditions must be satisfied for the command to be enabled.

### Global Conditions

Conditions are normally contained inside ```<command>```. However if the same condition will be used in different ```<command>``` commands set, the condition can be a child of ```<speechMacros>``` and is then considered a global condition.

### List of Conditions

- appIsInForeground
- appIsRunning
- stateIsSet
- condition
- scriptCondition

**```<appIsInForeground>```**

The ```<appIsInForeground>``` condition checks if a specific application is the foreground window. If the application is the foreground window the condition holds true otherwise the condition is false. 
 
Optional attributes of ```<appIsInForeground>```. However at least one must be specified.  
- ```processName```
- ```WindowTitle```
- ```WindowTitleContains```

 
```processName```. (optional) 
The pocessName attribute of the ```<appIsInForeground>``` condition specifies the process name of the application that is being checked.  
 
The following example checks if NOTEPAD.EXE is the foreground window:
```xml
<appIsInForeground processName = "NOTEPAD.EXE" />
```
 
```windowTitleContains```. (optional) 
The windowTitleContains attribute of the ```<appIsInForeground>``` condition specifies a substring of text in the window title of the application that is being checked. 
 
The following example checks if the window title of the foreground application contains the substring "Notepad":
```xml
<appIsInForeground windowTitleContains = "Notepad" />
```
 
```windowTitle```. (optional) 
The windowTitle attribute of the ```<appIsInForeground>``` condition specifies the exact text of the window title of the application that is being checked.  
 
The following example checks if "NOTEPAD.EXE" is the foreground window and that it has a dialog box with the exact title "Font":
```xml
<appIsInForeground processName = "NOTEPAD.EXE" windowTitle="Font" />
```

**```<appIsRunning>```**

The ```<appIsRunning>``` condition checks if a specific application is running. 
If the application is running the condition holds true, otherwise the condition is false. 
 
• Attributes: 
Note: processName, WindowTitle or WindowTitleContains are optional attributes of ```<appIsRunning>```. However at least one must be specified.  
 
```processName```. (optional) 
The pocessName attribute of the ```<appIsRunning>``` condition specifies the process' name of the application that is being checked.  
 
The following example checks if NOTEPAD.EXE is running:
```xml
<appIsRunning processName = "NOTEPAD.EXE" />
```
 
```windowTitleContains```. (optional) 
The windowTitleContains attribute of the ```<appIsRunning>``` condition specifies a substring of text in the window title of the application that is being checked. 
 
The following example checks if the title of an application running contains the substring Notepad:
```xml
<appIsRunning windowTitleContains = "Notepad" />
```
 
```windowTitle```. (optional) 
The windowTitle attribute of the ```<appIsRunning>``` condition specifies the exact text of the window title of the application that is being checked.  
 
The following example checks if a Notepad window with the title "test - Notepad" is running:
```xml
<appIsRunning processName = "NOTEPAD.EXE" windowTitle="test - Notepad" />
```

**```<stateIsSet>```**
 
The ```<stateIsSet>``` condition checks if there is a state with a specific name. It also checks for the value of the state (optional).  
If there is a state with the specific name and no value was specified in the condition, the condition holds true otherwise the condition is false.  
If there is a state with the specific name and the state value specified matches the states value the condition holds true otherwise the condition is false. 
 
Attributes: 
 
- name (required) 
The name attribute of the ```<stateIsSet>``` condition specifies the name of the state that is being checked for existence or for a matching value.  
 
- value (optional) 
The value attribute of the ```<stateIsSet>``` condition specifies the value of the state that is being checked.  
 
The following example demonstrates the ```<stateIsSet>``` condition:
```xml
<speechMacros>
     <command>
          <listenFor>Good morning computer</listenFor>
          <speak>Good morning</speak>
          <setState name = "aConversation" value ="morning" />
          <waitFor seconds = "5"/>
          <setState name ="aConversation" />
     </command>

     <command>
          <listenFor>Good night computer</listenFor>
          <speak>Good night</speak>
          <setState name = "aConversation" value ="night" />
          <waitFor seconds = "5"/>
          <setState name ="aConversation" />
     </command>

     <command>
          <stateIsSet name = "aConversation" value ="morning" />
          <listenFor>what are you drinking</listenFor>
          <speak>a glass of milk </speak>
          <setState name ="aConversation" />
     </command>

     <command>
          <stateIsSet name = "aConversation" value ="night" />
          <listenFor>what are you eating</listenFor>
          <speak>rice and beans</speak>
          <setState name ="aConversation" />
     </command>
</speechMacros>
```

 
The first ```<command>``` listens for "good morning computer", once it is recognized the engine speaks back "Good Morning". It then names a state "aConversation" with the value of "morning". After that it waits for five seconds and removes the named state.  
The second ```<command>``` does something similar, it listens for "good night computer" and once it is recognized the engine speaks back "Good Night". It then names a state "aConversation" with the value of "night". After that it waits for five second and removes the named state.  
The third ```<command>``` checks if the named state "aConversation" has the value of "morning". If true then and only then will it listen to "what are you drinking". 
The fourth ```<command>``` checks if the named state "aConversation" has the value of "night". If true then and only then will it listen to "what are you eating".  
The third and fourth ```<command>``` elements will never execute unless ```<stateIsSet>``` condition becomes true.

**```<condition>```**

The ```<condition>``` condition groups other conditions into logical expressions using the logical operators AND, OR, and NOT.  
 
**Attributes**
- name (optional) 
The name attribute of the ```<condition>``` condition names the condition so it can be referenced from other scripts/commands.  
 
- operator (required)  
The operator attribute of the ```<condition>``` condition specifies the logical operator that will be applied to the contained conditions.  

*Values*

AND  
All of the conditions contained must be true.  
 
The following example utilizes the AND operator for the ```<condition>``` condition. Both Notepad and Wordpad need to be running for the condition to be true:
```xml
<speechMacros>
     <command>
          <condition operator="AND">
               <appIsRunning processName = "NOTEPAD.EXE" />
               <appIsRunning processName = "WORDPAD.EXE" />
          </condition>
          <listenFor>Can I write</listenFor>
          <speak> Yes </speak>
     </command>
</speechMacros>
```
 
OR  
At least one of the conditions contained must be true.  
 
The following example utilizes an OR operator for the ```<condition>``` condition. If either Notepad or Wordpad is running the condition holds true:
```xml
<speechMacros>
     <command>
          <condition operator="OR">
               <appIsRunning processName = "NOTEPAD.EXE" />
               <appIsRunning processName = "WORDPAD.EXE" />
          </condition>
          <listenFor>Can I write</listenFor>
          <speak> Yes </speak>
     </command>
</speechMacros>
```
 
NOT  
All of the conditions contained must be false for the overall condition to be true.  
 
The following example utilizes the NOT operator for the ```<condition>``` condition. If both Notepad and Wordpad are not running the condition holds true:
```xml
<speechMacros>
     <command>
          <condition operator="OR">
               <appIsRunning processName = "NOTEPAD.EXE" />
               <appIsRunning processName = "WORDPAD.EXE" />
          </condition>
          <listenFor>Open a text editor</listenFor>
          <emulateRecognition> open Notepad </emulateRecognition>
     </command>
</speechMacros>
```

**```<scriptCondition>```**
 
The ```<scriptCondition>``` condition allows scripts to programmatically determine if the condition is met or not. The script is provided with the condition object model which the script can use to indicate wheter the condition is met or not.  

**Attributes**
 
- name (optional) 
The name attribute of the ```<scriptCondition>``` condition names the condition so it can be referenced from other scripts/commnads. 
 
- language (required) 
The language attribute of the ```<scriptCondition>``` condition indicates in what language the script is written in. 
*Values*:
     - "VBScript"
     - "JScript" 
 
Object Models available for ```<scriptCondition>```:  
Condition 
NamedStates 
Application 
Debug  
(link them latter to their respective page)  
 
The following example demonstrates how the ```<scriptCondition>``` is used to make a rule active only on Monday:
```xml
<speechMacros>
     <command>
          <scriptCondition language="JScript">
          Condition.Satisfied = ((new Date()).getDay() == 1);
          </scriptCondition>
          <listenFor>Open email</listenFor>
          <speak> Ok, opening email on monday </speak>
          <emulateRecognition>Open Microsoft Outlook</emulateRecognition>
     </command>
</speechMacros>
```

## Rule Generators
A rule generator defines what the computer should listen for to execute speech macros commands.

### Zero Rule Generators

There must be at least one rule generator inside each command. The entire command set will be rejected if any command contains no rule generators.

### One Rule Generator

There must be at least one rule generator inside each command.

### More than one Rule Generator

If there is more than one rule generator inside each command, the computer will listen for any of the phrase specified by the rule generators.  
 
In the following example the computer would listen for "I want to draw" or "I want to paint" to run Microsoft paint:
```xml
<speechMacros>
     <command>
          <listenFor>I want to draw</listenFor>
          <listenFor>I want to paint</listenFor>
          <run command="mspaint.exe" />
     </command>
</speechMacros>
```
 
### Global Rule Generators

Rule Generators can be children of the ```<speechMacros>``` node. These are Global Rule Generators and can be referenced by other rule generators from the command set.  
 
In the following example two commands reference a global rule generator that has a list of names:
```xml
<speechMacros>
     <command>
          <listenFor>Say hello to [person]</listenFor>
          <speak>Hello {[person]}</speak>
     </command>
 
     <command>
          <listenFor>Say goodbye to [person]</listenFor>
          <speak>Goodbye {[person]}</speak>
     </command>
    
     <rule name="person">
     <list>
          <p>Rob</p>
          <p>Alex</p>
          <p>Ana</p>
          <p>Travis</p>
          <p>Laura</p>
     </list>
     </rule>
</speechMacros>
```
 
Rule generators can have names (optional)

Rule generators can have names. Every Rule Generator name must be unique among all other Rule Generator and Command names.

List of Rule Generators

- listenFor
- listenForList
- rule 
- numbers
- fontNames
- fileNames
- ruleScript
- wmpMediaItems

**```<listenFor>```**
 
The ```<listenFor>``` rule generator creates a phrase for the speech recognizer to listen for.  
 
In the following example the ```<listenFor>``` rule generator creates the phrase "Play solitaire":
```xml
<listenFor>Play solitaire</listenFor>
<run command="solitaire.exe" />
```
 
**Attributes**

- name (optional)  
The name attribute of the ```<listenFor>``` rule generator specifies the name of the rule generator.
 
- Text between the ```<listenFor>``` tags:
     - If the text between the ```<listenFor>``` tags is plain text it will be converted to a SAPI 5 based rule. 
     - If the text between the ```<listenFor>``` tags is within brackets ("[" and "]") it is used as a rule reference.  
 
**Rule References:**

For more information about rule references visit the semantic properties section by clicking here.
 
- When the Rule name is equal to the Semantic Property name: 
If the name contained within brackets ("[" and "]") does not contain a period (".") the rule name and the semantic property name will be the same.  
For example if the text within the brackets is ```[number]``` both the rule reference name and the semantic property name will be *number*.  
 
- When the Rule name is part of the Semantic Property name:  
If the name contained within brackets ("[" and "]") does contain a period (".") the rule name will be the value after the period and the semantic property name will be the entire value.  
For example if the text within the brackets is ```[add.number]``` the rule reference name will be number and the semantic property name will be *add.number*.  
 
**Built-in Rules**  
In Windows Vista, the Speech User Experience keeps a set of rules to enhance command and control as well as text services. These rules are exported and available to the Speech Macro runtime on Windows Vista 
 
```textInDocument``` built-in rule  
The textInDocument built in rule refers to a word or a set of ordered words that exist in an active text document window.  
 
In the following example if Notepad is the foreground application any text contained in the document is exported as a rule so you can chose any string of ordered words and add quotes around them:
```xml
<listenFor>Put [textInDocument] in quotes</listenFor>
<emulateRecognition>Select {[textInDocument]}</emulateRecognition>
<waitFor seconds=".5" />
<sendKeys>^x"^v"</sendKeys>
```

```startableApplicationNames``` built-in rule  
The startableApplicationNames built-in rule refers to the names of the applications that can be started via the Start menu or desktop.  
 
The following example shows how to redefine a phrase ("How about bringing up ```[application]```") to start an application:
```xml
<listenFor>How about bringing up [startableApplicationNames]</listenFor>
<emulateRecognition>Start {[startableApplicationNames]}</emulateRecognition>
```

```itemOnScreen``` built-in rule  
The itemOnScreen built-in rule contains a list of all the named controls in the current application.  
If, for example, Notepad is the foreground application itemOnScreen would contain all of the "Menu Headings" (File, Edit, Format, etc) as well as "Close", "Minimize",etc 
 
The following example allows you to choose any control, for example if you have Notepad open you can say "Choose Format":
```xml
<listenFor>choose [itemOnScreen]</listenFor>
<emulateRecognition>click {[itemOnScreen]}</emulateRecognition>
```
 

 
```runningApplicationNames``` built-in rule  
The runningApplicationNames built-in rule contains a list of all of the applications currently running on the system.  
 
The following example copies selected text into an instance of Notepad already running on the system.
```xml
<listenFor>Copy that into [runningApplicationNames]</listenFor>
<sendKeys>^c</sendKeys> 
<emulateRecognition>switch to {[runningApplicationNames]}</emulateRecognition>
<waitFor seconds=".5" />
<sendKeys>^v</sendKeys>
```

**```<listenForList>```**
 
The ```<listenForList>``` rule generator generates a list of phrases for the speech recognizer to listen for.  

**Attributes**

- name  
The name attribute of the ```<listenFor>``` rule generator specifies the name of the rule.  
This attribute is optional when the ```<listenForList>``` rule generator is contained within a command.  
This attribute is required when the ```<listenForList>``` is a global rule generator.

- propname  
The propname attribute of the ```<listenFor>``` rule generator specifies the property that will be generated from the contained items.  
This attribute is optional if no contained ```<item>``` tags specify a property value.  
This attribute is required if any contained ```<item>``` tags specify a property value.

- useSubset  
The useSubset attribute of the ```<listenFor>``` rule generator indicates that an ordered subset of a phrase may be used to trigger the rule.  
Not all of the words in the phrase need to be spoken, but the words must be in the same order as they appear in the rule item.  
 
In the following example speaking "I want to draw in Paint", "I want to draw", "draw in paint" open the paint application (note, these words must be in the same order as they appear in the rule, "paint draw" would not open the application)
```xml
<listenForList name="openPaint" useSubset="true">
     <item> I want to draw in Paint </item>
</listenForList>
<speak>Ok</speak>
<emulateRecognition>open paint</emulateRecognition>
```

**Contained ```<item>``` tags**

The ```<listenForList>``` rule generator contains ```<item>``` tags and these define individual phrases that the recognizer should listen for.  
The propval attribute specifies the value of the semantic property that will be generated for this item if its recognized.  

The following example shows you how to use ```<listenForList>``` to send email to a specific person's email address using a global rule generator:
```xml
<command>
     <listenFor>Send email to [person]</listenFor>
     <setTextFeedback>Sending email to {[person]}</setTextFeedback>
     <run command="mailto:{[person.email]}" /> 
</command>
     <listenForList name="person" propname="email">
     <item propval="john@email.com">John</item>
     <item propval="travis@email.com">Travis</item>
     <item propval="kris@email.com">Kris</item>
</listenForList>
```

**```<rule>```**
 
The ```<rule>``` rule generator is used to wrap a SAPI 5 XML rule as defined by the SAPI SDK.  
 
**Attributes**

- name  
The name attribute of the ```<rule>``` rule generator specifies the name of the rule.  
This attribute is optional when the ```<rule>``` rule generator is contained within a command.  
This attribute is required when the ```<rule>``` is a global rule generator.  
 
The following example shows how to send an email using the ```<rule>``` rule generator:
```xml
<speechMacros>
     <command>
          <listenFor>Send email to [Contact]</listenFor>
          <run command="mailto:{[Contact.emailAddr]}" />
     </command>
     <rule name="Contact">
          <list propname="emailAddr">
               <p valstr="Lou@email.com">Lou</p>
               <p valstr="Oliver@email.com">Oliver</p>
               <p valstr="Laura@email.com">Laura</p>
          </list>
     </rule>
</speechMacros>
```

**```<numbers>```**
 
The ```<numbers>``` rule generator is used to generate phrases for a sequence of numbers.  
 
**Attributes**

- name  
The name attribute of the ```<numbers>``` rule generator specifies the name of the rule.  
This attribute is optional when the ```<rule>``` rule generator is contained within a command.  
This attribute is required when the ```<rule>``` is a global rule generator.

- propname  
The propname attribute of the ```<numbers>``` rule generator specifies the name of the property that will be generated for the spoken number. If propname is not specified it defaults to "number".

- start  
The start attribute of the ```<numbers>``` rule generator specifies the number to start with. If this attribute is not specified it defaults to 0 (zero).

- stop  
The stop attribute of the ```<numbers>``` rule generator specifies the number to stop with. If this attribute is not specified it defaults to 100 (one hundred).

> Note: Please choose a sensible range between the start and stop attribute values. Having a very large range may significantly slow down WSRMacros.

 
The following example shows how to scroll down on a browser by saying "Look down [ a number between 1 - 20 ] times":
```
<speechMacros>
     <command>
          <listenFor>Look down [times] times</listenFor>
          <emulateRecognition>scroll down {[times]}</emulateRecognition>
     </command>
     <numbers name="times" start="1" stop="20" />
</speechMacros>
```

**```<fontNames>```**
 
The ```<fontNames>``` rule generator is used to generate a set of phrases for all the fonts installed on the system.  
 
**Attributes**

- name  
The name attribute of the ```<fontNames>``` rule generator specifies the name of the rule.  
This attribute is optional when the ```<rule>``` rule generator is contained within a command.  
This attribute is required when the ```<rule>``` is a global rule generator.  
 
In the following example the ```<fontNames>``` global rule generator generates a list of all the installed fonts so they can be easily changed in Notepad:
```
<speechMacros>
     <command>
          <listenFor>Change the font to [fontName]</listenFor>
          <sendKeys>%o</sendKeys>
          <sendKeys>f</sendKeys>
          <waitFor seconds=".250" />
          <sendKeys>%f</sendKeys>
          <sendKeys>{[fontName]}</sendKeys>
          <waitFor seconds=".250" />
          <sendKeys>{ENTER}</sendKeys>
     </command>
     <fontNames name="fontName" />
</speechMacros>
```

**```<fileNames>```**
 
The ```<fileNames>``` rule generator is used to generate a set of phrases for all the files in a specified directory.  
(Hidden and/or system files will not be included)  
 
**Attributes**

- name  
The name attribute of the ```<fileNames>``` rule generator specifies the name of the rule.  
This attribute is optional when the ```<fileNames>``` rule generator is contained within a command.  
This attribute is required when the ```<fileNames>``` is a global rule generator.  

- propname (optional)  
The propname attribute of the ```<fileNames>``` rule generator specifies the fully qualified name for the file.

- directory (required)  
The directory attribute of the ```<fileNames>``` rule generator specifies the name of the directory that should be inspected for filenames. If the directory does not exist the rule generator will not generate any phrases.  
Note: Ensure that the directory specified in this attribute is present in your computer. If the directory specified by this attribute does not exist in your computer, the Speech Macro will fail to load.

- includeSubdirectories (optional)  
The includeSubdirectories attribute of the ```<fileNames>``` rule generator specifies wheter or not subdirectories should be inspected.

- useSubset (optional)  
The useSubset attribute of the ```<fileNames>``` rule generator indicates that an ordered subset of a phrase may be used to trigger the rule.  
Not all of the words in the phrase need to be spoken, but the words must be in the same order as they appear in the rule item.  
 
The following example allows the user to open any document in the folder "C:\publicFiles" by saying "Open" followed by the name of any file inside the folder:
```xml
<speechMacros>
     <command>
          <listenFor>Open [publicFiles]</listenFor>
          <setTextFeedback>Opening {[publicFiles.fileName]}</setTextFeedback>
          <run command="{[publicFiles.fileName]}" />
     </command>
     <fileNames name="publicFiles" propname="fileName" directory="c:\publicFiles" includeSubdirectories ="true" /> 
</speechMacros>
```

> Note: Make sure that the directory attribute specifies a folder that exists in your computer. If publicFiles is not present in your computer, this example will fail to load.

**```<ruleScript>```**
 
The ```<ruleScript>``` rule generator allows to generate a rule from a scripting environment.  
 
**Attributes**

- name  
The name attribute of the ```<ruleScript>``` rule generator specifies the name of the rule.  
This attribute is optional when the <fileNames> rule generator is contained within a command.  
This attribute is required when the <fileNames> is a global rule generator.  

- language (required)  
The language attribute of the ```<ruleScript>``` rule generator specifies the scripting language in which the script is written.  
This can be "VBScript" or "JScript"  

- propname  
The propname attribute of the ```<ruleScript>``` rule generator specifies the property that will be generated from the contained items.  
This attribute is optional when the ```<ruleScript>``` rule generator is contained within a command.  
This attribute is required when the ```<ruleScript>``` is a global rule generator.
 
**Object Models**
 
The ```<ruleScript>``` rule generator is provided with the following object models:  
- Rule  
- CommandSet  
- NamedStates  
- Application 
- Debug  
 
 
The following example uses ```<ruleScript>``` to generate email contacts using Jscript:
```xml
<speechMacros>
     <command>
          <listenFor>Send email to [Contact]</listenFor>
          <run command="mailto:{[Contact.emailAddr]}" />
     </command>
     <ruleScript name="Contact" propname="emailAddr" language="Jscript">
     <![CDATA[
     Rule.Items.AddItem("Alex","Alex@email.com",true);
     Rule.Items.AddItem("Paco","Paco@email.com",true);
     Rule.Items.AddItem("Maria","Maria@email.com",true);
     Rule.Commit();
     ]]>
     </ruleScript> 
</speechMacros>
```

```<wmpMediaItems>```
 
The ```<wmpMediaItems>``` rule generator generates a rule containing musical items from the Windows Media Player's Library.  
 
**Attributes**

- name  
The name attribute of the ```<wmpMediaItems>``` rule generator specifies the name of the rule.  
This attribute is optional when the ```<wmpMediaItems>``` rule generator is contained within a command.  
This attribute is required when the ```<wmpMediaItems>``` is a global rule generator.

- propname  
The propname attribute of the ```<wmpMediaItems>``` rule generator specifies the name of the property that will be generated from the contained items.

- propvalue  
The propvalue attribute of the ```<wmpMediaItems>``` rule generator contain any valid WMP attribute value enclosed in brackets.  
Valid values are defined in the WMP SDK attribute reference

- attrname  
The attrname attribute of the ```<wmpMediaItems>``` rule generator specifies the attribute name that will be used to play music in Windows Media Player.  
Valid values are defined in the WMP SDK attribute reference

- attrvalue (optional)  
The attrvalue attribute of the ```<wmpMediaItems>``` rule generator specifies the attribute value that will be used t o filter the set of music items in the Windows Media Player by their attrname.

- listenFor (optional)  
The listenFor attribute of the ```<wmpMediaItems>``` rule generator specifies what should be listened for; it defaults to name.

- useSubset (optional)  
The useSubset attribute of the ```<wmpMediaItems>``` rule generator indicates that an ordered subset of a phrase may be used to trigger the rule.  
Not all of the words in the phrase need to be spoken, but the words must be in the same order as they appear in the rule item.  
 
In the following example ```<wmpMediaItems>``` rule generator is used to generate a rule containing all the known artists in the Windows Media Player Library:
```xml
<speechMacros>
     <command>
          <listenFor>Play ?the ?artist [Artists]</listenFor>
          <wmpMediaPlay attrname="WM/AlbumArtist" attrvalue="{[Artist]}" />
     </command>
     <wmpMediaItems name="Artists" propname="Artist" attrname="WM/AlbumArtist" useSubset="false" />
</speechMacros>
```

## Executors
 
An executor specifies the action a computer should take once a spoken phrase matches a rule generator.

### Zero Executors

It is not valid for a ```<command>``` to have zero executors.

### One Executor

There must be at least one executor inside a ```<command>```. Once a spoken command matches a phrase from a rule generator the executor executes.

### More than One Executor

If multiple executors are within a ```<command>``` they will execute in order, synchronously, once a spoken command matches a phrase from a rule generator.

List of Executors
- sendKeys 
- insertText 
- run  
- emulateRecognition 
- waitFor 
- speak 
- alert 
- confirm 
- setTextFeedback 
- script 
- wmpMediaPlay 
- wmpMediaControl 
- sendMessages 
- setState 
- switchToApp 
- minimizeApp 
- maximizeApp 
- restoreApp 
- closeApp 
- prompt 
- mouse 
- disambiguate

**```<sendKeys>```**

The ```<sendKeys>``` executor sends keyboard keys to the application running in the foreground.  The following example allows you to copy a string of text "CTRL+C" and pastes it "CTRL+V" into WordPad:
```
<command>
    <listenFor>Copy that into wordpad</listenFor>
    <sendKeys>^c</sendKeys>
    <run command="wordpad.exe" />
    <waitFor seconds="1.0" />
    <sendKeys>^v</sendKeys>
</command>
```
 
**Attributes**

- times (optional)  
The times attribute of the ```<sendKeys>``` executor specifies the number of times the keys should be sent to the application. It defaults to 1 and maximum is 20.  

**Text between ```<sendKeys>``` executor**   
The text contained within ```<sendKeys>``` executor specify the keys to send to the foreground application. [Click](http://msdn.microsoft.com/en-us/library/system.windows.forms.sendkeys.aspx) for a list of the standard definition of keys per the Windows Platform. New Keys for WSR Macros:

Key text | Key definition
--- | ---
{WIN} | Windows Key
{LWIN} | Left Windows Key
{RWIN} | Right Windows Key
{MENU} | Menu Key
{CTRL} | Control Key
{LCTRL} | Left Control Key
{RCTRL} | Right Control Key
{CAPSLOCK+} | Puts CAPSLOCK in the "ON" state
{CAPSLOCK-} | Puts CAPSLOCK in the "OFF" state
{NUMLOCK+} | Puts NUMLOCK in the "ON" state
{NUMLOCK-} | Puts NUMLOCK in the "OFF" state
{SCROLLLOCK+} | Puts SCROLLLOCK in the "ON" state
{SCROLLLOCK-} | Puts SCROLLLOCK in the "OFF" state
{NUM0} - {NUM9} | Number pad 0 - Number pad 9
{NUM*} | Number pad *
{NUM/} | Number pad /
{NUM+} | Number pad +
{NUM-} | Number pad -
{NUM~} | Number pad ENTER
{n WAIT} | Wait for n milliseconds before sending next key
 
**Modifiers**

In addition to the standard modifiers "+" (Shift) "%" (ALT) and "^" (Control) any key can be used as a modifier key by enclosing it in curly {} braces.  
For example:  
{LALT}g - hold and releases Left ALT then hold and release the "g" key.  
LALTg - presses and holds Left ALT, presses "g" then it releases Left ALT and "g" keys.  
 
Any key may be used this way. {a} presses and releases the "a" key.

**Virtual Keys**

To send a virtual key use ```{VK n}``` where the n is the scancode in decimal of the key to send. To use a hex value prefix t he number with a "#" sign. 
For example:  
To send VK_BROWSER_HOME - ```{VK 172}``` or ```{VK #AC}```

**Unicode Characters**

To send a Unicode character use ```{U+nnnn}``` where nnnn is a four digit hex number identifying the Unicode character to send.  
For example:  
ϴ (theta) - ```{U+03F4}```

**Invalid Key Combinations**

The following list include the keys or key combinations that are not allowed due to the limitations of the ```<sendKeys>``` API:  
- WIN+L - Log off Windows.  
- PRTSCR - Print Screen. Note: To use Print Screen you can emulate the phrase "Print Screen". Please refer to the ```<emulateRecognition>``` executor.  
- CTRL+WIN+F- Find Computer. Note: In WSR Macros any combination that includes CTRL+WIN results in turning the Speech Recognition off. 
- CTRL+WIN+TAB-Move focus from Start, to the Quick Launch toolbar, to the System tray. Note: In WSR Macros any combination that includes CTRL+WIN results in turning the Speech Recognition off.

 
> IMPORTANT: The keys between double braces -{{key}}- are important and are called modifiers. As a rule, they will always be higher in precedence than all the other keys. The keys enclosed in single braces -{key}- are called non-modifiers. The rest of the keys are considered normal keys (letters or numbers) and don't need braces.

The keys that are mainly used for double or single braces are Ctrl, Alt, Shift, F1 to F9 , TAB, ESC etc. Normal keys such as a letters or numbers, won't have any set of braces and they will be last in the sequence. A modifier is a key that is pressed, awaits for another key to be pressed and then they are both released. This is used when using combinations such as {{CTRL}} C (copy), {{CTRL}} V (paste), {{CTRL}}{{SHIFT}}{ESC}. The keys that are enclosed in single braces are those that aren't apart of simple numbers and letters and are also not pressed and kept pressed awaiting for another key.

It is important to keep the braces precedence to have a macro working properly. The order is {{all modifiers}} {all non-modifiers} normal keys . To better understand this, it is correct to use {{CTRL}}{{SHIFT}}{ESC} (notice that there is no modifier after the non-modifier), but incorrect to use {ESC}{{CTRL}}{{SHIFT}} or {{CTRL}}{ESC}{{SHIFT}}. The modifiers -{{keys}}- must always be put first.

When creating this type of macros be careful to the numbers of braces used for modifiers and non-modifiers keys and the order in which you write them. If there is one little mistake, the macros won't function correctly and you will get an error message similar to the one below.

**```<insertText>```**
 
The ```<insertText>``` executor inserts text into the foreground application.  
 
• Text between ```<insertText>``` executor: 
The text contained within the ```<insertText>``` executor specifies what text to send to the foreground application.  
The following example inserts the address "One Microsoft Way Redmond Washignton":
```xml
<command>
    <listenFor>Insert my address</listenFor>
    <insertText>One Microsoft Way Redmond Washington</insertText>
</command>
```

**```<run>```**

The ```<run>``` executor starts a new application.  
 
**Attributes**

- command (required)  
The command attribute specifies what program to run.
- params (optional)  
The params attribute specifies the command line parameters to pass to the application.
- directory (optional)  
The directory attribute specifies what the current directory should be when running the application.  
 
In the following example the ```<run>``` executor is used to open an internet explorer window with www.live.com as its default page:
```xml
<command>
    <listenFor>Search the Internet</listenFor>
    <run command="iexplore.exe" params="http://www.live.com" />
</command>
```

**```<emulateRecognition>```**
 
The ```<emulateRecognition>``` executor simulates speech recognition.  
 
**Attributes**

- waitForDisambiguation (optional)  
The waitForDisambiguation attribute specifies the amount of time to wait for the speech recognition command to be disambiguated. Default value is 0 where the recognizer wont wait for disambiguation.  

If a value is specified, the ```<emulateRecognition>``` executor will ensure that if disambiguation is necessary, the user will be given an amount of time to respond to the disambiguation prompt as specified in this attribute.  
 
Text between ```<emulateRecognition>``` executor: 
The text contained within the ```<emulateRecognition>``` executor specifies the text of voice command to be emulated by the speech recognition engine.

> Note: Emulate recognition does not validate the correction of the text between the tags therefore invalid characterers, extra white spaces and mispelled words may corrupt its execution and it may fail silently.

 
In the following example allows to copy the screen into paint:
```xml
<command>
    <listenFor>Copy the screen into paint</listenFor>
    <emulateRecognition>Press print screen</emulateRecognition>
    <run command="mspaint.exe" />
    <waitFor seconds="1.0" />
    <switchToApp windowTitleContains="Paint" />
    <waitFor seconds="1.0" />
    <sendKeys>^v</sendKeys>
</command>
```

**```<waitFor>```**
 
The ```<waitFor>``` executor waits for a specified amount of time.  
 
**Attributes**

- seconds (required)  
The seconds attribute specifies how long in seconds the ```<waitFor>``` executor should wait before continuing. (The value can be specified as a floating point value)

- anyStateNameIsSet (optional not allowed in conjuntion with allStateNamesAreSet)  
The anyStateNameIsSet attribute specifies to wait until any of the named states are set to a value. The list of state names is separated by the vertical bar character "|".  
Example:
    ```xml
    <waitFor anyStateNameIsSet="stateOne|stateTwo|stateThree" seconds="10" />
    ```
 
- allStateNamesAreSet (optional not allowed in conjunction with anyStateNameIsSet)  
The allStateNamesAreSet attribute specifies to wait until all of the named states are set to a value. The list of state names is separated by the vertical bar character "|".  
Example:
    ```xml
    <waitFor allStateNamesAreSet="stateOne|stateTwo|stateThree" seconds="10" />
    ```
 
 
The following example uses the ```<waitFor>``` executor to wait for WordPad to load:
```xml
<command>
    <listenFor>Open my text editor with font menu</listenFor>
    <run command="wordpad.exe" />
    <waitFor seconds="1.0" />
    <sendKeys>%o</sendKeys>
    <waitFor seconds=".250" />
    <sendKeys>f</sendKeys> 
</command>
```

**```<speak>```**
 
The ```<speak>``` executor uses a TTS (Text To Speech) voice to speak back to the user.  
 
**Attributes**

- speakFlags (optional)  
The speakFlags attribute of the ```<speak>``` executor allows to specify the SPEAKFLAGS value passed to the TTS engine. It defaults to SPF_IS_NOT_XML(16). 
For more information about SPEAKFLAGS go to <http://msdn.microsoft.com/en-us/library/ms717252(VS.85).aspx>
 
The following example the computer greets back at the user:
```xml
<command>
    <listenFor>Hello computer</listenFor>
    <speak>Hello user</speak>
</command>
```

**```<alert>```**
 
The ```<alert>``` executor is used to inform the user using a dialog box. This dialog box only contains an OK button. 
 
**Attributes**

- title(optional)  
The title attribute of the ```<alert>``` executor specifies the title of the dialog box.

- timeout(optional)  
The timeout attribute of the ```<alert>``` executor specifies how long in seconds will the dialog box be displayed. Defaults to INFINITE.  
 
**Text between ```<alert>``` executor**  
The text between the ```<alert>``` tags specifies the message that will be displayes in the dialog box.
```xml
<speechMacros>
     <command>
      <listenFor>Send email to [person]</listenFor>
      <setTextFeedback>Sending email to {[person]}</setTextFeedback>
      <run command="mailto:{[person.email]}" /> 
     </command>
 
     <command>
      <listenFor>What's [person] email address</listenFor>
      <alert title="Email address" timeout="10.0">{[person]}'s email address is: {[person.email]} </alert>
     </command>
 
     <rule name="person">
          <list propname="email">
               <p valstr="john@email.com">John</p>
               <p valstr="kris@email.com">Kris</p>
               <p valstr="travis@email.com">Travis</p>
          </list>
     </rule>
</speechMacros>
```

**```<confirm>```**
 
The ```<confirm>``` executor provides the user with a dialog box to decide if execution should continue. The dialog box will contain "Yes" and "No" buttons.  
 
**Attributes**

- title(optional)  
The title attribute of the ```<confirm>``` executor specifies the title of the dialog box.
- timeout(optional)  
The timeout attribute of the ```<confirm>``` executor specifies how long in seconds will the dialog box be displayed. Defaults to INFINITE.  

**Text between ```<confirm>``` executor**
The text between the ```<confirm>``` tags specifies the message that will be displayed in the dialog box.

<speechMacros>
    <command>
    <listenFor>Send an email to [person]</listenFor>
                <confirm title="Send email" timeout="10.0">Are you sure you want to send an email to {[person]}? </confirm>
    <setTextFeedback>Sending email to {[person]}</setTextFeedback>
    <run command="mailto:{[person.email]}" /> 
    </command>
    <rule name="person">
        <list propname="email">
            <p valstr="john@email.com">John</p>
            <p valstr="kris@email.com">Kris</p>
            <p valstr="travis@email.com">Travis</p>
        </list>
    </rule>
</speechMacros>

**```<setTextFeedback>```**
 
The ```<setTextFeedback>``` executor is used to set text on the feedback pane in the Speech UI.  
 
**Attributes**
- style(optional)  
The style attribute of the ```<setTextFeedback>``` executor specifies if the text on the feedback pane should be displayed normally or as a warning. Valid values are "normal" and "warning". It defaults to "normal".
- speak(optional)  
The speak attribute of the ```<setTextFeedback>``` executor specifies if the text on the feedback pane should also be spoken in addition to be displayed. Valid values are "true" and "false". It defaults to "false".
```
<speechMacros>
    <command>
        <listenFor>Search the internet</listenFor>
        <setTextFeedback>Opening Internet Explorer and Live.com</setTextFeedback>
        <run command="iexplore.exe" params="http://www.live.com" /> 
    </command>
</speechMacros>
```

**```<script>```**
 
The ```<script>``` executor is used to execute script code in the macro framework.  
 
**Attributes**

- language (required)  
The language attribute of the ```<script>``` executor specifies the scripting language of the script. Valid values are "VBScript" or "JScript".  

The following example shows you how to use VBScript to perform actions using the ```<script>``` executor:
```xml
<command>
    <listenFor>Can you count to ten</listenFor>
    <script language="VBScript">
        Application.Speak("Yes I can")
        For count = 1 to 10
        Application.Speak(count)
        Next
    </script>
</command>
```

**```<wmpMediaPlay>```**
 
The ```<wmpMediaPlay>``` executor is used to play music in Windows Media Player.  
 
**Attributes**
- attrname (required)  
The attrname attribute of the ```<wmpMediaPlay>``` specifies the attribute name that will be used to play music in Windows Media Player.  
Common values for the attrname attribute are:
    - Name 
    - Artist 
    - WM/AlbumArtist 
    - Title 
    - WM/AlbumTitle 
    - Genre 
    - WM/Genre 
    - WM/TrackNumber

- attrvalue  
The attrvalue attribute of the ```<wmpMediaPlay>``` specifies the attribute value that will be used to play music in Windows Media Player.  
 
The following example allows you to play music in Windows Media Player by artist name:
```xml
<speechMacros>
    <command>
        <listenFor>Play ?the ?artist [Artists]</listenFor>
        <wmpMediaPlay attrname="WM/AlbumArtist" attrvalue="{[Artist]}" />
    </command>
    <wmpMediaItems name="Artists" propname="Artist" attrname="WM/AlbumArtist" useSubset="true" />
</speechMacros>
```

**```<wmpMediaControl>```**
 
The ```<wmpMediaControl>``` executor is used to control Windows Media Player in a variety of ways, play, pause, stop, etc.  
 
**Attributes**
- command (required)  
The command attribute of the ```<wmpMediaControl>``` executor specifies the command to execute on Windows Media Player.  
Valid values are:
    - play 
    - pause 
    - stop 
    - next 
    - previous 
    - loop_on 
    - loop_off 
    - loop_toggle 
    - shuffle_on 
    - shuffle_off 
    - shuffle_toggle
- times (optional)  
The times attribute of the ```<wmpMediaControl>``` executor specifies the number of times the command will be sent to Windows Media Player. Default is 1.  
 
The following example allows you to play the next track in your Windows Media Player list by saying "next track":
```xml
<command>
    <listenFor>Next track</listenFor>
    <wmpMediaControl command="pause" />
    <speak>Playing the next track</speak>
    <wmpMediaControl command="next" />
    <waitFor seconds=".5" />
<wmpMediaControl command="play" />
</command>
``` 

**```<sendMessage>```**
 
The ```<sendMessage>``` executor provides limited means to send Windows messages to applications.  
 
**Attributes**
- windowName (required)  
The windowName attribute of the ```<sendMessage>``` specifies the name of the target window.
- className (required)  
The className attribute of the ```<sendMessage>``` executor specifies the class name of the target window.
- message (required)  
The message attribute of the ```<sendMessage>``` executor specifies the message number to send to the target window.
- wParam (optional)  
The wParam attribute of the ```<sendMessage>``` executor specifies the wParam argument of the message sent.
- lParam (optional)  
The lParam attribute of the ```<sendMessage>``` executor specifies the lParam argument of the message sent.  

**Text between ```<sendMessage>``` executor**
The text within ```<sendMessage>``` tags only works in conjunction with a *WM_COPYDATA* message. It specifies a block of text to be sent as the *lpData* part of the *COPYDATASTRUCT* structure associated with this message.
```xml
<command>
    <listenFor>Turn speech recognition off</listenFor>
    <sendMessage windowName="" className="MS:SpeechTopLevel" message="0X0111" wParam="102" />  
</command>
```

**```<setState>```**
 
The ```<setState>``` executor is used to set a named state to a specific value.  
 
**Attributes**
- name (required)  
The name attribute of the ```<setState>``` executor specifies the state's name that will be set.
- value (optional)  
The value attribute of the ```<setState>``` executor specifies the value the state will be set to.  
 
An example that demonstrates how to set several states using setState (for a complete explanation on this macro go to ```<stateIsSet>``` Condition):
```xml
<speechMacros>
    <command>
        <listenFor>Good morning computer</listenFor>
        <speak>Good morning</speak>
        <setState name = "aConversation" value ="morning" />
        <waitFor seconds = "5"/>
        <setState name ="aConversation" />
    </command>

    <command>
        <listenFor>Good night computer</listenFor>
        <speak>Good night</speak>
        <setState name = "aConversation" value ="night" />
        <waitFor seconds = "5"/>
        <setState name ="aConversation" />
    </command>

    <command>
        <stateIsSet name = "aConversation" value ="morning" />
        <listenFor>what are you drinking</listenFor>
        <speak>a glass of milk </speak>
        <setState name ="aConversation" />
    </command>

    <command>
        <stateIsSet name = "aConversation" value ="night" />
        <listenFor>what are you eating</listenFor>
        <speak>rice and beans</speak>
        <setState name ="aConversation" />
    </command>
</speechMacros>
```

**```<switchToApp>```**
 
The ```<switchToApp>``` executor is used to switch to a specified application.

> Note. Currently this executor does not disambiguate if more than one application matches the search.

**Attributes**
- windowTitle  
The windowTitle attribute of the ```<switchToApp>``` executor specifies the exact title of the window to switch to.
- windowTitleContains  
The windowTitleContains attribute of the ```<switchToApp>``` executor specifies a subset of the title of the window to switch to.  

Only one of these attributes must be specified. They cannot be used in conjunction.  
 
The following example shifts focus to Notepad:
```xml
<command>
    <listenFor>Switch to my favorite application</listenFor>
    <switchToApp windowTitleContains="Notepad" />
</command>
```

**```<minimizeApp>```**

The ```<minimizeApp>``` executor is used to minimize a specified application.

> Note. Currently this executor does not disambiguate if more than one application matches the search.

**Attributes**
- windowTitle  
The windowTitle attribute of the ```<minimizeApp>``` executor specifies the exact title of the window to minimize.
- windowTitleContains  
The windowTitleContains attribute of the ```<minimizeApp>``` executor specifies a subset of the title of the window to minimize.  

Only one of these attributes must be specified. They cannot be used in conjunction.  
 
The following example minimizes Notepad if opened:
```xml
     <command>
      <listenFor>Minimize my favorite application</listenFor>
      <minimizeApp windowTitleContains="Notepad" />
     </command>
```

**```<maximizeApp>```**
 
The ```<maximizeApp>``` executor is used to maximize a specified application.

> Note. Currently this executor does not disambiguate if more than one application matches the search.

**Attributes**
- windowTitle  
The windowTitle attribute of the ```<maximizeApp>``` executor specifies the exact title of the window to maximize.
- windowTitleContains  
The windowTitleContains attribute of the ```<maximizeApp>``` executor specifies a subset of the title of the window to maximize.  

Only one of these attributes must be specified. They cannot be used in conjunction.  
 
The following example maximizes an instance of Notepad:
```xml
<command>
    <listenFor>Maximize my favorite application</listenFor>
    <maximizeApp windowTitleContains="Notepad" />
</command>
```

**```<restoreApp>```**

The ```<restoreApp>``` executor is used to restore a specified application.

> Note. Currently this executor does not disambiguate if more than one application matches the search.

**Attributes**
- windowTitle  
The windowTitle attribute of the ```<restoreApp>``` executor specifies the exact title of the window to restore.
- windowTitleContains  
The windowTitleContains attribute of the ```<restoreApp>``` executor specifies a subset of the title of the window to restore.  

Only one of these attributes must be specified. They cannot be used in conjunction.  

The following example restores Notepad if opened:
```xml
<command>
    <listenFor>Restore my favorite application</listenFor>
    <restoreApp windowTitleContains="Notepad" />
</command>
```

**```<closeApp>```**
 
The ```<closeApp>``` executor is used to close a specified application.

> Note. Currently this executor does not disambiguate if more than one application matches the search.

**Attributes**
- windowTitle  
The windowTitle attribute of the ```<closeApp>``` executor specifies the exact title of the window to close.
- windowTitleContains  
The windowTitleContains attribute of the ```<closeApp>``` executor specifies a subset of the title of the window to close.  

Only one of these attributes must be specified. They cannot be used in conjunction.  

The following examples closes Notepad if opened:
```xml
<command>
    <listenFor>Close my favorite application</listenFor>
    <closeApp windowTitleContains="Notepad" />
</command>
```

**```<prompt>```**
 
The ```<prompt>``` executor prompts the user with a dialog box that contains manipulable text.  
 
**Attributes**
- title (optional)  
The title attribute of the ```<prompt>``` executor specifies the title of the dialog box.
- timeout (optional)  
The timeout attribute of the ```<prompt>``` executor specifies how long in seconds will the dialog box appear for. If the user do not respond to the timeout the command is canceled. The default value is INFINITE.
- defaultValue (optional)  
The defaultValue attribute of the ```<prompt>``` executor specifies what the default value of the edit control should be. It defaults to an empty string.
- resultState (required)  
The resultState attribute of the ```<prompt>``` executor specifies what state should be modified to contain the new value of the dialog box upon successful completion of the dialog.  
 
**Text between ```<prompt>``` executor**  
The text within ```<prompt>``` tags specifies the text prompted to the user in the dialog box.  
 
The following example allows you to generate the subject line of a thank you email using the ```<prompt>``` executor:
```xml
<speechMacros>
    <command>
        <listenFor>Send thank you email to [person]</listenFor>
        <prompt title="thankYou" timeout="10" defaultValue="Dear {[person]}, Thank you so much Sincerely Alex"
        resultState="ThankYouText">Thank you greeting:</prompt>
        <run command="mailto:{[person.email]}?subject={[ThankYouText]}" />
    </command>
    <rule name="person">
        <list propname="email">
            <p valstr="john@email.com">John</p>
            <p valstr="kris@email.com">Kris</p>
            <p valstr="travis@email.com">Travis</p>
        </list>
    </rule>
</speechMacros>
```

**```<mouse>```**
 
The ```<mouse>``` executor manipulates the mouse pointer.  
 
**Attributes**
- button (optional)  
The button attribute of the ```<mouse>``` executor specifies which button to press. Available values are "left","right", and "middle"; it defaults to "left".
- command(required)  
The command attribute of the ```<mouse>``` executor specifies what action the mouse should perform. Values are "click", "dblclick" and "scroll".
- modifierKeys(optional)  
The modifierKeys attribute of the ```<mouse>``` executor allows for using CTRL (^), ALT (%), and SHIFT (+) keys while manipulating the mouse pointer.
- position (optional)  
The position attribute of the ```<mouse>``` executor indicates horizontal (x) and vertical (y) coordinates of where to locate the mouse cursor.
- positionStyle (optional)  
The positionStyle of the ```<mouse>``` executor indicates the position style of the mouse pointer. If assigned to "absolute" the x and y coordinates are mapped to the computer's screen resolution.  
If assigned to "virtual" the coordinates are mapped to the "virtual" system in which the top left corner coordinates are 0,0; the middle of the screen coordinates are 32768,32768 and bottom right corner coordinates are 65536,65536. It defaults to "absolute".  
- scrollAmount (optional)  
The scrollAmount of the ```<mouse>``` executor indicates the scroll increment.
- scrollDirection (optional)  
The scrollDirection of the ```<mouse>``` executor indicates the scrolling direction. Values are "up" or "down".

The following example moves the mouse cursor to the bottom right corner and double clicks on the date:
```xml
<command>
    <listenFor>Click on today's date</listenFor>
    <mouse button="left" command="dblclick" position="65536,65536" positionStyle="virtual" />
</command>
```

**```<disambiguate>```**

The ```<disambiguate>``` executor is used to disambiguate potentially ambigous properties or text from a recognition result.  
If the item is ambigous a dialog box will be displayed to the user allowing him/her to choose the specific item from the list.  
 
**Attributes**
- propname (required)  
The propname attribute of the ```<disambiguate>``` executor specifies the name of the property that will be disambiguated.  
- timeout (optional)  
The timeout attribute of the ```<disambiguate>``` executor specifies how long, in seconds, should the executor wait for an answer. If the user do not respond in the given timeout the command is canceled. The default is INFINITE.  
- title (optional)  
The title attribute of the ```<disambiguate>``` executor specifies the title of the dialog box.  
- prompt  
The prompt attribute of the ```<disambiguate>``` executor specifies the text prompted to the user in the dialog box.  

The following example allows plays music by artist name and allows for disambiguation of similar artists names:
```xml
<speechMacros>
    <command>
        <listenFor>Play ?the ?artist [Artists]</listenFor>
        <disambiguate title="Which artist do you want to play?" prompt="Choose an Artist" timeout="25" propname="Artist" />
        <wmpMediaControl command="pause" />
        <speak>Playing Artist {[Artist]}</speak>
        <wmpMediaPlay attrname="WM/AlbumArtist" attrvalue="{[Artist]}" />
    </command>
    <wmpMediaItems name="Artists" propname="Artist" attrname="WM/AlbumArtist" useSubset="true" />
</speechMacros>
```

## Semantic Properties
 
Semantic properties allows you to use executors in a generic form.  
 
To understand semantic properties let us consider the following example:  
Suppose you wanted to create a command that could send email to a set of people by saying things like "send email to John" or "send email to Kris". It would be nice to be able to specify the email address of each person. 
 
The email address would be considered as a semantic property: It is not something the user said but it is something associated to what the user said.

A single semantic property
The following script enables sending an email to a single person:
```xml
<speechMacros>
    <command>
        <listenFor>Send email to [person]</listenFor>
        <setTextFeedback>Sending email to {[person]}</setTextFeedback>
        <run command="mailto:{[person.email]}" /> 
    </command>

    <rule name="person">
        <list propname="email">
            <p valstr="john@email.com">John</p>
            <p valstr="kris@email.com">Kris</p>
            <p valstr="travis@email.com">Travis</p>
        </list>
    </rule>
</speechMacros>
```

Let us examine the above script:
```xml 
<listenFor>Send email to [person]</listenFor>
```
 
Inside the text area of the ```<listenFor>``` executor, "person" is both a rule name and a semantic property name. A rule name reference means that the list of people will be defined inside this command set using a rule generator named "person". A semantic property means that if any executor asks for a semantic property by name, and the name is "person", it should return the text that was spoken. For example if the user said "send email to John" the semantic property named "person" would have the value "John".
```xml
<setTextFeedback> Sending email to {[person]} </setTextFeedback>
```
 
Inside the text area of the ```<setTextFeedback>``` executor, "person" is referenced again and this time it is inside "{[ ]}" brackets. These double brackets tell the executor to look for the value of the semantic property named "person". Since the semantic value of "person" is "John" the Speech Recognition UI will display "Sending email to John".
```xml
<run command="mailto:{[person.email]}">
``` 
 
You can also associate other values with the phrases recognized. In this line of code "person.email" inside "{[ ]}" brackets tell the executor to look up the semantic property named "person.email" and substitute that value inside the ```<run>``` executor. This value is contained in the rule generator named "person":
```xml
<rule name="person">
     <list propname="email">
        <p valstr="john@email.com">John</p>
        <p valstr="kris@email.com">Kris</p>
        <p valstr="travis@email.com">Travis</p>
     </list>
</rule>
```

This rule named "person" contains the semantic property "email". For "John" the semantic property "person.email" returns the value "John@email.com". Thus, the semantic property person.email inside the ```<run>``` executor will be substituted with "mailto:John@email.com".  

Multiple Semantic Properties
Lets change the above script so we can CC the email to another person:
```xml
<speechMacros>
    <command>
        <listenFor>Send email to [to.person] and CC [cc.person] </listenFor>
        <setTextFeedback> Sending email to {[to.person]} and CCing {[cc.person]} </setTextFeedback>
        <run command="mailto:{[to.person.email]}?cc={[cc.person.email]}" /> 
    </command>

    <rule name="person">
        <list propname="email">
            <p valstr="john@email.com">John</p>
            <p valstr="kris@email.com">Kris</p>
            <p valstr="travis@email.com">Travis</p>
        </list>
    </rule>
</speechMacros>
```

The key difference in this example is that it shows you how to change the name of the semantic property being used from being the same as the rule name
```xml
<listenFor> Send email to [to.person] and CC [cc.person] </listenFor>
```
 
Here the semantic property "to.person" will contain the value the user said ("John","Kris",etc) and the rule name "person".
```xml
<setTextFeedback> Sending email to {[to.person]} and CCing {[cc.person]} </setTextFeedback>
```
 
Similarly, the { } brackets tell the ```<setTextFeedback>``` executor to substitute the semantic property value. Therefore if the user said "Send email to John and CC Kris" the Speech Recognition UI will display "Sending email to John and CCing Kris".
```xml
<run command="mailto:{[to.person.email]}?cc={[cc.person.email]}" />
```
 
Since to.person also contains the rule named "person", the semantic value of "to.person.email" will be extracted from the rule named "person". For this example the ```<run>``` executor will be replaced with "mailto:john@email.com?cc=kris@email.com".

Using the Same Rule and the Same Property name multiple times.
A more complicated example involves multiple semantic properties with the same property name for example ```person1[,person2[,person3]]```. Let's edit the email script so it allows the user to send an email for up to three different people:
```xml
<speechMacros>
    <command>
        <rule>
        <p>Send email to</p>
        <p min="1" max="3"> <ruleref name="person" propname="person"/>
            <o>and</o> </p> 
        </rule>
        <setTextFeedback> Sending email to {[foreach:{[person]};]} </setTextFeedback>
        <run command="mailto:{[foreach:{[person.email]};]}" /> 
    </command>

    <rule name="person">
        <list propname="email">
            <p valstr="john@email.com">John</p>
            <p valstr="kris@email.com">Kris</p>
            <p valstr="travis@email.com">Travis</p>
        </list>
    </rule>
</speechMacros>
```

The three major changes are:  
- We are using the ```<rule>``` rule generator instead of the ```<listenFor>``` rule generator.  
- We changed the ```<sendTextFeedback>``` executor.  
- We changed the ```<run>``` executor.  
 
Let's take a look at each change:
```xml
<rule>
     <p>Send email to</p>
     <p min="1" max="3"> <ruleref name="person" propname="person"/>
          <o>and</o>
     </p>
</rule>
```

The first ```<p>``` tag of the ```<rule>``` rule generator tells the computer to listen for the phrase "Send email to". The second ```<p>``` tag states that the ```<ruleref>``` tag must be used at least one (min="1") and at most three times (max="3"). The ```<ruleref>``` tag tells the computer to reference the rule named "person" and to use a semantic property of the same name. The last tag ```<o>``` says that "and" is optional after a person's name. This rule generator allows the user to say "Send email to John", "Send email to John and Travis", "Send email to John, Travis and Kris", and "Send email to John and Travis and Kris".
```xml
<setTextFeedback> Sending email to {[foreach:{[person]};]} </setTextFeedback>
```
 
For the ```<setTextFeedback>``` executor we have concatenated each semantic property by using the foreach statement. The Speech Recognition UI will display each name separated by a semicolon; so if we said "Send email to John, Travis and Kris" the UI will display "Sending email to John; Travis; Kris;".
```xml
<run command="mailto:{[foreach:{[person.email]};]}" />
```
 
Similarly to ```<setTextFeedback>```, the ```<run>``` executor will replace each vaule of person.email using the foreach statment with the proper semantic value. So for "Send email to John, Travis and Kris" the "mailto" command will contain "John@email.com;Travis@email.com;Kris@email.com;"  

Using different Rules and different Property names.
You can also use different rules that have different semantic properties. Lets edit the email script so we can send an email with a priority property:
```xml
<speechMacros>
    <command>
        <listenFor>Send [priority] email to [person] </listenFor>
        <setTextFeedback> Sending {[priority]} email to {[person]} </setTextFeedback>
        <run command="mailto:{[person.email]}" />
        <waitFor seconds="1" />
        <sendKeys>{[priority.keysToSend]}</sendKeys> 
    </command>

    <rule name="person">
        <list propname="email">
            <p valstr="john@email.com">John</p>
            <p valstr="kris@email.com">Kris</p>
            <p valstr="travis@email.com">Travis</p>
        </list>
    </rule>
    <rule name="priority">
        <o>
            <list propname="keysToSend">
                <p valstr="%ph{enter}">high priority</p>
                <p valstr="%pl{enter}">low priority</p>
                <p valstr=" ">normal priority</p>
            </list>
        </o>
    </rule>
</speechMacros>
``` 

Let us examin these new changes:
```xml
<listenFor>Send [priority] email to [person] </listenFor>
```
 
In this script we have added a new rule reference named "priority".
```xml
<waitFor seconds="1" />
<sendKeys>{[priority.keysToSend]}</sendKeys>
```

We have added two new executors the ```<waitFor>``` executor will wait for one second after executing the ```<run>``` executor. The ```<sendKeys>``` will replace the value in "priority.keysToSend" with its respective semantic value.
```xml
<rule name="priority">
    <o>
        <list propname="keysToSend">
            <p valstr="%ph{enter}">high priority</p>
            <p valstr="%pl{enter}">low priority</p>
            <p valstr="">normal priority</p>
        </list>
    </o>
</rule>
```

The new ```<rule>``` rule generator defines a new rule named "priority" and it generates a semantic property named "keysToSend".  
 
With this scrip the user is allow to say "Send email to John" and everything works as before however the user can add a priority to the email message. For example if the user says "send high priority email to John" the executor ```<run>``` will contain "mailto:john@email.com" then the script will wait for one second and set the importance to High in Outlook by sending the keys "ALT-P" followed by an "H" and "Enter" which is defined by %ph{enter} (for more information about the ```<sendKeys>``` executor visit the executors section of the Windows Speech Recognition Macros wiki).

> Note. Priority Shortcuts may not be the same for every email client.

> Note. For a more thorough description of semantic properties, see the Speech API programming Reference http://msdn.microsoft.com/en-us/library/ms723630(VS.85).aspx

## Script Object Model

The following object models are provided to:
- ```<scriptCondition>``` condition 
- ```<ruleScript>``` rule generator  
- ```<script>``` executor

**Objects List**

These objects can be called from scripts called from the WSR
 
- Application:  Methods that parallel executors available to WSRM (run, speak, wait, switch/minimise application etc).
- ClipboardData: Methods to set/get text to clipboard. 
- ChooseFromList: Opens dialogue window for use to select option. 
- Command:  Methods to get a WSRM property, and to exit script. 
- CommandSet: Gets conditions and rule generators from WSRM. 
- Debug:  Methods to debug script code, assertion alert box, start debugger. 
- NamedStates: Gets / sets WSRM named states. 
- RuleItem:  Creates a rule item available to WSRM. 
- RuleItemCollection: Creates a collection of rules item available to WSRM. 
- Rule:
- Condition:

### Application object

The Application object contains methods that parallel the Executors available to the Command Set. This allow ```<script>``` executors to perform the same functionality as any other executor.

**Methods**

**```SetTextFeedback```**  
The SetTextFeedback method is used to set the text in the Speech Recognition UI.

Parameter | Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Text | BSTR | no default value | Text to be displayed in the Speech Recognition Feedback Window
Warning | BOOL | FALSE | Show the message as a warning
Speak | BOOL | FALSE | Speak the text in addition to displaying it

Return Value: None.


**```Alert```**  
The Alert method brings a dialog box with a message.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Prompt | BSTR | no default value | Text to be displayed in the dialog box
Title | BSTR | ```<empty>``` | Text to be displayed in the dialog box title
Timeout | FLOAT | 0.0 | Time in seconds before the window atuomatically closes. 0 indicates that it never timeout

Return Value: None.


**```Confirm```**  
The Confirm method brings up a dialog box with a message and "Yes" and "No" buttons.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Prompt | BSTR | no default value | Text to be displayed in the dialog box
Title | BSTR | ```<empty>``` | Text to be displayed in the dialog box title
Timeout | FLOAT | 0.0 | Time in seconds before the window atuomatically closes. 0 indicates that it never timeout

Return Value: Integer of the Button "6" for IDYES, "7" for IDNO or -1 if dialog times out.

 
 
**```MsgBox```**  
The MsgBox method brings up a dialog box with user specified content

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Prompt | BSTR | no default value | Text to be displayed in the dialog box
Title | BSTR | ```<empty>``` | Text to be displayed in the dialog box title
Timeout | FLOAT | 0.0 | Time in seconds before the window atuomatically closes. 0 indicates that it never timeout
Buttons | Int | 0 | Button arguments for VBscript MsgBox
Return Value: None.

(for more info on the Buttons parameter read the VBscript documentation here <http://msdn.microsoft.com/en-us/library/sfw6660x.aspx>)


**```Prompt```**  
The Prompt method brings a dialog box with an edit control allowing the user to enter text

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Prompt | BSTR | no default value | Text to be displayed in the dialog box
initialValue | BSTR | 0 | Default text in the edit control
Title | BSTR | ```<empty>``` | Text to be displayed in the dialog box title
Timeout | FLOAT | 0.0 | Time in seconds before the window atuomatically closes. O indicates that it never timeout
Return value: BSTR containing the text entered by the user. If the user cancels the dialog box or it times out, the returned value is an empty string.


**```Run```**  
The Run method launches an application or URL

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Command | BSTR | no default value | URL or executable file name to run
Params | BSTR | ```<empty>``` | Command line arguments
startInDirectory | BSTR | ```<empty>``` | Working directory for the application
Return value: None. If the URL or application fails to launch an exception will be thrown.


**```SwitchToAppByTitle```**  
The SwitchToAppByTitle method brings the specified application window to the foreground.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Title | BSTR | no default value | Window Title of the application
ExactMatch | BOOL | FALSE | Specifies if the window title should match the Title argument exactly. FALSE allows for partial match
Return value: None. If the URL or application fails to launch an exception will be thrown.


**```MinimizeAppByTitle```**  
The MinimizeAppByTitle method minimizes the specified application window.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Title | BSTR | no default value | Window Title of the application
ExactMatch | BOOL | FALSE | Specifies if the window title should match the Title argument exactly. FALSE allows for partial match
Return value: None. If the URL or application fails to launch an exception will be thrown.


**```MaximizeAppByTitle```**  
The MaximizeAppByTitle method maximizes the specified application window.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Title | BSTR | no default value | Window Title of the application
ExactMatch | BOOL | FALSE | Specifies if the window title should match the Title argument exactly. FALSE allows for partial match
Return value: None. If the URL or application fails to launch an exception will be thrown.  


**```RestoreAppByTitle```**  
The RestoreAppByTitle method restores the specified application window.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Title | BSTR | no default value | Window Title of the application
ExactMatch | BOOL | FALSE | Specifies if the window title should match the Title argument exactly. FALSE allows for partial match
Return value: None. If the URL or application fails to launch an exception will be thrown.


**```CloseAppByTitle```**  
The CloseAppByTitle method closes the specified application window.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Title | BSTR | no default value | Window Title of the application
ExactMatch | BOOL | FALSE | Specifies if the window title should match the Title argument exactly. FALSE allows for partial match
Return value: None. If the URL or application fails to launch an exception will be thrown.


**```SendMessage```**  
The SendMessage method provides limited means to send window messages to a window.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
className | BSTR | no default value | Name of the window class of the target window
windowName | BSTR | no default value | Title of the target window
Msg | UINT | no default value | Window message number
wParam | UINT | no default value | wParam value of message
lParam | UINT | no default value | lParam value of message
Return Value: UINT result of SendMessage. This value is application specific.


**```SendKeys```**  
The SendKeys method sends keystrokes to the foreground window.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Keys | BSTR | no default value | Keys to send to the foreground window
Return Value: None. An exception will be thrown if an error ocurred.  
Note: Visit the ```<sendKeys>``` executor documentation for details regarding the string format for Keys.


**```InsertText```**  
The InsertText method inserts the specified text into t he foreground window.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
text | BSTR | no default value | Text to send to the foreground window
Return Value: None. An exception will be thrown if an error occurred.


**```EmulateRecognition```**  
The EmulateRecognition method sends a string of Windows Speech Recognition commands to the recognizer.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
textToEmulate | BSTR | no default value | Text that represents WSR commands to be sent to the recognizer
disambiguationTimeout | FLOAT | 0.0 | Time to wait for native disambiguation to occur. 0.0 indicates that disambiguation is not expected
Return Value: None. An exception will be thrown if an error occurred.


**```Speak```**  
The Speak method causes the TTS engine to speak the text provided.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Text | BSTR | no default value | Text to be spoken
Flags | ULONG | 16 (SPF_IS_NOT_XML) | SPEAKFLAGS passed to the TTS engine
Return Value: None. An exception will be thrown if an error occurred.  
Note: For more information about SPEAKFLAGS go to http://msdn.microsoft.com/en-us/library/ms717252(VS.85).aspx

 
**```Wait```**  
The Wait method pauses execution for a specified time period.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Seconds | FLOAT | 1.0 | Time in seconds to stop execution
Return Value: None. An exception will be thrown if an error occurred.


**Properties**

**```clipboardData```**  
The clipboardData property is a read-only property that returns the clipboardData object.  
 

clipboardData Object
The clipboardData object can be used to manipulate text data in the system clipboard.


**Methods**

**```getData```**  
The getData method of the clipboardData object returns the text currently contained in the systems clipboard.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Format | BSTR | no default value | Clipboard format string (only text is supported)
Return Value: VARIANT - The text currently in the clipboard, or an empty string if no clipboard text exists.  


**```setData```**  
The setData method of the clipboardData object places the specified text into the system clipboard.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Format | BSTR | no default value | Clipboard format string (only text is supported)
Data | VARIANT | no default value | Text to place into the system clipboard
Return Value: None. An exception will be thrown if an error occurs.  


**```clearData```**  
The clearData method of the clipboardData object clears any text from the systems clipboard.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Format | BSTR | no default value | Clipboard format string (only text is supported)
Return Value: None. An exception will be thrown if an error occurs.



### ChooseFromList Object
 
**Methods**


**```Choose```**  
The Choose method of the ChooseFromList object launches a dialog window with a list that allows the user to choose from the selection.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Prompt | BSTR | ```<empty>``` | Text that prompts the user. This will be displayed at the top of the dialog box
Title | BSTR | ```<empty>``` | Title of the dialog window
Timeout | FLOAT | 0.0 | Time to wait (in seconds) before automatically canceling the dialog window. 0.0 indicates that it never times out
Return Value: int - The zero-based index of the item selected by the user. If user cancels or dialog timesout -1 is returned. 
Note: The Items property of the ChooseFromList must be initialized to contain the itemos to be presented in a list to the user.

 
**Properties**

**```Items```** (read-only) 
The Items property of the ChooseFromList object is a RuleItemCollection object containing the choices to be presented in a list to the user. This  
property may be set using an external RuleItemCollection (from a rule generator, for example) or it may be directly modified.



### Command Object

**Methods**

**```ResolveProperties```**  
The ResolveProperties method of the Command object provides a means to get the value of a named property. This property can be any property that would normally be resolved using the ```{[property]}``` syntax.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
PropertyString | BSTR | no default value | Property to be resolved
Return Value: The resolved property string. If a property specified in the string does not exists it is replaced with an empty string.



**```Exit```**  
The Exit method causes the script to terminate. This can be useful for early termination for a script, and also to halt the list of executors in a command.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
ExitCode | DWORD | no default value | A non-zero value in this field causes the current executor to stop execution. Zero allows the executor to continue execution.
Return Value: None. An exception will be thrown if an error occurred.

 
**Properties**

**```Result```** (read-only) 
The Result object is the ISpRecoResult returned from the recognizer for the recognition event that triggered this executor. Click the following link for more information:  
http://msdn.microsoft.com/en-us/library/ms718929(VS.85).aspx 



### CommandSet Object
The CommandSet object contains methods used to access Conditions or Rule Generators within the Command Set.

**Methods**

**```Conditions```**

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
ConditionName | BSTR | no default value | Name of the Condition
Return Value: The Condition method returns an object dependent on the type of the condition targeted. Different conditions support different methods and properties. All Conditions support the Attributes property which is an IXMLDOMNamedNodeMap representing the XML attribute of the XML node representing the condition.  
 
**```RuleGenerators```**

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
RuleName | BSTR | no default value | Name of the Rule Generator

Return Value: The RuleGenerator methods returns an object dependent on the type of the Rule Generator targeted. Different rule generators support different methods and properties, The table below illustrates which properties are available for each Rule Generator:  
 
Attributes: IXMLDOMNamedNodeMap containing the XML attributes of the Rule Generator.  
- Rule: Rule object of the rule.  
- Script: ```<ruleScript>``` only: Collection of objects and functions within a ```<ruleScript>``` script.  
- Text: ```<listenFor>``` only. Text of the ```<listenFor>``` element.

 
Rule Generator | Attribute | Rule | Script | Text
--- | --- | --- | --- | ---
```<fileNames>``` | X | X | - | -
```<fontNames>``` | X | X | - | -
```<listenForList>``` | X | X | - | - 
```<listenFor>``` | X | - | - | X
```<numbers>``` | X | - | - | -
```<ruleScript>``` | X | X | X | - 
```<rule>``` | X | - | - | -
```<wmpMediaItems>``` | X | X | - | -
 


### Debug Object
The Debug object is made available to aid in debugging scripts within Command Sets.

**Methods**

**```Assert```**

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Test | BOOL | no default value | If FALSE a dialog box pops with the Prompt text. If TRUE execution runs normally
Prompt | BSTR | no default value | Text displayed in dialog box if Test evaluates to FALSE

Return Value: None.  
 
**```DebugBreak ```**
The DebugBreak method is used to halt execution of a script in the debugger. If a debugger is not running, the user will be prompted to choose a debugger to attach to the process.

Parameters: None.

Return Value: None.  
 
**```Trace ```**
The Trace method is used to output a message to a debugger window.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Text | BSTR | no default value | Text to be sent to the debugger output window
Return Value: None.

### NamedStates Object
The NamedStates object is used to interact with Named States in the system. These can be set either through this methods of this object or by the ```<setState>``` executor.

**Methods**

**```IsNamedStateSet ```**
The IsNamedStateSet method checks the value of a Named State. If a value exists and is not empty, this methods returns true.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
StateName | BSTR | no default value | Name of the state to check
Return Value: TRUE if the specified state is non empty. FALSE otherwise.  
 
**```IsNamedStateSetToValue ```**
The IsNamedStateSetToValue method checks the value of a Named State against a specified value. If the values are identical the method returns TRUE.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
StateName | BSTR | no default value | Name of the state to check
StateValue | BSTR | no default value | Value used for comparision
Return Value: TRUE if the value of the state equals the specified value. FALSE otherwise.  
 
**```SetNamedStateValue ```**
The SetNamedStateValue method sets the value of the specified state.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
StateName | BSTR | no default value | Name of the state to set
StateValue | BSTR | no default value | Value assigned to state
Return Value: None.  
 
**```GetNamedStateValue ```**
The GetNamedStateValue method retrieves the value of the specified state.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
StateName | BSTR | no default value | Name of the state to be retrieved
Return Value: BSTR The value of the specified Named State. If the state is not set an empty string will be returned.  
 
**```ClearNamedStateValue ```**
The ClearNamedStateValue method clears the value of the specified state.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
StateName | BSTR | no default value | Name of the state to clear
Return Value: None.  
 
**```WaitForAllNamedStatesToBeSet ```**
The WaitForAllNamedStatesToBeSet method pauses execution of the script until all the specified states are set (non-empty) or the specified timeout expires.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
StateList | BSTR | no default value | List of states to wait for. States are separated by the vertical bar " | " symbol
Timeout | FLOAT | no default value | Time in seconds to wait for the specified states to be set |  
Return Value: BOOL - TRUE if all states were set FALSE if timeout expires.  
 
**```WaitForAnyNamedStateToBeSet ```**
The WaitForAllNamedStateToBeSet method pauses execution of the script until one or more of the specified states are set (non-empty) or the specified timeout expires.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
StateList | BSTR | no default value | List of states to wait for. States are separated by the vertical bar " | " symbol
Timeout | FLOAT | no default value | Time in seconds to wait for the specified states to be set |  
Return Value: BOOL - TRUE if any states were set FALSE if timeout expires.

 


### RuleItem Object
The RuleItem object represents a spoken phrase and their property value within a rule.

**Methods**

**```Clone ```**
The Clone method creates a copy of the RuleItem object.  
Parameters:None.  
Return Value:A RuleItem object that is a copy of the original.

**Properties**

**```Phrase (read/write) ```**
Type: BSTR 
The Phrase property of a RuleItem object is a string that contains the text the recognizer should listen for.  
Example:  
myRuleItem.Phrase = "John Smith"; 
In this example, the recognizer listens for "John Smith". 
 
**```Property (read/write) ```**
Type:BSTR 
The Property property of the RuleItem object is the semantic property associated with the item.  
Example:  
myRuleItem.Phrase = "John Smith"; 
myRuleItem.Property = "johnsmith@email.com"; 
In this example, the recognizer listens for "John Smith" and sets the semantic property of the rule to "johnsmith@email.com".  
 
**```UseSubsets (read/write) ```**
Type:BOOL  
The UseSubsets property of the RuleItem object indicates if the recognizer should accept an ordered subset of the words contained in the Phrase property rather than the entire set of words.  
Example:  
```js
myRuleItem.Phrase = "John Austin Smith Junior";  
myRuleItem.Property = "johnsmith@email.com";  
myRuleItem.UseSubsets = true;  
```
In this example, setting UseSubsets to true allows the recognizer to listen for "John Austin", "Austin Junior", "John Smith" to match this rule item. If UseSubsets property were set to false only "John Austin Smith Junior" would be recognized to match the RuleItem.

 

### RuleItemCollection Object
The RuleItemCollection object is a container class used to hold a collection of RuleItem objects.

**Methods**

**```NewEnum ```**
The NewEnum method is used to allow VBScript enumerations internally, and is not normally called from within script.  
Parameters: None.  
Return Value: IEnumVariant - A new enumerator which can be used to iterate through the items of the collection. Visit the following website for more information http://msdn.microsoft.com/en-us/library/ms221053.aspx  

**```FindTextMatches ```**
The FindTextMatches method returns a new RuleItemCollection containing items from the original collection that contain the ordered subset specified in the Filter parameter.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Filter | BSTR | ```<empty>``` | Ordered subset used to filter matches. If this value is an empty string a complete copy of the RuleItemCollection will be returned.

Return Value: RuleItemCollection - a new collection containing the matching RuleItems.

Example:
```js
_ var flavoredPops = popsCollection.FindTextMatches("flavored pop");_  
```
In this example the flavoredPops collection would contain items from the popsCollection whose phrases contain the words "flavored" and "pop" in that order. This could include items such as: "orange flavored pop" "cola flavored pop" 
 
**```AddItem ```**
The AddItem method adds a new RuleItem to the collection.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Phrase | BSTR | no default value | Phrase property of the new RuleItem
PropertyValue | BSTR | ```<empty>``` | Property property of the new RuleItem
UseSubsets | BOOL | FALSE | UseSubsets property of the new RuleItem

Return Value: None.
 
**```AddItems ```**
The AddItems method adds a RuleItemCollection to the collection.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Collection | RuleItemCollection | no default value | RuleItemCollection to be added

Return Value: None.
 
**```RemoveItem ```**
The RemoveItem method removes items from the collection.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Phrase | BSTR | no default value | Phrase property of the RuleItem to be removed
PropertyValue | BSTR | ```<empty>``` | Property property of the RuleItem to be removed
UseSubsets | BOOL | FALSE | UseSubsets property of the RuleItem to be removed

Return Value: None.
 
**```RemoveItems ```**
The RemoveItem method removes a collection of items from the collection.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Collection | RuleItemCollection | no default value | Collection of Items to be removed

Return Value: None.
 
**```RemoveAll ```**
The RemoveAll method removes all items from the collection.

Parameters: None.

Return Value: None.
 
**```Sort ```**
The Sort method sorts the items in the collection. Sorting is performed alphabetically based on the Phrase property of each RuleItem.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Ascending | BOOL | TRUE | If TRUE the collection is order in ascending order, if FALSE the collection is ordered in descending order

Return Value: None.

**Properties**

**```Item (read-only) ```**
The Item property returns the RuleItem at the specified location.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Index | VARIANT | No default value | Zero based index of the item to be retrieved

Return Value:The RuleItem found at the specified index.  
 
**```Count (read-only) ```**
The Count property returns the number of items in the collection.  
Parameters: None.  
Return Value: LONG - the number of items in the collection.

 

### Rule object
The Rule object creates or modifies rules within a Rule Generator. Most commonly this object is used by ```<ruleScript>``` scripts to generate rules on the fly.

**Methods**

**```Commit ```**
The Commit method causes the rule to be generated and inserted into the recognizer. The call to Commit() is optional within a ```<ruleScript>``` script.  
Commit can be called again after the rule has been generated to cause the rule to be reloaded in the Command Set.  
Parameters: None  
Return Value: None

**Properties**

**```Items (read/write) ```**
The Items property of the Rule object represents the RuleItemCollection of RuleItems that compose the rule. This property may be set or retrieved.  
Parameters: None  
Return Value: The RuleItemCollection returned by the Rule.  
 
**```InnerXML (read/write) ```**
The InnerXML property can be used to set or retrieve the SAPI XML that is sent to the recognizer. This property may be set to allow the Rule object to contain a SAPI rule. Setting the XML directly using this property causes the Items of the Rule object to be emptied, and no manipulation of the rule can be done through the Items object.  
If the InnerXML property has not been explicitly set, this property returns the SAPI XML generated by the Items collection as it is sent to the recognizer.   
Parameters: None.  
Return Value: BSTR - The SAPI XML representing this Rule object. 
 
**```RuleName (read only) ```**
The RuleName property returns the name of the Rule. This is a read-only property. The RuleName for ```<ruleScript>``` Rule Generators is determined by the "name=" attribute of the ```<ruleScript>``` tag. 
Parameters: None  
Return Value: BSTR-The name of the rule.  
 
**```PropName (read only) ```**
The PropName property returns the name of the semantic property associated with items of the Rule object. The PropName for ```<ruleScript>``` Rule Generators is determined by the "propname=" attribute of the ```<ruleScript>``` tag.  
Parameters: None  
Return Value: BSTR-The name of the semantic properties associated with this rule.

 
 

### Condition object
The Condition object is exposed to ```<scriptCondition>``` conditions. It contains methods and properties used to aid in condition evaluation.

**Methods**

**```setTimeout ```**
The setTimeout method allows the script author to execute a scriptlet after a specified period of time has expired. Unlike setInterval, setTimeout will 
only execute the scriptlet once.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Seconds | FLOAT | no default value | Time in seconds before running the scriptlet
Scriptlet | BSTR | no default value | Scriptlet code to run

Return Value: ULONG - Timer ID. This ID can be passed to the clearTimeout method to cancel the timer.  

**```setInterval ```**
The setInterval method allows the script author to execute a scriptlet after a specified period of time has expired. Unlike setTimeout, setInterval executes the scriptlet code every interval until clearInterval is called.

Parameter Name | Type | Default Value | Description
--- | --- | --- | --- | ---
Seconds | FLOAT | no default value | Time in seconds before running the scriptlet
Scriptlet | BSTR | no default value | Scriptlet code to run
Return Value: ULONG - Timer ID. This ID can be passed to the clearInterval method to cancel the timer.

**Properties**

**```Satisfied (read/write)```**
The Satisfied property determines if the ```<scriptCondition>``` condition has been met. Set this property to TRUE to cause the condition to pass. Set to 
FALSE to cause the condition to fail.  

Parameters: None.  

Return Value: BOOL - The current state of the condition.

 
