var Botkit = require('botkit');

var controller = Botkit.slackbot();


// give the bot something to listen for.
controller.hears([/.*/], ['direct_message','direct_mention','mention'], function(bot,message) {
  let normalizedMessage = message.text.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "") //normalizes text for case-insensitivity and punctuation
  console.log(normalizedMessage)
  if (normalizedMessage === 'hello') {
    bot.reply(message,'Hello Lydia.');
  }
  else if (normalizedMessage.includes('time')) {
    bot.reply(message, `It is ${new Date()}`)
  }
  else if (normalizedMessage === 'what do you do') {
    bot.reply(message, 'I can tell you the time and not really much else.')
  }
  else {
    bot.reply(message, "I couldn't possible know what you mean.")
  }
});

var bot = controller.spawn({
  token:require('./config').token
})

bot.startRTM(function(err, bot, payload) {
  if (err){
    console.log(err);
    throw new Error('Could not connect to slack!')
  }
})
