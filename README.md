# User-Installable app for Discord

This project contains a basic example of a game integration for Discord written in JavaScript, built for the [Developing a User-Installable App tutorial](http://discord.com/developers/docs/tutorials/developing-a-user-installable-app).


## Project structure
Below is a basic overview of the project structure:

```
├── .env.sample -> sample .env file
├── app.js      -> main entrypoint for the app
├── commands.js -> slash command payloads + helpers
├── game.js     -> logic specific to the fake game
├── utils.js    -> utility functions and enums
|-- package-lock.json
├── package.json
├── README.md
└── .gitignore
```

## Running app locally

Configuring the app is covered in detail in the [tutorial](http://discord.com/developers/docs/tutorials/developing-a-user-installable-app).

Before you start, you'll need to install [NodeJS](https://nodejs.org/en/download/) and [create a Discord app](https://discord.com/developers/applications) with the proper configuration:

### Default Install Settings

Click on the **Installation** page in your app's settings and go to the **Default Install Settings** section.

For user install:
- `applications.commands`

For guild install:
- `applications.commands`
- `bot` (with Send Messages enabled)

### Privileged Gateway Intents

This sample app uses a privilege intent to create a fake leaderboard. In production, you probably wouldn't need this.

Click on the **Bot** page in your app's settings and go to the **Privileged Gateway Intents** section.

Toggle **Server Members Intent**.

### Setup project

First clone the project:
```
git clone https://github.com/discord/user-install-example.git
```

Then navigate to its directory and install dependencies:
```
cd user-install-example
npm install
```
### Get app credentials

Fetch the credentials from your app's settings and add them to a `.env` file (see `.env.sample` for an example). You'll need your app ID (`APP_ID`), bot token (`DISCORD_TOKEN`), and public key (`PUBLIC_KEY`).

Fetching credentials is covered in detail in the [tutorial](http://discord.com/developers/docs/tutorials/developing-a-user-installable-app).

> 🔑 Environment variables can be added to the `.env` file in Glitch or when developing locally, and in the Secrets tab in Replit (the lock icon on the left).

### Install slash commands

The commands for the example app are set up in `commands.js`. All of the commands in the `ALL_COMMANDS` array at the bottom of `commands.js` will be installed when you run the `register` command configured in `package.json`:

```
npm run register
```

### Run the app

After your credentials are added, go ahead and run the app:

```
node app.js
```

> ⚙️ A package [like `nodemon`](https://github.com/remy/nodemon), which watches for local changes and restarts your app, may be helpful while locally developing.

### Set up interactivity

The project needs a public endpoint where Discord can send requests. To develop and test locally, you can use something like [`ngrok`](https://ngrok.com/) to tunnel HTTP traffic.

Install ngrok if you haven't already, then start listening on port `3000`:

```
ngrok http 3000
```

You should see your connection open:

```
Tunnel Status                 online
Version                       2.0/2.0
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://1234-someurl.ngrok.io -> localhost:3000
Forwarding                    https://1234-someurl.ngrok.io -> localhost:3000

Connections                  ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

Copy the forwarding address that starts with `https`, in this case `https://1234-someurl.ngrok.io`, then go to your [app's settings](https://discord.com/developers/applications).

On the **General Information** tab, there will be an **Interactions Endpoint URL**. Paste your ngrok address there, and append `/interactions` to it (`https://1234-someurl.ngrok.io/interactions` in the example).

Click **Save Changes**, and your app should be ready to run 🚀

## Other resources
- Read **[the documentation](https://discord.com/developers/docs/intro)** for in-depth information about API features.
- Browse the `examples/` folder in this project for smaller, feature-specific code examples
- Join the **[Discord Developers server](https://discord.gg/discord-developers)** to ask questions about the API, attend events hosted by the Discord API team, and interact with other devs.
- Check out **[community resources](https://discord.com/developers/docs/topics/community-resources#community-resources)** for language-specific tools maintained by community members.
