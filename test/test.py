import pyautogui as ag
import win32com.client as w32
import time

def ag_mouse():
    screenWidth, screenHeight = ag.size() # Get the size of the primary monitor.
    currentMouseX, currentMouseY = ag.position() # Get the XY position of the mouse.

    ag.moveTo(screenWidth/2, screenHeight/2) # Move the mouse to XY coordinates.
    ag.click()          # Click the mouse.
    time.sleep(0.5)

    ag.click(screenWidth/2, screenHeight/2 + 100)  # Move the mouse to XY coordinates and click it.
    time.sleep(0.5)

    ag.move(0, 100)      # Move mouse 10 pixels down from its current position.
    time.sleep(0.5)

    ag.doubleClick()    # Double click the mouse.
    time.sleep(0.5)

    ag.moveTo(screenWidth*3/4, screenHeight/2, duration=1, tween=ag.easeInOutQuad)  # Use tweening/easing function to move mouse over 2 seconds.
    ag.click()
    time.sleep(0.5)

def ag_keys():
    ag.write('Hello world!', interval=0.1)  # type with quarter-second pause in between each key
    time.sleep(0.5)

    ag.press('esc')     # Press the Esc key. All key names are in ag.KEY_NAMES
    time.sleep(0.5)

    ag.keyDown('shift') # Press the Shift key down and hold it.
    time.sleep(0.5)

    ag.press(['left', 'left', 'left', 'left']) # Press the left arrow key 4 times.
    time.sleep(0.5)

    ag.keyUp('shift')   # Let go of the Shift key.
    time.sleep(0.5)

    ag.hotkey('ctrl', 'c') # Press the Ctrl-C hotkey combination.
    time.sleep(0.5)

    ag.alert('This is the message to display.') # Make an alert box appear and pause the program until OK is clicked.
    time.sleep(0.5)

def w32_notepad():
    shell = w32.Dispatch("WScript.Shell")
    shell.Run("notepad")
    time.sleep(0.1)
    shell.AppActivate("Notepad")
    shell.SendKeys("asd^s", 0)

def w32_speak():
    speaker = w32.Dispatch("SAPI.SpVoice")
    speaker.Speak("speak test")

if __name__ == "__main__":
    ag_mouse()
    ag_keys()
    w32_notepad()
    w32_speak()