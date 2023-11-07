require('dotenv').config();
const {REST, Routes, Application, ApplicationCommandType, ApplicationCommandOptionType} = require('discord.js');

const commands = [
  {
		name: 'contract',
		description: 'create contract data record',
	},
	{
		name: 'stroke',
		description: 'create stroke data record',
	},
	{
		name: 'care',
		description: 'create care lable record',
	},
	{
		name: 'other',
		description: 'create other label record',
	},
	{
		name: 'quantity',
		description: 'create quntity data record',
	}
];

const rest = new REST().setToken(process.env.TOKEN);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();