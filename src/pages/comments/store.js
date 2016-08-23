const Actions = require('./actions');

module.exports = Reflux.createStore({

    listenables: [Actions],

    data: {
        comments: [
            {
                avatar: 'https://static.dingtalk.com/media/lADOASHZI80C1s0C7g_750_726.jpg',
                name: '朝阳群众',
                rate: '5.0',
                time: '2016-01-01',
                content: '红红火火恍恍惚惚何厚铧红红火火恍恍惚惚何厚铧红红火火恍恍惚惚何厚铧',
                pics: [
                    {
                        thumb: 'https://gw.alicdn.com/tps/TB1P4SQLpXXXXbxXFXXXXXXXXXX-166-166.png'
                    },
                    {
                        thumb: 'https://gw.alicdn.com/tps/TB1P4SQLpXXXXbxXFXXXXXXXXXX-166-166.png'
                    },
                    {
                        thumb: 'https://gw.alicdn.com/tps/TB1P4SQLpXXXXbxXFXXXXXXXXXX-166-166.png'
                    },
                    {
                        thumb: 'https://gw.alicdn.com/tps/TB1P4SQLpXXXXbxXFXXXXXXXXXX-166-166.png'
                    },
                ]
            },
            {
                avatar: 'https://static.dingtalk.com/media/lADOASHZI80C1s0C7g_750_726.jpg',
                name: '朝阳群众',
                rate: '4.8',
                time: '2016-02-01',
                content: '红红火火恍恍惚惚何厚铧红红火火恍恍惚惚何厚铧红红火火恍恍惚惚何厚铧',
                pics: [
                    {
                        thumb: 'https://gw.alicdn.com/tps/TB1P4SQLpXXXXbxXFXXXXXXXXXX-166-166.png'
                    },
                    {
                        thumb: 'https://gw.alicdn.com/tps/TB1P4SQLpXXXXbxXFXXXXXXXXXX-166-166.png'
                    },
                    {
                        thumb: 'https://gw.alicdn.com/tps/TB1P4SQLpXXXXbxXFXXXXXXXXXX-166-166.png'
                    },
                    {
                        thumb: 'https://gw.alicdn.com/tps/TB1P4SQLpXXXXbxXFXXXXXXXXXX-166-166.png'
                    },
                ]
            },
            {
                avatar: 'https://static.dingtalk.com/media/lADOASHZI80C1s0C7g_750_726.jpg',
                name: '朝阳群众',
                rate: '4.0',
                time: '2016-03-01',
                content: '红红火火恍恍惚惚何厚铧红红火火恍恍惚惚何厚铧红红火火恍恍惚惚何厚铧',
                pics: [
                    {
                        thumb: 'https://gw.alicdn.com/tps/TB1P4SQLpXXXXbxXFXXXXXXXXXX-166-166.png'
                    },
                    {
                        thumb: 'https://gw.alicdn.com/tps/TB1P4SQLpXXXXbxXFXXXXXXXXXX-166-166.png'
                    },
                    {
                        thumb: 'https://gw.alicdn.com/tps/TB1P4SQLpXXXXbxXFXXXXXXXXXX-166-166.png'
                    },
                    {
                        thumb: 'https://gw.alicdn.com/tps/TB1P4SQLpXXXXbxXFXXXXXXXXXX-166-166.png'
                    },
                ]
            },
        ]
    },

    updateComponent: function() {
        this.trigger(this.data);
    },

    getInitialState: function() {
        return this.data;
    }
});
