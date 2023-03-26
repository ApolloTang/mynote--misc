# WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!

```
[user@hostname ~]$ ssh root@user
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the RSA key sent by the remote host is
xx:xx:xx.
Please contact your system administrator.
Add correct host key in /home/hostname /.ssh/known_hosts to get rid of this message.
Offending RSA key in /var/lib/sss/pubconf/known_hosts:4
RSA host key for user has changed and you have requested strict checking.
Host key verification failed.
```

If you see the above message, you’ll need to remove the old key by running this command:

```
$ ssh-keygen -R github.com
```

Ref: 
- [We updated our RSA SSH host key](https://github.blog/2023-03-23-we-updated-our-rsa-ssh-host-key/)
- [https://kinsta.com/knowledgebase/warning-remote-host-identification-has-changed/](https://kinsta.com/knowledgebase/warning-remote-host-identification-has-changed/)