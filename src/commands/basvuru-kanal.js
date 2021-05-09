exports.run = async (client, message, args) => {
      let embed = new client.discord.MessageEmbed()
    .setColor("#008000")
    .setFooter(
      client.user.username,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setThumbnail(message.guild.iconURL({dynamic:true}))
    .setDescription(
      "> Botun ön eki: **?**\n\n:x: Senin bunu yapmak için yetkin yok!"
    )
    .setAuthor(
      message.author.username,
      message.author.displayAvatarURL({ dynamic: true })
    );
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(embed)
  }
      let ly = new client.discord.MessageEmbed()
    .setColor("#008000")
    .setFooter(
      client.user.username,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setThumbnail(message.guild.iconURL({dynamic:true}))
    .setDescription(
      "> Botun ön eki: **?**\n\n> :x: Lütfen geçerli bir kanal etiketle!"
    )
    .setAuthor(
      message.author.username,
      message.author.displayAvatarURL({ dynamic: true })
    );
      let oldu = new client.discord.MessageEmbed()
    .setColor("#008000")
    .setFooter(
      client.user.username,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setThumbnail(message.guild.iconURL({dynamic:true}))
    .setDescription(
      "> Botun ön eki: **?**\n\n:white_check_mark: İşte bu kadar kanal ayarlandı!"
    )
    .setAuthor(
      message.author.username,
      message.author.displayAvatarURL({ dynamic: true })
    );
  let kanal = message.mentions.channels.first();
  if(!kanal) {
    return message.channel.send(ly)
  } else if(kanal) {
    await client.data.set(`basvurukanal.${message.guild.id}`, kanal.id)
    return message.channel.send(oldu)
  };
};

exports.help = { name: "başvuru-kanal", aliases: [] };