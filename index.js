const Discord = require('discord.js')
const client = new Discord.Client()
const logger = require("discordjs-logger");


client.on('ready',()=>{
    console.log(' A Skyrox partnerbot elindult! ');
    let statuses = [
        "  www.skyrox.tk ",
        "  dc.skyrox.tk ",
        "  play.skyrox.tk  ",
				" bolt.skyrox.tk ",
        " !skyrox "

    ]
    setInterval(function(){
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            client.user.setActivity(status, {type:"WATCHING"})

        }, 3000) //Atleast set seconds to random



});

client.on('guildMemberAdd', member => {
  console.log(`juhu belépett egy fő: ${member.tag}`);
  member.send("A szerverünk partnerre a ***Skyrox***! Nézz be hozzájuk is, http://dc.skyrox.tk/")

});

client.on('message', message => {
	if (message.content === '!skyrox') {
    console.log(`Használták a parancsot`);
   message.channel.send({embed: {
    color: 3447003,
    title: ("Skyrox official"),
    description: "Egy kis bemutató a **Skyrox** szerveréről! A szerveren több játékmód is elérhető ezek közt ottvan a SkyPvP, BuildFFA, FullPvP, HCF éss még sorolhatnám! Ne habozz gyere és legyél te is egy kiváló közösség tagja!!!\n **www.skyrox.tk**\n**dc.skyrox.tk**\n**play.skyrox.tk**",
    footer:
    {
        text: "www.skyrox.tk"
    }
  }})
}
});

client.login("Nzc5NjQxMzE0MjQ4NDkxMDI4.X7jfjg.iwLX3m1LicyIylY_7QRzbf8Ok0Y")
