import HomePage from './home-page-menu.js';

class MainComponent extends React.Component {
    render () {
        return (
            <div>
                <HomePage name=""/>
            </div>
        )
    }
}

ReactDOM.render(<MainComponent />, document.getElementById('react-test'));