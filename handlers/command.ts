import { Client } from "discord.js";
import { readdir } from "fs";

module.exports = (client: Client, commands) => {
    readdir("./commands", (err: NodeJS.ErrnoException, files: String[]) => {
        if (err) {
            console.error(`Error occured: ${err.stack}`);
        }

        const tsfile = files.filter(file => file.endsWith(".ts"));

        if (tsfile.length === 0) {
            return console.error("Error occured: No commands found");
        }

        tsfile.map((cmd) => {
            let pull = require(`./commands/${cmd}`);
            commands.set(pull.conf.name, pull);
            console.log(`Command loaded [${pull.conf.name}.ts]`);
        })
    });
}