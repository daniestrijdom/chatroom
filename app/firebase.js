const firebase = require("firebase-admin");

/**
 * Initialises the firebase application
 * @param {module} firebaseAdmin - The firebase-admin dependency
 */
const init = (firebaseAdmin = firebase) => {
  const { FIREBASE_CREDENTIALS, FIREBASE_URL } = process.env;

  const firebaseCredentials = JSON.parse(FIREBASE_CREDENTIALS);

  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(firebaseCredentials),
    databaseURL: FIREBASE_URL
  });

  // instantiate database to manage listeners
  firebaseAdmin.database();

  console.log("info", "Firebase connection successfully initialised");
};

/**
 * Retrieves a 'snapshot' of the firebase db data for a parent
 * ref and returns the associated data value
 * @param {string} parent - parent reference under which desired data is nested
 * @returns {Array} - Array of objects
 */
const getValues = parent => {
  const ref = firebase.database().ref(parent);

  // istanbul ignore next
  return ref.once("value").then(snapshot => snapshot.val());
};

module.exports = {
  getValues,
  init
};
