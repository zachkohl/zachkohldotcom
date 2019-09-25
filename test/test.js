
//process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;

const chai = require('chai');

const assert = chai.assert;
var expect = chai.expect;
  chai.should();

  chaiHttp = require('chai-http');

chai.use(chaiHttp);

const request = require('supertest');

//for testing controllers
config = require('../loaders');
controllers = require('../controllers');
controllers.configurations(config);
//index = require('../index')



//     }//end getuser

//Register||||

//user enters a username and password and email
describe('login/register test', function(){
before(function(done){
    let text = 'DELETE FROM USERS WHERE USERNAME=$1'; // everything after RETURNING are the columns that you want in what gets returned, use a * for everything. 
    let values = ['tester'];
    let query = config.query(text, values).then(done());
})//end beforeEach

after(function(){
    config.app.server.close();
})


it('user enters a  username that has not been created yet', async function(){
    response3 = await controllers.login.logOn('tester', 'notThePassword').catch(function(error){console.log(error)});
    valid3 = {
        template: 'login',
        parameters:
            { message: 'username, password, or both, failed. Please try again', email: '', firstName: '', lastName: '', target: '' }
    };
    expect(response3).to.eql(valid3); //see https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d
})

it('user registers a username, password, and email', async function (){
    //prep code
   
    //test code
    response1 = await controllers.login.register('tester', 'password', 'zach.kohl@gmail.com');
    valid1 = { attempt: true, string: '/' };
    expect(response1).to.eql(valid1); //see https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d
  
})

it('user registers a duplicate', async function (){
    //prep code
   
    //test code
    response1 = await controllers.login.register('tester', 'password', 'zach.kohl@gmail.com');
    valid1 = {
        template: 'login/register',
        parameters:
            { message: 'username or email unavailable', email: '', firstName: '', lastName: '', target: '' }
    };
    expect(response1).to.eql(valid1); //see https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d
  
})


it('user enters a dublicate username, password, and email', async function(){
    response2 = await controllers.login.register('tester', 'password', 'zach.kohl@gmail.com').catch(function(error){console.log(error)});
    valid2 = {
        template: 'register',
        parameters:
            { message: 'username unavailable', email: '', firstName: '', lastName: '', target: '' }
    };
    expect(response2).to.eql(valid2); //see https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d
})


it('user enters a  username, WRONG password', async function(){
    response3 = await controllers.login.logOn('tester', 'notThePassword').catch(function(error){console.log(error)});
    valid3 = {
        template: 'login',
        parameters:
            { message: 'username, password, or both, failed. Please try again', email: '', firstName: '', lastName: '', target: '' }
    };
    expect(response3).to.eql(valid3); //see https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d
})

it('testing targetOBJ', async function(){
    response3 = controllers.login.targetOBJ('zach.kohl@gmail.com', 'zach','kohl','/');
    expect(response3).to.eql({ email: 'zach.kohl@gmail.com', firstName: 'zach', lastName: 'kohl', target: '/' }); //see https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d
})

})//end describe


//user enters a username and no password

//user enters a password but no username

//user enters nothing

//user enters a username, password, and complete target

//user enters a username, different email from target, and password

//LogOn||||

//Enter username, password and target

//enter username and wrong password

//enter wrong username and correct password

//enter nothing






//  it('should return "test"',()=>{
//      assert.equal(controllers.tester(2,2), 'helloworld');
//  })


//testing routes
// app=config.app;

//  it('register route', (done) =>{
//     chai.request(app)
//     .get('/')
//     .end((err, res) =>{
//         res.should.have.status(200);
//         console.log(res)
//         res.body.should.be.a('object')
//         done();
//     });
// });

//  it('mikefagan/donate route', (done) =>{
//     chai.request(app)
//     .get('/mikefagan/donate')
//     .end((err, res) =>{
//         res.should.have.status(200);
//         res.body.should.be.a('object')
//         done();
//     });
// });

// it('timbenn/donate route', (done) =>{
//     chai.request(app)
//     .get('/timbenn/donate')
//     .end((err, res) =>{
//         res.should.have.status(200);
//         res.body.should.be.a('object')
//         done();
//     });
// });

// it('mikefagan/signup route', (done) =>{
//     chai.request(app)
//     .get('/mikefagan/signup')
//     .end((err, res) =>{
//         res.should.have.status(200);
//         res.body.should.be.a('object')
//         done();
//     });
// });

// it('timbenn/signup route', (done) =>{
//     chai.request(app)
//     .get('/timbenn/signup')
//     .end((err, res) =>{
//         res.should.have.status(200);
//         res.body.should.be.a('object')
//         done();
//     });
// });
