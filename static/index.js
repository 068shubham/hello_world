'use strict';


const EMPTY = ''
const RED = '0'
const YELLOW = '1'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { grid: new Array(7).fill(new Array(7).fill(EMPTY)) };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return (
            <div>
                {this.state.grid.forEach(row => <div>{row.forEach(column => (<span>{column}</span>))}</div>)}
            </div>
        );
    }
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(App);