##  The Long Format:

If the -l option is given, the following information is displayed for each file: 

file mode, 
number of links, 
owner name, 
group name, 
number of bytes in the file, 
time of last modified, 
pathname.  

If the file or directory has extended attributes, the permissions field is followed by a '@' character. 
if the file or directory has extended security information (such as an access control list), the permissions is followed by a '+' character.  

 ```
 $ ls -l
total 232
drwxr-xr-x  22 apollotang  staff     704 Jan 30 22:06 clean-up
drwxr-xr-x@  8 apollotang  staff     256 Jan 30 22:22 image-name.dmg.sparsebundle
-rw-r--r--@  1 apollotang  staff      86 Jan 31 15:27 ls.md
drwxr-xr-x@  7 apollotang  staff     224 Jan 31 15:15 sparce-bundle-1GB.dmg.sparsebundle	
^^^^^^^^^^^ ^^ ^^^^^^^^^^  ^^^^^  ^^^^^^ ^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^
 	 Mode      |    Owner    Group    Size     Date         Path
  	         |                               Last 
 	           Num of link                     Modified 
 ```
