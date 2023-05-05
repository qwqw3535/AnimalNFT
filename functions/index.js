const metaFunctions = require("firebase/functions");
const functions = require("firebase-functions");
const app = require("firebase/app");
const admin = require("firebase-admin");
const NFT = require("./NFT");
admin.initializeApp();

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const emulFunctions = metaFunctions.getFunctions(app.getApp());
metaFunctions.connectFunctionsEmulator(emulFunctions, "localhost", 5001);

exports.generateWallet = functions.https.onCall((data, context) => {
  const walletInfo = NFT.generateWallet(data, context);
  return { data, walletInfo };
});
exports.registerContract = functions.https.onCall((data, context) => {
  const contractInfo = NFT.registerContract(data, context);
  return {
    contractInfo,
  };
});
//TODO
exports.mintToken = functions.https.onCall((data, context) => {
  const tokenInfo = NFT.mintToken(data, context);
  return {
    tokenInfo,
  };
});
exports.sendToken = functions.https.onCall((data, context) => {
  const txInfo = NFT.sendToken(data, context);
  return {
    txInfo,
  };
});
