createDb() {
  const questions101: Question[] = [
    {
    id: 1,
     question: "Which type of file system is created by mkfs when it is executed with the block device name only and without any additional parameters?",
    answers: [
      "XFS",
      "VFAT",
      "ext2",
      "ext3",
      "ext4"
    ],
    type: "single",
    solution:["ext2"],
  },
  {
    id: 2,
     question: "Which umask value ensures that new directories can be read, written and listed by their owning user, read and listed by their owning group and are not accessible at all for everyone else?",
    answers: [
      "0750",
      "0027",
      "0036",
      "7640",
      "0029"
    ],
    type: "single",
    solution:["0027"],
  },
  {
    id: 3,
     question: "Which of the following commands changes the number of days before the ext3 filesystem on /dev/sda1 has to run through a full filesystem check while booting?",
    answers: [
      "tune2fs -d 200 /dev/sda1",
      "tune2fs -i 200 /dev/sda1",
      "tune2fs -c 200 /dev/sda1",
      "tune2fs -n 200 /dev/sda1",
      "tune2fs --days 200 /dev/sda1"
    ],
    type: "single",
    solution:["tune2fs -i 200 /dev/sda1"],
  },
  {
    id: 4,
     question: "Which is the default percentage of reserved space for the root user on new ext4 filesystems?",
    answers: [
      "10%",
      "3%",
      "15%",
      "0%",
      "5%"
    ],
    type: "single",
    solution:["5%"],
  },
  {
    id: 5,
     question: "Which of the following is true when a file system, which is neither listed in /etc/fstab nor known to system, is mounted manually?",
    answers: [
      "systemd ignores any manual mounts which are not done using the systemctl mount command",
      "The command systemctl mountsync can be used to create a mount unit based on the existing mount",
      "systemd automatically generates a mount unit and monitors the mount point without changing it",
      "Unless a systemd mount unit is created, systemd unmounts the file system after a short period of time",
      "systemctl unmount must be used to remove the mount because system opens a file descriptor on the mount point"
    ],
    type: "single",
    solution:["systemd automatically generates a mount unit and monitors the mount point without changing it"],
  },
  {
    id: 6,
     question: "Which program updates the database that is used by the locate command? (Specify ONLY the command without any path or parameters).",
    answers: ["updatedb"],
    type: "fillIn",
    solution:["updatedb"],
  },
  {
    id: 7,
     question: "What does the command mount --bind do?",
    answers: [
      "It makes the contents of one directory available in another directory",
      "It mounts all available filesystems to the current directory",
      "It mounts all user mountable filesystems to the user’s home directory",
      "It mounts all file systems listed in /etc/fstab which have the option userbindset",
      "It permanently mounts a regular file to a directory"
    ],
    type: "single",
    solution:["It makes the contents of one directory available in another directory"],
  },
  {
    id: 8,
     question: "Consider the following output from the command ls -i: 525385 a.txt How would a new file named c.txt be created with the same inode number as a.txt (Inode 525385)?",
    answers: [
      "ln -h a.txt c.txt",
      "ln c.txt a.txt",
      "ln a.txt c.txt",
      "ln -f c.txt a.txt",
      "ln -i 525385 c.txt"
    ],
    type: "single",
    solution:["ln a.txt c.txt"]
  },
  {
    id: 9,
     question: "Consider the following directory: drwxrwxr-x 2 root sales 4096 Jan 1 15:21 sales Which command ensures new files created within the directory sales are owned by the group sales? (Choose two.)",
    answers: [
      "chmod g+s sales",
      "setpol -R newgroup=sales sales",
      "chgrp -p sales sales",
      "chown --persistent *.sales sales",
      "chmod 2775 sales"
    ],
    type: "multi",
    solution:["chmod g+s sales", "chmod 2775 sales"]
  },
  {
    id: 10,
     question: "In order to display all currently mounted filesystems, which of the following commands could be used? (Choose two.)",
    answers: [
      "cat /proc/self/mounts",
      "free",
      "lsmounts",
      "mount",
      "cat /proc/filesystems"
    ],
    type: "multi",
    solution:["cat /proc/self/mounts", "mount"]
  },
  {
    id: 11,
     question: "Which command displays the current disk space usage for all mounted file systems? (Specify ONLY the command without any path or parameters.)",
    answers: ["updatedb"],
    type: "fillIn",
    solution:["updatedb"],
  },
  {
    id: 12,
     question: "Which chown command changes the ownership to dave and the group to staff on a file named data.txt?",
    answers: [
      "chown dave/staff data.txt",
      "chown -u dave -g staff data.txt",
      "chown --user dave --group staff data.txt",
      "chown dave+staff data.txt",
      "chown dave:staff data.txt"
    ],
    type: "single",
    solution:[ "chown dave:staff data.txt"]
  },
  {
    id: 13,
     question: "When considering the use of hard links, what are valid reasons not to use hard links?",
    answers: [
      "Hard links are not available on all Linux systems because traditional filesystems, such as ext4, do not support them",
      "Each hard link has individual ownership, permissions and ACLs which can lead to unintended disclosure of file content",
      "Hard links are specific to one filesystem and cannot point to files on another filesystem",
      "If users other than root should be able to create hard links, suln has to be installed and configured",
      "When a hard linked file is changed, a copy of the file is created and consumes additional space"
    ],
    type: "single",
    solution:["Hard links are specific to one filesystem and cannot point to files on another filesystem"]
  },
  {
    id: 14,
     question: "In compliance with the FHS, in which of the directories are man pages found?",
    answers: [
      "/opt/man/",
      "/usr/doc/",
      "/usr/share/man/",
      "/var/pkg/man",
      "/var/man/"
    ],
    type: "single",
    solution:["/usr/share/man/"]
  },
  {
    id: 15,
     question: "Which file in the /proc filesystem lists parameters passed from the bootloader to the kernel? (Specify the file name only without any path.)",
    answers: ["cmdline"],
    type: "fillIn",
    solution:["cmdline"],
  },
  {
    id: 16,
     question: "What is the process ID number of the init process on a System V init based system?",
    answers: [
      "-1",
      "0",
      "1",
      "It is different with each reboot",
      "It is set to the current run level"
    ],
    type: "single",
    solution:["1"]
  },
  {
    id: 17,
     question: "Which daemon handles power management events on a Linux system?",
    answers: [
      "acpid",
      "batteryd",
      "pwrmgntd",
      "psd",
      "inetd"
    ],
    type: "single",
    solution:["acpid"]
  },
  {
    id: 18,
     question: "Which of the following statements are true about the boot sequence of a PC using a BIOS? (Choose two.)",
    answers: [
      "Some parts of the boot process can be configured from the BIOS",
      "Linux does not require the assistance of the BIOS to boot a computer",
      "The BIOS boot process starts only if secondary storage, such as the hard disk, is functional",
      "The BIOS initiates the boot process after turning the computer on",
      "The BIOS is started by loading hardware drivers from secondary storage, such as the hard disk"
    ],
    type: "multi",
    solution:[ "Some parts of the boot process can be configured from the BIOS", "The BIOS initiates the boot process after turning the computer on"]
  },
  {
    id: 19,
     question: "What is true regarding UEFI firmware? (Choose two.)",
    answers: [
      "It can read and interpret partition tables",
      "It can use and read certain file systems",
      "It stores its entire configuration on the /boot/ partition",
      "It is stored in a special area within the GPT metadata",
      "It is loaded from a fixed boot disk position"
    ],
    type: "multi",
    solution:["It can read and interpret partition tables","It can use and read certain file systems"]
  },
  {
    id: 20,
     question: "A faulty kernel module is causing issues with a network interface card. Which of the following actions ensures that this module is not loaded automatically when the system boots?",
    answers: [
      "Using lsmod --remove --autocleanwithout specifying the name of a specific module",
      "Using modinfo -kfollowed by the name of the offending module",
      "Using modprobe -rfollowed by the name of the offending module",
      "Adding a blacklist line including the name of the offending module to the file /etc/modprobe.d/blacklist.conf",
      "Deleting the kernel module’s directory from the file system and recompiling the kernel, including its modules"
    ],
    type: "single",
    solution:["Adding a blacklist line including the name of the offending module to the file /etc/modprobe.d/blacklist.conf"]
  },
  {
    id: 21,
     question: "When is the content of the kernel ring buffer reset? (Choose two.)",
    answers: [
      "When the ring buffer is explicitly reset using the command dmesg --clear",
      "When the ring buffer is read using dmesg without any additional parameters",
      "When a configurable amount of time, 15 minutes by default, has passed",
      "When the kernel loads a previously unloaded kernel module",
      "When the system is shut down or rebooted"
    ],
    type: "multi",
    solution:["When the ring buffer is explicitly reset using the command dmesg --clear","When the system is shut down or rebooted"]

  },
  {
    id: 22,
     question: "What is the first program the Linux kernel starts at boot time when using System V init?",
    answers: [
      "/lib/init.so",
      "/proc/sys/kernel/init",
      "/etc/rc.d/rcinit",
      "/sbin/init",
      "/boot/init"
    ],
    type: "single",
    solution:["/sbin/init"]

  },
  {
    id: 23,
     question: "A Debian package creates several files during its installation. Which of the following commands searches for packages owning the file /etc/debian_version?",
    answers: [
      "apt-get search /etc/debian_version",
      "apt -r /etc/debian_version",
      "find /etc/debian_version -dpkg",
      "dpkg -S  /etc/debian_version",
      "apt-file /etc/debian_version"
    ],
    type: "single",
    solution:["dpkg -S  /etc/debian_version"]
  },
  {
    id: 24,
     question: "What is contained on the EFI System Partition?",
    answers: [
      "The Linux root file system",
      "The first stage boot loader",
      "The default swap space file",
      "The Linux default shell binaries",
      "The user home directories"
    ],
    type: "single",
    solution:["The first stage boot loader",]
  },
  {
    id: 25,
     question: "Which of the following directories on a 64 bit Linux system typically contain shared libraries? (Choose two.)",
    answers: [
      "~/.lib64/",
      "/usr/lib64/",
      "/var/lib64/",
      "/lib64/",
      "/opt/lib64/"
    ],
    type: "multi",
    solution:["/usr/lib64/",  "/lib64/",]
  },
  {
    id: 26,
     question: "Which of the following files exist in a standard GRUB 2 installation? (Choose two.)",
    answers: [
      "/boot/grub/stages/stage0",
      "/boot/grub/i386-pc/lvm.mod",
      "/boot/grub/fstab",
      "/boot/grub/grub.cfg",
      "/boot/grub/linux/vmlinuz"
    ],
    type: "multi",
    solution:["/boot/grub/i386-pc/lvm.mod", "/boot/grub/grub.cfg",]
  },
  {
    id: 27,
     question: "Which of the following commands installs all packages with a name ending with the string foo?",
    answers: [
      "zypper get \"*foo\"",
      "zypper update \"foo?\"",
      "zypper force \"foo*\"",
      "zypper install \"*foo\"",
      "zypper add \".*foo\""
    ],
    type: "single",
    solution:["zypper install \"*foo\"",]
  },
  {
    id: 28,
     question: "Which of the following properties of a Linux system should be changed when a virtual machine is cloned? (Choose two.)",
    answers: [
      "The partitioning scheme",
      "The file system",
      "The D-Bus Machine ID",
      "The permissions of /root/",
      "The SSH host keys"
    ],
    type: "multi",
    solution:[ "The D-Bus Machine ID", "The SSH host keys"]
  },
  {
    id: 29,
     question: "Which of the following commands installs GRUB 2 into the master boot record on the third hard disk?",
    answers: [
      "grub2 install /dev/sdc",
      "grub-mkrescue /dev/sdc",
      "grub-mbrinstall /dev/sdc",
      "grub-setup /dev/sdc",
      "grub-install /dev/sdc"
    ],
    type: "single",
    solution:["grub-install /dev/sdc"]
  },
  {
    id: 30,
     question: "Which of the following partition types is used for Linux swap spaces when partitioning hard disk drives?",
    answers: [
      "7",
      "82",
      "83",
      "8e",
      "fd"
    ],
    type: "single",
    solution:["82"]
  },
  {
    id: 31,
     question: "What is true regarding the configuration of yum? (Choose two.)",
    answers: [
      "Changes to the repository configuration become active after running yum confupdate",
      "Changes to the yum configuration become active after restarting the yumd service",
      "The configuration of package repositories can be divided into multiple files",
      "Repository configurations can include variables such as $basearch or $releasever",
      "In case /etc/yum.repos.d/ contains files, /etc/yum.config ignored"
    ],
    type: "multi",
    solution:["The configuration of package repositories can be divided into multiple files","Repository configurations can include variables such as $basearch or $releasever",]
  },
  {
    id: 32,
     question: "Which of the following apt-get subcommands installs the newest versions of all currently installed packages?",
    answers: [
      "auto-update",
      "dist-upgrade",
      "full-upgrade",
      "install",
      "update"
    ],
    type: "single",
    solution:["dist-upgrade"]
  },
  {
    id: 33,
     question: "Which command uninstalls a package but keeps its configuration files in case the package is re-installed?",
    answers: [
      "dpkg -s pkgname",
      "dpkg -L pkgname",
      "dpkg -P pkgname",
      "dpkg -v pkgname",
      "dpkg -r pkgname"
    ],
    type: "single",
    solution:["dpkg -r pkgname"]
  },
  {
    id: 34,
     question: "Which of the following commands lists the dependencies of the RPM package file foo.rpm?",
    answers: [
      "rpm -qpR foo.rpm",
      "rpm -dep foo",
      "rpm -ld foo.rpm",
      "rpm -R foo.rpm",
      "rpm -pD foo"
    ],
    type: "single",
    solution:["rpm -qpR foo.rpm"]
  },
  {
    id: 35,
     question: "What is the maximum niceness value that a regular user can assign to a process with the nice command when executing a new process?",
    answers: [
      "9",
      "15",
      "19",
      "49",
      "99"
    ],
    type: "single",
    solution:["19"]
  },
  {
    id: 36,
     question: "Which of the following commands list all files and directories within the /tmp/ directory and its subdirectories which are owned by the user root? (Choose two.)",
    answers: [
      "find /tmp -user root -print",
      "find -path /tmp -uid root",
      "find /tmp -uid root -print",
      "find /tmp -user root",
      "find -path /tmp -user root -print"
    ],
    solution:[] "AD"
  },
  {
    id: 37,
     question: "Which of the following are valid stream redirection operators within Bash? (Choose two.)",
    answers: [
      "<",
      "#>",
      "%>",
      ">>>",
      "2>&1"
    ],
    solution:[] "AE"
  },
  {
    id: 38,
     question: "Which of the following vi commands deletes two lines, the current and the following line?",
    answers: [
      "d2",
      "2d",
      "2dd",
      "dd2",
      "de12"
    ],
    solution:[] "C"
  },
  {
    id: 39,
     question: "The command dbmaint & was used to run dbmaint in the background. However, dbmaint is terminated after logging out of the system. Which alternative dbmaint invocation lets dbmaint continue to run, even when the user, running the program, logs out?",
    answers: [
      "job -b dmaint",
      "dbmaint &>/dev/pts/null",
      "nohup dbmaint &",
      "bg dbmaint",
      "wait dbmaint"
    ],
    solution:[] "C"
  },
  {
    id: 40,
     question: "From a Bash shell, which of the following commands directly execute the instructions from the file /usr/local/bin/runme.sh without starting a subshell? (Choose two.)",
    answers: [
      "source /usr/local/bin/runme.sh",
      "/usr/local/bin/runme.sh",
      "/bin/bash /usr/local/bin/runme.sh",
      ".  /usr/local/bin/runme.sh",
      "run /usr/local/bin/runme.sh"
    ],
    solution:[] "AD"
  },
  {
    id: 41,
     question: "Which program runs a command in specific intervals and refreshes the display of the program’s output? (Specify ONLY the command without any path or parameters.)",
    answers: [],
    solution:[] "watch"
  },
  {
    id: 42,
     question: "Immediately after deleting 3 lines of text in vi and moving the cursor to a different line, which single character command will insert the deleted content below the current line?",
    answers: [
      "i (lowercase)",
      "p (lowercase)",
      "P (uppercase)",
      "U (uppercase)",
      "u (lowercase)"
    ],
    solution:[] "B"
  },
  {
    id: 43,
     question: "Which of the following commands changes all CR-LF line breaks in the text file userlist.txt to Linux standard LF line breaks and stores the result in newlist.txt?",
    answers: [
      "tr -d '\\r' < userlist.txt > newlist.txt",
      "tr -c '\\n\\r' '' <newlist.txt> userlist.txt",
      "tr '\\r\\n' '' <userlist.txt> newlist.txt",
      "tr '\\r' '\\n' userlist.txt newlist.txt",
      "tr -s '/^M/^J/' userlist.txt newlist.txt"
    ],
    solution:[] "A"
  },
  {
    id: 44,
     question: "Given the following input stream: txt1.txt  atxt.txt   txtB.txt Which of the following regular expressions turns this input stream into the following output stream?txt1.bak.txt   atxt.bak.txt  txtB.bak.txt",
    answers: [
      "s/^.txt/.bak/",
      "s/txt/bak.txt/",
      "s/txt$/bak.txt/",
      "s/^txt$/.bak^/",
      "s/[.txt]/.bak$1/"
    ],
    solution:[] "C"
  },
  {
    id: 45,
     question: "Which command must be entered before exiting vi to save the current file as filea.txt?",
    answers: [
      "%s filea.txt",
      "%w filea.txt",
      ":save filea.txt",
      ":w filea.txt",
      ":s filea.txt"
    ],
    solution:[] "D"
  },
  {
    id: 46,
     question: "Which of the following signals is sent to a process when the key combination Ctrl+C is pressed on the keyboard?",
    answers: [
      "SIGTERM",
      "SIGCONT",
      "SIGSTOP",
      "SIGKILL",
      "SIGINT"
    ],
    solution:[] "E"
  },
  {
    id: 47,
     question: "Which of the following commands displays the output of the foo command on the screen and also writes it to a file called /tmp/foodata?",
    answers: [
      "foo | less /tmp/foodata",
      "foo | cp /tmp/foodata",
      "foo > /tmp/foodata",
      "foo | tee /tmp/foodata",
      "foo > stdout >> /tmp/foodata"
    ],
    solution:[] "D"
  },
  {
    id: 48,
     question: "What output will be displayed when the user fred executes the following command? echo 'fred $USER’",
    answers: [
      "fred fred",
      "fred /home/fred/",
      "'fred $USER’",
      "fred $USER",
      "'fred fred’"
    ],
    solution:[] "D"
  },
  {
    id: 49,
     question: "Which of the following commands displays the path to the executable file that would be executed when the command foo is invoked?",
    answers: [
      "lsattr foo",
      "apropos foo",
      "locate foo",
      "whatis foo",
      "which foo"
    ],
    solution:[] "E"
  },
  {
    id: 50,
     question: "When redirecting the output of find to the xargs command, what option to find is useful if the filenames contain spaces?",
    answers: [
      "-rep-space",
      "-printnul",
      "-nospace",
      "-ignore-space",
      "-print0"
    ],
    solution:[] "E"
  },
  {
    id: 51,
     question: "Which of the following commands can be used to determine how long the system has been running? (Choose two.)",
    answers: [
      "uptime",
      "up",
      "time --up",
      "uname -u",
      "top"
    ],
    solution:[] "AE"
  },
  {
    id: 52,
     question: "What is true regarding the command ls > files  if files does not exist?",
    answers: [
      "The output of ls is printed to the terminal",
      "files is created and contains the output of ls",
      "An error message is shown and ls is not executed",
      "The command files is executed and receives the output of ls",
      "Any output of ls is discarded"
    ],
    solution:[] "B"
  },
  {
    id: 53,
     question: "Which of the following files, located in a user’s home directory, contains the Bash history?",
    answers: [
      ".bashrc_history",
      ".bash_histfile",
      ".history",
      ".bash_history",
      ".history_bash"
    ],
    solution:[] "D"
  },
  {
    id: 54,
     question: "Which wildcards will match the following filenames? (Choose two.) ttyS0  ttyS1  ttyS2",
    answers: [
      "ttyS[1-5]",
      "tty?[0-5]",
      "tty*2",
      "tty[A-Z][012]",
      "tty[Ss][02]"
    ],
    solution:[] "BD"
  },
  {
    id: 55,
     question: "Which of the following commands redirects the output of ls to standard error?",
    answers: [
      "ls >-1",
      "ls <<ERR",
      "ls >&2",
      "ls >>2",
      "ls |error"
    ],
    solution:[] "C"
  },
  {
    id: 56,
     question: "Which of the following commands displays the contents of a gzip compressed tar archive?",
    answers: [
      "gzip archive.tgz | tar xvf",
      "tar -fzt archive.tgz",
      "gzip -d archive.tgz | tar tvf",
      "tar cf archive.tgz",
      "tar ztf archive.tgz"
    ],
    solution:[] "E"
  },
  {
    id: 57,
     question: "Which of the following commands prints a list of usernames (first column) and their primary group (fourth column) from the /etc/passwd file?",
    answers: [
      "fmt -f 1,4 /etc/passwd",
      "cut -d : -f 1,4 /etc/passwd",
      "sort -t : -k 1,4 /etc/passwd",
      "paste -f 1,4 /etc/passwd",
      "split -c 1,4 /etc/passwd"
    ],
    solution:[] "B"
  },
  {
    id: 58,
     question: "Which of the following regular expressions represents a single upper-case letter?",
    answers: [
      ":UPPER:",
      "[A-Z]",
      "!a-z",
      "%C",
      "{AZ}"
    ],
    solution:[] "B"
  },
  {
    id: 59,
     question: "Which command is used to start another command with a given nice level? (Specify ONLY the command without any path or parameters.)",
    answers: [],
    solution:[] "nice"
  },
  {
    id: 60,
     question: "Given a log file loga.log with timestamps of the format DD/MM/YYYY:hh:mm:ss, which command filters out all log entries in the time period between 8:00 am and 8:59 am?",
    answers: [
      "grep -E ':08:[09]+:[09]+’ loga.log",
      "grep -E ':08:[00]+’ loga.log",
      "grep -E loga.log ':08:[0-9]+:[0-9]+’",
      "grep loga.log ':08:[0-9]:[0-9]’",
      "grep -E ':08:[0-9]+:[0-9]+’ loga.log"
    ],
    solution:[] "E"
  },
  {
    id: 61,
     question: "Instead of supplying an explicit device in /etc/fstab for mounting, what other options may be used to identify the intended partition? (Choose two.)",
    answers: [
      "LABEL",
      "ID",
      "FIND",
      "NAME",
      "UUID"
    ],
    solution:[] "AE"
  },
  {
    id: 62,
     question: "A yum repository can declare sets of related packages. Which yum command installs all packages belonging to the group admintools?",
    answers: [
      "yum pkgsel --install admintools",
      "yum install admintools/*",
      "yum groupinstall admintools",
      "yum taskinstall admintools",
      "yum collection install admintools"
    ],
    solution:[] "C"
  },
  {
    id: 63,
     question: "What directory contains configuration files for additional yum repositories? (Specify the full path to the directory.)",
    answers: [],
    solution:[] "/etc/yum.repos.d"
  },
  {
    id: 64,
     question: "Which of the following commands installs the GRUB boot files into the currently active file systems and the boot loader into the first partition of the first disk?",
    answers: [
      "grub-install /dev/sda",
      "grub-install /dev/sda1",
      "grub-install current /dev/sda0",
      "grub-install /dev/sda0",
      "grub-install current /dev/sda1"
    ],
    solution:[] "B"
  },
  {
    id: 65,
     question: "Which of the following files are found in the /boot/ filesystem? (Choose two.)",
    answers: [
      "Linux kernel images",
      "Bash shell binaries",
      "systemd target and service units",
      "Initial ramdisk images",
      "fsck binaries"
    ],
    solution:[] "AD"
  },
  {
    id: 66,
     question: "Which file defines the network locations from where the Debian package manager downloads software packages?",
    answers: [
      "/etc/dpkg/dpkg.cfg",
      "/etc/apt/apt.conf.d",
      "/etc/apt/apt.conf",
      "/etc/dpkg/dselect.cfg",
      "/etc/apt/sources.list"
    ],
    solution:[] "E"
  },
  {
    id: 67,
     question: "When removing a package on a system using dpkg package management, which dpkg option ensures configuration files are removed as well?",
    answers: [
      "--clean",
      "--purge",
      "--vacuum",
      "--remove",
      "--declare"
    ],
    solution:[] "B"
  },
  {
    id: 68,
     question: "Which of the following statements are correct when comparing Linux containers with traditional virtual machines (e.g. LXC vs. KVM)? (Choose three.)",
    answers: [
      "Containers are a lightweight virtualization method where the kernel controls process isolation and resource management.",
      "Fully virtualized machines can run any operating system for a specific hardware architecture within the virtual machine.",
      "Containers are completely decoupled from the host system’s physical hardware and can only use emulated virtual hardware devices.",
      "The guest environment for fully virtualized machines is created by a hypervisor which provides virtual and emulated hardware devices.",
      "Containers on the same host can use different operating systems, as the container hypervisor creates separate kernel execution."
    ],
    solution:[] "ABD"
  },
  {
    id: 69,
     question: "The installation of a local Debian package failed due to unsatisfied dependencies. Which of the following commands installs missing dependencies and completes the interrupted package installation?",
    answers: [
      "dpkg --fix --all",
      "apt-get autoinstall",
      "dpkg-reconfigure --all",
      "apt-get all",
      "apt-get install -f"
    ],
    solution:[] "E"
  },
  {
    id: 70,
     question: "Which of the following commands lists all currently installed packages when using RPM package management?",
    answers: [
      "yum --query --all",
      "yum --list --installed",
      "rpm --query --list",
      "rpm --list --installed",
      "rpm --query --all"
    ],
    solution:[] "E"
  },
  {
    id: 71,
     question: "Which of the following commands are valid in the GRUB 2 configuration file? (Choose two.)",
    answers: [
      "menuentry",
      "uefi",
      "pxe-ifconfig",
      "insmod",
      "kpartx"
    ],
    solution:[] "AD"
  },
  {
    id: 72,
     question: "What is the purpose of the ldd command?",
    answers: [
      "It lists which shared libraries a binary needs to run.",
      "It installs and updates installed shared libraries.",
      "It turns a dynamically linked binary into a static binary.",
      "It defines which version of a library should be used by default.",
      "It runs a binary with an alternate library search path."
    ],
    solution:[] "A"
  },
  {
    id: 73,
     question: "What can the Logical Volume Manager (LVM) be used for? (Choose three.)",
    answers: [
      "To create snapshots.",
      "To dynamically change the size of logical volumes.",
      "To dynamically create or delete logical volumes.",
      "To create RAID 9 arrays.",
      "To encrypt logical volumes."
    ],
    solution:[] "ABC"
  },
  {
    id: 74,
     question: "What are the main differences between GPT and MBR partition tables regarding maximum number and size of partitions? (Choose two.)",
    answers: [
      "MBR can handle partition sizes up to 4 TB, whereas GPT supports partition sizes up to 128 ZB.",
      "By default, GPT can manage up to 128 partitions while MBR only supports four primary partitions.",
      "By default, GPT can manage up to 64 partitions while MBR only supports 16 primary partitions.",
      "MBR can handle partition sizes up to 2.2 TB, whereas GPT supports sizes up to 9.4 ZB.",
      "Both GPT and MBR support up to four primary partitions, each with up to 4096 TB."
    ],
    solution:[] "BD"
  },
  {
    id: 75,
     question: "A backup software heavily uses hard links between files which have not been changed in between two backup runs. Which benefits are realized due to these hard links? (Choose two.)",
    answers: [
      "The old backups can be moved to slow backup media, such as tapes, while still serving as hard link target in new backups.",
      "The backup runs faster because hard links are asynchronous operations, postponing the copy operation to a later point in time.",
      "The backup is guaranteed to be uncharged because a hard linked file cannot be modified after its creation.",
      "The backup consumes less space because the hard links point to the same data on disk instead of storing redundant copies.",
      "The backup runs faster because, instead of copying the data of each file, hard links only change file system meta data."
    ],
    solution:[] "DE"
  },
  {
    id: 76,
     question: "Which file from the /proc/ filesystem contains a list of all currently mounted devices? (Specify the full name of the file, including path.)",
    answers: [],
    solution:[] "/proc/mounts"
  },
  {
    id: 77,
     question: "How many fields are in a syntactically correct line of /etc/fstab?",
    answers: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    solution:[] "D"
  },
  {
    id: 78,
     question: "Running chmod 640 filea.txt as a regular user doesn’t update filea.txt’s permission. What might be a reason why chmod cannot modify the permissions? (Choose two.)",
    answers: [
      "filea.txt is owned by another user and a regular user cannot change the permissions of another user’s file.",
      "filea.txt is a symbolic link whose permissions are a fixed value which cannot be changed.",
      "filea.txt has the sticky bit set and a regular user cannot remove this permission.",
      "filea.txt is a hard link whose permissions are inherited from the target and cannot be set directly.",
      "filea.txt has the SetUID bit set which imposes the restriction that only the root user can make changes to the file."
    ],
    solution:[] "AB"
  },
  {
    id: 79,
     question: "Which of the following Linux filesystems preallocate a fixed number of inodes when creating a new filesystem instead of generating them as needed? (Choose two.)",
    answers: [
      "JFS",
      "ext3",
      "XFS",
      "ext2",
      "procfs"
    ],
    solution:[] "BD"
  },
  {
    id: 80,
     question: "Which of the following commands sets the SetUID permission on the executable /bin/foo?",
    answers: [
      "chmod 4755 /bin/foo",
      "chmod 1755 /bin/foo",
      "chmod u-s /bin/foo",
      "chmod 755+s /bin/foo",
      "chmod 2755 /bin/foo"
    ],
    solution:[] "A"
  },
  {
    id: 81,
     question: "Which of the following commands can be used to display the inode number of a given file? (Choose two.)",
    answers: [
      "inode",
      "ln",
      "ls",
      "cp",
      "stat"
    ],
    solution:[] "CE"
  },
  {
    id: 82,
     question: "Which of the following settings for umask ensures that new files have the default permissions -rw-r-----?",
    answers: [
      "0017",
      "0640",
      "0038",
      "0227",
      "0027"
    ],
    solution:[] "E"
  },
  {
    id: 83,
     question: "After a power outage, the XFS file system of /dev/sda3 is inconsistent. How can the existing file system errors be fixed?",
    answers: [
      "By using mount -f to force a mount of the file system",
      "By running xfsck on the file system",
      "By mounting the file system with the option xfs_repair",
      "By running xfsadmin repairon the file system",
      "By running xfs_repair on the file system"
    ],
    solution:[] "E"
  },
  {
    id: 84,
     question: "Which of the following properties of an existing file changes when a hard link pointing to that file is created?",
    answers: [
      "File size",
      "Link count",
      "Modify timestamp",
      "Inode number",
      "Permissions"
    ],
    solution:[] "B"
  },
  {
    id: 85,
     question: "Following the Filesystem Hierarchy Standard (FHS), where should binaries that have been compiled by the system administrator be placed in order to be made available to all users on the system? (Specify the full path to the directory.)",
    answers: [],
    solution:[] "/usr/local/bin"
  },
  {
    id: 86,
     question: "Which of the following commands show how the shell handles a specific command?",
    answers: [
      "where",
      "type",
      "stat",
      "case",
      "fileinfo"
    ],
    solution:[] "B"
  },
  {
    id: 87,
     question: "When in Normal mode in vi, which character can be used to begin a reverse search of the text?",
    answers: [
      "r",
      "/",
      "F",
      "?",
      "s"
    ],
    solution:[] "D"
  },
  {
    id: 88,
     question: "Which of the following commands displays the manual page command from section 1?",
    answers: [
      "man command(1)",
      "man command@1",
      "man 1 command",
      "man 1.command",
      "man -s 1 command"
    ],
    solution:[] "C"
  },
  {
    id: 89,
     question: "Which of the following commands creates or, in case it already exists, overwrites a file called data with the output of ls?",
    answers: [
      "ls 3> data",
      "ls >& data",
      "ls > data",
      "ls >> data",
      "ls >>> data"
    ],
    solution:[] "C"
  },
  {
    id: 90,
     question: "Which of the following commands is used to change options and positional parameters within a running Bash shell?",
    answers: [
      "history",
      "setsh",
      "bashconf",
      "set",
      "envsetup"
    ],
    solution:[] "D"
  },
  {
    id: 91,
     question: "Which of the following commands display the IDs of all processes owned by root? (Choose two.)",
    answers: [
      "pgrep -c root",
      "pgrep -u root",
      "pgrep -f root",
      "pgrep -U 0",
      "pgrep -c 0"
    ],
    solution:[] "BD"
  },
  {
    id: 92,
     question: "Which of the following sequences in the vi editor saves the opened document and exits the editor? (Choose two.)",
    answers: [
      "Ctrl XX",
      "Ctrl :W",
      "Esc zz",
      "Esc :wq",
      "Esc ZZ"
    ],
    solution:[] "DE"
  },
  {
    id: 93,
     question: "What is the effect of the -v option for the grep command?",
    answers: [
      "It enables color to highlight matching parts.",
      "It shows the command’s version information.",
      "It only outputs non-matching lines.",
      "It changes the output order showing the last matching line first.",
      "It outputs all lines and prefixes matching lines with a+."
    ],
    solution:[] "C"
  },
  {
    id: 94,
     question: "Which of the following tools can show the complete path of an executable file that the current shell would execute when starting a command without specifying its complete path? (Choose two.)",
    answers: [
      "find",
      "pwd",
      "which",
      "locate",
      "type"
    ],
    solution:[] "CE"
  },
  {
    id: 95,
     question: "Which of the following signals is sent to a process when the key combination Ctrl+Z is pressed on the keyboard?",
    answers: [
      "SIGTERM",
      "SIGCONT",
      "SIGSTOP",
      "SIGKILL",
      "SIGINT"
    ],
    solution:[] "C"
  },
  {
    id: 96,
     question: "What is the output when the regular expression 's/[ABC][abc]/xx/' is applied to the following string? ABCabc",
    answers: [
      "ABxxbc",
      "xxCxxc",
      "xxxxxx",
      "ABCabc",
      "Axxaxx"
    ],
    solution:[] "A"
  },
  {
    id: 97,
     question: "Which of the following commands print the current working directory when using a Bash shell? (Choose two.)",
    answers: [
      "echo \"${PWD}\"",
      "echo \"${WD}\"",
      "printwd",
      "pwd",
      "echo \"${pwd}\""
    ],
    solution:[] "AD"
  },
  {
    id: 98,
     question: "Which of the following commands outputs test to the shell?",
    answers: [
      "",
      " cat <!EOT test EOT",
      " cat <|EOT",
      " cat !<EOT",
      " cat &<EOT",
      " cat <<EOT"
    ],
    solution:[] "E"
  },
  {
    id: 99,
     question: "What is the default nice level when a process is started using the nice command?",
    answers: [
      "-10",
      "0",
      "10",
      "15",
      "20"
    ],
    solution:[] "C"
  },
  {
    id: 100,
     question: "A user accidentally created the subdirectory \\dir in his home directory. Which of the following commands will remove that directory?",
    answers: [
      "rmdir ~/\\\\dir",
      "rmdir \"~/\\dir\"",
      "rmdir ~/’dir’",
      "rmdir ~/\\dir",
      "rmdir '~/\\dir’"
    ],
    solution:[] "A"
  },
  {
    id: 101,
     question: "Which of the following commands can perform searches on file contents using regular expressions?",
    answers: [
      "find",
      "locate",
      "grep",
      "reggrep",
      "pgrep"
    ],
    solution:[] "C"
  },
  {
    id: 102,
     question: "In a nested directory structure, which find command line option would be used to restrict the command to searching down a particular number of subdirectories?",
    answers: [
      "-maxdepth",
      "-dirmax",
      "-maxlevels",
      "-s",
      "-n"
    ],
    solution:[] "A"
  },
  {
    id: 103,
     question: "Which of the following commands determines a file’s format by using a definition database file which contains information about all common file types?",
    answers: [
      "type",
      "file",
      "magic",
      "pmagic",
      "hash"
    ],
    solution:[] "B"
  },
  {
    id: 104,
     question: "Which of the following commands generates a list of user names from /etc/passwd along with their login shell?",
    answers: [
      "column -s : 1,7 /etc/passwd",
      "chop -c 1,7 /etc/passwd",
      "colrm 1,7 /etc/passwd",
      "sort -t: -k1,7 /etc/passwd",
      "cut -d: -f1,7 /etc/passwd"
    ],
    solution:[] "E"
  },
  {
    id: 105,
     question: "If the gzip compressed tar archive texts.tgz contains the files a.txt and b.txt, which files will be present in the current directory after running gunzip texts.tgz?",
    answers: [
      "Only a.txt, b.txt, and texts.tgz",
      "Only texts.tar and texts.tgz",
      "Only a.txt.gz and b.txt.gz",
      "Only a.txt and b.txt",
      "Only texts.tar"
    ],
    solution:[] "E"
  },
  {
    id: 106,
     question: "In the vi editor, how can commands such as moving the cursor or copying lines into the buffer be issued multiple times or applied to multiple rows?",
    answers: [
      "By using the command :repeat followed by the number and the command",
      "By specifying the number right in front of a command such as 4l or 2yj.",
      "By selecting all affected lines using the shit and cursor keys before applying the command.",
      "By issuing a command such as :set repetition=4 with repeats every subsequent command 4 times.",
      "By specifying the number after a command such as l4 or yj2 followed by escape."
    ],
    solution:[] "B"
  },
  {
    id: 107,
     question: "Which of the following statements is correct for a command ending with an & character?",
    answers: [
      "The command’s output is redirected to /dev/null.",
      "The command is run in background of the current shell.",
      "The command’s output is executed by the shell.",
      "The command is run as a direct child of the init process.",
      "The command’s input is read from /dev/null."
    ],
    solution:[] "B"
  },
  {
    id: 108,
     question: "Which of the following commands reads a file and creates separate chunks of a given size from the file’s contents?",
    answers: [
      "ar",
      "cat",
      "break",
      "split",
      "parted"
    ],
    solution:[] "D"
  },
  {
    id: 109,
     question: "What is the purpose of the xargs command?",
    answers: [
      "It passes arguments to an X server.",
      "It repeats the execution of a command using different parameters for each invocation.",
      "It reads standard input and builds up commands to execute.",
      "It asks a question, graphically, and returns the answer to the shell.",
      "It allows specifying long options (like --help) for commands that normally only accept short options (like -h)"
    ],
    solution:[] "C"
  },
  {
    id: 110,
     question: "Which command displays a list of all background tasks running in the current shell? (Specify ONLY the command without any path or parameters.)",
    answers: [],
    solution:[] "jobs"
  },
  {
    id: 111,
     question: "Which command is used to change the priority of an already running process? (Specify ONLY the command without any path or parameters.)",
    answers: [],
    solution:[] "renice"
  },
  {
    id: 112,
     question: "In Bash, inserting 1>&2 after a command redirects…",
    answers: [
      "…standard error to standard input.",
      "…standard output to standard error.",
      "…standard input to standard error.",
      "…standard error to standard output.",
      "…standard output to standard input."
    ],
    solution:[] "B"
  },
  {
    id: 113,
     question: "When booting from the hard disk, a computer successfully loads the Linux kernel and initramfs but hangs during the subsequent startup tasks. The system is booted using a Linux based rescue CD to investigate the problem. Which of the following methods helps to identify the root cause of the problem?",
    answers: [
      "Using the dmesg command from the rescue CD’s shell to view the original system’s boot logs.",
      "Investigating the file /proc/kmsg on the computer’s hard disk for possible errors.",
      "Investigating the files in /var/log on the computer’s hard disk for possible errors.",
      "Using chroot to switch to the file system on the hard disk and use dmesg to view the logs.",
      "Rebooting again from the hard drive since the system successfully booted from the rescue CD."
    ],
    solution:[] "C"
  },
  {
    id: 114,
     question: "Where is the bootloader stored on the hard disk of a UEFI system?",
    answers: [
      "In the EFI Boot Record (EBR).",
      "In the Master Boot Record (MBR).",
      "On the EFI System Partition (ESP).",
      "On the partition labeled boot.",
      "On the partition number 127."
    ],
    solution:[] "C"
  },
  {
    id: 115,
     question: "What is the correct way to set the default systemd boot target to multi-user?",
    answers: [
      "systemctl isolate multi-user.target",
      "systemctl set-runlevel multi-user.target",
      "systemctl set-boot multi-user.target",
      "systemctl set-default multi-user.target",
      "systemctl boot -p multi-user.target"
    ],
    solution:[] "D"
  },
  {
    id: 116,
     question: "Which of the following statements are correct about the initial RAM disk involved in the boot process of Linux? (Choose two.)",
    answers: [
      "An initramfs is a compressed file system archive, which can be unpacked to examine its contents.",
      "An initramfs file contains the MBR, the bootloader and the Linux kernel.",
      "After a successful boot, the initramfs contents are available in /run/initramfs/.",
      "The kernel uses the initramfs temporarily before accessing the real root file system.",
      "An initramfs does not depend on a specific kernel version and is not changed after the initial installation."
    ],
    solution:[] "AD"
  },
  {
    id: 117,
     question: "Which of the following commands loads a kernel module along with any required dependency modules?",
    answers: [
      "depmod",
      "modprobe",
      "module_install",
      "insmod",
      "loadmod"
    ],
    solution:[] "B"
  },
  {
    id: 118,
     question: "What information can the lspci command display about the system hardware? (Choose three.)",
    answers: [
      "System battery type",
      "Device IRQ settings",
      "PCI bus speed",
      "Ethernet MAC address",
      "Device vendor identification"
    ],
    solution:[] "BCE"
  },
  {
    id: 119,
     question: "Which System V init configuration file is commonly used to set the default run level? (Specify the full name of the file, including path.)",
    answers: [],
    solution:[] "/etc/inittab"
  },
  {
    id: 120,
     question: "Given the following two symbolic links in a System V init configuration: /etc/rc1.d/K01apache2    /etc/rc2.d/S02apache2  When are the scripts executed that are referenced by these links? (Choose two.)",
    answers: [
      "S02apache2 is run when runlevel 2 is entered.",
      "S02apache2 is run when runlevel 2 is left.",
      "K01apache2 is never run because K indicates a deactivated service.",
      "Both S02apache2 and K01apache2 are run during a system shutdown.",
      "K01apache2 is run when runlevel 1 is entered."
    ],
    solution:[] "AE"
  }
];

return { questions101 };
}

