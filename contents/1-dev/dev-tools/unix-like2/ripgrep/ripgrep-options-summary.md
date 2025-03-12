# Ripgrep Options Summary

`ripgrep` (commonly invoked as `rg`) is a powerful and fast search tool that recursively searches directories for patterns in files. It has a wide range of options to customize its behavior. Below, I have grouped the available options into categories for better understanding, along with descriptions for each.

---

## 1. Basic Search Options

These options control the core functionality of `ripgrep`.

- `-e, --regexp <PATTERN>`: Specify the pattern to search for. Useful when the pattern starts with a `-`.
- `-f, --file <FILE>`: Read patterns from a file, one per line.
- `-i, --ignore-case`: Perform case-insensitive matching.
- `-S, --smart-case`: Automatically switch to case-insensitive search if the pattern contains no uppercase letters.
- `-w, --word-regexp`: Match only whole words.
- `-x, --line-regexp`: Match only entire lines.
- `-v, --invert-match`: Invert the match, showing only lines that do not match the pattern.

---

## 2. File and Directory Filtering

These options control which files and directories are included or excluded in the search.

- `--glob <GLOB>`: Include or exclude files matching the specified glob pattern.
- `--iglob <GLOB>`: Like `--glob`, but case-insensitive.
- `--files`: List all files that would be searched without actually performing the search.
- `--type <TYPE>`: Only search files of a specific type (e.g., `rust`, `python`, `json`).
- `--type-add <TYPE:DEF>`: Add a custom file type definition.
- `--type-list`: List all supported file types.
- `--no-ignore`: Do not respect `.gitignore`, `.ignore`, or other ignore files.
- `--hidden`: Search hidden files and directories.
- `--no-hidden`: Exclude hidden files and directories (default behavior).
- `--follow`: Follow symbolic links.
- `--one-file-system`: Do not cross filesystem boundaries.

---

## 3. Output Formatting

These options control how the search results are displayed.

- `-n, --line-number`: Show line numbers in the output.
- `-H, --with-filename`: Always include the filename in the output.
- `--no-filename`: Never include the filename in the output.
- `-o, --only-matching`: Print only the matching part of the line.
- `--pretty`: Use a more human-readable output format, including colors and context.
- `--text`: Treat binary files as text.
- `--heading`: Group matches by filename.
- `--no-heading`: Do not group matches by filename.
- `--color <WHEN>`: Control when to use colors (`auto`, `always`, `never`).
- `--colors <COLOR_SPEC>`: Customize color settings for different parts of the output.

---

## 4. Contextual Output

These options control how much surrounding context is shown for each match.

- `-A, --after-context <NUM>`: Show `NUM` lines of trailing context after each match.
- `-B, --before-context <NUM>`: Show `NUM` lines of leading context before each match.
- `-C, --context <NUM>`: Show `NUM` lines of context both before and after each match.
- `--passthru`: Print both matching and non-matching lines, with matches highlighted.

---

## 5. Performance and Behavior

These options influence how `ripgrep` operates internally.

- `-j, --threads <NUM>`: Set the number of threads to use for searching.
- `--max-depth <NUM>`: Limit the depth of directory traversal.
- `--max-filesize <NUM+SUFFIX?>`: Ignore files larger than the specified size.
- `--mmap`: Use memory-mapped I/O for faster searches on large files.
- `--no-mmap`: Disable memory-mapped I/O.
- `--pcre2`: Use PCRE2 regex engine instead of the default Rust regex engine.
- `--dfa-size-limit <NUM+SUFFIX?>`: Set the size limit for the deterministic finite automaton (DFA) used in regex matching.

---

## 6. Advanced Matching

These options provide fine-grained control over the matching process.

- `-P, --pcre2`: Use Perl-compatible regular expressions (PCRE2).
- `-U, --multiline`: Enable multiline matching.
- `--multiline-dotall`: Allow the `.` regex character to match newlines in multiline mode.
- `--regex-size-limit <NUM+SUFFIX?>`: Set the size limit for compiled regexes.
- `--engine <ENGINE>`: Choose the regex engine (`default`, `pcre2`).

---

## 7. Miscellaneous

These options cover miscellaneous functionalities.

- `-h, --help`: Display help information.
- `-V, --version`: Show the version of `ripgrep`.
- `--debug`: Enable debug output.
- `--trace`: Enable trace output (more verbose than debug).
- `--stats`: Display statistics about the search.
- `--sort-files`: Sort files lexicographically before searching.
- `--pre <COMMAND>`: Run a command on each file before searching.
- `--pre-glob <GLOB>`: Restrict the `--pre` option to files matching the specified glob.

---

## 8. Deprecated or Rarely Used Options

These options are either deprecated or rarely needed in typical usage.

- `--no-config`: Disable loading of configuration files.
- `--no-messages`: Suppress diagnostic messages.
- `--null`: Use NUL (`\0`) as a separator in output.
- `--path-separator <SEPARATOR>`: Use a custom path separator in output.

---

## Conclusion

This categorized list should help you understand and utilize the various options provided by `ripgrep`. If you need further clarification on any specific option or category, feel free to ask!
