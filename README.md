# groupme-2-discord-bot
A simple bot that crossposts images from a Groupme group to a Discord channel.

## Configuration
I hosted this bot on Heroku.
1. Follow the deploy instructions in the [Heroku nodejs getting started guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true), but use this repo.
2. Get a webhook for the Discord channel you want to crosspost to with the instructions [here](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks).
3. Set up a config var `DISCORD_WEBHOOK=<your_webhook>` in Heroku following instructions [here](https://devcenter.heroku.com/articles/config-vars).
4. Register a Groupme bot [here](https://dev.groupme.com/bots) with the Callback URL set as `<your_heroku_url>/groupme`.