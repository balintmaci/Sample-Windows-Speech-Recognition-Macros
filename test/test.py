import pyautogui as ag
import win32com.client as w32
import time

screenWidth, screenHeight = ag.size() # Get the size of the primary monitor.
currentMouseX, currentMouseY = ag.position() # Get the XY position of the mouse.

ag.moveTo(screenWidth/2, screenHeight/2) # Move the mouse to XY coordinates.
ag.click()          # Click the mouse.
time.sleep(1)

ag.click(screenWidth/2, screenHeight/2 + 100)  # Move the mouse to XY coordinates and click it.
time.sleep(1)

ag.move(0, 100)      # Move mouse 10 pixels down from its current position.
time.sleep(1)

ag.doubleClick()    # Double click the mouse.
time.sleep(1)

ag.moveTo(screenWidth*3/4, screenHeight/2, duration=2, tween=ag.easeInOutQuad)  # Use tweening/easing function to move mouse over 2 seconds.
ag.click()
time.sleep(1)

ag.write('Hello world!', interval=0.1)  # type with quarter-second pause in between each key
time.sleep(1)

ag.press('esc')     # Press the Esc key. All key names are in ag.KEY_NAMES
time.sleep(1)

ag.keyDown('shift') # Press the Shift key down and hold it.
time.sleep(1)

ag.press(['left', 'left', 'left', 'left']) # Press the left arrow key 4 times.
time.sleep(1)

ag.keyUp('shift')   # Let go of the Shift key.
time.sleep(1)

ag.hotkey('ctrl', 'c') # Press the Ctrl-C hotkey combination.
time.sleep(1)

ag.alert('This is the message to display.') # Make an alert box appear and pause the program until OK is clicked.
time.sleep(1)


shell = w32.Dispatch("WScript.Shell")
shell.Run("notepad")
time.sleep(0.1)
shell.AppActivate("Notepad")
shell.SendKeys("asd^s", 0)
