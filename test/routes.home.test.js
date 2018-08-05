const { expect } = require("chai");
const simple = require("simple-mock");
const request = require("supertest");

describe("home endpoint", () => {
  const firebase = {
    initializeApp: simple.mock(),
    credential: {
      cert: simple.mock()
    },
    database: simple.mock()
  };

  afterEach(() => {
    simple.restore();
  });

  it("should return 200 on success", done => {
    simple.mock(firebase, "init");
    simple.mock(firebase, "getValues").returnWith([
      {
        some: "values"
      }
    ]);

    const app = require("../app/app");

    request(app)
      .get("/")
      .expect(200)
      .end(done);
  });
});
