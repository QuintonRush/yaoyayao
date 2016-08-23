const Actions = require('./actions');
const mock = require('./mock');

module.exports = Reflux.createStore({

    listenables: [Actions],

    data: mock,

    updateComponent: function() {
        this.trigger(this.data);
    },

    getInitialState: function() {
        return this.data;
    }
});
