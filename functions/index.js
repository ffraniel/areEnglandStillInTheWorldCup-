// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest((req, res) => {
    const original = req.query.text;

    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    return admin.database()
        .ref('/messages')
        .push({original: original})
        .then((snapshot) => {
      // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
      return res.redirect(303, snapshot.ref.toString());
    });
  });

  exports.flipStatus = functions.https.onRequest((req, res) => {
    const status = req.query.status;
    var bool;
    if (status === "true" || status === "false"){
        bool = JSON.parse(status);

        return admin.database()
            .ref('/in')
            .set(bool)
            .then((snapshot) => {
                return res.send({status: bool});
            });
    }
    else{
        bool="Error updating, a boolean value is required.";
        return res.send({status: bool});
    }
  });
