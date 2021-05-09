exports.run = async (client, message, args) => {
  let basvuru = await client.data.fetch(`basvurukanal.${message.guild.id}`);
  let basvurulog = await client.data.fetch(`basvurulog.${message.guild.id}`);
  let yetkililog = await client.data.fetch(`yetkililog.${message.guild.id}`);
  let isim = args[0];
  let yaş = args[1];
  let pozisyon = args[2];
  if (!basvurulog) {
    return message.channel.send(
      ":no_entry: Lütfen bir başvuru log kanalı ayarlar mısın!?"
    );
  } else if (!yetkililog) {
      return message.channel.send(
        ":no_entry: Lütfen bir yetkili log kanalı ayarlar mısın!?"
      );
    } else if (!basvuru) {
      return message.channel.send(
        ":no_entry: Lütfen bir başvuru kanalı ayarlar mısın!?"
      );
    } else if (!isim) {
      return message.channel.send(":no_entry: Lütfen adını yaz!");
    } else if (!yaş) {
      return message.channel.send(":no_entry: Lütfen yaşını yaz!");
    } else if (!pozisyon) {
      return message.channel.send(
        ":no_entry: Lütfen pozisyonunu yaz! (Destek-Ekibi/Admin)"
      );
    };
      let embed = new client.discord.MessageEmbed()
    .setColor("#008000")
    .setFooter(
      client.user.username,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(
      "> Botun ön eki: **?**\n\n> ⬇️ Geçerli başvuru aşağıdadır!\n> Ad: **" +
        isim +
        "** (<@" +
        message.author.id +
        ">)\n> Yaş: **" +
        yaş +
        "**\n>  Pozisyon: **" +
        pozisyon +
        "**\n> ⬆️ Geçerli başvuru yukarıdadır!"
    )
    .setAuthor(
      message.author.username,
      message.author.displayAvatarURL({ dynamic: true })
    );
    if (isim) {
      if (yaş) {
        if (pozisyon) {
          if (message.channel.id !== basvuru) {
            return message.channel.send(
              ":no_entry: Lütfen bunu <#" + basvuru + "> kanalında kullanın!"
            );
          }

          if (
            client.channels.cache
              .get(basvurulog)
              .send(
                new client.discord.MessageEmbed()
                  .setColor("#008000")
                  .setDescription(
                    `**${message.author.tag}** adlı kullanıcı yetkili başvurusu yaptı!`
                  )
              )
          );
          if (client.channels.cache.get(yetkililog).send(embed));
          message.channel
            .send(":white_check_mark: Yetkili başvurun başarıyla alındı!")
            .then(x => {
              message.delete(), x.delete({ timeout: 10000 });
            });
          client.data.add('basvureuu', 1)
          client.data.add(`basvurwu.${message.guild.id}`, 1)
        }
      }
    }
  };

exports.help = { name: "başvur", aliases: ["başvuru"] };
