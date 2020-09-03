import { Client, Message, MessageEmbed } from "discord.js";
const config = require("../config.json");

module.exports.conf = {
    name: "uptime"
}

module.exports.execute = async (client: Client, message: Message) => {
    // Embed
    const msgembed: MessageEmbed = new MessageEmbed()
    .setColor(config.highlight)
    .setTitle("Ping")
    .setDescription(`Uptime: \`${client.uptime}ms\``)
    .setTimestamp()
    .setFooter(config.footer);

    // Message
    await message.channel.send(msgembed);
}