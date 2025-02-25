## Remarks  
 Use <xref:System.Windows.Forms.SendKeys> to send keystrokes and keystroke combinations to the active application. This class cannot be instantiated. To send a keystroke to a class and immediately continue with the flow of your program, use <xref:System.Windows.Forms.SendKeys.Send%2A>. To wait for any processes started by the keystroke, use <xref:System.Windows.Forms.SendKeys.SendWait%2A>.  
  
 Each key is represented by one or more characters. To specify a single keyboard character, use the character itself. For example, to represent the letter A, pass in the string "A" to the method. To represent more than one character, append each additional character to the one preceding it. To represent the letters A, B, and C, specify the parameter as "ABC".  
  
 The plus sign (+), caret (^), percent sign (%), tilde (~), and parentheses () have special meanings to <xref:System.Windows.Forms.SendKeys>. To specify one of these characters, enclose it within braces ({}). For example, to specify the plus sign, use "{+}". To specify brace characters, use "{{}" and "{}}". Brackets ([ ]) have no special meaning to <xref:System.Windows.Forms.SendKeys>, but you must enclose them in braces. In other applications, brackets do have a special meaning that might be significant when dynamic data exchange (DDE) occurs.  
  
> [!CAUTION]
>  If your application is intended for international use with a variety of keyboards, the use of <xref:System.Windows.Forms.SendKeys.Send%2A> could yield unpredictable results and should be avoided.  
  
 To specify characters that aren't displayed when you press a key, such as ENTER or TAB, and keys that represent actions rather than characters, use the codes in the following table.  
  
|Key|Code|  
|---------|----------|  
|BACKSPACE|{BACKSPACE}, {BS}, or {BKSP}|  
|BREAK|{BREAK}|  
|CAPS LOCK|{CAPSLOCK}|  
|DEL or DELETE|{DELETE} or {DEL}|  
|DOWN ARROW|{DOWN}|  
|END|{END}|  
|ENTER|{ENTER} or ~|  
|ESC|{ESC}|  
|HELP|{HELP}|  
|HOME|{HOME}|  
|INS or INSERT|{INSERT} or {INS}|  
|LEFT ARROW|{LEFT}|  
|NUM LOCK|{NUMLOCK}|  
|PAGE DOWN|{PGDN}|  
|PAGE UP|{PGUP}|  
|PRINT SCREEN|{PRTSC} (reserved for future use)|  
|RIGHT ARROW|{RIGHT}|  
|SCROLL LOCK|{SCROLLLOCK}|  
|TAB|{TAB}|  
|UP ARROW|{UP}|  
|F1|{F1}|  
|F2|{F2}|  
|F3|{F3}|  
|F4|{F4}|  
|F5|{F5}|  
|F6|{F6}|  
|F7|{F7}|  
|F8|{F8}|  
|F9|{F9}|  
|F10|{F10}|  
|F11|{F11}|  
|F12|{F12}|  
|F13|{F13}|  
|F14|{F14}|  
|F15|{F15}|  
|F16|{F16}|  
|Keypad add|{ADD}|  
|Keypad subtract|{SUBTRACT}|  
|Keypad multiply|{MULTIPLY}|  
|Keypad divide|{DIVIDE}|  
  
 To specify keys combined with any combination of the SHIFT, CTRL, and ALT keys, precede the key code with one or more of the following codes.  
  
|Key|Code|  
|---------|----------|  
|SHIFT|+|  
|CTRL|^|  
|ALT|%|  
  
 To specify that any combination of SHIFT, CTRL, and ALT should be held down while several other keys are pressed, enclose the code for those keys in parentheses. For example, to specify to hold down SHIFT while E and C are pressed, use "+(EC)". To specify to hold down SHIFT while E is pressed, followed by C without SHIFT, use "+EC".  
  
 To specify repeating keys, use the form {key number}. You must put a space between key and number. For example, {LEFT 42} means press the LEFT ARROW key 42 times; {h 10} means press H 10 times.  
  
> [!NOTE]
>  Because there is no managed method to activate another application, you can either use this class within the current application or use native Windows methods, such as `FindWindow` and `SetForegroundWindow`, to force focus on other applications.  
  
> [!NOTE]
>  The <xref:System.Windows.Forms.SendKeys> class has been updated for the .NET Framework 3.0 to enable its use in applications that run on Windows Vista. The enhanced security of Windows Vista (known as User Account Control or UAC) prevents the previous implementation from working as expected.  
>   
>  The <xref:System.Windows.Forms.SendKeys> class is susceptible to timing issues, which some developers have had to work around. The updated implementation is still susceptible to timing issues, but is slightly faster and may require changes to the workarounds. The <xref:System.Windows.Forms.SendKeys> class tries to use the previous implementation first, and if that fails, uses the new implementation. As a result, the <xref:System.Windows.Forms.SendKeys> class may behave differently on different operating systems. Additionally, when the <xref:System.Windows.Forms.SendKeys> class uses the new implementation, the <xref:System.Windows.Forms.SendKeys.SendWait%2A> method will not wait for messages to be processed when they are sent to another process.  
>   
>  If your application relies on consistent behavior regardless of the operating system, you can force the <xref:System.Windows.Forms.SendKeys> class to use the new implementation by adding the following application setting to your app.config file.  
>   
>  `<appSettings>`  
>   
>  `<add key="SendKeys" value="SendInput"/>`  
>   
>  `</appSettings>`  
>   
>  To force the <xref:System.Windows.Forms.SendKeys> class to use the previous implementation, use the value `"JournalHook"` instead.  
  
   
  
## Examples  
 The following code example demonstrates how to use the <xref:System.Windows.Forms.SendKeys.Send%2A> method. To run the example, paste the following code in a form called Form1 containing a button called Button1. Ensure the click events are associated with their event-handling methods in this example. The button control's <xref:System.Windows.Forms.Control.TabIndex%2A> property should be set to 0. When the example is running, double-click the form to trigger the button's click event.  
  
 [!code-cpp[System.Windows.Forms.SendKeys#1](~/samples/snippets/cpp/VS_Snippets_Winforms/System.Windows.Forms.SendKeys/CPP/form1.cpp#1)]
 [!code-csharp[System.Windows.Forms.SendKeys#1](~/samples/snippets/csharp/VS_Snippets_Winforms/System.Windows.Forms.SendKeys/CS/form1.cs#1)]
 [!code-vb[System.Windows.Forms.SendKeys#1](~/samples/snippets/visualbasic/VS_Snippets_Winforms/System.Windows.Forms.SendKeys/VB/form1.vb#1)]  
