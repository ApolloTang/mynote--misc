# Launch services



## What is macOS's Launch Services?

- **Launch Services** manages default app bindings on macOS.
- It uses a **database/cache** to store app-document associations, which is updated automatically or via tools like `lsregister`.
- The **com.apple.LaunchServices.plist** file is a preferences file related to Launch Services but should not be edited directly.
- Default app changes are best made using the **`defaults write`** command or Launch Services API, followed by refreshing the Launch Services database.
- Tools like **`lsregister`** help rebuild or clean the Launch Services database to resolve issues.

**Refereces**

-  [Launch Services Concepts](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/LaunchServicesConcepts/LSCConcepts/LSCConcepts.html) 
-  [Deep dive into a macOS default web browser bug](https://lapcatsoftware.com/articles/2024/12/2.html) 
-  [LaunchServices.plist missing : r/MacOS](https://www.reddit.com/r/MacOS/comments/wui0lj/launchservicesplist_missing/) 
-  [restart - How to avoid restarting macOS after running `defaults write LaunchServices LSHandlers`? - Ask Different](https://apple.stackexchange.com/questions/471276/how-to-avoid-restarting-macos-after-running-defaults-write-launchservices-lshan) 
-  [What creates com.apple.LaunchServices.pli… - Apple Community](https://discussions.apple.com/thread/258306?sortBy=rank) 