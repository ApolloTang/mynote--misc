Consider the following script:

// to-stdout-stderr.sh

```
#!/usr/bin/env bash

function toStdErr () {
  cat non-existing.txt
}

function toStdOut () {
  echo this_is_StdOut
}

toStdErr
toStdOut
```

runing it in a terminal: 

```
$./to-stdout-stderr.sh
cat: non-existing.txt: No such file or directory
this_is_StdOut
```

The line:

```
cat: non-existing.txt: No such file or directory
```

is the output of standard error (`stderr=2`) from executing the script `./to-stdout-stderr.sh`.

The line: 

```
this_is_StdOut
```

is the output of standard out (`stdout=1`) from executing the script `./to-stdout-stderr.sh`.

You can redirect the standard out to a file:

```
$./to-stdout-stderr.sh >output.txt
cat: non-existing.txt: No such file or directory

$ less output.txt
this_is_StdOut
```

Similary you can redirect the standard error to a file:

```
$./to-stdout-stderr.sh 2>error.txt
this_is_StdOut

$ less error.txt
cat: non-existing.txt: No such file or directory
```

Or you can redirect both standard out and error to a file: 

```
$./to-stdout-stderr.sh &>output-and-error.txt

$ less output-and-error.txt
cat: non-existing.txt: No such file or directory
this_is_StdOut
```

Bellow as the similar result: 

```
$./to-stdout-stderr.sh 2>output-and-error2.txt 1>>output-and-error2.txt 

$ less output-and-error2.txt
cat: non-existing.txt: No such file or directory
this_is_StdOut
```

What it is doing is direct error to `output-and-error2.txt` then append standard out the same file. 

In addition, the following syntax, can also achieve similar result:

```
$ ./to-stdout-stderr.sh > output-and-error3.txt 2>&1

$ less output-and-error3.txt
cat: non-existing.txt: No such file or directory
this_is_StdOut
```

The command above means, saved the output to standard out `output-and-error3.txt` (which is a file );  in addition, also direct the standard error to standard out (which already been specify to file `output-and-error3`) .



---

💡 Normally what comes after the `>` is filename: 

```
command >filename
```

but to specified the Unix / Linux standard I/O streams with numbers (0,1,2), we prepend it with the ampersand `&`:

``` 	
command >&1
```

without the `&` the redierection will be a file with name `1` :

``` echo hello >1
echo hello >1
```

see: ref [1]



---

⚠️ Redirection takes from left to right. Hence, order matters. For example:

```
command-name 2>&1 > file.txt ## wrong ##
command-name > file.txt 2>&1 ## correct ##
```

see ref [2]



---

**Ref:** 

[1] [https://unix.stackexchange.com/a/42776/62821](https://unix.stackexchange.com/a/42776/62821)

[2] [https://www.cyberciti.biz/faq/redirecting-stderr-to-stdout/](https://www.cyberciti.biz/faq/redirecting-stderr-to-stdout/)

