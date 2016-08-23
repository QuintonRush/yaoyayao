require('./PageMakecomment.styl');

const reactMixin = require('react-mixin');
const { Group, Field, Icon, TextareaField } =SaltUI;
const Actions = require('./actions');
const Store = require('./store');

class Makecomment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleTextChange(newValue) {
        this.setState({
            text: newValue
        });
    }

    render() {
        let t = this;
        return (
            <div className="makecomment">
                <Group>
                    <Group.List lineIndent={18}>
                        <Field>
                            <div className="rate" >评价管家</div>
                        </Field>
                    </Group.List>
                    <Group.List lineIndent={18}>
                        <div className="content" >
                            <div className="sec1">
                                <div className="text">
                                    <TextareaField minRows={5} placeholder="您的每条评价我们都会非常重视"
                                        onChange={t.handleTextChange.bind(t)} value={t.state.text}>
                                    </TextareaField>
                                </div>
                            </div>
                            <div className="sec2">
                                <div className="pic"><Icon name="search" height={40} fill="#cccccc" /></div>
                                <div className="text">发照片</div>
                            </div>
                        </div>
                    </Group.List>
                </Group>
                <div className="submit">提交评论</div>
            </div>
        );
    }
}

reactMixin.onClass(Makecomment, Reflux.connect(Store));

module.exports = Makecomment;
