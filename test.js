let app = require("./app");
let chai = require("chai");
let chaiHttp = require("chai-http");
   const id = 5;
chai.should();
chai.use(chaiHttp);



describe("API Tests", () => {
    describe("Test GET All Data", () => {
      it("It should return all data", (done) => {
        chai
          .request(app)
          .get("/")
          .end((err, response) => {
            response.body.should.be.a("array");
            response.body.length.should.not.be.eq(0);
            done();
          });
      });
    });

    describe("Test GET User By Id", () => {
        it("It should return right item", (done) => {
          chai
            .request(app)
            .get("/" + id)
            .end((err, response) => {
              response.body.should.be.a("object");
              done();
            });
        });
      });

});