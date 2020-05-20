const vowels = ['a', 'e', 'i', 'o', 'u'];
const fillers = [
  'b',
  'c',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'm',
  'n',
  'p',
  'q',
  'r',
  's',
  't',
  'v',
  'w',
  'x',
  'y',
  'z',
  'ch',
  'sh',
  'th',
  'zh',
  'dr',
  'fr',
  'tr',
  'pr',
  'gr',
  'cr',
  'pthl',
  'zsh',
  'zs',
];

const getRandom = (items: string[]) => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

const getName = () => {
  let name = '';
  if (Math.random() > 0.7) {
    name += getRandom(fillers) + getRandom(vowels);
  }
  const vowel = getRandom(vowels);
  name += getRandom(fillers) + vowel;
  if (Math.random() > 0.8) {
    name += vowel;
  }
  if (Math.random() > 0.95) {
    name += "'";
  }
  if (Math.random() > 0.5) {
    name += getRandom(fillers);
  }
  if (Math.random() > 0.8) {
    name += getRandom(fillers) + getRandom(vowels);
  }
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
};

const generateName = () => {
  let name = '';
  const maxNames = Math.random() > 0.2 ? 2 : 1;
  for (let i = 0; i < maxNames; i++) {
    name += getName();
    if (Math.random() > 0.8) {
      name += '-' + getName();
    }
    if (i + 1 < maxNames) {
      name += ' ';
    }
  }
  return name;
};

for (let i = 0; i < 100; i++) {
  console.log(generateName());
}
