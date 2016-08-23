require('./MyTab.styl');

const MyPage = require('../../pages/my');

class MyTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="mytab">
                <MyPage/>
            </div>
        );
    }
}

module.exports = MyTab;
