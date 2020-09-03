import { Client, Message } from "discord.js";
const config = require("../config.json");
const db = require("quick.db");

module.exports.conf = {
    name: "list"
}

module.exports.execute = async (client: Client, message: Message) => {
    // Start Message
    await message.channel.send("**Blacklisted words**:");
    
    // List Message
    let get = db.get(`words_${message.guild.id}`);
    
    if (!get) {
        await message.channel.send("None");
    } else {
        get.map(async (word) => {
            if (word.length === 0) return;
            else {
                await message.channel.send(word);
            } 
        });
    }
}