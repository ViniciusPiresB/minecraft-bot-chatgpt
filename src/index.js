const mineflayer = require("mineflayer");

const { OpenAI } = require("openai");

// 🔑 Sua chave da OpenAI
const openai = new OpenAI({
  apiKey: "CHAVE_OPENAI"
});

// 🎯 Cria o bot do Minecraft
const bot = mineflayer.createBot({
  host: "localhost", // IP do servidor
  port: 25565, // Porta padrão
  username: "Player" // Seu nick (cracked funciona)
});

// 🔊 Escuta o chat do servidor
bot.on("chat", async (username, message) => {
  if (username === bot.username) return; // Ignora as próprias mensagens

  console.log(`[${username}] ${message}`);

  const prompt = `O jogador ${username} disse: "${message}". Responda como se você fosse um assistente professor de fisica, quero que responda com respostas breves e curtas.`;

  try {
    const resposta = await enviarParaChatGPT(prompt);
    console.log(`🤖 Resposta: ${resposta}`);

    // 🚀 Envia a resposta para o chat do servidor
    bot.chat(resposta);
  } catch (error) {
    console.error("❌ Erro ao consultar o ChatGPT:", error.message);
  }
});

// ⚙️ Função para enviar para o ChatGPT usando a lib oficial
async function enviarParaChatGPT(mensagem) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: mensagem }],
    model: "gpt-3.5-turbo",
    temperature: 0.7
  });

  return chatCompletion.choices[0].message.content.trim();
}

// 🛑 Trata erros e desconexões
bot.on("error", (err) => console.log("❌ Erro:", err));
bot.on("end", () => console.log("🚪 Bot foi desconectado"));
