import { Client, Message } from "discord.js";
import { prefix } from "../config.json";

module.exports = (client: Client) => {
    client.on("message", async (message: Message) => {
        if (!message.content.startsWith(prefix)) return;
        if (!message.guild) return;
        if (message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const cmd = args.shift().toLowerCase();

        if (cmd.length === 0) return;

        const command = require(`./commands/${cmd}`);

        if (!command) return;

        command.execute(client, message, args);
    });
}