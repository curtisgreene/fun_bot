var Botkit = require('botkit');

var controller = Botkit.slackbot();


// give the bot something to listen for.
controller.hears([/.*/], ['direct_message','direct_mention','mention'], function(bot,message) {
  let normalizedMessage = message.text.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "") //normalizes text for case-insensitivity and punctuation
  console.log(normalizedMessage)
  if (normalizedMessage === 'hello') {
    bot.reply(message,'Hello yourself.');
  }
  else if (normalizedMessage === 'what time is it') {
    bot.reply(message, `It is ${new Date()}`)
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
