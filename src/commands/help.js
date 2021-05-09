exports.run = async (client, message, args) => {
  let embed = new client.discord.MessageEmbed()
    .setColor("#008000")
    .setFooter(
      client.user.username,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setThumbnail(message.guild.iconURL({dynamic:true}))
    .setDescription(
      `> Botun ön eki: **?**\n> Toplam yapılan yetkili başvuruları:\n> _ _ _ _ _ _ _ _ - Genel: **${client.data.fetch('basvureuu') || 0}**\n> _ _ _ _ _ _ _ _ - Sunucu: **${client.data.fetch(`basvurwu.${message.guild.id}`) || 0}** \n\n> ⬇️ Geçerli komutlar aşağıdadır!\n> \`?ayarlar\` - Sunucu için geçerli ayarları kontrol edersiniz! \n> \`?başvuru-log #kanal\` - Başvuruyun gittiği kanalı ayarlar!\n> \`?yetkili-log #kanal\` - Yetkililerin kontrol ettiği kanalı ayarlar!\n> \`?yetkili-rol @rol\` - Başvuruları kontrol eden rolü ayarlar!\n> \`?başvuru-kanal #kanal\` - Başvuru yapılan kanalı ayarlar!\n> \`?başvuru Ad Yaş Yetki\` - Başvuru yaparsınız!\n> \`?istatistik\` - Botun istatistiğine bakarsınız!\n> ⬆️ Geçerli komutlar yukarıdadır!`
    )
    .setAuthor(
      message.author.username,
      message.author.displayAvatarURL({ dynamic: true })
    );
  message.channel.send(embed);
};

exports.help = { name: "help", aliases: ["h", "y", "yardım"] };
