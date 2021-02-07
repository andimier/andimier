import { createStore, applyMiddleware } from 'redux';
import { somposeWithDevTools, composeWithDevTools } from 'redux-devtools-extension';

var defaultState = {
    initialValue: 100,
    value: 350
};

function link(state = defaultState, action) {
    if (action.type === 'UPDATE_STATE') {debugger
        return Object.assign({}, state, {
            value: action.data.value + state.value
        });
    }
}

var store = createStore(link, composeWithDevTools(applyMiddleware()));

store.subscribe(function() {
    console.log('state', store.getState());
});

store.dispatch({type: 'UPDATE_STATE', data: {value: 500}});

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
