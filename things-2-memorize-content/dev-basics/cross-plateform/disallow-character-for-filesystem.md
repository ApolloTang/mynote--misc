# Disallow filename

## TL;DR over simplified list :

### Window:

```
< (less than)
> (greater than)
: (colon - sometimes works, but is actually NTFS Alternate Data Streams)
" (double quote)
/ (forward slash)
\ (backslash)
| (vertical bar or pipe)
? (question mark)
* (asterisk)
```

### Mac

```
/ (forward slash)
: (colon)
```

### Linux

```
/ (forward slash)
```

## 

## Better Reference: 

From [doctaphred's gist](https://gist.github.com/doctaphred/d01d05291546186941e1b7ddc02034d3):

```txt
Information from https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file :

    Use any character in the current code page for a name, including Unicode
    characters and characters in the extended character set (128–255), except
    for the following:

    - The following reserved characters:

        < (less than)
        > (greater than)
        : (colon)
        " (double quote)
        / (forward slash)
        \ (backslash)
        | (vertical bar or pipe)
        ? (question mark)
        * (asterisk)

    - Integer value zero, sometimes referred to as the ASCII NUL character.
    - Characters whose integer representations are in the range from 1 through
      31, except for alternate data streams where these characters are
      allowed. For more information about file streams, see File Streams.
    - Any other character that the target file system does not allow.
    
    - Do not use the following reserved names for the name of a file:
        
        CON, PRN, AUX, NUL, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8,
        COM9, LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, and LPT9.
        
        Also avoid these names followed immediately by an extension; for
        example, NUL.txt is not recommended.

    - Do not end a file or directory name with a space or a period. Although
      the underlying file system may support such names, the Windows shell and
      user interface does not. However, it is acceptable to specify a period
      as the first character of a name. For example, ".temp".

---

Handy list to copy/paste:

<>:"/\|?*

---

Note: Other OSs and file systems may vary; but in general, the only forbidden characters
in filenames on Unix-like systems appear to be the forward slash (/) and the null byte.
```

 [under the same gist](https://gist.github.com/doctaphred/d01d05291546186941e1b7ddc02034d3?permalink_comment_id=3584903#gistcomment-3584903) by [pitizzzle](https://github.com/pitizzzle): 

```js
function filenameValidator(fname, { replacement = "�" } = {}) {
    // https://stackoverflow.com/a/31976060
    // https://gist.github.com/doctaphred/d01d05291546186941e1b7ddc02034d3

    const fname_original = fname;

    // resolve multi-line, whitespace trimming
    fname = fname.split(/[\r\n]/).map(s => s.trim()).filter(s => s.length).join("  ");
    
    // forbidden characters
    // (after multi-line, because new-line-chars are themselves forbidden characters)
    fname = fname.replaceAll(/[<>:"\/\\\|?*\x00-\x1F]/g, replacement);

    // advanced trim
    fname = fname.replace(/\.$/, "");

    // empty filename
    if (!fname.length) {
        fname = '_';
    }
    
    // forbidden filenames
    if (fname.match(/^(CON|PRN|AUX|NUL|COM1|COM2|COM3|COM4|COM5|COM6|COM7|COM8|COM9|LPT1|LPT2|LPT3|LPT4|LPT5|LPT6|LPT7|LPT8|LPT9)(\..+)?$/)) {
        fname = `_${fname}`;
    }
    
    return {
        fname,
        isOriginal: (fname === fname_original),
    };
}
```

## Other References:

https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names

https://stackoverflow.com/questions/4814040/allowed-characters-in-filename

https://blackbeltreview.wordpress.com/2015/01/27/illegal-filename-characters-on-windows-vs-mac-os/

https://kb.acronis.com/content/39790

https://en.wikipedia.org/wiki/Filename

https://stackoverflow.com/questions/4814040/allowed-characters-in-filename

### OSX only

https://superuser.com/questions/326103/what-are-invalid-characters-for-a-file-name-under-os-x

https://superuser.com/questions/204287/what-characters-are-forbidden-in-os-x-filenames



### linux

https://stackoverflow.com/questions/1311037/are-there-any-invalid-linux-filenames
