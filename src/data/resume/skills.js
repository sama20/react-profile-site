// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'React.js',
    competency: 5,
    category: ['Library & Framework'],
  },
  {
    title: 'PHP',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Laravel',
    competency: 4,
    category: ['Library & Framework'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  // {
  //   title: 'Amazon Web Services',
  //   competency: 2,
  //   category: [ 'Tools'],
  // },
  {
    title: 'Docker',
    competency: 1,
    category: ['Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'PostgreSQL/SQL',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Engineering'],
  },
  // {
  //   title: 'Express.JS',
  //   competency: 2,
  //   category: [ 'Library & Framework'],
  // },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Library & Framework'],
  },
  {
    title: 'MQL4',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  // {
  //   title: 'Kubernetes',
  //   competency: 1,
  //   category: ['Tools', 'Data Engineering'],
  // },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Rapidminder',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Weka',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'MySQl',
    competency: 4,
    category: ['Databases'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
