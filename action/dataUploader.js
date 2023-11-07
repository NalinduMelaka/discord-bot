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

async function disconnect() {
  await prisma.$disconnect();
  console.log('Disconnected from Prisma database');
}

module.exports = {
  connect,
  uploadContractData,
  disconnect,
  uploadStrokeData
};
