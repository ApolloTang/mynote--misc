# copy and paste between host and guest



To enable copy and paste between host and guest, you need to install  the following in the guest:

For unbunt it is installed with:

```
sudo apt-get update
sudo apt-get install open-vm-tools open-vm-tools-desktop
```

Execute `/usr/bin/vmware-user`

Make sure **VMware Tools daemon** is running

```
$ ps -ef | grep vmtoolsd
root         981       1  0 10:54 ?        00:00:04 /usr/bin/vmtoolsd
userone     2485    2068  0 10:56 ?        00:00:04 /usr/bin/vmtoolsd -n vmusr --blockFd 3 --uinputFd 4
userone     3656    3010  0 11:35 pts/0    00:00:00 grep --color=auto vmtoolsd
```

REF: from comment of this stackoverflow answer: https://stackoverflow.com/a/29798929/3136861



## copy and paste keyboard shortcuts 

In most linux distributions copy and paste keyboard shortcuts is:

```
Ctrl+Shift+C   
Ctrl+Shift+V
```

https://itsfoss.com/copy-paste-linux-terminal/