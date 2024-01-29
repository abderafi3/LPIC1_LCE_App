import { Question } from '../shared/question';

const questions: Question[] = [
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
      'Consider the following output from the command ls -i: \n 525385 a.txt \n How would a new file named c.txt be created with the same inode number as a.txt (Inode 525385)?',
    answers: ['0750', '0027', '0036', '7640', '0029'],
    type: 'single',
    solution: ['0027'],
  },
];
