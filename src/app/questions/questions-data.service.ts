import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Question } from './question';

@Injectable({
  providedIn: 'root',
})
export class QuestionsDataService implements InMemoryDbService {
  createDb() {
    const questions102: Question[] = [
      {
        id: 1,
        question:
          'Which command is used to set the hostname of the local system? (Specify only the command without any path or parameters.)',
        answers: ['hostname'],
        type: 'fillIn',
        solution: ['hostname'],
      },
      {
        id: 2,
        question: 'Which of the following is a valid IPv6 address?',
        answers: [
          '2001:db8:0g21::1',
          '2001::db8:4581::1',
          '2001:db8:3241::1',
          '2001%db8%9990%%1',
          '2001.db8.819f..1',
        ],
        type: 'single',
        solution: ['2001:db8:3241::1'],
      },
      {
        id: 3,
        question:
          'What command, depending on its options, can display the open TCP connections, the routing tables, as well as network interface statistics? (Specify only the command without any path or parameters)',
        answers: ['netstat'],
        type: 'fillIn',
        solution: ['netstat'],
      },
      {
        id: 4,
        question:
          'Which command included in NetworkManager is a curses application which provides easy acces to the NetworkManager on the command line? (Specify only the command without any path or parameters.)',
        answers: ['nmtui'],
        type: 'fillIn',
        solution: ['nmtui'],
      },
      {
        id: 5,
        question:
          'Which of the following tools, used for DNS debugging, reports not only the response from the name sever but also details about the query?',
        answers: ['dnsq', 'hostname', 'dig', 'dnslookup', 'zoneinfo'],
        type: 'single',
        solution: ['dig'],
      },
      {
        id: 6,
        question:
          'Which of the following statements is valid in the file /etc/nsswitch.conf?',
        answers: [
          'multi on',
          '192.168.168.4 dns-server',
          'namespaces: net mount procs',
          'include /etc/nsswitch.d/',
          'hosts: files dns',
        ],
        type: 'single',
        solution: ['hosts: files dns'],
      },
      {
        id: 7,
        question:
          'Which of the following connection types, as seen in nmcli connection show, may exist in NetworkManager? (Choose three.)',
        answers: ['tcp', 'ethernet', 'wifi', 'ipv6', 'bridge'],
        type: 'multi',
        solution: ['ethernet', 'wifi', 'bridge'],
      },
      {
        id: 8,
        question:
          'On a Linux workstation, the route command takes a long time before printing out the routing tab. Which of the following errors does that indicate?',
        answers: [
          'The local routing information may be corrupted and must be re-validated using a routing protocol.',
          'One of the routers in the routing table is not available which causes the automatic router failure detection mechanism (ARF-D) to wait for a timeout.',
          'There may accidentally be more than one default router in which case a default router election has to be done on the network in order to choose one router as the default.',
          'The Linux Kernel Routing Daemon (LKRD) is not running and should be started using its init script or systemd unit.',
          'DNS resolution may not be working as route by default tries to resolve names of routers and destinations and may run into a timeout.',
        ],
        type: 'single',
        solution: [
          'DNS resolution may not be working as route by default tries to resolve names of routers and destinations and may run into a timeout.',
        ],
      },
      {
        id: 9,
        question: 'What is true about the Hop Limit field in the IPv6 header?',
        answers: [
          'The field is not changed during the transport of a package.',
          'The field is transmitted within a hop-by-hop extension header.',
          "Each router forwarding the packet increases the field's value.",
          "Each router forwarding the packet decreases the field's value.",
          "For multicast packages, the field's value is always 1.",
        ],
        type: 'single',
        solution: [
          "Each router forwarding the packet decreases the field's value.",
        ],
      },
      {
        id: 10,
        question:
          'Which of the following nmcli subcommands exist? (Choose two.)',
        answers: [
          'nmcli ethernet',
          'nmcli device',
          'nmcli wifi',
          'nmcli address',
          'nmcli connection',
        ],
        type: 'multi',
        solution: ['nmcli device', 'nmcli connection'],
      },
      {
        id: 11,
        question:
          'Which of the following changes may occur as a consequence of using the command ip? (Choose three.)',
        answers: [
          'Network interfaces may become active or inactive.',
          'New name servers may be added to the resolver configuration.',
          "The system's host name may change.",
          'IP addresses may change.',
          'The routing table may change.',
        ],
        type: 'multi',
        solution: [
          'Network interfaces may become active or inactive.',
          'IP addresses may change.',
          'The routing table may change.',
        ],
      },
      {
        id: 12,
        question:
          'How many IP addresses can be used for unique hosts inside the IPv4 subnet 192.168.2.128/26?',
        answers: ['33', '14', '30', '62', '126'],
        type: 'single',
        solution: ['62'],
      },
      {
        id: 13,
        question:
          'Which of the following IPv4 networks are reserved by IANA for private address assignment and private routing? (Choose three.)',
        answers: [
          '10.0.0.0/8',
          '127.0.0.0/8',
          '169.255.0.0/16',
          '172.16.0.0/12',
          '192.168.0.0/16',
        ],
        type: 'multi',
        solution: ['10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16'],
      },
      {
        id: 14,
        question:
          "Which of the following commands configure network interfaces based on the system's existing distribution-specific configuration files? (Choose two.)",
        answers: ['ifconf', 'ifdown', 'ifpause', 'ifstart', 'ifup'],
        type: 'multi',
        solution: ['ifdown', 'ifup'],
      },
      {
        id: 15,
        question:
          'Which of the following statements is true if the UID of a regular user is identical to the GID of a group?',
        answers: [
          "UID have precedence over GIDs, therefore the user is available while the group doesn't.",
          'The user as well as the group are not available to avoid ambiguity due to the ID conflict.',
          'UIDs and GIDs are independent of each other, therefore the user as well as the group are still available.',
          'The user is the only member of the group, even if the group configuration contains other members.',
          "GIDs have precedence over UIDs, therefore the group is available while the user isn't.",
        ],
        type: 'single',
        solution: [
          'UIDs and GIDs are independent of each other, therefore the user as well as the group are still available.',
        ],
      },
      {
        id: 16,
        question:
          'Which of the following information is stored in /etc/shadow for each user?',
        answers: [
          "The timestamp of the user's last login",
          "The user's private SSH keys",
          'The hashed password of the user',
          'The numerical user ID (UID)',
          "The path to the user's home directory",
        ],
        type: 'single',
        solution: ['The hashed password of the user'],
      },
      {
        id: 17,
        question:
          'Which of the following commands shows all active systemd timers?',
        answers: [
          'systemctl-timer show',
          'imectl list',
          'systemctl -t',
          'systemctl list-timers',
          'timeq',
        ],
        type: 'single',
        solution: ['systemctl list-timers'],
      },
      {
        id: 18,
        question:
          'Which of the following tasks can the date command accomplish? (Choose two.)',
        answers: [
          "Set the system's date and time.",
          "Set the system's date but not the time.",
          'Calculate the time span between two dates.',
          'Print a calendar for a month or a year.',
          'Display time in a specific format.',
        ],
        type: 'multi',
        solution: [
          "Set the system's date and time.",
          'Display time in a specific format.',
        ],
      },
      {
        id: 19,
        question:
          'Which file, if present, must contain all users that are allowed to use the cron scheduling system? (Specify the full name of the file, including path.)',
        answers: ['/etc/cron.allow'],
        type: 'fillIn',
        solution: ['/etc/cron.allow'],
      },
      {
        id: 20,
        question: 'What can be specified with useradd? (Choose two.)',
        answers: [
          'Commands the user can run using sudo.',
          "The absolute path to the user's home directory.",
          'Which printers are available for the new user.',
          'The SSH keys used to login to the new account.',
          'The numeric user ID (UID) of the user.',
        ],
        type: 'multi',
        solution: [
          "The absolute path to the user's home directory.",
          'The numeric user ID (UID) of the user.',
        ],
      },
      {
        id: 21,
        question: 'What is true about the file /etc/localtime?',
        answers: [
          'It is a plain text file containing a string such as Europe/Berlin',
          "It is created and maintained by the NTP service based on the location of the system's IP address.",
          'It is a symlink to /sys/device/clock/ltime and always contains the current local time.',
          'After changing this file, newtzconfighas to be run to make the changes effective.',
          'E. It is either a symlink to or a copy of a timezone information file such as /usr/share/zoneinfo/Europe/Berlin.',
        ],
        type: 'single',
        solution: [
          'It is either a symlink to or a copy of a timezone information file such as /usr/share/zoneinfo/Europe/Berlin.',
        ],
      },
      {
        id: 22,
        question:
          'Which of the following statements is true regarding systemd timer units?',
        answers: [
          "Timer units can only be defined within a service unit's file.",
          "The command executed by the timer is specified in the timer unit's [Cmd] section.",
          'A dedicated system service, systemd-cron, handles the execution of timer units.',
          'Timer units only exist in the system scope and are not available for users.',
          'Each systemd timer unit controls a specific systemd service unit.',
        ],
        type: 'single',
        solution: [
          'Each systemd timer unit controls a specific systemd service unit.',
        ],
      },
      {
        id: 23,
        question:
          'Which of the following fields are available in the standard format of both the global /etc/crontab file as well as in user-specific crontab files? (Choose two.)',
        answers: [
          'Year',
          'Minute',
          'Username',
          'Effective group ID',
          'Command',
        ],
        type: 'multi',
        solution: ['Minute', 'Command'],
      },
      {
        id: 24,
        question:
          'Which of the following commands should be executed when starting a login shell in order to change the language of messages for an internationalized program to Portuguese (pt)?',
        answers: [
          'export LANGUAGE=“pt"',
          'export LC_MESSAGES=“pt"',
          'export UI_MESSAGES=“pt"',
          'export MESSAGE=“pt"',
          'export ALL_MESSAGES=“pt"',
        ],
        type: 'single',
        solution: ['export LC_MESSAGES=“pt"'],
      },
      {
        id: 25,
        question:
          'Which of the following files assigns a user to its primary group?',
        answers: [
          '/etc/pgroup',
          '/etc/shadow',
          '/etc/passwd',
          '/etc/group',
          '/etc/gshadow',
        ],
        type: 'single',
        solution: ['/etc/passwd'],
      },
      {
        id: 26,
        question:
          'Which of the following steps prevents a user from obtaining an interactive login session?',
        answers: [
          'Setting the UID for the user to 0.',
          'Running the command chsh -s /bin/false with the user name.',
          'Removing the user from the group staff.',
          'Adding the user to /etc/noaccess.',
          "Creating a .nologin file in the user's home directory.",
        ],
        type: 'single',
        solution: [
          'Running the command chsh -s /bin/false with the user name.',
        ],
      },
      {
        id: 27,
        question:
          'Which command included in systemd supports selecting messages from the systemd journal by criteria such as time or unit name? (Specify only the command without any path or parameters.)',
        answers: ['journalctl'],
        type: 'fillIn',
        solution: ['journalctl'],
      },
      {
        id: 28,
        question:
          'Which of the following statements about systemd-journald are true? (Choose three.)',
        answers: [
          'It is incompatible with syslog and cannot be installed on a system using regular syslog.',
          'It only processes messages of systemd and not messages of any other tools.',
          'It can pass log messages to syslog for further processing.',
          'It maintains metadata such as _UID or _PID for each message.',
          'It supports syslog facilities such as kern, user, and auth.',
        ],
        type: 'multi',
        solution: [
          'It can pass log messages to syslog for further processing.',
          'It maintains metadata such as _UID or _PID for each message.',
          'It supports syslog facilities such as kern, user, and auth.',
        ],
      },
      {
        id: 29,
        question:
          'Which command must be run after adding a new email alias to the configuration in order to make this change effective? (Specify the command without any path but including all required parameters.)',
        answers: ['newaliases'],
        type: 'fillIn',
        solution: ['newaliases'],
      },
      {
        id: 30,
        question:
          'Which option in the chrony configuration file changes the initial interval of polls to a NTP server in order to speed up the initial synchronization?',
        answers: ['iburst', 'quickstart', 'fast', 'fsync', 'flood'],
        type: 'single',
        solution: ['iburst'],
      },
      {
        id: 31,
        question:
          'Which of the following commands is used to rotate, compress, and mail system logs?',
        answers: [
          'logrotate',
          'striplog',
          'syslogd --rotate',
          'rotatelog',
          'logger',
        ],
        type: 'single',
        solution: ['logrotate'],
      },
      {
        id: 32,
        question:
          "Why is the correct configuration of a system's time zone important?",
        answers: [
          'Because the timezone is included in checksum calculations and timezone changes invalidate existing checksums.',
          'Because the time zone is saved as part of the modification times of files and cannot be changed after a file is created.',
          'Because the environment variables LANG and LC_MESSAGES are, by default, set according to the time zone.',
          'Because NTP chooses servers nearby based on the configured time zone.',
          'Because the conversion of Unix timestamps to local time relies on the time zone configuration.',
        ],
        type: 'single',
        solution: [
          'Because the conversion of Unix timestamps to local time relies on the time zone configuration.',
        ],
      },
      {
        id: 33,
        question:
          "Which command, available with all sendmail-compatible MTAs, is used to list the contents of the MTA's mail queue? (Specify only the command without any path or parameters.)",
        answers: ['mailq'],
        type: 'fillIn',
        solution: ['mailq'],
      },
      {
        id: 34,
        question:
          'What is the top-level directory which contains the configuration files for CUPS? (Specify the full path to the directory.)',
        answers: ['/etc/cups'],
        type: 'fillIn',
        solution: ['/etc/cups'],
      },
      {
        id: 35,
        question:
          'Which of the following commands lists all queued print jobs?',
        answers: ['lpd', 'lpr', 'lp', 'lsq', 'lpq'],
        type: 'single',
        solution: ['lpq'],
      },
      {
        id: 36,
        question:
          'Which of the following entries in /etc/syslog.conf writes all mail related events to the file /var/log/maillog and sends all critical events to the remote server logger.example.com?',
        answers: [
          'mail.* /var/log/maillog \\n mail,crit @logger.example.org',
          'mail.* /var/log/maillog \\n mail.crit syslog://logger.example.org',
          'mail /var/log/maillog \\n mail.crit @logger.example.org',
          'mail.* /var/log/maillog \\n mail.crit @logger.example.org',
          'mail * /var/log/maillog \\n mail crit @logger.example.org',
        ],
        type: 'single',
        solution: ['mail.* /var/log/maillog \\n mail.crit @logger.example.org'],
      },
      {
        id: 37,
        question:
          'Which option in the /etc/ntp.conf file specifies an external NTP source to be queried for time information? (Specify only the option without any values or parameters.)',
        answers: ['server'],
        type: 'fillIn',
        solution: ['server'],
      },
      {
        id: 38,
        question:
          'Which of the following protocols is related to the term open relay?',
        answers: ['SMTP', 'POP3', 'NTP', 'IMAP', 'LDAP'],
        type: 'single',
        solution: ['SMTP'],
      },
      {
        id: 39,
        question:
          'Which of the following commands displays all environment and shell variables?',
        answers: ['getargs', 'lsenv', 'ls', 'env', 'lsshell'],
        type: 'single',
        solution: ['env'],
      },
      {
        id: 40,
        question:
          'Which of the following comparison operators for test work on elements in the file system? (Choose two.)',
        answers: ['-z', '-eq', '-d', '-f', '-lt'],
        type: 'multi',
        solution: ['-d', '-f'],
      },
      {
        id: 41,
        question: 'What information is provided by the echo $$ command?',
        answers: [
          'The process ID of the current shell.',
          'The process ID for the following command.',
          'The process ID of the last command executed.',
          'he process ID of the last command which has been placed in the background.',
          'The process ID of the echo command.',
        ],
        type: 'single',
        solution: ['The process ID of the current shell.'],
      },
      {
        id: 42,
        question:
          'Which command makes the shell variable named VARIABLE visible to subshells?',
        answers: [
          'export $VARIABLE',
          'env VARIABLE',
          'set $VARIABLE',
          'set VARIABLE',
          'export VARIABLE',
        ],
        type: 'single',
        solution: ['export VARIABLE'],
      },
      {
        id: 43,
        question:
          "What output is produced by the following command sequence? echo '1 2 3 4 5 6' | while read a b c; do echo result: $c $b $a; done",
        answers: [
          'result: 6 5 4',
          'result: 1 2 3 4 5 6',
          'result: 3 4 5 6 2 1',
          'result: 6 5 4 3 2 1',
          'result: 3 2 1',
        ],
        type: 'single',
        solution: ['result: 3 4 5 6 2 1'],
      },
      {
        id: 44,
        question:
          'Which of the following configuration files should be modified to globally set shell variables for all users?',
        answers: [
          '/etc/profile',
          '/etc/bashrc',
          '~/.bash_profile',
          '/etc/.bashrc',
          '/etc/shellenv',
        ],
        type: 'single',
        solution: ['/etc/profile'],
      },
      {
        id: 45,
        question: 'What output does the command seq 10 produce?',
        answers: [
          'A continuous stream of numbers increasing in increments of 10 until the command is stopped.',
          'It creates no output because a second parameter is missing.',
          'The number 0 through 9 with one number per line.',
          'The number 10 to standard output.',
          'The numbers 1 through 10 with one number per line.',
        ],
        type: 'single',
        solution: ['The numbers 1 through 10 with one number per line.'],
      },
      {
        id: 46,
        question:
          'What command list the aliases defined in the current Bash shell? (Specify only the command without any path or parameters.)',
        answers: ['alias'],
        type: 'fillIn',
        solution: ['alias'],
      },
      {
        id: 47,
        question:
          'Which of the following commands can be used to limit the amount of memory a user may use?',
        answers: ['umask', 'usermod', 'passwd', 'ulimit', 'chage'],
        type: 'single',
        solution: ['ulimit'],
      },
      {
        id: 48,
        question: 'What is a purpose of an SSH host key?',
        answers: [
          "It must be sent by any SSH client in addition to a user key in order to identify the client's host.",
          'It is root key by which all user SSH keys must be signed.',
          "It provides the server's identity information to connecting SSH clients.",
          "It authenticates any user that logs into a remote machine from the key's host.",
          'It is used by system services like cron, syslog or a backup job to automatically connect to remote hosts.',
        ],
        type: 'single',
        solution: [
          "It provides the server's identity information to connecting SSH clients.",
        ],
      },
      {
        id: 49,
        question: 'What is the purpose of TCP wrapper?',
        answers: [
          'Manage and adjust bandwidth used by TCP services.',
          'Bind a network service to a TCP port.',
          'Encapsulate TCP messages in IP packets.',
          'Add SSL support to plain text TCP services.',
          'Limit access to a network service.',
        ],
        type: 'single',
        solution: ['Limit access to a network service.'],
      },
      {
        id: 50,
        question:
          'Given the following excerpt of the sudo configuration: Jane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdisk. - Which of the following statements are true? (Choose three.)',
        answers: [
          'Jane can run /bin/id only after specifying her password.',
          "Jane can run /sbin/fdisk after specifying root's password.",
          'Jane can run /sbin/fdisk after specifying her password.',
          'Jane can run /bin/kill without specifying a password.',
          'Jane can run /bin/id without specifying her password.',
        ],
        type: 'multi',
        solution: [
          'Jane can run /sbin/fdisk after specifying her password.',
          'Jane can run /bin/kill without specifying a password.',
          'Jane can run /bin/id without specifying her password.',
        ],
      },
      {
        id: 51,
        question:
          'Which configuration file contains the default options for SSH clients?',
        answers: [
          '/etc/ssh/sshd_config',
          '/etc/ssh/ssh',
          '/etc/ssh/ssh_config',
          '/etc/ssh/client',
          '/etc/ssh/ssh_client',
        ],
        type: 'single',
        solution: ['/etc/ssh/ssh_config'],
      },
      {
        id: 52,
        question:
          "Depending on a system's configuration, which of the following files can be used to enable and disable network services running on this host?",
        answers: [
          '/etc/profile',
          '/etc/xinetd.conf',
          '/etc/ports',
          '/etc/services',
          '/etc/host.conf',
        ],
        type: 'single',
        solution: ['/etc/xinetd.conf'],
      },
      {
        id: 53,
        question:
          'Which of the following commands can identify the PID or a process which opened a TCP port?',
        answers: ['ptrace', 'strace', 'debug', 'lsof', 'nessus'],
        type: 'single',
        solution: ['lsof'],
      },
      {
        id: 54,
        question:
          'When using X11 forwarding in SSH, what environment variable is automatically set in the remote shell in order to help applications to connect to the correct X11 server? (Specify only the environment variable without any additional commands or values.)',
        answers: ['DISPLAY'],
        type: 'fillIn',
        solution: ['DISPLAY'],
      },
      {
        id: 55,
        question:
          'The presence of what file will temporarily prevent all users except root from logging into a system? (Specify the full name of the file, including path.)',
        answers: ['/etc/nologin'],
        type: 'fillIn',
        solution: ['/etc/nologin'],
      },
      {
        id: 56,
        question:
          'Which of the following commands preloads and manages existing SSH keys that are used for automatic authentication while logging in to other machines using SSH?',
        answers: ['sshd', 'ssh-keyring', 'ssh-keygen', 'ssh-pki', 'ssh-agent'],
        type: 'single',
        solution: ['ssh-agent'],
      },
      {
        id: 57,
        question:
          'On a machine running several X servers, how do programs identify the different instances of the X11 server?',
        answers: [
          'By a fixed UUID that is defined in the X11 configuration file.',
          'By a display name like :1 .',
          'By the name of the user that runs the X server like x11: bob.',
          'By a device name like /dev/X11/xservers/1.',
          'By a unique IPv6 address from the fe80::/64subnet.',
        ],
        type: 'single',
        solution: ['By a display name like :1 .'],
      },
      {
        id: 58,
        question: 'What is the purpose of a screen reader?',
        answers: [
          'It manages virtual keyboards on touch screen displays.',
          'It reads the parameters of the attached monitors and creates an appropriate X11 configuration.',
          'It displays lines and markers to help people use speed reading techniques.',
          'It manages and displays files that contain e-books.',
          'It reads displayed text to accommodate the needs of blind or visually impaired people.',
        ],
        type: 'single',
        solution: [
          'It reads displayed text to accommodate the needs of blind or visually impaired people.',
        ],
      },
      {
        id: 59,
        question:
          'The X11 configuration file xorg.conf is grouped into sections. How is the content of the section SectionName represented?',
        answers: [
          'It is placed in curly brackets as in Section SectionName {…}.',
          'It is placed between the tags <Section name=“SectionName"> and </Section>.',
          'It is placed between a line containing Section “SectionName" and a line containing EndSection.',
          'It is placed after the row [SectionName].',
          'It is placed after an initial unindented Section “SectionName" and must be indented by exactly one tab character.',
        ],
        type: 'single',
        solution: [
          'It is placed between a line containing Section “SectionName" and a line containing EndSection.',
        ],
      },
      {
        id: 60,
        question:
          'Which of the following features are provided by SPICE? (Choose two.)',
        answers: [
          'Connecting local USB devices to remote applications.',
          'Accessing graphical applications on a remote host.',
          'Replacing Xorg as local X11 server.',
          'Downloading and locally installing applications from a remote machine.',
          'Uploading and running a binary program on a remote machine.',
        ],
        type: 'multi',
        solution: [
          'Connecting local USB devices to remote applications.',
          'Accessing graphical applications on a remote host.',
        ],
      },
      {
        id: 61,
        question: 'Where is the systemd journal stored?',
        answers: [
          '/var/jlog/and /var/jlogd/',
          '/proc/log/and /proc/klog/',
          '/run/log/journal/ or /var/log/journal/',
          '/var/log/syslog.binor /var/log/syslog.jrn',
          '/etc/systemd/journal/or /usr/lib/systemd/journal/',
        ],
        type: 'single',
        solution: ['/run/log/journal/ or /var/log/journal/'],
      },
      {
        id: 62,
        question:
          'Which of the following is true regarding the command sendmail?',
        answers: [
          'With any MTA, the sendmail command must be run periodically by the cron daemon.',
          'When using systemd, sendmail is an alias to relayctl.',
          "The sendmail command prints the MTA's queue history of which mails have been sent successfully.",
          'It is only available when the sendmail MTA is installed.',
          'All common MTAs, including Postfix and Exim, provide a sendmail command.',
        ],
        type: 'single',
        solution: [
          'All common MTAs, including Postfix and Exim, provide a sendmail command.',
        ],
      },
      {
        id: 63,
        question:
          'Which file inside the CUPS configuration directory contains the settings of the printers?',
        answers: [
          'cups-devices.conf',
          'snmp.conf',
          'printers.conf',
          'printcap.conf',
          'cupsd.conf',
        ],
        type: 'single',
        solution: ['printers.conf'],
      },
      {
        id: 64,
        question:
          'Which file is processed by newaliases? (Specify the full name of the file, including path.)',
        answers: ['/etc/aliases'],
        type: 'fillIn',
        solution: ['/etc/aliases'],
      },
      {
        id: 65,
        question: 'Which of the following are syslog facilities? (Choose two.)',
        answers: ['local5', 'accounting', 'mail', 'postmaster', 'remote'],
        type: 'multi',
        solution: ['local5', 'mail'],
      },
      {
        id: 66,
        question:
          'Which of the following parameters are used for journalctl to limit the time frame of the output? (Choose two.)',
        answers: ['--since=', '--from=', '--until=', '--upto=', '--date='],
        type: 'multi',
        solution: ['--since=', '--until='],
      },
      {
        id: 67,
        question: 'What is true regarding the file ~/.forward?',
        answers: [
          'When configured correctly ~/.forward can be used to forward each incoming mail to one or more other recipients.',
          'After editing ~/.forward the user must run newaliases to make the mail server aware of the changes.',
          'Using ~/.forward, root may configure any email address whereas all other users may configure only their own addresses.',
          'As ~/.forward is owned by the MTA and not writable by the user, it must be edited using the editaliases command.',
          "By default, only ~/.forward files of users in the group mailq are processed while all other user's ~/.forward files are ignored.",
        ],
        type: 'single',
        solution: [
          'When configured correctly ~/.forward can be used to forward each incoming mail to one or more other recipients.',
        ],
      },
      {
        id: 68,
        question:
          'Which of the following commands display a list of jobs in the print queue? (Choose two.)',
        answers: ['cups --list', 'lprm -l', 'lpstat', 'lpr -q', 'lpq'],
        type: 'multi',
        solution: ['lpstat', 'lpq'],
      },
      {
        id: 69,
        question:
          'On a system using systemd-journald, which of the following commands add the message Howdy to the system log? (Choose two.)',
        answers: [
          'append Howdy',
          'logger Howdy',
          'systemd-cat echo Howdy',
          'echo Howdy > /dev/journal',
          'journalctl add Howdy',
        ],
        type: 'multi',
        solution: ['logger Howdy', 'systemd-cat echo Howdy'],
      },
      {
        id: 70,
        question:
          'Which of the following options in the chrony configuration file define remote time sources? (Choose two.)',
        answers: ['source', 'clock', 'remote', 'pool', 'server'],
        type: 'multi',
        solution: ['pool', 'server'],
      },
      {
        id: 71,
        question:
          'Which command is used to sync the hardware clock to the system clock? (Specify only the command without any path or parameters.)',
        answers: ['hwclock'],
        type: 'fillIn',
        solution: ['hwclock'],
      },
      {
        id: 72,
        question:
          'Which of the following situations is observed and corrected by an NTP client?',
        answers: [
          "The skew in time between the system clock and the computer's hardware clock.",
          'The physical location and the time zone configuration.',
          "Changes in the time zone of the current computer's location.",
          'Adjustment needed to support Daylight Saving Time.',
          'The skew in time between the system clock and the reference clock.',
        ],
        type: 'single',
        solution: [
          'The skew in time between the system clock and the reference clock.',
        ],
      },
      {
        id: 73,
        question:
          "If an alias ls exists, which of the following commands updates the alias to point to the command ls -l instead of the alias's current target?",
        answers: [
          "set ls='ls -l'",
          "alias ls='ls -l'",
          "alias --force ls='ls -l'",
          "alias --update ls ls='ls -l'",
          "realias ls='ls -l'",
        ],
        type: 'single',
        solution: ["alias ls='ls -l'"],
      },
      {
        id: 74,
        question:
          'Which of the following commands puts the output of the command date into the shell variable mydate?',
        answers: [
          'mydate="date"',
          'mydate="exec date"',
          'mydate="$((date))"',
          'mydate="$(date)"',
          'mydate="${date}"',
        ],
        type: 'single',
        solution: ['mydate="$(date)"'],
      },
      {
        id: 75,
        question: 'What information is shown by the echo $? command?',
        answers: [
          'The process ID of the echo command.',
          'The exit value of the command executed immediately before echo.',
          'The process ID which will be used for the next command.',
          'The exit value of the echo command.',
          'The process ID of the current shell.',
        ],
        type: 'single',
        solution: [
          'The exit value of the command executed immediately before echo.',
        ],
      },
      {
        id: 76,
        question:
          'Which of the following files is not read directly by a Bash login shell?',
        answers: [
          '~/.bashrc',
          '~/.bash_profile',
          '~/.bash_login',
          '~/.profile',
          '/etc/profile',
        ],
        type: 'single',
        solution: ['~/.bashrc'],
      },
      {
        id: 77,
        question:
          "What is true about the file .profile in a user's home directory?",
        answers: [
          'It must be executable.',
          'It must call the binary of the login shell.',
          'It must use a valid shell script syntax.',
          'It must start with a shebang.',
          'It must be readable for its owner only.',
        ],
        type: 'single',
        solution: ['It must use a valid shell script syntax.'],
      },
      {
        id: 78,
        question:
          'What is true regarding the statement beginning with: #!, that is found in the first line of script? (Choose two.)',
        answers: [
          'It prevents the scripts from being executed until the ! is removed.',
          "It triggers the installation of the script's interpreter.",
          'It specifies the path and the arguments of the interpreter used to run the script.',
          'It defines the character encoding of the script.',
          'It is a comment that is ignored by the script interpreter.',
        ],
        type: 'multi',
        solution: [
          'It specifies the path and the arguments of the interpreter used to run the script.',
          'It is a comment that is ignored by the script interpreter.',
        ],
      },
      {
        id: 79,
        question: 'What output does the command seq 1 5 20 produce?',
        answers: ['1 5 10 15', '1 6 11 16', '1 2 3 4', '2 3 4 5', '5 10 15 20'],
        type: 'single',
        solution: ['1 6 11 16'],
      },
      {
        id: 80,
        question:
          'Which of the following commands lists all defines variables and functions within Bash?',
        answers: ['env', 'export', 'env -a', 'set', 'echo $ENV'],
        type: 'single',
        solution: ['set'],
      },
      {
        id: 81,
        question:
          'What information related to a user account is modified using the chage command?',
        answers: [
          'Default ownership for new files',
          'Group membership',
          'Set of commands available to the user',
          'Password expiry information',
          'Default permissions for new files',
        ],
        type: 'single',
        solution: ['Password expiry information'],
      },
      {
        id: 82,
        question:
          'Which command is used to set restrictions on the size of a core file that is created for a user when a program crashes?',
        answers: ['core', 'edquota', 'quota', 'ulimit', 'ktrace'],
        type: 'single',
        solution: ['ulimit'],
      },
      {
        id: 83,
        question:
          'How do shadow passwords improve the password security in comparison to standard no-shadow password?',
        answers: [
          'Regular users do not have access to the password hashes of shadow passwords.',
          'Every shadow password is valid for 45 days and must be changed afterwards.',
          "The system's host key is used to encrypt all shadow passwords.",
          "Shadow passwords are always combined with a public key that has to match the user's private key.",
          'Shadow passwords are stored in plain text and can be checked for weak passwords.',
        ],
        type: 'single',
        solution: [
          'Regular users do not have access to the password hashes of shadow passwords.',
        ],
      },
      {
        id: 84,
        question:
          'After editing the TCP wrapper configuration to grant specific hosts access to a service, when do these changes become effective?',
        answers: [
          'The new configuration becomes effective after restarting the respective service.',
          'The new configuration becomes effective at the next system reboot.',
          'The new configuration becomes effective when the last established connection to the service is closed.',
          'The new configuration becomes effective after restarting the tcpd service.',
          'The new configuration becomes effective immediately for all new connections.',
        ],
        type: 'single',
        solution: [
          'The new configuration becomes effective immediately for all new connections.',
        ],
      },
      {
        id: 85,
        question:
          'What is true regarding public and private SSH keys? (Choose two.)',
        answers: [
          'For each user account, there is exactly one key pair that can be used to log into that account.',
          'The private key must never be revealed to anyone.',
          'Several different public keys may be generated for the same private key.',
          "To maintain the private key's confidentiality, the SSH key pair must be created by its owner.",
          "To allow remote logins, the user's private key must be copied to the remote server.",
        ],
        type: 'multi',
        solution: [
          'The private key must never be revealed to anyone.',
          "To maintain the private key's confidentiality, the SSH key pair must be created by its owner.",
        ],
      },
      {
        id: 86,
        question:
          'Which of the following commands finds all files owned by root that have the SetUID bit set?',
        answers: [
          'find / -user root -perm -4000',
          'find / -user 0 -mode +s',
          'find / -owner root -setuid',
          'find / -owner 0 -permbits 0x100000000',
          'find / --filter uid=1 --filter pers=u+s',
        ],
        type: 'single',
        solution: ['find / -user root -perm -4000'],
      },
      {
        id: 87,
        question:
          'What command is used to add OpenSSH private keys to a running ssh-agent instance? (Specify the command name only without any path.)',
        answers: ['ssh-add'],
        type: 'fillIn',
        solution: ['ssh-add'],
      },
      {
        id: 88,
        question:
          'Which directory holds configuration files for xinetd services? (Specify the full path to the directory.)',
        answers: ['/etc/xinetd.d/'],
        type: 'fillIn',
        solution: ['/etc/xinetd.d/'],
      },
      {
        id: 89,
        question:
          'Which mechanism does ssh use to interact with the SSH agent?',
        answers: [
          'Connecting to port 2222 which is used by the system-wide SSH agent.',
          'Using the fixed socket .ssh-agent/ipc.',
          'Creating an alias replacing ssh with calls to ssh-agent.',
          'Starting ssh-agent as a child process for each ssh invocation.',
          'Evaluating environment variables such as SSH_AUTH_SOCK.',
        ],
        type: 'single',
        solution: ['Evaluating environment variables such as SSH_AUTH_SOCK.'],
      },
      {
        id: 90,
        question:
          'Which parameter of the ssh command specifies the location of the private key used for login attempts? (Specify only the option name without any values or parameters.)',
        answers: ['-i'],
        type: 'fillIn',
        solution: ['-i'],
      },
      {
        id: 91,
        question: 'Which of the following is true about IPv6?',
        answers: [
          'IPv6 no longer supports broadcast addresses.',
          'With IPv6, the TCP port numbers of most services have changed.',
          'IPv4 addresses can be used without any change with IPv6.',
          'IPv6 no longer supports multicast addresses.',
          'For IPv6, UDP and TCP have been replaced by the Rapid Transmission Protocol RTP.',
        ],
        type: 'single',
        solution: ['IPv6 no longer supports broadcast addresses.'],
      },
      {
        id: 92,
        question:
          'What is true about the following command? "nmcli device wifi connect WIFIoI"',
        answers: [
          'NetworkManager opens a new public hotspot with the SSID WIFIoI.',
          'NetworkManager creates an unconfigured new virtual network interface named WIFIoI.',
          'NetworkManager creates a new wifi connection WIFIoI and activates it.',
          'NetworkManager returns an error in case the connection WIFIoI does not exist.',
          'NetworkManager returns an error because WIFIoI is an invalid wifi device.',
        ],
        type: 'single',
        solution: [
          'NetworkManager creates a new wifi connection WIFIoI and activates it.',
        ],
      },
      {
        id: 93,
        question: `
      Which of the commands below might have produced the following output?\n
      ;; global options: +cmd
      ;; Got answer:
      ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 14368
      ;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1

      ;; OPT PSEUDOSECTION:
      ; EDNS: version: 0, flags:; udp: 4096
      ;; QuESTION SECTION:
      ;www.example.org.               IN      NS

      ;; AUTHORITY SECTION:
      example.org.            3600    IN      SOA     ns.icann.org. noc.dns.icann.org. 2019121418 7200 3600 1209600 3600

      ;; Query time: 96 msec
      ;; SERVER: 172.21.0.9#53(172.21.0.9)
      ;; WHEN: Di Jun 23 13:57:34 CEST 2020
      ;; MSG SIZE  rcvd: 97
      `,
        answers: [
          'dig -t mx www.example.org',
          'dig www.example.org',
          'dig -t ns www.example.org',
          'dig -t a www.example.org',
          'dig -t soa www.example.org',
        ],
        type: 'single',
        solution: ['dig -t ns www.example.org'],
      },
      {
        id: 94,
        question: `
      Which parameter is missing in the command
      ip link set ____ dev eth0
      to activate the previously inactive network interface eth0? (Specify the parameter only without any
      command, path or additional options.)`,
        answers: ['up'],
        type: 'fillIn',
        solution: ['up'],
      },
      {
        id: 95,
        question:
          "Which of the following states can NetworkManager show regarding the system's network connectivity? (Choose two.)",
        answers: ['up', 'portal', 'full', 'login-required', 'firewalled'],
        type: 'multi',
        solution: ['portal', 'full'],
      },
      {
        id: 96,
        question:
          'Which of the following are valid host addresses for the subnet 203.0.113.64/28? (Choose two.)',
        answers: [
          '203.0.113.64',
          '203.0.113.78',
          '203.0.113.65',
          '203.0.113.80',
          '203.0.113.81',
        ],
        type: 'multi',
        solution: ['203.0.113.78', '203.0.113.65'],
      },
      {
        id: 97,
        question:
          'Which of the following keywords can be used in the file /etc/resolv.conf? (Choose two.)',
        answers: ['substitute', 'lookup', 'search', 'nameserver', 'method'],
        type: 'multi',
        solution: ['search', 'nameserver'],
      },
      {
        id: 98,
        question: 'How does the ping command work by default?',
        answers: [
          'It sends an ICMP Echo Request to a remote host and waits to receive an ICMP Echo Response in return.',
          'It sends an ARP request to a remote host and waits to receive an ARP response in return.',
          'It sends a TCP SYN packet to a remote host and waits to receive an TCP ACK response in return.',
          'It sends a broadcast packet to all hosts on the net and waits to receive, among others, a response from the target system.',
          'It sends a UDP packet to port 0 of the remote host and waits to receive a UDP error response in return.',
        ],
        type: 'single',
        solution: [
          'It sends an ICMP Echo Request to a remote host and waits to receive an ICMP Echo Response in return.',
        ],
      },
      {
        id: 99,
        question:
          'Which of the following commands displays the number of bytes transmitted and received via the eth0 network interface? (Choose two.)',
        answers: [
          'route -v via eth0',
          'ip stats show dev eth0',
          'netstat -s -i eth0',
          'ifconfig eth0',
          'ip -s link show eth0',
        ],
        type: 'multi',
        solution: ['ifconfig eth0', 'ip -s link show eth0'],
      },
      {
        id: 100,
        question: `
      Given the following routing table:
      Kernel IP routing table
      Destination   Gateway       Genmask       Flags Metric Ref Use Iface
      0.0.0.0       192.168.178.1 0.0.0.0       UG    0      0   0   wlan0
      192.168.1.0   0.0.0.0       255.255.255.0 U     0      0   0   eth0
      192.168.2.0   192.168.1.1   255.255.255.0 U     0      0   0   eth0
      192.168.178.0 0.0.0.0       255.255.255.0 U     9      0   0   wlan0

      How would an outgoing packet to the destination 192.168.2.150 be handled?
      `,
        answers: [
          'It would be passed to the default router 192.168.178.1 on wlan0.',
          'It would be directly transmitted on the device eth0.',
          'It would be passed to the default router 255.255.255.0 on eth0.',
          'It would be passed to the router 192.168.1.1 on eth0.',
          'It would be directly transmitted on the device wlan0.',
        ],
        type: 'single',
        solution: ['It would be passed to the router 192.168.1.1 on eth0.'],
      },
      {
        id: 101,
        question:
          "Which of the following commands will delete the default gateway from the system's IP routing table? (Choose two.)",
        answers: [
          'ifconfig unset default',
          'route del default',
          'ip route del default',
          'netstat -r default',
          'sysctl ipv4.default_gw=0',
        ],
        type: 'multi',
        solution: ['route del default', 'ip route del default'],
      },
      {
        id: 102,
        question: `
      What command enables a network interface according to distribution-specific configuration, such as
        /etc/network/interfaces
      or
        /etc/sysconfig/network-scripts/ifcfg-eth0?
      (Specify only the command without any path or parameters.)
      `,
        answers: ['ifup'],
        type: 'fillIn',
        solution: ['ifup'],
      },
      {
        id: 103,
        question:
          "What is true about NetworkManager on a Linux system that uses its distribution's mechanisms to configure network interfaces? (Choose two.)",
        answers: [
          'NetworkManager reconfigures all network interfaces to use DHCP unless they are specifically managed by NetworkManager.',
          'NetworkManager must be explicitly enabled for each interface it should manage.',
          'NetworkManager by default does not change interfaces which are already configured.',
          'NetworkManager disables all interfaces which were not configured by NetworkManager.',
          "NetworkManager can be configured to use the distribution's network interface configuration.",
        ],
        type: 'multi',
        solution: [
          'NetworkManager by default does not change interfaces which are already configured.',
          "NetworkManager can be configured to use the distribution's network interface configuration.",
        ],
      },
      {
        id: 104,
        question: 'Which standardized TCP port is used by HTTPS services?',
        answers: ['25', '80', '8080', '443', '636'],
        type: 'single',
        solution: ['443'],
      },
      {
        id: 105,
        question:
          'Which of the following environment variables can be defined in locale.conf? (Choose two.)',
        answers: [
          'LC_ALL',
          'LC_USERNAME',
          'LC_UTF8',
          'LC_GEOGRAPHY',
          'LC_TIME',
        ],
        type: 'multi',
        solution: ['LC_ALL', 'LC_TIME'],
      },
      {
        id: 106,
        question:
          "Which of the following commands sets the system's time zone to the Canadian Eastern Time?",
        answers: [
          'localegen -t -f /usr/share/zoneinfo/Canada/Eastern > /etc/locate.tz',
          'tzconf /etc/localtime',
          "sysctl -w clock.tz='Canada/Eastern'",
          'modprobe tz_ca_est',
          'ln -sf /usr/share/zoneinfo/Canada/Eastern /etc/localtime',
        ],
        type: 'single',
        solution: ['ln -sf /usr/share/zoneinfo/Canada/Eastern /etc/localtime'],
      },
      {
        id: 107,
        question:
          "What option to useradd creates a new user's home directory and provisions it with a set of standard files? (Specify only the option name without any values or parameters.)",
        answers: ['-m'],
        type: 'fillIn',
        solution: ['-m'],
      },
      {
        id: 108,
        question:
          'How can a specific user be prevented from scheduling tasks with at?',
        answers: [
          'By adding the specific user to the /etc/at.allow file.',
          'By adding the specific user to the [deny] section in the /etc/atd.conf file.',
          'By adding the specific user to the nojobs group.',
          'By adding the specific user to the /etc/at.deny file.',
          'By executing the atd --deny [user] command.',
        ],
        type: 'single',
        solution: ['By adding the specific user to the /etc/at.deny file.'],
      },
      {
        id: 109,
        question:
          "Which file contains the data of the last change of a user's password?",
        answers: [
          '/etc/gshadow',
          '/etc/passwd',
          '/etc/pwdlog',
          '/var/log/shadow',
          '/etc/shadow',
        ],
        type: 'single',
        solution: ['/etc/shadow'],
      },
      {
        id: 110,
        question:
          'Which of the following fields can be found in the /etc/group file? (Choose two.)',
        answers: [
          'The home directory of the group.',
          'The list of users that belong to the group.',
          'The name of the group.',
          'The default group ACL.',
          'The description of the group.',
        ],
        type: 'multi',
        solution: [
          'The list of users that belong to the group.',
          'The name of the group.',
        ],
      },
      {
        id: 111,
        question:
          'Which of the following sections exists in a systemd timer unit?',
        answers: ['[Events]', '[Timer]', '[cron]', '[Schedule]', '[Trigger]'],
        type: 'single',
        solution: ['[Timer]'],
      },
      {
        id: 112,
        question:
          'Which of the following getent invocations lists all existing users?',
        answers: [
          'getent homes',
          'getent uids',
          'getent passwd',
          'getent users',
          'getent logins',
        ],
        type: 'single',
        solution: ['getent passwd'],
      },
      {
        id: 113,
        question: `
      Given the following user's crontab entry:
        15 14 * * 1-5 /usr/local/bin/example.sh
      When will the script /usr/local/bin/example.sh be executed?
      `,
        answers: [
          'At 14:15 local time, January till May.',
          'At 15:14 local time, 1st to 5th day of month.',
          'At 14:15 local time, February till June.',
          'At 14:15 local time, 1st to 5th day of month.',
          'At 14:15 local time, Monday to Friday',
        ],
        type: 'single',
        solution: ['At 14:15 local time, Monday to Friday'],
      },
      {
        id: 114,
        question:
          'If neither cron.allow nor cron.deny exist in /etc/, which of the following is true?',
        answers: [
          'Without additional configuration, all users may create user specific crontabs.',
          'Without additional configuration, only root may create user specific crontabs.',
          "The cron daemon will refuse to start and report missing files in the system's logfile.",
          'When a user creates a user specific crontab the system administrator must approve it explicitly.',
          'The default settings of /etc/crond.conf define whether or not user specific crontabs are generally allowed or not.',
        ],
        type: 'single',
        solution: [
          'Without additional configuration, only root may create user specific crontabs.',
        ],
      },
      {
        id: 115,
        question: 'What is the purpose of the iconv command?',
        answers: [
          'It converts bitmap images from one format to another such as PNG to JPEG.',
          'It verifies that the root directory tree compiles to all conventions from the Filesystem Hierarchy Standard (FHS).',
          'It converts files from one character set to an other.',
          'It changes the mode of an inode in the ext4 filesystem.',
          'It displays additional meta information from icon files ending in .ico.',
        ],
        type: 'single',
        solution: ['It converts files from one character set to an other.'],
      },
      {
        id: 116,
        question:
          'Which character in the password field of /etc/passwd is used to indicate that the encrypted password is stored in /etc/shadow?',
        answers: ['*', '!', 's', '#', 'x'],
        type: 'single',
        solution: ['x'],
      },
      {
        id: 117,
        question: 'What does the term Braille Display refer to?',
        answers: [
          'A standardized high contract graphical theme for desktop applications?',
          'A Linux desktop environment similar to KDE and GNOME.',
          'A legacy display technology superseded by LCD.',
          'A physical representation of characters using small dots.',
          'A standard file format for data exchange, similar to XML.',
        ],
        type: 'single',
        solution: ['A physical representation of characters using small dots.'],
      },
      {
        id: 118,
        question:
          'Which environment variable is used by an X11 client to determine the X Server to connect to? (Specify only the variable name without any preceding commands or values.)',
        answers: ['DISPLAY'],
        type: 'fillIn',
        solution: ['DISPLAY'],
      },
      {
        id: 119,
        question:
          'Which of the following tasks are handled by a display manager like XDM or KDM? (Choose two.)',
        answers: [
          'Configure additional devices like new monitors or projectors when they are attached.',
          'Start and prepare the desktop environment for the user.',
          'Create an X11 configuration file for the current graphic devices and monitors.',
          'Lock the screen when the user was inactive for a configurable amount of time.',
          'Handle the login of a user.',
        ],
        type: 'multi',
        solution: [
          'Start and prepare the desktop environment for the user.',
          'Handle the login of a user.',
        ],
      },
      {
        id: 120,
        question:
          'Which of the following protocols is designed to access the video card output of a virtual machine?',
        answers: ['KDE', 'X11', 'Xfce', 'SPICE', 'XDMCP'],
        type: 'single',
        solution: ['SPICE'],
      },
    ];

    const questions101: Question[] = [
      {
        id: 1,
        question:
          'Which type of file system is created by mkfs when it is executed with the block device name only and without any additional parameters?',
        answers: ['XFS', 'VFAT', 'ext2', 'ext3', 'ext4'],
        type: 'single',
        solution: ['ext2'],
      },
      {
        id: 2,
        question:
          'Which umask value ensures that new directories can be read, written and listed by their owning user, read and listed by their owning group and are not accessible at all for everyone else?',
        answers: ['0750', '0027', '0036', '7640', '0029'],
        type: 'single',
        solution: ['0027'],
      },
      {
        id: 3,
        question:
          'Which of the following commands changes the number of days before the ext3 filesystem on /dev/sda1 has to run through a full filesystem check while booting?',
        answers: [
          'tune2fs -d 200 /dev/sda1',
          'tune2fs -i 200 /dev/sda1',
          'tune2fs -c 200 /dev/sda1',
          'tune2fs -n 200 /dev/sda1',
          'tune2fs --days 200 /dev/sda1',
        ],
        type: 'single',
        solution: ['tune2fs -i 200 /dev/sda1'],
      },
      {
        id: 4,
        question:
          'Which is the default percentage of reserved space for the root user on new ext4 filesystems?',
        answers: ['10%', '3%', '15%', '0%', '5%'],
        type: 'single',
        solution: ['5%'],
      },
      {
        id: 5,
        question:
          'Which of the following is true when a file system, which is neither listed in /etc/fstab nor known to system, is mounted manually?',
        answers: [
          'systemd ignores any manual mounts which are not done using the systemctl mount command',
          'The command systemctl mountsync can be used to create a mount unit based on the existing mount',
          'systemd automatically generates a mount unit and monitors the mount point without changing it',
          'Unless a systemd mount unit is created, systemd unmounts the file system after a short period of time',
          'systemctl unmount must be used to remove the mount because system opens a file descriptor on the mount point',
        ],
        type: 'single',
        solution: [
          'systemd automatically generates a mount unit and monitors the mount point without changing it',
        ],
      },
      {
        id: 6,
        question:
          'Which program updates the database that is used by the locate command? (Specify ONLY the command without any path or parameters).',
        answers: ['updatedb'],
        type: 'fillIn',
        solution: ['updatedb'],
      },
      {
        id: 7,
        question: 'What does the command mount --bind do?',
        answers: [
          'It makes the contents of one directory available in another directory',
          'It mounts all available filesystems to the current directory',
          'It mounts all user mountable filesystems to the user’s home directory',
          'It mounts all file systems listed in /etc/fstab which have the option userbindset',
          'It permanently mounts a regular file to a directory',
        ],
        type: 'single',
        solution: [
          'It makes the contents of one directory available in another directory',
        ],
      },
      {
        id: 8,
        question:
          'Consider the following output from the command ls -i: 525385 a.txt How would a new file named c.txt be created with the same inode number as a.txt (Inode 525385)?',
        answers: [
          'ln -h a.txt c.txt',
          'ln c.txt a.txt',
          'ln a.txt c.txt',
          'ln -f c.txt a.txt',
          'ln -i 525385 c.txt',
        ],
        type: 'single',
        solution: ['ln a.txt c.txt'],
      },
      {
        id: 9,
        question:
          'Consider the following directory: drwxrwxr-x 2 root sales 4096 Jan 1 15:21 sales Which command ensures new files created within the directory sales are owned by the group sales? (Choose two.)',
        answers: [
          'chmod g+s sales',
          'setpol -R newgroup=sales sales',
          'chgrp -p sales sales',
          'chown --persistent *.sales sales',
          'chmod 2775 sales',
        ],
        type: 'multi',
        solution: ['chmod g+s sales', 'chmod 2775 sales'],
      },
      {
        id: 10,
        question:
          'In order to display all currently mounted filesystems, which of the following commands could be used? (Choose two.)',
        answers: [
          'cat /proc/self/mounts',
          'free',
          'lsmounts',
          'mount',
          'cat /proc/filesystems',
        ],
        type: 'multi',
        solution: ['cat /proc/self/mounts', 'mount'],
      },
      {
        id: 11,
        question:
          'Which command displays the current disk space usage for all mounted file systems? (Specify ONLY the command without any path or parameters.)',
        answers: ['updatedb'],
        type: 'fillIn',
        solution: ['updatedb'],
      },
      {
        id: 12,
        question:
          'Which chown command changes the ownership to dave and the group to staff on a file named data.txt?',
        answers: [
          'chown dave/staff data.txt',
          'chown -u dave -g staff data.txt',
          'chown --user dave --group staff data.txt',
          'chown dave+staff data.txt',
          'chown dave:staff data.txt',
        ],
        type: 'single',
        solution: ['chown dave:staff data.txt'],
      },
      {
        id: 13,
        question:
          'When considering the use of hard links, what are valid reasons not to use hard links?',
        answers: [
          'Hard links are not available on all Linux systems because traditional filesystems, such as ext4, do not support them',
          'Each hard link has individual ownership, permissions and ACLs which can lead to unintended disclosure of file content',
          'Hard links are specific to one filesystem and cannot point to files on another filesystem',
          'If users other than root should be able to create hard links, suln has to be installed and configured',
          'When a hard linked file is changed, a copy of the file is created and consumes additional space',
        ],
        type: 'single',
        solution: [
          'Hard links are specific to one filesystem and cannot point to files on another filesystem',
        ],
      },
      {
        id: 14,
        question:
          'In compliance with the FHS, in which of the directories are man pages found?',
        answers: [
          '/opt/man/',
          '/usr/doc/',
          '/usr/share/man/',
          '/var/pkg/man',
          '/var/man/',
        ],
        type: 'single',
        solution: ['/usr/share/man/'],
      },
      {
        id: 15,
        question:
          'Which file in the /proc filesystem lists parameters passed from the bootloader to the kernel? (Specify the file name only without any path.)',
        answers: ['cmdline'],
        type: 'fillIn',
        solution: ['cmdline'],
      },
      {
        id: 16,
        question:
          'What is the process ID number of the init process on a System V init based system?',
        answers: [
          '-1',
          '0',
          '1',
          'It is different with each reboot',
          'It is set to the current run level',
        ],
        type: 'single',
        solution: ['1'],
      },
      {
        id: 17,
        question:
          'Which daemon handles power management events on a Linux system?',
        answers: ['acpid', 'batteryd', 'pwrmgntd', 'psd', 'inetd'],
        type: 'single',
        solution: ['acpid'],
      },
      {
        id: 18,
        question:
          'Which of the following statements are true about the boot sequence of a PC using a BIOS? (Choose two.)',
        answers: [
          'Some parts of the boot process can be configured from the BIOS',
          'Linux does not require the assistance of the BIOS to boot a computer',
          'The BIOS boot process starts only if secondary storage, such as the hard disk, is functional',
          'The BIOS initiates the boot process after turning the computer on',
          'The BIOS is started by loading hardware drivers from secondary storage, such as the hard disk',
        ],
        type: 'multi',
        solution: [
          'Some parts of the boot process can be configured from the BIOS',
          'The BIOS initiates the boot process after turning the computer on',
        ],
      },
      {
        id: 19,
        question: 'What is true regarding UEFI firmware? (Choose two.)',
        answers: [
          'It can read and interpret partition tables',
          'It can use and read certain file systems',
          'It stores its entire configuration on the /boot/ partition',
          'It is stored in a special area within the GPT metadata',
          'It is loaded from a fixed boot disk position',
        ],
        type: 'multi',
        solution: [
          'It can read and interpret partition tables',
          'It can use and read certain file systems',
        ],
      },
      {
        id: 20,
        question:
          'A faulty kernel module is causing issues with a network interface card. Which of the following actions ensures that this module is not loaded automatically when the system boots?',
        answers: [
          'Using lsmod --remove --autocleanwithout specifying the name of a specific module',
          'Using modinfo -kfollowed by the name of the offending module',
          'Using modprobe -rfollowed by the name of the offending module',
          'Adding a blacklist line including the name of the offending module to the file /etc/modprobe.d/blacklist.conf',
          'Deleting the kernel module’s directory from the file system and recompiling the kernel, including its modules',
        ],
        type: 'single',
        solution: [
          'Adding a blacklist line including the name of the offending module to the file /etc/modprobe.d/blacklist.conf',
        ],
      },
      {
        id: 21,
        question:
          'When is the content of the kernel ring buffer reset? (Choose two.)',
        answers: [
          'When the ring buffer is explicitly reset using the command dmesg --clear',
          'When the ring buffer is read using dmesg without any additional parameters',
          'When a configurable amount of time, 15 minutes by default, has passed',
          'When the kernel loads a previously unloaded kernel module',
          'When the system is shut down or rebooted',
        ],
        type: 'multi',
        solution: [
          'When the ring buffer is explicitly reset using the command dmesg --clear',
          'When the system is shut down or rebooted',
        ],
      },
      {
        id: 22,
        question:
          'What is the first program the Linux kernel starts at boot time when using System V init?',
        answers: [
          '/lib/init.so',
          '/proc/sys/kernel/init',
          '/etc/rc.d/rcinit',
          '/sbin/init',
          '/boot/init',
        ],
        type: 'single',
        solution: ['/sbin/init'],
      },
      {
        id: 23,
        question:
          'A Debian package creates several files during its installation. Which of the following commands searches for packages owning the file /etc/debian_version?',
        answers: [
          'apt-get search /etc/debian_version',
          'apt -r /etc/debian_version',
          'find /etc/debian_version -dpkg',
          'dpkg -S  /etc/debian_version',
          'apt-file /etc/debian_version',
        ],
        type: 'single',
        solution: ['dpkg -S  /etc/debian_version'],
      },
      {
        id: 24,
        question: 'What is contained on the EFI System Partition?',
        answers: [
          'The Linux root file system',
          'The first stage boot loader',
          'The default swap space file',
          'The Linux default shell binaries',
          'The user home directories',
        ],
        type: 'single',
        solution: ['The first stage boot loader'],
      },
      {
        id: 25,
        question:
          'Which of the following directories on a 64 bit Linux system typically contain shared libraries? (Choose two.)',
        answers: [
          '~/.lib64/',
          '/usr/lib64/',
          '/var/lib64/',
          '/lib64/',
          '/opt/lib64/',
        ],
        type: 'multi',
        solution: ['/usr/lib64/', '/lib64/'],
      },
      {
        id: 26,
        question:
          'Which of the following files exist in a standard GRUB 2 installation? (Choose two.)',
        answers: [
          '/boot/grub/stages/stage0',
          '/boot/grub/i386-pc/lvm.mod',
          '/boot/grub/fstab',
          '/boot/grub/grub.cfg',
          '/boot/grub/linux/vmlinuz',
        ],
        type: 'multi',
        solution: ['/boot/grub/i386-pc/lvm.mod', '/boot/grub/grub.cfg'],
      },
      {
        id: 27,
        question:
          'Which of the following commands installs all packages with a name ending with the string foo?',
        answers: [
          'zypper get "*foo"',
          'zypper update "foo?"',
          'zypper force "foo*"',
          'zypper install "*foo"',
          'zypper add ".*foo"',
        ],
        type: 'single',
        solution: ['zypper install "*foo"'],
      },
      {
        id: 28,
        question:
          'Which of the following properties of a Linux system should be changed when a virtual machine is cloned? (Choose two.)',
        answers: [
          'The partitioning scheme',
          'The file system',
          'The D-Bus Machine ID',
          'The permissions of /root/',
          'The SSH host keys',
        ],
        type: 'multi',
        solution: ['The D-Bus Machine ID', 'The SSH host keys'],
      },
      {
        id: 29,
        question:
          'Which of the following commands installs GRUB 2 into the master boot record on the third hard disk?',
        answers: [
          'grub2 install /dev/sdc',
          'grub-mkrescue /dev/sdc',
          'grub-mbrinstall /dev/sdc',
          'grub-setup /dev/sdc',
          'grub-install /dev/sdc',
        ],
        type: 'single',
        solution: ['grub-install /dev/sdc'],
      },
      {
        id: 30,
        question:
          'Which of the following partition types is used for Linux swap spaces when partitioning hard disk drives?',
        answers: ['7', '82', '83', '8e', 'fd'],
        type: 'single',
        solution: ['82'],
      },
      {
        id: 31,
        question:
          'What is true regarding the configuration of yum? (Choose two.)',
        answers: [
          'Changes to the repository configuration become active after running yum confupdate',
          'Changes to the yum configuration become active after restarting the yumd service',
          'The configuration of package repositories can be divided into multiple files',
          'Repository configurations can include variables such as $basearch or $releasever',
          'In case /etc/yum.repos.d/ contains files, /etc/yum.config ignored',
        ],
        type: 'multi',
        solution: [
          'The configuration of package repositories can be divided into multiple files',
          'Repository configurations can include variables such as $basearch or $releasever',
        ],
      },
      {
        id: 32,
        question:
          'Which of the following apt-get subcommands installs the newest versions of all currently installed packages?',
        answers: [
          'auto-update',
          'dist-upgrade',
          'full-upgrade',
          'install',
          'update',
        ],
        type: 'single',
        solution: ['dist-upgrade'],
      },
      {
        id: 33,
        question:
          'Which command uninstalls a package but keeps its configuration files in case the package is re-installed?',
        answers: [
          'dpkg -s pkgname',
          'dpkg -L pkgname',
          'dpkg -P pkgname',
          'dpkg -v pkgname',
          'dpkg -r pkgname',
        ],
        type: 'single',
        solution: ['dpkg -r pkgname'],
      },
      {
        id: 34,
        question:
          'Which of the following commands lists the dependencies of the RPM package file foo.rpm?',
        answers: [
          'rpm -qpR foo.rpm',
          'rpm -dep foo',
          'rpm -ld foo.rpm',
          'rpm -R foo.rpm',
          'rpm -pD foo',
        ],
        type: 'single',
        solution: ['rpm -qpR foo.rpm'],
      },
      {
        id: 35,
        question:
          'What is the maximum niceness value that a regular user can assign to a process with the nice command when executing a new process?',
        answers: ['9', '15', '19', '49', '99'],
        type: 'single',
        solution: ['19'],
      },
      {
        id: 36,
        question:
          'Which of the following commands list all files and directories within the /tmp/ directory and its subdirectories which are owned by the user root? (Choose two.)',
        answers: [
          'find /tmp -user root -print',
          'find -path /tmp -uid root',
          'find /tmp -uid root -print',
          'find /tmp -user root',
          'find -path /tmp -user root -print',
        ],
        type: 'multi',
        solution: ['find /tmp -user root -print', 'find /tmp -user root'],
      },
      {
        id: 37,
        question:
          'Which of the following are valid stream redirection operators within Bash? (Choose two.)',
        answers: ['<', '#>', '%>', '>>>', '2>&1'],
        type: 'multi',
        solution: ['<', '2>&1'],
      },
      {
        id: 38,
        question:
          'Which of the following vi commands deletes two lines, the current and the following line?',
        answers: ['d2', '2d', '2dd', 'dd2', 'de12'],
        type: 'single',
        solution: ['2dd'],
      },
      {
        id: 39,
        question:
          'The command dbmaint & was used to run dbmaint in the background. However, dbmaint is terminated after logging out of the system. Which alternative dbmaint invocation lets dbmaint continue to run, even when the user, running the program, logs out?',
        answers: [
          'job -b dmaint',
          'dbmaint &>/dev/pts/null',
          'nohup dbmaint &',
          'bg dbmaint',
          'wait dbmaint',
        ],
        type: 'single',
        solution: ['nohup dbmaint &'],
      },
      {
        id: 40,
        question:
          'From a Bash shell, which of the following commands directly execute the instructions from the file /usr/local/bin/runme.sh without starting a subshell? (Choose two.)',
        answers: [
          'source /usr/local/bin/runme.sh',
          '/usr/local/bin/runme.sh',
          '/bin/bash /usr/local/bin/runme.sh',
          './usr/local/bin/runme.sh',
          'run /usr/local/bin/runme.sh',
        ],
        type: 'multi',
        solution: [
          'source /usr/local/bin/runme.sh',
          './usr/local/bin/runme.sh',
        ],
      },
      {
        id: 41,
        question:
          'Which program runs a command in specific intervals and refreshes the display of the program’s output? (Specify ONLY the command without any path or parameters.)',
        answers: ['watch'],
        type: 'fillIn',
        solution: ['watch'],
      },
      {
        id: 42,
        question:
          'Immediately after deleting 3 lines of text in vi and moving the cursor to a different line, which single character command will insert the deleted content below the current line?',
        answers: [
          'i (lowercase)',
          'p (lowercase)',
          'P (uppercase)',
          'U (uppercase)',
          'u (lowercase)',
        ],
        type: 'single',
        solution: ['p (lowercase)'],
      },
      {
        id: 43,
        question:
          'Which of the following commands changes all CR-LF line breaks in the text file userlist.txt to Linux standard LF line breaks and stores the result in newlist.txt?',
        answers: [
          "tr -d '\\r' < userlist.txt > newlist.txt",
          "tr -c '\\n\\r' '' <newlist.txt> userlist.txt",
          "tr '\\r\\n' '' <userlist.txt> newlist.txt",
          "tr '\\r' '\\n' userlist.txt newlist.txt",
          "tr -s '/^M/^J/' userlist.txt newlist.txt",
        ],
        type: 'single',
        solution: ["tr -d '\\r' < userlist.txt > newlist.txt"],
      },
      {
        id: 44,
        question:
          'Given the following input stream: txt1.txt  atxt.txt   txtB.txt Which of the following regular expressions turns this input stream into the following output stream?txt1.bak.txt   atxt.bak.txt  txtB.bak.txt',
        answers: [
          's/^.txt/.bak/',
          's/txt/bak.txt/',
          's/txt$/bak.txt/',
          's/^txt$/.bak^/',
          's/[.txt]/.bak$1/',
        ],
        type: 'single',
        solution: ['s/txt$/bak.txt/'],
      },
      {
        id: 45,
        question:
          'Which command must be entered before exiting vi to save the current file as filea.txt?',
        answers: [
          '%s filea.txt',
          '%w filea.txt',
          ':save filea.txt',
          ':w filea.txt',
          ':s filea.txt',
        ],
        type: 'single',
        solution: [':w filea.txt'],
      },
      {
        id: 46,
        question:
          'Which of the following signals is sent to a process when the key combination Ctrl+C is pressed on the keyboard?',
        answers: ['SIGTERM', 'SIGCONT', 'SIGSTOP', 'SIGKILL', 'SIGINT'],
        type: 'single',
        solution: ['SIGINT'],
      },
      {
        id: 47,
        question:
          'Which of the following commands displays the output of the foo command on the screen and also writes it to a file called /tmp/foodata?',
        answers: [
          'foo | less /tmp/foodata',
          'foo | cp /tmp/foodata',
          'foo > /tmp/foodata',
          'foo | tee /tmp/foodata',
          'foo > stdout >> /tmp/foodata',
        ],
        type: 'single',
        solution: ['foo | tee /tmp/foodata'],
      },
      {
        id: 48,
        question:
          "What output will be displayed when the user fred executes the following command? echo 'fred $USER’",
        answers: [
          'fred fred',
          'fred /home/fred/',
          "'fred $USER’",
          'fred $USER',
          "'fred fred’",
        ],
        type: 'single',
        solution: ['fred $USER'],
      },
      {
        id: 49,
        question:
          'Which of the following commands displays the path to the executable file that would be executed when the command foo is invoked?',
        answers: [
          'lsattr foo',
          'apropos foo',
          'locate foo',
          'whatis foo',
          'which foo',
        ],
        type: 'single',
        solution: ['which foo'],
      },
      {
        id: 50,
        question:
          'When redirecting the output of find to the xargs command, what option to find is useful if the filenames contain spaces?',
        answers: [
          '-rep-space',
          '-printnul',
          '-nospace',
          '-ignore-space',
          '-print0',
        ],
        type: 'single',
        solution: ['-print0'],
      },
      {
        id: 51,
        question:
          'Which of the following commands can be used to determine how long the system has been running? (Choose two.)',
        answers: ['uptime', 'up', 'time --up', 'uname -u', 'top'],
        type: 'multi',
        solution: ['uptime', 'top'],
      },
      {
        id: 52,
        question:
          'What is true regarding the command ls > files  if files does not exist?',
        answers: [
          'The output of ls is printed to the terminal',
          'files is created and contains the output of ls',
          'An error message is shown and ls is not executed',
          'The command files is executed and receives the output of ls',
          'Any output of ls is discarded',
        ],
        type: 'single',
        solution: ['files is created and contains the output of ls'],
      },
      {
        id: 53,
        question:
          'Which of the following files, located in a user’s home directory, contains the Bash history?',
        answers: [
          '.bashrc_history',
          '.bash_histfile',
          '.history',
          '.bash_history',
          '.history_bash',
        ],
        type: 'single',
        solution: ['.bash_history'],
      },
      {
        id: 54,
        question:
          'Which wildcards will match the following filenames? (Choose two.) \n ttyS0 \n ttyS1 \n ttyS2 \n',
        answers: [
          'ttyS[1-5]',
          'tty?[0-5]',
          'tty*2',
          'tty[A-Z][012]',
          'tty[Ss][02]',
        ],
        type: 'multi',
        solution: ['tty?[0-5]', 'tty[A-Z][012]'],
      },
      {
        id: 55,
        question:
          'Which of the following commands redirects the output of ls to standard error?',
        answers: ['ls >-1', 'ls <<ERR', 'ls >&2', 'ls >>2', 'ls |error'],
        type: 'single',
        solution: ['ls >&2'],
      },
      {
        id: 56,
        question:
          'Which of the following commands displays the contents of a gzip compressed tar archive?',
        answers: [
          'gzip archive.tgz | tar xvf',
          'tar -fzt archive.tgz',
          'gzip -d archive.tgz | tar tvf',
          'tar cf archive.tgz',
          'tar ztf archive.tgz',
        ],
        type: 'single',
        solution: ['tar ztf archive.tgz'],
      },
      {
        id: 57,
        question:
          'Which of the following commands prints a list of usernames (first column) and their primary group (fourth column) from the /etc/passwd file?',
        answers: [
          'fmt -f 1,4 /etc/passwd',
          'cut -d : -f 1,4 /etc/passwd',
          'sort -t : -k 1,4 /etc/passwd',
          'paste -f 1,4 /etc/passwd',
          'split -c 1,4 /etc/passwd',
        ],
        type: 'single',
        solution: ['cut -d : -f 1,4 /etc/passwd'],
      },
      {
        id: 58,
        question:
          'Which of the following regular expressions represents a single upper-case letter?',
        answers: [':UPPER:', '[A-Z]', '!a-z', '%C', '{AZ}'],
        type: 'single',
        solution: ['[A-Z]'],
      },
      {
        id: 59,
        question:
          'Which command is used to start another command with a given nice level? (Specify ONLY the command without any path or parameters.)',
        answers: ['nice'],
        type: 'fillIn',
        solution: ['nice'],
      },
      {
        id: 60,
        question:
          'Given a log file loga.log with timestamps of the format DD/MM/YYYY:hh:mm:ss, which command filters out all log entries in the time period between 8:00 am and 8:59 am?',
        answers: [
          "grep -E ':08:[09]+:[09]+’ loga.log",
          "grep -E ':08:[00]+’ loga.log",
          "grep -E loga.log ':08:[0-9]+:[0-9]+’",
          "grep loga.log ':08:[0-9]:[0-9]’",
          "grep -E ':08:[0-9]+:[0-9]+’ loga.log",
        ],
        type: 'single',
        solution: ["grep -E ':08:[0-9]+:[0-9]+’ loga.log"],
      },
      {
        id: 61,
        question:
          'Instead of supplying an explicit device in /etc/fstab for mounting, what other options may be used to identify the intended partition? (Choose two.)',
        answers: ['LABEL', 'ID', 'FIND', 'NAME', 'UUID'],
        type: 'multi',
        solution: ['LABEL', 'UUID'],
      },
      {
        id: 62,
        question:
          'A yum repository can declare sets of related packages. Which yum command installs all packages belonging to the group admintools?',
        answers: [
          'yum pkgsel --install admintools',
          'yum install admintools/*',
          'yum groupinstall admintools',
          'yum taskinstall admintools',
          'yum collection install admintools',
        ],
        type: 'single',
        solution: ['yum groupinstall admintools'],
      },
      {
        id: 63,
        question:
          'What directory contains configuration files for additional yum repositories? (Specify the full path to the directory.)',
        answers: ['/etc/yum.repos.d'],
        type: 'fillIn',
        solution: ['/etc/yum.repos.d'],
      },
      {
        id: 64,
        question:
          'Which of the following commands installs the GRUB boot files into the currently active file systems and the boot loader into the first partition of the first disk?',
        answers: [
          'grub-install /dev/sda',
          'grub-install /dev/sda1',
          'grub-install current /dev/sda0',
          'grub-install /dev/sda0',
          'grub-install current /dev/sda1',
        ],
        type: 'single',
        solution: ['grub-install /dev/sda1'],
      },
      {
        id: 65,
        question:
          'Which of the following files are found in the /boot/ filesystem? (Choose two.)',
        answers: [
          'Linux kernel images',
          'Bash shell binaries',
          'systemd target and service units',
          'Initial ramdisk images',
          'fsck binaries',
        ],
        type: 'multi',
        solution: ['Linux kernel images', 'Initial ramdisk images'],
      },
      {
        id: 66,
        question:
          'Which file defines the network locations from where the Debian package manager downloads software packages?',
        answers: [
          '/etc/dpkg/dpkg.cfg',
          '/etc/apt/apt.conf.d',
          '/etc/apt/apt.conf',
          '/etc/dpkg/dselect.cfg',
          '/etc/apt/sources.list',
        ],
        type: 'single',
        solution: ['/etc/apt/sources.list'],
      },
      {
        id: 67,
        question:
          'When removing a package on a system using dpkg package management, which dpkg option ensures configuration files are removed as well?',
        answers: ['--clean', '--purge', '--vacuum', '--remove', '--declare'],
        type: 'single',
        solution: ['--purge'],
      },
      {
        id: 68,
        question:
          'Which of the following statements are correct when comparing Linux containers with traditional virtual machines (e.g. LXC vs. KVM)? (Choose three.)',
        answers: [
          'Containers are a lightweight virtualization method where the kernel controls process isolation and resource management.',
          'Fully virtualized machines can run any operating system for a specific hardware architecture within the virtual machine.',
          'Containers are completely decoupled from the host system’s physical hardware and can only use emulated virtual hardware devices.',
          'The guest environment for fully virtualized machines is created by a hypervisor which provides virtual and emulated hardware devices.',
          'Containers on the same host can use different operating systems, as the container hypervisor creates separate kernel execution.',
        ],
        type: 'multi',
        solution: [
          'Containers are a lightweight virtualization method where the kernel controls process isolation and resource management.',
          'Fully virtualized machines can run any operating system for a specific hardware architecture within the virtual machine.',
          'The guest environment for fully virtualized machines is created by a hypervisor which provides virtual and emulated hardware devices.',
        ],
      },
      {
        id: 69,
        question:
          'The installation of a local Debian package failed due to unsatisfied dependencies. Which of the following commands installs missing dependencies and completes the interrupted package installation?',
        answers: [
          'dpkg --fix --all',
          'apt-get autoinstall',
          'dpkg-reconfigure --all',
          'apt-get all',
          'apt-get install -f',
        ],
        type: 'single',
        solution: ['apt-get install -f'],
      },
      {
        id: 70,
        question:
          'Which of the following commands lists all currently installed packages when using RPM package management?',
        answers: [
          'yum --query --all',
          'yum --list --installed',
          'rpm --query --list',
          'rpm --list --installed',
          'rpm --query --all',
        ],
        type: 'single',
        solution: ['rpm --query --all'],
      },
      {
        id: 71,
        question:
          'Which of the following commands are valid in the GRUB 2 configuration file? (Choose two.)',
        answers: ['menuentry', 'uefi', 'pxe-ifconfig', 'insmod', 'kpartx'],
        type: 'multi',
        solution: ['menuentry', 'insmod'],
      },
      {
        id: 72,
        question: 'What is the purpose of the ldd command?',
        answers: [
          'It lists which shared libraries a binary needs to run.',
          'It installs and updates installed shared libraries.',
          'It turns a dynamically linked binary into a static binary.',
          'It defines which version of a library should be used by default.',
          'It runs a binary with an alternate library search path.',
        ],
        type: 'single',
        solution: ['It lists which shared libraries a binary needs to run.'],
      },
      {
        id: 73,
        question:
          'What can the Logical Volume Manager (LVM) be used for? (Choose three.)',
        answers: [
          'To create snapshots.',
          'To dynamically change the size of logical volumes.',
          'To dynamically create or delete logical volumes.',
          'To create RAID 9 arrays.',
          'To encrypt logical volumes.',
        ],
        type: 'multi',
        solution: [
          'To create snapshots.',
          'To dynamically change the size of logical volumes.',
          'To dynamically create or delete logical volumes.',
        ],
      },
      {
        id: 74,
        question:
          'What are the main differences between GPT and MBR partition tables regarding maximum number and size of partitions? (Choose two.)',
        answers: [
          'MBR can handle partition sizes up to 4 TB, whereas GPT supports partition sizes up to 128 ZB.',
          'By default, GPT can manage up to 128 partitions while MBR only supports four primary partitions.',
          'By default, GPT can manage up to 64 partitions while MBR only supports 16 primary partitions.',
          'MBR can handle partition sizes up to 2.2 TB, whereas GPT supports sizes up to 9.4 ZB.',
          'Both GPT and MBR support up to four primary partitions, each with up to 4096 TB.',
        ],
        type: 'multi',
        solution: [
          'By default, GPT can manage up to 128 partitions while MBR only supports four primary partitions.',
          'MBR can handle partition sizes up to 2.2 TB, whereas GPT supports sizes up to 9.4 ZB.',
        ],
      },
      {
        id: 75,
        question:
          'A backup software heavily uses hard links between files which have not been changed in between two backup runs. Which benefits are realized due to these hard links? (Choose two.)',
        answers: [
          'The old backups can be moved to slow backup media, such as tapes, while still serving as hard link target in new backups.',
          'The backup runs faster because hard links are asynchronous operations, postponing the copy operation to a later point in time.',
          'The backup is guaranteed to be uncharged because a hard linked file cannot be modified after its creation.',
          'The backup consumes less space because the hard links point to the same data on disk instead of storing redundant copies.',
          'The backup runs faster because, instead of copying the data of each file, hard links only change file system meta data.',
        ],
        type: 'multi',
        solution: [
          'The backup consumes less space because the hard links point to the same data on disk instead of storing redundant copies.',
          'The backup runs faster because, instead of copying the data of each file, hard links only change file system meta data.',
        ],
      },
      {
        id: 76,
        question:
          'Which file from the /proc/ filesystem contains a list of all currently mounted devices? (Specify the full name of the file, including path.)',
        answers: ['/proc/mounts'],
        type: 'fillIn',
        solution: ['/proc/mounts'],
      },
      {
        id: 77,
        question:
          'How many fields are in a syntactically correct line of /etc/fstab?',
        answers: ['3', '4', '5', '6', '7'],
        type: 'single',
        solution: ['6'],
      },
      {
        id: 78,
        question:
          'Running chmod 640 filea.txt as a regular user doesn’t update filea.txt’s permission. What might be a reason why chmod cannot modify the permissions? (Choose two.)',
        answers: [
          'filea.txt is owned by another user and a regular user cannot change the permissions of another user’s file.',
          'filea.txt is a symbolic link whose permissions are a fixed value which cannot be changed.',
          'filea.txt has the sticky bit set and a regular user cannot remove this permission.',
          'filea.txt is a hard link whose permissions are inherited from the target and cannot be set directly.',
          'filea.txt has the SetUID bit set which imposes the restriction that only the root user can make changes to the file.',
        ],
        type: 'multi',
        solution: [
          'filea.txt is owned by another user and a regular user cannot change the permissions of another user’s file.',
          'filea.txt is a symbolic link whose permissions are a fixed value which cannot be changed.',
        ],
      },
      {
        id: 79,
        question:
          'Which of the following Linux filesystems preallocate a fixed number of inodes when creating a new filesystem instead of generating them as needed? (Choose two.)',
        answers: ['JFS', 'ext3', 'XFS', 'ext2', 'procfs'],
        type: 'multi',
        solution: ['ext3', 'ext2'],
      },
      {
        id: 80,
        question:
          'Which of the following commands sets the SetUID permission on the executable /bin/foo?',
        answers: [
          'chmod 4755 /bin/foo',
          'chmod 1755 /bin/foo',
          'chmod u-s /bin/foo',
          'chmod 755+s /bin/foo',
          'chmod 2755 /bin/foo',
        ],
        type: 'single',
        solution: ['chmod 4755 /bin/foo'],
      },
      {
        id: 81,
        question:
          'Which of the following commands can be used to display the inode number of a given file? (Choose two.)',
        answers: ['inode', 'ln', 'ls', 'cp', 'stat'],
        type: 'multi',
        solution: ['ls', 'stat'],
      },
      {
        id: 82,
        question:
          'Which of the following settings for umask ensures that new files have the default permissions -rw-r-----?',
        answers: ['0017', '0640', '0038', '0227', '0027'],
        type: 'single',
        solution: ['0027'],
      },
      {
        id: 83,
        question:
          'After a power outage, the XFS file system of /dev/sda3 is inconsistent. How can the existing file system errors be fixed?',
        answers: [
          'By using mount -f to force a mount of the file system',
          'By running xfsck on the file system',
          'By mounting the file system with the option xfs_repair',
          'By running xfsadmin repairon the file system',
          'By running xfs_repair on the file system',
        ],
        type: 'single',
        solution: ['By running xfs_repair on the file system'],
      },
      {
        id: 84,
        question:
          'Which of the following properties of an existing file changes when a hard link pointing to that file is created?',
        answers: [
          'File size',
          'Link count',
          'Modify timestamp',
          'Inode number',
          'Permissions',
        ],
        type: 'single',
        solution: ['Link count'],
      },
      {
        id: 85,
        question:
          'Following the Filesystem Hierarchy Standard (FHS), where should binaries that have been compiled by the system administrator be placed in order to be made available to all users on the system? (Specify the full path to the directory.)',
        answers: ['/usr/local/bin'],
        type: 'fillIn',
        solution: ['/usr/local/bin'],
      },
      {
        id: 86,
        question:
          'Which of the following commands show how the shell handles a specific command?',
        answers: ['where', 'type', 'stat', 'case', 'fileinfo'],
        type: 'single',
        solution: ['type'],
      },
      {
        id: 87,
        question:
          'When in Normal mode in vi, which character can be used to begin a reverse search of the text?',
        answers: ['r', '/', 'F', '?', 's'],
        type: 'single',
        solution: ['?'],
      },
      {
        id: 88,
        question:
          'Which of the following commands displays the manual page command from section 1?',
        answers: [
          'man command(1)',
          'man command@1',
          'man 1 command',
          'man 1.command',
          'man -s 1 command',
        ],
        type: 'single',
        solution: ['man 1 command'],
      },
      {
        id: 89,
        question:
          'Which of the following commands creates or, in case it already exists, overwrites a file called data with the output of ls?',
        answers: [
          'ls 3> data',
          'ls >& data',
          'ls > data',
          'ls >> data',
          'ls >>> data',
        ],
        type: 'single',
        solution: ['ls > data'],
      },
      {
        id: 90,
        question:
          'Which of the following commands is used to change options and positional parameters within a running Bash shell?',
        answers: ['history', 'setsh', 'bashconf', 'set', 'envsetup'],
        type: 'single',
        solution: ['set'],
      },
      {
        id: 91,
        question:
          'Which of the following commands display the IDs of all processes owned by root? (Choose two.)',
        answers: [
          'pgrep -c root',
          'pgrep -u root',
          'pgrep -f root',
          'pgrep -U 0',
          'pgrep -c 0',
        ],
        type: 'multi',
        solution: ['pgrep -u root', 'pgrep -U 0'],
      },
      {
        id: 92,
        question:
          'Which of the following sequences in the vi editor saves the opened document and exits the editor? (Choose two.)',
        answers: ['Ctrl XX', 'Ctrl :W', 'Esc zz', 'Esc :wq', 'Esc ZZ'],
        type: 'multi',
        solution: ['Esc :wq', 'Esc ZZ'],
      },
      {
        id: 93,
        question: 'What is the effect of the -v option for the grep command?',
        answers: [
          'It enables color to highlight matching parts.',
          'It shows the command’s version information.',
          'It only outputs non-matching lines.',
          'It changes the output order showing the last matching line first.',
          'It outputs all lines and prefixes matching lines with a+.',
        ],
        type: 'single',
        solution: ['It only outputs non-matching lines.'],
      },
      {
        id: 94,
        question:
          'Which of the following tools can show the complete path of an executable file that the current shell would execute when starting a command without specifying its complete path? (Choose two.)',
        answers: ['find', 'pwd', 'which', 'locate', 'type'],
        type: 'multi',
        solution: ['which', 'type'],
      },
      {
        id: 95,
        question:
          'Which of the following signals is sent to a process when the key combination Ctrl+Z is pressed on the keyboard?',
        answers: ['SIGTERM', 'SIGCONT', 'SIGSTOP', 'SIGKILL', 'SIGINT'],
        type: 'single',
        solution: ['SIGSTOP'],
      },
      {
        id: 96,
        question:
          "What is the output when the regular expression 's/[ABC][abc]/xx/' is applied to the following string? ABCabc",
        answers: ['ABxxbc', 'xxCxxc', 'xxxxxx', 'ABCabc', 'Axxaxx'],
        type: 'single',
        solution: ['ABxxbc'],
      },
      {
        id: 97,
        question:
          'Which of the following commands print the current working directory when using a Bash shell? (Choose two.)',
        answers: [
          'echo "${PWD}"',
          'echo "${WD}"',
          'printwd',
          'pwd',
          'echo "${pwd}"',
        ],
        type: 'multi',
        solution: ['echo "${PWD}"', 'pwd'],
      },
      {
        id: 98,
        question: 'Which of the following commands outputs test to the shell?',
        answers: [
          'cat <!EOT test EOT',
          'cat <|EOT',
          'cat !<EOT',
          'cat &<EOT',
          'cat <<EOT',
        ],
        type: 'single',
        solution: ['cat <<EOT'],
      },
      {
        id: 99,
        question:
          'What is the default nice level when a process is started using the nice command?',
        answers: ['-10', '0', '10', '15', '20'],
        type: 'single',
        solution: ['10'],
      },
      {
        id: 100,
        question:
          'A user accidentally created the subdirectory \\dir in his home directory. Which of the following commands will remove that directory?',
        answers: [
          'rmdir ~/\\\\dir',
          'rmdir "~/\\dir"',
          'rmdir ~/’dir’',
          'rmdir ~/\\dir',
          "rmdir '~/\\dir’",
        ],
        type: 'single',
        solution: ['rmdir ~/\\\\dir'],
      },
      {
        id: 101,
        question:
          'Which of the following commands can perform searches on file contents using regular expressions?',
        answers: ['find', 'locate', 'grep', 'reggrep', 'pgrep'],
        type: 'single',
        solution: ['grep'],
      },
      {
        id: 102,
        question:
          'In a nested directory structure, which find command line option would be used to restrict the command to searching down a particular number of subdirectories?',
        answers: ['-maxdepth', '-dirmax', '-maxlevels', '-s', '-n'],
        type: 'single',
        solution: ['-maxdepth'],
      },
      {
        id: 103,
        question:
          'Which of the following commands determines a file’s format by using a definition database file which contains information about all common file types?',
        answers: ['type', 'file', 'magic', 'pmagic', 'hash'],
        type: 'single',
        solution: ['file'],
      },
      {
        id: 104,
        question:
          'Which of the following commands generates a list of user names from /etc/passwd along with their login shell?',
        answers: [
          'column -s : 1,7 /etc/passwd',
          'chop -c 1,7 /etc/passwd',
          'colrm 1,7 /etc/passwd',
          'sort -t: -k1,7 /etc/passwd',
          'cut -d: -f1,7 /etc/passwd',
        ],
        type: 'single',
        solution: ['cut -d: -f1,7 /etc/passwd'],
      },
      {
        id: 105,
        question:
          'If the gzip compressed tar archive texts.tgz contains the files a.txt and b.txt, which files will be present in the current directory after running gunzip texts.tgz?',
        answers: [
          'Only a.txt, b.txt, and texts.tgz',
          'Only texts.tar and texts.tgz',
          'Only a.txt.gz and b.txt.gz',
          'Only a.txt and b.txt',
          'Only texts.tar',
        ],
        type: 'single',
        solution: ['Only texts.tar'],
      },
      {
        id: 106,
        question:
          'In the vi editor, how can commands such as moving the cursor or copying lines into the buffer be issued multiple times or applied to multiple rows?',
        answers: [
          'By using the command :repeat followed by the number and the command',
          'By specifying the number right in front of a command such as 4l or 2yj.',
          'By selecting all affected lines using the shit and cursor keys before applying the command.',
          'By issuing a command such as :set repetition=4 with repeats every subsequent command 4 times.',
          'By specifying the number after a command such as l4 or yj2 followed by escape.',
        ],
        type: 'single',
        solution: [
          'By specifying the number right in front of a command such as 4l or 2yj.',
        ],
      },
      {
        id: 107,
        question:
          'Which of the following statements is correct for a command ending with an & character?',
        answers: [
          'The command’s output is redirected to /dev/null.',
          'The command is run in background of the current shell.',
          'The command’s output is executed by the shell.',
          'The command is run as a direct child of the init process.',
          'The command’s input is read from /dev/null.',
        ],
        type: 'single',
        solution: ['The command is run in background of the current shell.'],
      },
      {
        id: 108,
        question:
          'Which of the following commands reads a file and creates separate chunks of a given size from the file’s contents?',
        answers: ['ar', 'cat', 'break', 'split', 'parted'],
        type: 'single',
        solution: ['split'],
      },
      {
        id: 109,
        question: 'What is the purpose of the xargs command?',
        answers: [
          'It passes arguments to an X server.',
          'It repeats the execution of a command using different parameters for each invocation.',
          'It reads standard input and builds up commands to execute.',
          'It asks a question, graphically, and returns the answer to the shell.',
          'It allows specifying long options (like --help) for commands that normally only accept short options (like -h)',
        ],
        type: 'single',
        solution: [
          'It reads standard input and builds up commands to execute.',
        ],
      },
      {
        id: 110,
        question:
          'Which command displays a list of all background tasks running in the current shell? (Specify ONLY the command without any path or parameters.)',
        answers: ['jobs'],
        type: 'fillIn',
        solution: ['jobs'],
      },
      {
        id: 111,
        question:
          'Which command is used to change the priority of an already running process? (Specify ONLY the command without any path or parameters.)',
        answers: ['renice'],
        type: 'fillIn',
        solution: ['renice'],
      },
      {
        id: 112,
        question: 'In Bash, inserting 1>&2 after a command redirects…',
        answers: [
          '…standard error to standard input.',
          '…standard output to standard error.',
          '…standard input to standard error.',
          '…standard error to standard output.',
          '…standard output to standard input.',
        ],
        type: 'single',
        solution: ['…standard output to standard error.'],
      },
      {
        id: 113,
        question:
          'When booting from the hard disk, a computer successfully loads the Linux kernel and initramfs but hangs during the subsequent startup tasks. The system is booted using a Linux based rescue CD to investigate the problem. Which of the following methods helps to identify the root cause of the problem?',
        answers: [
          'Using the dmesg command from the rescue CD’s shell to view the original system’s boot logs.',
          'Investigating the file /proc/kmsg on the computer’s hard disk for possible errors.',
          'Investigating the files in /var/log on the computer’s hard disk for possible errors.',
          'Using chroot to switch to the file system on the hard disk and use dmesg to view the logs.',
          'Rebooting again from the hard drive since the system successfully booted from the rescue CD.',
        ],
        type: 'single',
        solution: [
          'Investigating the files in /var/log on the computer’s hard disk for possible errors.',
        ],
      },
      {
        id: 114,
        question:
          'Where is the bootloader stored on the hard disk of a UEFI system?',
        answers: [
          'In the EFI Boot Record (EBR).',
          'In the Master Boot Record (MBR).',
          'On the EFI System Partition (ESP).',
          'On the partition labeled boot.',
          'On the partition number 127.',
        ],
        type: 'single',
        solution: ['On the EFI System Partition (ESP).'],
      },
      {
        id: 115,
        question:
          'What is the correct way to set the default systemd boot target to multi-user?',
        answers: [
          'systemctl isolate multi-user.target',
          'systemctl set-runlevel multi-user.target',
          'systemctl set-boot multi-user.target',
          'systemctl set-default multi-user.target',
          'systemctl boot -p multi-user.target',
        ],
        type: 'single',
        solution: ['systemctl set-default multi-user.target'],
      },
      {
        id: 116,
        question:
          'Which of the following statements are correct about the initial RAM disk involved in the boot process of Linux? (Choose two.)',
        answers: [
          'An initramfs is a compressed file system archive, which can be unpacked to examine its contents.',
          'An initramfs file contains the MBR, the bootloader and the Linux kernel.',
          'After a successful boot, the initramfs contents are available in /run/initramfs/.',
          'The kernel uses the initramfs temporarily before accessing the real root file system.',
          'An initramfs does not depend on a specific kernel version and is not changed after the initial installation.',
        ],
        type: 'multi',
        solution: [
          'An initramfs is a compressed file system archive, which can be unpacked to examine its contents.',
          'The kernel uses the initramfs temporarily before accessing the real root file system.',
        ],
      },
      {
        id: 117,
        question:
          'Which of the following commands loads a kernel module along with any required dependency modules?',
        answers: ['depmod', 'modprobe', 'module_install', 'insmod', 'loadmod'],
        type: 'single',
        solution: ['modprobe'],
      },
      {
        id: 118,
        question:
          'What information can the lspci command display about the system hardware? (Choose three.)',
        answers: [
          'System battery type',
          'Device IRQ settings',
          'PCI bus speed',
          'Ethernet MAC address',
          'Device vendor identification',
        ],
        type: 'multi',
        solution: [
          'Device IRQ settings',
          'PCI bus speed',
          'Device vendor identification',
        ],
      },
      {
        id: 119,
        question:
          'Which System V init configuration file is commonly used to set the default run level? (Specify the full name of the file, including path.)',
        answers: ['/etc/inittab'],
        type: 'fillIn',
        solution: ['/etc/inittab'],
      },
      {
        id: 120,
        question:
          'Given the following two symbolic links in a System V init configuration: /etc/rc1.d/K01apache2    /etc/rc2.d/S02apache2  When are the scripts executed that are referenced by these links? (Choose two.)',
        answers: [
          'S02apache2 is run when runlevel 2 is entered.',
          'S02apache2 is run when runlevel 2 is left.',
          'K01apache2 is never run because K indicates a deactivated service.',
          'Both S02apache2 and K01apache2 are run during a system shutdown.',
          'K01apache2 is run when runlevel 1 is entered.',
        ],
        type: 'multi',
        solution: [
          'S02apache2 is run when runlevel 2 is entered.',
          'K01apache2 is run when runlevel 1 is entered.',
        ],
      },
    ];

    return { questions102, questions101 };
  }

  genId(questions: Question[]): number {
    return questions.length > 0
      ? Math.max(...questions.map((question) => question.id)) + 1
      : 11;
  }
}
