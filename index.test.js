const expect = require('expect');
const request = require('supertest');
const { app } = require('./index');
const {records} = require('./seed');



describe('POST /records', () => {
    it('should acept a record', (done) => {
        var text = 'Test record';

        request(app)
            .post('/reords')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

            });
    });
});



describe('GET /records/gender', () => {
    it('should return all records sorted by gender', (done) => {
         request(app)
        .get('/records/gender')
        .expect(200)
        .expect((res) => {
            expect(res.body.records.length).toBe(5);
        })
        .end(done);
    });
});

describe('GET /records/birthdate', () => {
    it('should return all records sorted by birth date', (done) => {
         request(app)
        .get('/records/gender')
        .expect(200)
        .expect((res) => {
            expect(res.body.records.length).toBe(5);
        })
        .end(done);
    });
});

describe('GET /records/name', () => {
    it('should return all records sorted by name', (done) => {
         request(app)
        .get('/records/gender')
        .expect(200)
        .expect((res) => {
            expect(res.body.records.length).toBe(5);
        })
        .end(done);
    });
});