import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// Example function (you can modify or remove this)
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.json({message: "Hello from Firebase!"});
});