const { expect } = require("chai");
const simple = require("simple-mock");

const firebase = require("../app/firebase");

describe("firebase", () => {
  describe("init", () => {
    it("should initialise the firebase application", () => {
      simple.mock(console, "log");

      const mockFirebase = {
        initializeApp: simple.mock(),
        credential: {
          cert: simple.mock()
        },
        database: simple.mock()
      };

      let FIREBASE_CREDENTIALS = '{ "type": "service_account" }';
      let FIREBASE_DATABASE_URL = "location-database-url";

      simple.mock(process.env, "FIREBASE_CREDENTIALS", FIREBASE_CREDENTIALS);
      simple.mock(process.env, "FIREBASE_DATABASE_URL", FIREBASE_DATABASE_URL);
      simple.mock(mockFirebase, "initializeApp");

      firebase.init(mockFirebase);

      expect(console.log.lastCall.args).to.deep.equal([
        "debug",
        "Firebase connection successfully initialised"
      ]);
    });
  });
});
