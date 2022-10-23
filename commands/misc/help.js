const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class HelpCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "help",
      group: "misc",
      memberName: "help",
      description: "Sends a list of available command",
      guildOnly: true,
    });
  }

  async run(message) {
    message.delete();
    const embed = new Discord.MessageEmbed()
      .setColor("#000001")
      .setAuthor("Help Command")
      .setFooter("CassinBot")
      .addFields(
        {
          name: "`!help`",
          value: "Montre la list des commandes disponibles",
        },
        {
          name: "`!edt <classe>`",
          value: "Montre l'emploi du temps d'une classe spécifique",
        },
        {
          name: "`!classement`",
          value:
            "Montre le classement des meilleures matières, à vous de contester !",
        },
        {
          name: "`!vote <prof>`",
          value: "Vote pour le meilleur prof !",
        }
      );
    message.channel.send(embed);

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: help`);
  }
};
