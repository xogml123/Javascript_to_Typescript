const helloYou = name => {
  name = 'you' || name;
  console.log(`hello${name}!`);
};
console.log(helloYou);
