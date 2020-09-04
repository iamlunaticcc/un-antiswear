import { Client, Message, MessageEmbed } from "discord.js";
import { isNumber } from "util";
const config = require("../config.json");
const db = require("quick.db");

module.exports.conf = {
    name: "add"
}

module.exports.execute = async (client: Client, message: Message, args: String[]) => {
    // Embeds
    const msgembed: MessageEmbed = new MessageEmbed()
    .setColor(config.highlight)
    .setTitle("Added word")
    .setDescription(`Added word: \`${args[0]}\``)
    .setTimestamp()
    .setFooter(config.footer);
    const msgerrorembed1: MessageEmbed = new MessageEmbed()
    .setColor(config.highlight)
    .setTitle("Failed to add word")
    .setDescription(`Word is not a string/word includes numbers`)
    .setTimestamp()
    .setFooter(config.footer);
    const msgerrorembed2: MessageEmbed = new MessageEmbed()
    .setColor(config.highlight)
    .setTitle("Failed to add word")
    .setDescription(`Word is not a string`)
    .setTimestamp()
    .setFooter(config.footer);

    // Error handling
    if (isNumber(args[0])) return await message.channel.send(msgerrorembed1);
    if (!args[0].toString()) return await message.channel.send(msgerrorembed2);

    // Message
    await message.channel.send(msgembed);

    // Database
    db.push(`words_${message.guild.id}.${args[0]}`, args[0]);
}