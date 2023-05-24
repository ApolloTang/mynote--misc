# VScode: setting and configuration



## Access settings in VSCode:

**JSON :**

1. [Cmd-Shift-p]
2. Then type: "Preferences: Open User Settings (JSON)"


**GUI:**

1. Click on the `gear icon` on the bottom-left corner of the window
2. select `Settings`
3. search the setting, for example type `window.openFilesInNewWindow`





## Access setting in the terminal:

**To locate my setting file:**

```
readlink ~/Library/Application\ Support/Code/User/settings.json
```

**Repo URL:**

[https://github.com/ApolloTang/vscode-setting](https://github.com/ApolloTang/vscode-setting)

**Cd to repo:**

```
cd $(dirname `readlink ~/Library/Application\ Support/Code/User/settings.json`)
```

**Open repo in finder:**

```
open $(dirname `readlink ~/Library/Application\ Support/Code/User/settings.json`)
```

**Edit setting:**

```
mvim   ~/Library/Application\ Support/Code/User/settings.json
```



## Location:

Depending on your platform, the user settings file is located here:

```
Windows %APPDATA%\Code\User\settings.json
macOS   $HOME/Library/Application\ Support/Code/User/settings.json
Linux   $HOME/.config/Code/User/settings.json
```

Ref: https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations

## Extensions directory:

```
Windows %USERPROFILE%\.vscode\extensions
macOS   ~/.vscode/extensions
Linux   ~/.vscode/extensions
```

Not all extensions use `~/.vscode/extensions`; `some extensions` have their dedicated location. One example of this is the [shd101wyy/markdown-preview-enhanced](https://github.com/shd101wyy/markdown-preview-enhanced) extension, whose configuration is located in `~/.mume/`. (see [this](https://shd101wyy.github.io/markdown-preview-enhanced/#/customize-css)).



---


