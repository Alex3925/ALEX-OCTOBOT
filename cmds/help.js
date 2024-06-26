module.exports = {
    description: "Show Commands and the descriptions",
    role: "user",
    credits: "Alex Jhon Ponce",
    cooldown: 16,		
    execute(api, event, args, commands) {
        let helpMessage = '𝙷𝚒! 𝚃𝚑𝚒𝚜 𝙱𝚘𝚝 𝚒𝚜 𝚌𝚛𝚎𝚊𝚝𝚎𝚍 by Alex!. 𝙷𝚎𝚛𝚎 𝚊𝚛𝚎 𝚊𝚕𝚕 𝚝𝚑𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 𝚒𝚗𝚜𝚝𝚊𝚕𝚕𝚎𝚍 𝚘𝚗 𝚝𝚑𝚒𝚜 𝚜𝚎𝚛𝚟𝚎𝚛\n';
        helpMessage += '💮═══════════════💮\n';
        commands.forEach((command, name) => {
            helpMessage += `𝙽𝚊𝚖𝚎: ${name}\n`;
            helpMessage += `𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗: ${command.description}\n`;
            helpMessage += `𝚁𝚘𝚕𝚎: ${command.role}\n`;
            helpMessage += `Credits: ${command.credits}\n`;
        helpMessage += '💮═══════════════💮\n';
        });
        helpMessage += '💬https://facebook.com/100085861488156';
        api.sendMessage(helpMessage, event.threadID);
    }
};
