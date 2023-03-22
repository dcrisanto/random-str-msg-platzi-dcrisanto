let result;

const messages = [
  "This is where it all begins...",
  "Commit committed",
  "Version control is awful",
  "COMMIT ALL THE FILES!",
  "The same thing we do every night, Pinky - try to take over the world!",
  "Lock S-foils in attack position",
  "This commit is a lie",
  "I'll explain when you're older!",
  "Here be Dragons",
  "Reinventing the wheel. Again.",
  "This is not the commit message you are looking for",
  "Batman! (this commit has no parents)",
];

const min = 0;
const max = messages.length - 1;

const randomPosition = (min, max) => {
  result = Math.floor(Math.random()*(max-min)) + min;
  return result
}

const randomMessage = () => {
  const message = messages[randomPosition(min, max)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  randomMessage
}


