




The watchman on my mac is auto started by this file:
```
~/Library/LaunchAgents/com.github.facebook.watchman.plist
```
This file can be view with xcode. There is a list of directory in:
```
Root > EnvironmentVariables > PATH
```
I think this PATH variable specified all the directories when my mac is bootup;
we can tell watch to stop watching them with:

```
watchman watch-del-all
```

[Ref](https://github.com/facebook/watchman/issues/593#issuecomment-377124013)
> Watchman remembers the directories that you asked it to watch.
> watchman `watch-list` will show you what it is watching. watchman
> `watch-del-all` will cancel all of those watches until you next
> use a tool that starts a watch up again.
