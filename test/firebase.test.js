const { expect } = require("chai");
const simple = require("simple-mock");
const logger = require("logops");

const firebase = require("../app/firebase");

describe("firebase", () => {
  describe("init", () => {
    it("should initialise the firebase application", () => {
      simple.mock(logger, "debug");

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

      logger;
      expect(logger.debug.lastCall.args).to.deep.equal([
        "Firebase connection successfully initialised"
      ]);
    });
  });
});
