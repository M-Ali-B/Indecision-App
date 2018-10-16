class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        // declaring state here 
        this.state = {
            count: 0

        };
    }
componentDidMount (){
    const json = localStorage.getItem('count');
     const getCount = parseInt(json,10);
    
    if (!isNaN(getCount)) {
     this.setState(() => ({ count : getCount}));
    }

}
componentDidUpdate(prevProps,prevState){
    if (prevState.count !== this.state.count){
    const json = JSON.stringify(this.state.count);
    const setCount = localStorage.setItem('count',json);
    console.log('count ', this.state.count);
    
    }
}
componentWillUnmount(){

}

    handleAddOne() {
        console.log('handleAddOne');
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });

    }
    handleMinusOne() {
        console.log('handleMinusOne');
        this.setState((prevState) => {

            return {

                count: prevState.count - 1
            };
        });

    }
    handleReset() {
        console.log('handleReset');

        this.setState(() => {

            return {
                count: 0

            };
        });

    }
    render() {
        return (

            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>

        );
    }

}
// default props are used for usability
// Counter.defaultProps = {
//     count : -1
// };

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;

// const addOne = () => {
//     // console.log(count);
//     count++;
//     renderReactCounter();
// }
// const minusOne = () => {

//     count--;
//     renderReactCounter();
// }

// const reset = () => { count = 0; renderReactCounter(); }

// const renderReactCounter = () => {
//     const templateCounter = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id="my-id" className="button" onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>

//     );
//     ReactDOM.render(templateCounter, appRoot);
// };

