# Mac and window safe file and folder naming rules

The following are modified after [www.portfoliofaq.com/pfaq/FAQ00352.htm](https://www.portfoliofaq.com/pfaq/FAQ00352.htm)

- Illegal file/folder name characters, (e.g. : or ?). (All OSs).
- Deprecated filename characters (; and ,). (All OSs).
- \>64 filename characters including extension. (Windows: ISO9660+Joliet CD or Hybrid CD partition).
- No extension - extensions are mandatory for Windows (Windows, Mac OS X).
- Filename may not begin with a period. (Windows not allowed, Mac treats as a hidden file)
- Filename may not end in a period. (Windows not allowed - OS 'throws away' the trailing period when naming/reading so incorrect matching vs. Mac name)
- Names conflicting with some of Win OS' old DOS functions (Not allowed in either upper or lowercase and with or without a file extension or as a file extension: COM1 to COM9 inclusive, LPT1 to LPT9 inclusive, CON, PRN, AUX, CLOCK$ and NUL)
- Case sensitivity. Windows OSs (and IIS web servers) aren't case-sensitive. Most other OSs (and web servers) are.
- Filenames ought not to begin with a hyphen (Unix systems my interpret the filename as a flag to a command line call).