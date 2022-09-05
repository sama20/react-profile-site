import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/sama20/react-profile-site
 */
const data = [
  {
    label: 'Start membership',
    key: 'creation_date',
    value: 1634220600,
    link: 'https://stackoverflow.com/users/4453634/seyed-mohammad-asghari',
    format: (x) => dayjs(x * 1000).format('MMMM DD, YYYY'),
  },
  {
    label: 'Reputation',
    value: '1600',
    key: 'reputation',
    link: 'https://stackoverflow.com/users/4453634/seyed-mohammad-asghari',
  },
  {
    label: 'Number of answers',
    value: '48',
  },
  {
    label: 'Number of gold badge',
    value: 1,
    key: 'badge_counts.gold',
    link: 'https://stackoverflow.com/users/4453634/seyed-mohammad-asghari',
  },
  {
    label: 'Number of silver badge',
    value: 13,
    key: 'badge_counts.silver',
    link: 'https://stackoverflow.com/users/4453634/seyed-mohammad-asghari',
  },
  {
    label: 'Number of bronze badge',
    value: 21,
    key: 'badge_counts.bronze',
    link: 'https://stackoverflow.com/users/4453634/seyed-mohammad-asghari',
  },
];

export default data;
