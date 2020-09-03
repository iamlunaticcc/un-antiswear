// Imports
import { Client, Message } from "discord.js";

// Definitions
const client: Client = new Client();
const config = require("./config.json");
const db = require("quick.db");

// Message Event
client.on("message", async (message: Message) => {
    let prefix; let get = db.get(`prefix_${message.guild.id}`);

    if (get) {
        prefix = get;
    } else {
        prefix = config.prefix;
    }

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    const command = require(`./commands/${cmd}`);

    if (!command) return;

    command.execute(client, message, args);
});

// Bot ready
client.on("ready", () => {
    // Print out line
    console.log("Bot Started");

    // Set bot status
    client.user.setActivity("AntiSwear Bot | !help", { type: "WATCHING" });
});

// Login
client.login(config.token);