# 🧠 Minecraft Physics Assistant Bot

This project creates a Minecraft bot that listens to the chat and responds like a **brief and concise physics assistant** using OpenAI's GPT-3.5-Turbo model.

## 📋 Features

- Connects to a Minecraft server (cracked or premium)
- Listens to in-game chat messages
- Uses ChatGPT (OpenAI) to respond like a physics professor
- Sends the reply back to the Minecraft server chat

## 🚀 Requirements

- **Node.js** (v16 or higher recommended)
- An OpenAI API Key
- A Minecraft server (you can use `localhost` for a local server)

## 🛠 Installation

1. **Clone the repository or copy the files**

```bash
git clone https://github.com/your-username/minecraft-physics-bot.git
cd minecraft-physics-bot
```

2. **Install the required packages**

```bash
npm install mineflayer openai
```

3. **Set your OpenAI API key**

Open the JavaScript file and replace `"CHAVE_OPENAI"` with your actual OpenAI API key:

```js
const openai = new OpenAI({
  apiKey: "your_openai_api_key"
});
```

## ⚙️ Configuration

You can edit the following options in the code to match your server setup:

```js
host: "localhost",     // Server IP or hostname
port: 25565,           // Server port
username: "Player"     // Minecraft username (cracked works)
```

## ▶️ Run the bot

```bash
node index.js
```

## 💡 How It Works

- When any player sends a message in chat, the bot sends it to ChatGPT with a prompt like:

  > The player Vinicius said: "Why does gravity exist?"  
  > Respond as a physics teacher with short and brief answers.

- ChatGPT responds, and the bot immediately replies in the Minecraft server chat.

## 📌 Notes

- The bot won't respond to its own messages.
- Make sure your server allows cracked players if you're not using a premium account.

## 🧪 Example Interaction

**Player:** Why do things fall?  
**Bot:** Because gravity pulls them toward the Earth.