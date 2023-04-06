# Screenshot VoiceOver dialogue



## Problem:

You can not take screenshot for VoiceOver dialogue because the screenshot shortcuts, `Command + Shift + 3`, is intercepted by VoiceOver. 

## Solution:

Use the terminal command `screencapture`. This command let you set a time delay for screen capture with `-T` flag.  That way before `screencapture` is counting down to take the shot, you turn on VoiceOver to set up the dialogue you want to  screen shot. 

Step:

1. Issue the command in terminal (20 second delay): 

   ```
   screencapture -T20 ~/desktop/filename.png
   ```

2. Activate VoiceOver `Command + F5` and set up your dialogue.

3. After the countdown a screenshot of your entire desktop will be capture and save it to the file spcified.

Ref: [kilianvalkhof.com/2022/accessibility/screenshotting-voiceover-on-macos/](https://kilianvalkhof.com/2022/accessibility/screenshotting-voiceover-on-macos/)









