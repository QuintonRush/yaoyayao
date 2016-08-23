require('./PageMy.styl');

const reactMixin = require('react-mixin');
const { Group, Field, Icon } =SaltUI;
const Actions = require('./actions');
const Store = require('./store');

class My extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="my">
                <Group>
                    <Group.List lineIndent={18}>
                        <Field icon={{name: 'angle-right',  height:26, fill: '#cccccc'}}>
                            <div className="head" >
                                <img className="avatar" src="https://static.dingtalk.com/media/lADOASHZI80C1s0C7g_750_726.jpg"/>
                                <div className="sec2">
                                    <div className="name">春天花花</div>
                                    <div className="sub-title">红红火火恍恍惚惚何厚铧</div>
                                </div>
                            </div>
                        </Field>
                    </Group.List>
                    <Group.List lineIndent={18}>
                        <Field icon={{name: 'angle-right',  height:26, fill: '#cccccc'}}>
                            <div className="my-comments" >我的评论</div>
                        </Field>
                    </Group.List>
                    <Group.List lineIndent={18}>
                        <Field icon={{name: 'angle-right',  height:26, fill: '#cccccc'}}>
                            <div className="my-favorite">我的收藏</div>
                        </Field>
                    </Group.List>
                    <Group.List lineIndent={18}>
                        <Field icon={{name: 'angle-right',  height:26, fill: '#cccccc'}}>
                            <div className="my-wish">我的愿望单</div>
                        </Field>
                    </Group.List>
                    <Group.List lineIndent={18}>
                        <Field icon={{name: 'angle-right',  height:26, fill: '#cccccc'}}>
                            <div className="become-butler">成为管家</div>
                        </Field>
                    </Group.List>
                </Group>
            </div>
        );
    }
}

reactMixin.onClass(My, Reflux.connect(Store));

module.exports = My;
