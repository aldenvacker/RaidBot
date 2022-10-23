const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class ClassementCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "classement",
      group: "misc",
      memberName: "classement",
      description: "Classement des meilleurs matières",
      guildOnly: true,
    });
  }

  async run(message) {
    message.delete();
    const embed = new Discord.MessageEmbed()
      .setColor("#000001")
      .setAuthor("Classement des meilleurs matières")
      .setFooter("CassinBot")
      .addFields(
        {
          name: "`Anglais`",
          value: "1er \ud83e\udd47",
        },
        {
          name: "`SNT`",
          value: "2e \ud83e\udd48",
        },
        {
          name: "`EPS`",
          value: "3e \ud83e\udd49",
        },
        {
          name: "`Espagnol`",
          value: "4e",
        },
        {
          name: "`Histoire-Géo`",
          value: "5e",
        },
        {
          name: "`Mathématiques`",
          value: "6e",
        },
        {
          name: "`SVT`",
          value: "7e",
        },
        {
          name: "`Physique-Chimie`",
          value: "8e",
        },
        {
          name: "`Français`",
          value: "9e",
        },
        {
          name: "`SES`",
          value: "10e",
        }
      );
    message.channel.send(embed);

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: help`);
  }
};
