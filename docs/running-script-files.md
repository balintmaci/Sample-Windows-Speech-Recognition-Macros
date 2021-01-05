Use ```csript``` to run *js* or *vbs* files with a console output.
Using ```wscript``` instead will use GUI outputs like popups for echo.
```
cscript test/test.js hello world
cscript test/test.vbs hello world 
```

Python scripts need python installed, plus the following packages, which can be installed with pip: 
```
pip install pyautogui pywin32 Pillow
```
```
python test/test.py
```