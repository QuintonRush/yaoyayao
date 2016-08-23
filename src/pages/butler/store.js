const Actions = require('./actions');
const mock = [
    require('./mock1'),
    require('./mock2'),
    require('./mock3'),
    require('./mock4'),
    require('./mock5'),
    require('./mock6'),
    require('./mock7'),];

module.exports = Reflux.createStore({

    listenables: [Actions],

    data: {},

    onFetch: function(id) {
        this.data = mock[id - 1];
        this.updateComponent();
    },

    updateComponent: function() {
        this.trigger(this.data);
    },

    getInitialState: function() {
        return this.data;
    }
});
