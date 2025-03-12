
# GUI man page

This is from:  https://apple.stackexchange.com/questions/382301/how-to-open-the-apple-url-protocol-x-man-page-in-iterm-and-not-terminal-defa

A bash function to open man page in a user friend gui:

```bash
function man {
if [ $# -eq 1 ] ; then
  open x-man-page://$1 ;
elif [ $# -eq 2 ] ; then
  open x-man-page://$1/$2 ;
fi
}
```