exports.run = async (client, message, args) => {
  let embed2 = new client.discord.MessageEmbed()
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
    return message.channel.send(embed2)
  }
  let baslog = client.data.fetch(`basvurulog.${message.guild.id}`);
  let yetlog = client.data.fetch(`yetkililog.${message.guild.id}`);
  let basrol = client.data.fetch(`basvururol.${message.guild.id}`);
  let baskanal = client.data.fetch(`basvurukanal.${message.guild.id}`);
  let bslog;
  if(baslog) {
    bslog = ":white_check_mark: <#"+baslog+">";
  } else {
    bslog = ":x: Ayarlı değil.";
  };
  let ytlog;
  if(yetlog) {
    ytlog = ":white_check_mark: <#"+yetlog+">"
  } else {
    ytlog = ":x: Ayarlı değil."
  };
  let bsrol;
  if(basrol) {
    bsrol = ":white_check_mark: <@&"+basrol+">"
  } else {
    bsrol = ":x: Ayarlı değil."
  };  
  let bskanal;
  if(baskanal) {
    bskanal = ":white_check_mark: <#"+baskanal+">"
  } else {
    bskanal = ":x: Ayarlı değil."
  };
    let embed = new client.discord.MessageEmbed()
    .setColor("#008000")
    .setFooter(
      client.user.username,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setThumbnail(message.guild.iconURL({dynamic:true}))
    .setDescription(
      "> Botun ön eki: **?**\n\n> ⬇️ Geçerli ayarlar aşağıdadır!\n> Başvuru Log: "+bslog+"\n> Yetkili Log: "+ytlog+"\n> Yetkili Rol: "+bsrol+"\n> Başvuru Kanal: "+bskanal+"\n> ⬆️ Geçerli ayarlar yukarıdadır!"
    )
    .setAuthor(
      message.author.username,
      message.author.displayAvatarURL({ dynamic: true })
    );
  message.channel.send(embed);
};

exports.help = { name: "ayarlar", aliases: [] };