const discord = require("discord.js");
const fs = require("fs");
const client = new discord.Client();
require("./src/handlers/event.js")(client);
let prefix = "";
let token = "";

client.on('ready', () => {
  console.log("[BOT]: Hazırım ve bağlandım!");
    client.user.setPresence({
    activity: {
      name: `Archex Başvuru Botu - Prefix : ?`,
      type: "WATCHING"
    },
    status: "idle"
  });
}); 

client.discord = discord;
client.data = require("quick.db");
client.fs = fs;
client.logger = console;
client.commands = new client.discord.Collection();
client.aliases = new client.discord.Collection();
fs.readdir('./src/commands/', (err, files) => {
    if (err) console.error(err);
    client.logger.log(`[BOT]: ${files.length} adet komut yüklenecek!`)
    files.forEach(f => {
        let cmd = require(`./src/commands/${f}`);
        client.logger.log(`[BOT]: ${cmd.help.name} komutu yüklendi!`)
        client.commands.set(cmd.help.name, cmd);
        cmd.help.aliases.forEach(alias => {
            client.aliases.set(alias, cmd.help.name)
        });
    });
});

client.login(token).catch(error => { client.logger.log("[BOT]: Bot tokeni yanlış geçerli bir token gir!") });