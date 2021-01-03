```
<script language="JScript">
<![CDATA[
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
Application.InsertText(hours);
Application.InsertText(minutes);
]]>
</script>
```


```
<script language="JScript">
    <![CDATA[
    // Copy the selected text into the clipboard and wait 1/4 second
    Application.SendKeys("{250 WAIT}^c{250 WAIT}");      

    // Get the data out of the clipboard
    var text = Application.clipboardData.getData("text");
    Application.Speak(text);
    ]]>
</script>
```


```
<script language="JScript">
    <![CDATA[
    var date = new Date();
    var whatToSay = "It's ";
    var hours = date.getHours();
      
    var AMorPM;
    if (date.getHours() >= 12)
    {
        AMorPM = " P. M.";
        if (date.getHours() != 12)
        {
            hours -= 12
        }
    }
    else
    {
        AMorPM = " A. M.";
    }
      
    whatToSay += hours;
    
    if (date.getMinutes() == 0)
    {
        whatToSay += " o'clock";
    }
    else
    {
        if (date.getMinutes() < 10)
        {
            whatToSay += " o ";
        }
        whatToSay += " " + date.getMinutes();
    }
      
    whatToSay += AMorPM;
      
    Application.Speak(whatToSay);
      
    ]]>
</script>
```


```
<script language="VBScript">
    <![CDATA[
    whatToSay = "Today is " & WeekdayName(Weekday(Now)) & " " & MonthName(Month(Now))
    
    dayDate = Day(Now)
    dayNumberText = " " & dayDate
    
    whatToSay = whatToSay & " " & dayNumberText & " "
    whatToSay = whatToSay & Year(Now)
    
    Application.Speak(whatToSay)   
    ]]>
</script>
```
