const Actions = require('./actions');
const mock = [
    require('./mock1'),
    require('./mock2')];

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
