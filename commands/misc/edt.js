const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class EdtCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "edt",
      group: "misc",
      memberName: "edt",
      description: "Envoie l'emploi du temps de la classe demandée",
      examples: ["edt S1"],
      args: [
        {
          key: "text",
          prompt: "Classe demandée",
          type: "string",
        },
      ],
      guildOnly: true,
    });
  }

  async run(message, { text }) {
    message.delete();
    message.channel.send(
      `**Chargement de l'emploi du temps pour la classe ${text}... ** *Cela peut prendre du temps*`
    );

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: help`);
  }
};
