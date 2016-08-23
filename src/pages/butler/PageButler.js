require('./PageButler.styl');

const reactMixin = require('react-mixin');
const { Gallery, Tab, TabBar } = SaltUI;
const Actions = require('./actions');
const Store = require('./store');

class Butler extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    componentWillMount() {
        let id = this.props.location.query.id;
        if (!id) id = 1;
        Actions.fetch(id);
    }

    handleTabSelected(active) {
        this.setState({
            active: active
        });
    }

    handleTabBarSelected(activeIndex) {
        if (activeIndex == 2) {
            this.handleMakeComment();
        }
    }

    handleMakeComment() {
        this.context.router.push('/makeComment');
    }

    handleViewComment() {
        this.context.router.push('/comments');
    }

    render() {
        let t = this;
        return (
            <div className="butler">
                <Gallery images={t.state.banners} lazyLoad={false} showNav={false} auto={true}/>
                <Tab active={t.state.activeIndex} onChange={t.handleTabSelected.bind(t)}>
                    <Tab.Item title="管家介绍">
                        <div className="butler-profile">
                            <img className="avatar" src={t.state.profile.avatar} />
                            <div className="name">{t.state.profile.name}</div>
                            <div className="title">{t.state.profile.title}</div>
                            <div className="intro">{t.state.profile.intro}</div>
                            <div className="video">
                                <img src={t.state.profile.video}/>
                            </div>
                            {
                                /**<div className="comment" onClick={t.handleViewComment.bind(t)}>查看全部评价</div>*/
                            }
                        </div>
                    </Tab.Item>
                    <Tab.Item title="管家推荐">
                        <div className="butler-recommendation">
                            {
                                t.state.recommendation.list.map(item => {
                                    return (
                                        <div className="item">
                                            <img src={item.img} />
                                            <div className="desc">
                                                <span className="title">{item.title}</span>
                                                <span className="subTitle">{item.subTitle}</span>
                                            </div>
                                            <div className="flag">
                                                <span className="text">已报名</span>
                                                <span className="number">26</span>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </Tab.Item>
                </Tab>
                {
                    /**
                    <TabBar activeIndex={9} onChange={t.handleTabBarSelected.bind(t)}>
                        <TabBar.Item title="收藏" icon="star">
                        </TabBar.Item>
                        <TabBar.Item title="约ta" icon="user">
                        </TabBar.Item>
                        <TabBar.Item title="评价" icon="pen">
                        </TabBar.Item>
                    </TabBar>
                     */
                }
            </div>
        );
    }
}

Butler.contextTypes = {
    router: React.PropTypes.object.isRequired
};

reactMixin.onClass(Butler, Reflux.connect(Store));

module.exports = Butler;
