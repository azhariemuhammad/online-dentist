const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')
const expect = chai.expect
const URL = 'http://localhost:3000/api'


chai.use(chaiHttp)

const user = {}
user.username = 'shita'
user.email = 'shita@gmail.com'
user.age = 17
user.firstName = 'shita'
user.lastName = 'manshur'
user.address = 'jl. batu merah'

const userUpdate = {}
userUpdate.userUpdatename = 'afri'
userUpdate.email = 'afri@gmail.com'
userUpdate.age = 13
userUpdate.firstName = 'afri'
userUpdate.lastName = 'holle'
userUpdate.address = 'jl. kb. cengke'


describe('users-api testing', () => {
  describe('POST /USERS', () => {
    it('should get status ok', (done) => {
      chai.request(URL)
      .post('/users')
      .type('form')
      .send({
        'username': user.username,
        'email': user.email,
        'age': user.age,
        'firstName': user.firstName,
        'lastName': user.lastName,
      })
      .end((err, res) => {
        try {
          expect(res).to.have.status(200)
          expect(res.body.username).to.equal(user.username)
          expect(res.body.email).to.equal(user.email)
          expect(parseInt(res.body.age)).to.equal(user.age)
          expect(res.body.firstName).to.equal(user.firstName)
          expect(res.body.lastName).to.equal(user.lastName)
          expect(res.body.address).to.equal(user.address)
          user.id = res.body._id
          console.log(user.id, 'post')
          done()
        } catch (err) {
          done(err)
        }
      })
    })
  })

  describe('GET /USERS', () => {
    it('should have status ok', (done) => {
      chai.request(URL)
      .get('/users')
      .end((err, res) => {
        expect(res).to.have.status(200)
        this.timeout(5000)
        setTimeout(done, 5000)
      })
    })
  })

  describe('FIND_BY_ID /USERS/:ID', () => {
    it('should have status ok', (done) => {
      console.log(user.id)
      chai.request(URL)
      .get(`/users/${user.id}`)
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body.username).to.equal(user.username)
        expect(res.body.email).to.equal(user.email)
        expect(parseInt(res.body.age)).to.equal(user.age)
        expect(res.body.firstName).to.equal(user.firstName)
        expect(res.body.lastName).to.equal(user.lastName)
        expect(res.body.address).to.equal(user.address)
        done()
      })
    })
  })

  describe('UPDATE USER /USERS/:ID', () => {
    it('should have status ok', (done) => {
      chai.request(URL)
      .put(`/users/${user.id}`)
        .type('form')
        .send({
          'username': userUpdate.username,
          'email': userUpdate.email,
          'age': userUpdate.age,
          'firstName': userUpdate.firstName,
          'lastName': userUpdate.lastName,
        })
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body.username).to.equal(userUpdate.userUpdatename)
        expect(res.body.email).to.equal(userUpdate.email)
        expect(parseInt(res.body.age)).to.equal(userUpdate.age)
        expect(res.body.firstName).to.equal(userUpdate.firstName)
        expect(res.body.lastName).to.equal(userUpdate.lastName)
        expect(res.body.address).to.equal(userUpdate.address)
        done()
      })
    })
  })

  describe('DELETE USER /USERS/ID', () => {
    it('should have status ok', (done) => {
      chai.request(URL)
      .delete(`/users/${id}`)
      .end((err, res) => {
      expect(res).to.have.status(200)
      done()
      })
    })
  })
})