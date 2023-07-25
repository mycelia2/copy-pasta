# Copy-Pasta VSCode Extension

This extension for Visual Studio Code allows users to quickly copy the content of all open files in the editor to the clipboard.

## Features

- The main feature of Copy-Pasta is the `Copy All Open Files` command, which copies the content of all open files in the editor to the clipboard. This is useful for quickly sharing code snippets or saving your work.
- The command intentionally does not copy the content of unsaved/untitled files and files starting with a `.` (such as .git files) to prevent unnecessary clutter in the clipboard.

## Usage

1. Install the Copy-Pasta extension from the Visual Studio Code marketplace.
2. Open multiple files in the editor.
3. Run the `Copy All Open Files` command from the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS, then search for `Copy All Open Files`).

The content of all open files, excluding unsaved/untitled files and files starting with `.`, will be copied to your clipboard.

## Release Notes

### 0.0.1

- Initial release of Copy-Pasta. Features the `Copy All Open Files` command.

For more information or to report issues, visit the [Copy-Pasta GitHub repository](https://github.com/mycelia2/copy-pasta).

**Enjoy!**
