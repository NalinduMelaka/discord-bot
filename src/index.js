const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle,Client, IntentsBitField, InteractionCollector } = require('discord.js');
require('dotenv').config();
const { connect, uploadContractData, disconnect,  uploadStrokeData } = require('../action/dataUploader');


const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`${client.user.tag} is ready.`);
});


client.on('interactionCreate', async (interaction) => {
  if(interaction.isChatInputCommand()){
			if (interaction.commandName === 'contract') {
				// Create the modal
				const modal = new ModalBuilder()
					.setCustomId('myModal')
					.setTitle('Contract data');

				// Add components to modal

				// Create the text input components
				const strokeinput = new TextInputBuilder()
					.setCustomId('strokeinput')
						// The label is the prompt the user sees for this input
					.setLabel("Enter the stroke number")
						// Short means only a single line of text
					.setStyle(TextInputStyle.Short);

				const contractinput = new TextInputBuilder()
					.setCustomId('contractinput')
					.setLabel("Enter the contract number")
						// Paragraph means multiple lines of text.
					.setStyle(TextInputStyle.Short);

				const seasioninput = new TextInputBuilder()
					.setCustomId('seasioninput')
					.setLabel("Enter the Season")
					.setStyle(TextInputStyle.Short);
				const tdept = new TextInputBuilder()
					.setCustomId('tdept')
					.setLabel("Enter the TDEPT")
					.setStyle(TextInputStyle.Short);
				const prodesc = new TextInputBuilder()
					.setCustomId('prodescinput')
					.setLabel("Enter the TDEPT and DESC separate using /")
					.setStyle(TextInputStyle.Short)		
				

				// An action row only holds one text input,
				// so you need one action row per text input.
				const firstActionRow = new ActionRowBuilder().addComponents(strokeinput);
				const secondActionRow = new ActionRowBuilder().addComponents(contractinput);
				const thirdActionRow = new ActionRowBuilder().addComponents(seasioninput);
				const forthActionRow = new ActionRowBuilder().addComponents(tdept);
				const fifthActoinRow = new ActionRowBuilder().addComponents(prodesc);

				// Add inputs to the modal
				modal.addComponents(firstActionRow, secondActionRow, thirdActionRow,forthActionRow,fifthActoinRow);

				// Show the modal to the user
				await interaction.showModal(modal);
				

			}else if(interaction.commandName === 'stroke'){
				const modaltwo = new ModalBuilder()
					.setCustomId('strokeModal')
					.setTitle('Stroke data');
				const strokeno = new TextInputBuilder()
					.setCustomId('strokeno')
					.setLabel("Provide the Strokeno")
					.setStyle(TextInputStyle.Short);
				const firstActionRow = new ActionRowBuilder().addComponents(strokeno);
				modaltwo.addComponents(firstActionRow);
				await interaction.showModal(modaltwo);
				
			}else if(interaction.commandName === 'care'){
				const modalthree = new ModalBuilder()
					.setCustomId('careModal')
					.setTitle('Care data');
				const refadnwashinput = new TextInputBuilder()
					.setCustomId('refwash')
					.setLabel("Ref and Wash numbers use / to separate")
					.setStyle(TextInputStyle.Short);
				const fiberzoordsinput = new TextInputBuilder()
					.setCustomId('fiberzoo')
					.setLabel("Fiber and  zoodes use / to separate")
					.setStyle(TextInputStyle.Short);
				const coompartinput = new TextInputBuilder()
					.setCustomId('coompart')
					.setLabel("Coo and Mpart vlues use / to separate")
					.setStyle(TextInputStyle.Short);
				const caretextinput = new TextInputBuilder()
					.setCustomId('caretextinput')
					.setLabel("Provide care text")
					.setStyle(TextInputStyle.Short);
				const contractinput = new TextInputBuilder()
					.setCustomId('contract')
					.setLabel("Provide the contract number")
					.setStyle(TextInputStyle.Short);
				const firstActionRow = new ActionRowBuilder().addComponents(refadnwashinput);
				const secondActionRow = new ActionRowBuilder().addComponents(fiberzoordsinput);
				const thirdActionRow = new ActionRowBuilder().addComponents(coompartinput);
				const forthActionRow = new ActionRowBuilder().addComponents(caretextinput);
				const fifthActoinRow = new ActionRowBuilder().addComponents(contractinput);
				modalthree.addComponents(firstActionRow,secondActionRow,thirdActionRow,forthActionRow,fifthActoinRow);
				await interaction.showModal(modalthree);
			}else if(interaction.commandName === 'other'){
				const modalfour = new ModalBuilder()
					.setCustomId('otherModal')
					.setTitle('Other data');
				const refno = new TextInputBuilder()
					.setCustomId('refno')
					.setLabel("Provide the Refno")
					.setStyle(TextInputStyle.Short);
				const labeltype = new TextInputBuilder()
					.setCustomId('labeltype')
					.setLabel("Provide the Label type")
					.setStyle(TextInputStyle.Short);
				const carelabelidinput = new TextInputBuilder()
					.setCustomId('carelabelidinput')
					.setLabel("Provide the Care label id")
					.setStyle(TextInputStyle.Short);
				const firstActionRow = new ActionRowBuilder().addComponents(refno);
				const secondActionRow = new ActionRowBuilder().addComponents(labeltype);
				const thirdActionRow = new ActionRowBuilder().addComponents(carelabelidinput);
				modalfour.addComponents(firstActionRow,secondActionRow,thirdActionRow);
				await interaction.showModal(modalfour);
			}else if(interaction.commandName === 'quantity'){
				const modalfive = new ModalBuilder()
					.setCustomId('quantityModal')
					.setTitle('Quantity data');
				const colorcode = new TextInputBuilder()
					.setCustomId('colorcode')
					.setLabel("Color and Colorname use /to separate")
					.setStyle(TextInputStyle.Short);
				const upcsieze = new TextInputBuilder()
					.setCustomId('upcsize')
					.setLabel("Upc and Size use /to separate")
					.setStyle(TextInputStyle.Short);
				const ssizeprice = new TextInputBuilder()
					.setCustomId('ssizeprice')
					.setLabel("Secondarysize and price")
					.setStyle(TextInputStyle.Short);
			  const  orderqtys = new TextInputBuilder()
					.setCustomId('orderqty')
					.setLabel("Provide Order QTY")
					.setStyle(TextInputStyle.Short);
				const otherlableinput = new TextInputBuilder()
				  .setCustomId('otherlableinput')
					.setLabel("Provide the Other label id")
					.setStyle(TextInputStyle.Short);
				const firstActionRow = new ActionRowBuilder().addComponents(colorcode);
				const secondActionRow = new ActionRowBuilder().addComponents(upcsieze);
				const thirdActionRow = new ActionRowBuilder().addComponents(ssizeprice);
				const forthActionRow = new ActionRowBuilder().addComponents(orderqtys);
				const fifthActoinRow = new ActionRowBuilder().addComponents(otherlableinput);

				modalfive.addComponents(firstActionRow,secondActionRow,thirdActionRow,forthActionRow,fifthActoinRow);
				await interaction.showModal(modalfive);
			}
		}else if(interaction.isModalSubmit()){
			if(interaction.customId == 'myModal'){
				//show the result
				await interaction.reply({ content:'we receved it processing'});
				
				const stroke = interaction.fields.getTextInputValue('strokeinput').trim();
				const contract = interaction.fields.getTextInputValue('contractinput').trim();
				const season = interaction.fields.getTextInputValue('seasioninput').trim();
				const tdept = interaction.fields.getTextInputValue('tdept').trim();
				const arrayoftow = interaction.fields.getTextInputValue('prodescinput').split('/');
				const prodescin = arrayoftow[0];
				const strokein = arrayoftow[1];
				await connect();
				const contractdata = {
					constractno: contract,
					season: season,
					stroke_desc: strokein,
					prodesc: prodescin,
					tdept: tdept,
					stroke_id: stroke
				}
				const resultup = await uploadContractData(contractdata);
				await disconnect();

        if(resultup ==='Stroke data uploaded successfully'){
					await interaction.editReply({content:'successfuly database uploaded'});
				}else{
					await interaction.editReply({content:'Something wrong try again!'});
				}
		
			}else if(interaction.customId === 'strokeModal'){
				await interaction.reply({ content:'we receved it processing'});
				await connect();
				const strokedata = {
					strokeno: interaction.fields.getTextInputValue('strokeno'),
				}
				const result = await uploadStrokeData(strokedata);
				await disconnect();
				if(result ==='Stroke data uploaded successfully'){
					await interaction.editReply({content:'successfuly database uploaded'});
				}else{
					await interaction.editReply({content:'Something wrong try again!'});
				}
			}else if(interaction.customId === 'careModal'){
				await interaction.reply({ content:'we receved it processing'});
			}else if(interaction.customId === 'otherModal'){
				await interaction.reply({ content:'we receved it processing'});
			}else if(interaction.customId === 'quantityModal'){
				await interaction.reply({ content:'we receved it processing'});
			}
		}
});




client.login(process.env.TOKEN);
