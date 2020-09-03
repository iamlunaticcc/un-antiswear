import { Client, Message, MessageEmbed } from "discord.js";
const db = require("quick.db");
const config = require("../config.json");

module.exports.conf = {
    name: "prefix"
}

module.exports.execute = async (client: Client, message: Message, args: String[]) => {
    // Embed
    const msgembed: MessageEmbed = new MessageEmbed()
    .setColor(config.highlight)
    .setTitle("Prefix")
    .setDescription(`Updated prefix to \`${args[0]}\``)
    .setTimestamp()
    .setFooter(config.footer);

    // Check permissions
    if (!message.member.hasPermission("MANAGE_GUILD")) return;

    // Set prefix
    db.set(`prefix_${message.guild.id}`, args[0]);

    // Message
    await message.channel.send(msgembed);
}