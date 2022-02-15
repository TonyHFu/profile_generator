const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = "";

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  profile += `My name is ${answer}. `;
  rl.question("What's an activity you like doing? ", (answer) => {
    profile += `I like ${answer} `;
    rl.question("What do you listen to while doing that? ", (answer) => {
      profile += `while listening to ${answer}. `;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        profile += `My favourite meal of the day is ${answer} `;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          profile += `and I like to eat ${answer} for that meal. `;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            profile += `My favouurite sport is ${answer}. `;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              profile += `My superpower is ${answer}! `;
              console.log(profile);
              rl.close();
            });
          });
          // rl.close();
        });
        // rl.close();
      });
      // rl.close();
    });
    // rl.close();
  });
  // rl.close();
});
