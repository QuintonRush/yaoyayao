require('./PageComments.styl');

const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');

class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderComment(comment) {
        return (
            <div className="comment">
                <div className="head">
                    <img className="avatar" src={comment.avatar} />
                    <div className="sec2">
                        <div className="name">{comment.name}</div>
                        <div className="rate">{comment.rate}</div>
                    </div>
                    <div className="time">{comment.time}</div>
                </div>
                <div className="content">{comment.content}</div>
                <div className="pics">
                    {
                        comment.pics.map(pic => {
                            return <img className="pic" src={pic.thumb} />
                        })
                    }
                </div>
            </div>
        );
    }

    render() {
        let t = this;
        return (
            <div className="comments">
                {
                    t.state.comments.map(comment => {
                        return t.renderComment(comment);
                    })
                }
            </div>
        );
    }
}

reactMixin.onClass(Comments, Reflux.connect(Store));

module.exports = Comments;
