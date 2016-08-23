require('./HomeTab.styl');

const { Gallery, Group, Icon } = SaltUI;

class HomeTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleButlerDetail() {
        this.context.router.push('/butler');
    }

    handleButlerList() {
        this.context.router.push('/butlerList');
    }

    renderSection(section) {
        let t = this;
        return (
            <Group className="section">
                <Group.Head>
                    <div className="head">
                        <img className="icon" src={section.head.icon}/>
                        <span className="title">{section.head.title}</span>
                        <div className="right" onClick={t.handleButlerList.bind(t)}>
                            <span className="tip">查看全部</span>
                            <Icon name="angle-right" fill="#d8d8d8" width={18} height={18}/>
                        </div>
                    </div>
                </Group.Head>
                <Group.List itemIndent={[10, 10]}>
                    <div className="butlers">
                    {
                        section.butlers.map(butler => {
                            return (
                                <div className="butler" onClick={t.handleButlerDetail.bind(t, butler.id)}>
                                    <img className="avatar" src={butler.avatar}/>
                                    <span className="name">{butler.name}</span>
                                </div>
                            );
                        })
                    }
                    </div>
                </Group.List>
            </Group>
        );
    }

    render() {
        let t = this;

        return (
            <div className="hometab">
                <div className="gallery">
                    <Gallery images={t.props.banners} lazyLoad={false} showNav={true} auto={true}/>
                </div>
                <div className="sections">
                    {
                        t.props.sections.map(section => {
                            return t.renderSection(section);
                        })
                    }
                </div>
            </div>
        );
    }
}

HomeTab.contextTypes = {
    router: React.PropTypes.object.isRequired
};

HomeTab.propTypes = {
    banners: React.PropTypes.arrayOf(React.PropTypes.object)
};

module.exports = HomeTab;
