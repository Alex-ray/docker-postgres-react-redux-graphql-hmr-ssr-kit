import app from '../lib/app';
import {sequelize} from '../lib/models';

let server;

module.exports = {

    waitForConditionTimeout: 10000,

    before: function(done) {
        console.log('starting app');
        server = app.listen(8000, '0.0.0.0', () => done());
    },

    beforeEach: function(browser, done) {
        console.log('syncing db');
        sequelize.sync({force:true}).then(() => done());
    },

    after: function(done) {
        if (server) {
            console.log('stopping app');
            server.close();
            server = null;
        }
        done();
    }
}