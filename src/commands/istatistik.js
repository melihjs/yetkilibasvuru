exports.run = async (client, message, args) => {
  let serversCount = client.guilds.cache.array().length;
  let usersCount = client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString();
  let channelsCount = client.channels.cache.array().length;
      let embed = new client.discord.MessageEmbed()
    .setColor("#008000")
    .setFooter(
      client.user.username,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setThumbnail(message.guild.iconURL({dynamic:true}))
    .setDescription(
      "> Botun ön eki: **?**\n\n> ⬇️ Geçerli istatistik aşağıdadır!\n> Sunucu Sayısı: **"+serversCount+"**\n> Kullanıcı Sayısı: **"+usersCount+"**\n> Kanal Sayısı: **"+channelsCount+"**\n> ⬆️ Geçerli istatistik yukarıdadır!"
    )
    .setAuthor(
      message.author.username,
      message.author.displayAvatarURL({ dynamic: true })
    );
  message.channel.send(embed);
};

exports.help = { name: "istatistik", aliases: ["i"] };