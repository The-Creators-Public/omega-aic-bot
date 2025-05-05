# Omega AIC Bot

A Discord bot that sends user prompts to ChatGPT and returns voiced MP3 responses via ElevenLabs.

## Features

- `/voice <prompt>` — Generates text with ChatGPT, then returns an MP3 via ElevenLabs TTS.
- `/help` — Lists available commands.
- Easily extensible command/event structure.

## Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/The-Creators-Public/omega-aic-bot.git
   cd omega-aic-bot
Install dependencies:

bash
Copy
Edit
npm install
Create a .env in the project root:

env
DISCORD_TOKEN=your_discord_token
CLIENT_ID=your_client_id
GUILD_ID=your_guild_id
OPENAI_API_KEY=your_openai_key
ELEVENLABS_API_KEY=your_elevenlabs_key
ELEVENLABS_VOICE_ID=your_desired_voice_id
Register your slash commands:

bash
npm run deploy
Start the bot:

bash
npm start

Command Guide
/voice — Send a prompt, receive a ChatGPT‑generated response via MP3.
/help — Show this help message.
Feel free to contribute new commands under commands/ and events under events/.
