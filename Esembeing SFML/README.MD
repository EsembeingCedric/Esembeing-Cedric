# Smart File Organizer

A smart file arranger that arranges files inside folders based on their extensions under the same subfolders
## Project Overview
This project helps users maintain a clean directory structure by automatically scanning a target folder and moving cluttered files (Documents, Images, Music, Videos, etc.) into organized subfolders. It features a smart background loop that periodically scans for newly added files.

## Features
* **Interactive Path Prompt**: Ask the user to eneter the target folder path directly upon startup.
* **Automatic Subfolder Creation**: Dynamically creates category folders (like `Images`, `Documents`) only when needed.
* **Smart Background Mode**: Runs an automated loop using the Windows `Sleep` function to continuously organize files without manual intervention.

## Programming Concepts Used
* **Directory Streams (`<dirent.h>`)**: Used to open and iterate through all elements inside a target folder.
* **String Manipulation (`strrchr`, `stricmp`)**: Safely isolates and analyzes file extensions without case-sensitivity bugs.
* **File System Operations (`_mkdir`, `rename`)**: Creates new system directories and moves files cleanly across paths.

## How to Compile and Run

### Compilation
Open your terminal or Code::Blocks and compile using `gcc`:
```bash
gcc main.c -o smart_file_organizer
```

### Running the Program
1. Run the compiled executable.
2. Type or paste your full directory path when prompted.
   * *Example:* `C:\Users\USER\Desktop\ALL my Folders`
3. Press **Enter** to see your files get organized instantly!
