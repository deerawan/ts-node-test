import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

import server from './src';

describe("LogAPI", () => {

    describe('Base express tests', () => {
        it("Should return 'SUCCESS' if GET /", async () => {
            return chai.request(server).get("/").then(res => {
                chai.expect(res.body).to.equal("SUCCESS");
            })
        });

        it("Should return status-code 200 by calling GET /", async () => {
            return chai.request(server).get("/").then(res => {
                chai.expect(res.status).to.equal(200);
            })
        });

    });
});