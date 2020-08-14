class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            details: null,
            text: 'Show Details',
        }
    }

    toggle() {
        if (this.state.details == null){
            this.setState(() => {
                return {
                    details: 'Some Information Here',
                    text: 'Hide Details'
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    details: null,
                    text: 'Show Details'
                }
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggle}>{this.state.text}</button>
                <h2>{this.state.details}</h2>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// var details = [];
// var text = 'Show details'

// const showDetails = () => {
//     if (details.length == 0) {
//         details.push('Information');
//         text = 'Hide details';
//     }
//     else {
//         details = [];
//         text = 'Show details'
//     }
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showDetails}>{text}</button>
//             <h2>{details}</h2>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// render();