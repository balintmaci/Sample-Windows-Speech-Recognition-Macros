# Sample-Windows-Speech-Recognition-Macros

Based on
<https://github.com/RoxtonLabs/Sample-Windows-Speech-Recognition-Macros>

And
<https://www.reddit.com/r/X3TC/comments/1t7ft0/howto_real_captains_dont_use_keyboards/>

## Setup

Setup microphone and speech recognition in windows

Download, install, run Windows Speech Recognition Macros (WSRM) <http://www.microsoft.com/en-us/download/details.aspx?id=13045>

In the System Tray right click the blue WSRM icon, go to Security > Create Signing Certificates.

## Your Macro Files

You should now have a folder called "Speech Macros" in your Documents folder. Files must have extension *.WSRMac*

Examples should help you get started on how to write macros, it's quite powerful.
It can use mouse, keypresses, delay, running scripts or programs, etc.
A command get have multiple triggers with wildcards in them.
Commands can have parameters in the listening part that can be used in the execution.

Use the global "stop listening" command to put WSR to sleep. Use "start listening" to wake it up. If "stop listening" sets WSR to OFF instead of SLEEP, go to WSR's Configuration menu > Speech Recognition Control Panel > Advanced Speech Options > check Enable Voice Activation.

## Use These Samples

Just copy the file from this repo to your macros folder, then right-click -> sign the macro. Turn off signature verification for lazy mode.

## Contribute

Submit a PR with
 - amends to the files
 - a different sample for the existing categories
 - a new category, like a different game

##  Writing macros

Structure of a macro XML file: [test file](test/test.WSRMac)

## All available tags
Put these inside an opening and closing command tag to be executed one after the other.

### listenFor

### sendKeys

### insertText

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
