require('dotenv').config();

var Botkit = require('botkit');

controller = Botkit.slackbot({
	debug: false
})

controller.spawn({
	token: process.env.SLACK_BOT_API_TOKEN
}).startRTM()

controller.hears('hello', ['direct_message'], function (bot, message) {
	bot.reply(message, "hullo")
})

controller.hears('assignment', ['direct_message'], function (bot, message) {
	bot.reply(message, "assignment submitted")
})


controller.hears('bye', ['direct_message'], function (bot, message) {
	bot.reply(message, "goodbye")
})