const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function connect() {
  await prisma.$connect();
  console.log('Connected to Prisma database');
}

async function uploadContractData(contractdata) {
  try {
    await prisma.contract.create({
      data: contractdata,
    });

    return 'Stroke data uploaded successfully';
  } catch (error) {
    return 'Error uploading user data';
  }
}

async function uploadStrokeData(strokedata) {
  try {
    await prisma.stroke.create({
      data: strokedata,
    });

    return 'Stroke data uploaded successfully';
  } catch (error) {
    return 'Error uploading user data';
  }
}

async function uploadcareData(caredata) {
  try {
    let data = await prisma.carelabel.create({
      data: caredata,
    });

    return data.id;
  } catch (error) {
    return 'Error uploading care data';
  }
}

async function uploadOtherData(otherdata) {
  try {
    let data = await prisma.otherlabel.create({
      data: otherdata,
    });

    return data.id;
  } catch (error) {
    return 'Error uploading other data';
  }
}

async function uploadQuantityData(quantitydata) {
  try {
    await prisma.contity.create({
      data: quantitydata,
    });

    return 'Quntity data uploaded successfully';
  } catch (error) {
    return 'Error uploading quantity data';
  }
}

async function disconnect() {
  await prisma.$disconnect();
  console.log('Disconnected from Prisma database');
}

module.exports = {
  connect,
  uploadContractData,
  disconnect,
  uploadStrokeData,
  uploadcareData,
  uploadOtherData,
  uploadQuantityData
};


//test