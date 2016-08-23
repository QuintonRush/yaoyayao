require('./PageButlerlist.styl');

const reactMixin = require('react-mixin');
const {Gallery} = SaltUI;
const Actions = require('./actions');
const Store = require('./store');

class Butlerlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleDetailClick(id) {
        this.context.router.push({
            pathname: '/butler',
            query: {id: id}
        });
    }

    render() {
        let t = this;
        return (
            <div className="butlerlist">
                <div className="gallery">
                  <Gallery images={t.state.banners} lazyLoad={false} showNav={true} auto={true}/>
                </div>
                {
                    t.state.list.map(item => {
                        {/*return (*/}
                            {/*<div className="item" onClick={t.handleDetailClick.bind(t)}>*/}
                                {/*<img src={item.img} />*/}
                                {/*<div className="desc">*/}
                                    {/*<span className="name">{item.name}</span>*/}
                                    {/*<div className="subTitle">*/}
                                        {/*{item.subTitle}<span className="rate">{item.rate}</span>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*);*/}
                        return (
                            <div className="item" onClick={t.handleDetailClick.bind(t, item.id)}>
                                <div className="head">
                                    <div className="avatar"><img src={item.img} /></div>
                                    <div className="text">
                                        <div className="title">
                                            <span className="name">{item.name}</span>
                                            <span className="loc">{item.loc}</span>
                                        </div>
                                        <div className="sub-title">{item.subTitle}</div>
                                    </div>
                                    <div className="button">查看管家</div>
                                </div>
                                <div className="intro text-ellipsis">{item.intro}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

Butlerlist.contextTypes = {
    router: React.PropTypes.object.isRequired
};

reactMixin.onClass(Butlerlist, Reflux.connect(Store));

module.exports = Butlerlist;
