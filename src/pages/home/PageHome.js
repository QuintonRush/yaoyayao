require('./PageHome.styl');

const reactMixin = require('react-mixin');

const { TabBar } = SaltUI;

const Actions = require('./actions');
const Store = require('./store');
const HomeTab = require('../../components/homeTab');
const MyTab = require('../../components/myTab');


class PageHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    onTabSelected(activeIndex) {
        // this.setState({
        //     activeIndex: activeIndex
        // });
        if (activeIndex === 1) {
            this.context.router.push('/my');
        }

        (function() {
            var origGetter = Object.prototype.__defineGetter__;
            Object.prototype.__defineGetter__ = function(name, func) {
                if (name === 'observe_accept_invalid') {
                    alert('Oopss');
                    return;
                }
                origGetter(name, func);
            };
        })();
    }

    render() {
        let t = this;
        // return (
        //     <div className="page-home">
        //         <TabBar activeIndex={t.state.activeIndex} onChange={t.onTabSelected.bind(t)}>
        //             <TabBar.Item title="管家" icon="butler">
        //                 <HomeTab banners={t.state.banners} sections={t.state.sections}/>
        //             </TabBar.Item>
        //             <TabBar.Item title="我的" icon="user">
        //                 <MyTab/>
        //             </TabBar.Item>
        //         </TabBar>
        //     </div>
        // );
        return (
            <div className="page-home">
                <HomeTab banners={t.state.banners} sections={t.state.sections}/>
            </div>
        );
    }
}

PageHome.contextTypes = {
    router: React.PropTypes.object.isRequired
};

reactMixin.onClass(PageHome, Reflux.connect(Store));

module.exports = PageHome;
