# LaunchDaemons and LaunchAgents

**LaunchDaemons** typically run as root, meaning they work regardless
 of whether a user is logged in or not. They cannot display information
 using the graphical user interface and they affect the entire
 system.

LaunchDaemons lives in the following locations:

  - `/System/Library/LaunchDaemons/` for native macOS processes
  - `/Library/LaunchDaemons/` for installed third-party apps

**LaunchAgents** start when a user logs in. Unlike LaunchDaemons, they
 can access the user interface and display information.

The lists of agents live in the following locations:

  - `/Library/LaunchAgents` for all user accounts
  - `~/Library/LaunchAgents` for a specific user account
  - `/System/Library/LaunchAgents` for macOS only and are protected by System Integrity Protection.


---

Reference:
  - [How to Catch and Remove Hidden LaunchDaemons and LaunchAgents on Mac](https://www.makeuseof.com/tag/hidden-launchdaemons-launchagents-mac/)
  - [Where To Find Apps That Launch Automatically On a Mac](https://macmost.com/where-to-find-apps-that-launch-automatically-on-a-mac.html)
