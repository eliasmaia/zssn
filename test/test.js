let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('Survivors', () =>{

  describe('/GET Survivors', () => {
    it('Testando GET todos os Survivors', (done) => {
      chai.request('http://localhost:3001') // server's address
        .get('/api/survivors') //endpoint to be tested
        .end((err, res) => { // tests to be taken
          res.should.have.status(200); // verifies if it returns 200 status code
          res.body.should.be.a('array'); // verifies if it returns an array
        done();
      });
    });
  });


})
