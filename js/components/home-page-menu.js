import { createStore, applyMiddleware } from 'redux';
import { somposeWithDevTools, composeWithDevTools } from 'redux-devtools-extension';

var defaultState = 0;

function link(state = defaultState, action) {
    return state + 1;
}

var store = createStore(link, composeWithDevTools(applyMiddleware()));

store.subscribe(function() {
    console.log('state', store.getState());
});

store.dispatch({type: ''});

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name} bonito</h2>
            </div>
        )
    }        
}

export default HomePage;
