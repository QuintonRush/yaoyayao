require('./app.styl');

if (__LOCAL__ && window.chrome && window.chrome.webstore) { // This is a Chrome only hack
    // see https://github.com/livereload/livereload-extensions/issues/26
    setInterval(function() {
        document.body.focus();
    }, 200);
}

// bind fastclick
window.FastClick && FastClick.attach(document.body);

const { Router, Route, IndexRoute, Link, hashHistory } = ReactRouter;

const PageHome = require('../pages/home');
const PageButler = require('../pages/butler');
const PageComments = require('../pages/comments');
const PageMy = require('../pages/my');
const PageMakeComment = require('../pages/makecomment');
const PageButlerList = require('../pages/butlerlist');


class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route name="app" path="/" component={App}>
            <IndexRoute component={PageHome}/>
            <Route path="home" component={PageHome}/>
            <Route path="butler" component={PageButler}/>
            <Route path="comments" component={PageComments}/>
            <Route path="my" component={PageMy}/>
            <Route path="makeComment" component={PageMakeComment}/>
            <Route path="butlerList" component={PageButlerList}/>
        </Route>
    </Router>,
    document.getElementById('App')
);
