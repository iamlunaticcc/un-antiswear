// Imports
import { Client, Message, Collection } from "discord.js";
import { token } from "./config.json";

// Definitions
const client: Client = new Client();
const commands = new Collection();

// Handlers
["event", "command"].map((handle) => {
    require(`./handlers/${handle}`)(client, commands);
});

// Bot ready
client.on("ready", () => {
    console.log("Bot Started");
});

// Login
client.login(token);