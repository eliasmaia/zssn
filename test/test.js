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

  describe('/POST Survivor', () => {
    it('Verifica o cadastro de um Survivor', (done) => {
        let survivor = { //We'll define the properties of the survivor we are creating
          name: 'Andrew',
          age: 27,
          gender: 'Male',
          location: {
            latitude: 30001.21,
            longitude: 20002.31,
          },
          resources: {
            Water: 5,
            Ammunition: 1,
            Medication: 4,
            Food: 15,
          }
        }
          chai.request('http://localhost:3001')
          .post('/api/survivors')
          .send(survivor) // sending this 'survivor'
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
      });
  });

  describe('/PUT/:id survivor', function(){
    it('Atualiza a localização de um Survivor', function(done){
      let survivor = { //We'll define the properties of the survivor we are creating
        name: 'Brandon',
        age: 35,
        gender: 'Male',
        location: {
          latitude: 201.01,
          longitude: 102.01,
        },
        resources: {
          Water: 1,
          Ammunition: 2,
          Medication: 3,
          Food: 5,
        }
      }
      survivor.save((err, survivor) => {
          chai.request('http:://localhost:3001')
          .put('/survivor/' +survivor.id)
          .send({
            location: {
              latitude: 100.02,
              longitude: 200.04
            }
          })
          .end(function(err, res){
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('latitude').eql(100.02);
          done();
        });
      });
  });
});

describe('/GET Percentage of Survivors Infected', () => {
  it('Testando GET todos os survivors infectados', (done) => {
    chai.request('http://localhost:3001') // server's address
      .get('/api/survivors/reports/infected') //endpoint to be tested
      .end((err, res) => { // tests to be taken
          res.should.have.status(200); // verifies if it returns 200 status code
          res.body.should.have.property('Percentage of infected survivors');
        done();
    });
  });
});

describe('/GET Percentage of Non Infected Survivors', () => {
  it('Testando GET todos os survivors não infectados', (done) => {
    chai.request('http://localhost:3001') // server's address
      .get('/api/survivors/reports/noninfected') //endpoint to be tested
      .end((err, res) => { // tests to be taken
          res.should.have.status(200); // verifies if it returns 200 status code
          res.body.should.have.property('Percentage of non infected survivors');
        done();
    });
  });
});

describe('/GET Average amount of resources per Survivors', () => {
  it('Testando GET médias de resources por survivors', (done) => {
    chai.request('http://localhost:3001') // server's address
      .get('/api/survivors/reports/averageamount') //endpoint to be tested
      .end((err, res) => { // tests to be taken
          res.should.have.status(200); // verifies if it returns 200 status code
          res.body.should.have.property('Average of waters per survivor');
          res.body.should.have.property('Average of ammunition per survivor');
          res.body.should.have.property('Average of medication per survivor');
          res.body.should.have.property('Average of food per survivor');
        done();
    });
  });
});



})
