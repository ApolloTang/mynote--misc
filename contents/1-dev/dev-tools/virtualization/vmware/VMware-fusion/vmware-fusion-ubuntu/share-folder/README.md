# Share folder between host and guest

**Reference**: 

AI Qwen 2.5 coder

Also see: 

https://askubuntu.com/a/1051620

[3 Ways to fix VMware shared folders in Ubuntu 22.10 Linux under Fusion and Workstation - YouTube](https://www.youtube.com/watch?v=jHr23i-FUpo) 



---



Certainly! Below are the step-by-step instructions to set up a shared folder between your macOS host and Ubuntu guest using VMware Fusion. The shared folder on your macOS will be located at `/Users/apollotang/Desktop/_shared_vmware`, and in your Ubuntu guest, it will be mounted at `~/_shared_with_host`.

### Step-by-Step Instructions

#### On the macOS Host

1. **Create the Shared Folder:**
   - Open Finder.
   - Navigate to `~/Desktop`.
   - Create a new folder named `_shared_vmware`:
     ```bash
     mkdir ~/Desktop/_shared_vmware
     ```

2. **Configure Shared Folders in VMware Fusion:**
   - Open VMware Fusion and select your Ubuntu VM.
   - Click on "VM" in the menu bar and then select "Settings".
   - Go to the "Options" tab.
   - Click on "Shared Folders".
   - Click the "+" button to add a new shared folder.
   - Set the "Folder Share" to `/Users/apollotang/Desktop/_shared_vmware`.
   - Set the "Mode" to either "Always Enabled" or "Enabled while connected to this virtual machine".
   - Set the "Share Name" to `_shared_vmware` (or any name you prefer).
   - Ensure "Make this share available to the virtual machine" is checked.
   - Click "OK" to save the settings.

#### On the Ubuntu Guest

1. **Install VMware Tools:**
   - Open a terminal in your Ubuntu VM.
   - Install the necessary packages:
     ```bash
     sudo apt update
     sudo apt install open-vm-tools open-vm-tools-desktop
     ```

2. **Reboot the Ubuntu VM:**
   - Reboot your Ubuntu VM to ensure VMware Tools are properly installed:
     ```bash
     sudo reboot
     ```

3. **Create the Mount Point Directory:**
   - After rebooting, open a terminal.
   - Create the directory `~/_shared_with_host`:
     ```bash
     mkdir -p ~/_shared_with_host
     ```

4. **Mount the Shared Folder:**
   - Use `vmhgfs-fuse` to mount the shared folder from your macOS host:
     ```bash
     sudo vmhgfs-fuse .host:/_shared_vmware ~/_shared_with_host -o allow_other
     ```

5. **Verify the Mount:**
   - Check if the shared folder is mounted correctly:
     ```bash
     df -h | grep _shared_with_host
     ```
   - You should see an entry similar to:
     ```
     .host:/_shared_vmware  fuse.vmhgfs-fuse  64G  381M   64G   1% /home/apollotang/_shared_with_host
     ```

#### Automate the Mount on Boot (Optional)

If you want the shared folder to be mounted automatically every time you start your Ubuntu VM, you can add an entry to `/etc/fstab`.

1. **Edit `/etc/fstab`:**
   - Open a terminal.
   - Edit the `/etc/fstab` file with root privileges:
     ```bash
     sudo nano /etc/fstab
     ```

2. **Add the Mount Entry:**
   - Add the following line to the end of the file:
     ```
     .host:/_shared_vmware  ~/_shared_with_host  fuse.vmhgfs-fuse  allow_other  0  0
     ```

3. **Save and Exit:**
   - Save the file and exit the editor (in nano, press `CTRL + X`, then `Y`, and `Enter`).

4. **Reboot to Test:**
   - Reboot your Ubuntu VM to ensure the shared folder mounts automatically:
     ```bash
     sudo reboot
     ```

5. **Verify Automatic Mount:**
   - After rebooting, open a terminal and check if the shared folder is mounted:
     ```bash
     df -h | grep _shared_with_host
     ```

### Summary

1. **Create the Shared Folder on macOS:**
   ```bash
   mkdir ~/Desktop/_shared_vmware
   ```

2. **Configure Shared Folders in VMware Fusion:**
   - Add `/Users/apollotang/Desktop/_shared_vmware` with the name `_shared_vmware`.

3. **Install VMware Tools in Ubuntu:**
   ```bash
   sudo apt update
   sudo apt install open-vm-tools open-vm-tools-desktop
   ```

4. **Reboot Ubuntu:**
   ```bash
   sudo reboot
   ```

5. **Create the Mount Point Directory in Ubuntu:**
   ```bash
   mkdir -p ~/_shared_with_host
   ```

6. **Mount the Shared Folder:**
   ```bash
   sudo vmhgfs-fuse .host:/_shared_vmware ~/_shared_with_host -o allow_other
   ```

7. **Verify Mount:**
   ```bash
   df -h | grep _shared_with_host
   ```

8. **Automate Mount on Boot (Optional):**
   - Edit `/etc/fstab` and add:
     ```
     .host:/_shared_vmware  ~/_shared_with_host  fuse.vmhgfs-fuse  allow_other  0  0
     ```

By following these steps, you should have a shared folder set up between your macOS host and Ubuntu guest using VMware Fusion.