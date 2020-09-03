import { Client, Message, MessageEmbed } from "discord.js";
const config = require("../config.json");

module.exports.conf = {
    name: "help"
}

module.exports.execute = async (client: Client, message: Message, args: String[]) => {
    // Embeds
    const msgembed: MessageEmbed = new MessageEmbed()
    .setColor(config.highlight)
    .setTitle("Help")
    .addFields({
        name: "ping",
        value: "Returns the ping from the bot's hosted location"
    }, {
        name: "uptime",
        value: "Returns the uptime of the bot"
    })
    .setTimestamp()
    .setFooter(config.footer);

    // Send message
    await message.channel.send(msgembed);
}