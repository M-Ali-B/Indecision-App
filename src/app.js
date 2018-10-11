class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {

            optionsArray: []
        };
    }

    componentDidMount() {
try{
        console.log('Component Did Mounted ');
const json = localStorage.getItem('options');

const options = JSON.parse(json);
        if (options){
        this.setState(() => ({optionsArray : options}));
        }
    }
    catch(e){
        // do nothing at all
    }
}

    componentWillUnmount(){
console.log('Component will un mount');


    }
    componentDidUpdate(prevProps,prevState){

if (prevState.optionsArray.length !== this.state.optionsArray.length){

    const json = JSON.stringify(this.state.optionsArray);
    localStorage.setItem('options',json);
    console.log('data in array',this.state.optionsArray);
    

}
        console.log('Copmonent Did update');



    }


    handleRemoveAll() {
        console.log('handle removeall clicked');

        this.setState(() => ({optionsArray: []}));
    }

    handleDeleteOption (option) {
        console.log('hdo',option);
        this.setState((prevState)=>({
optionsArray:prevState.optionsArray.filter((optionToRemove)=> {
    return optionToRemove !== option; // it will be true so will remove every element except the filtered one so flip it
})
        }));
        
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.optionsArray.length);
        const option = this.state.optionsArray[randomNum];
        alert(option);
    }
    handleAddOption(option) {

        if (!option) {
            return 'Enter valid value to add Item';
        }
        else if (this.state.optionsArray.indexOf(option) > -1) {

            return 'This option already exists';

        }

this.setState((prevState) => ({optionsArray: prevState.optionsArray.concat(option)}));
    }

    render() {
      //  const title = 'Indecision app';
        const message = 'I like computers';
        // const optionsArray = ['One','two','three'];
        return (

            <div>
                <Header message={message} />
                <Action
                    hasOptions={this.state.optionsArray.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    optionsArray={this.state.optionsArray}
                    handleRemoveAll={this.handleRemoveAll}
                    handleDeleteOption={this.handleDeleteOption}

                />
                <AddOptions handleAddOption={this.handleAddOption} />

            </div>
        );

    }

};

const Header = (props) => {

    return (<div>

        <h1>{props.title}</h1>
        <h2>{props.message} </h2>
    </div>);
};


Header.defaultProps = {
    title :'Indecision App'
};

// class Header extends React.Component {

//     render() {

//         return (<div>

//             <h1>{this.props.title}</h1>
//             <h2>{this.props.message} </h2>
//         </div>);
//     }

// }

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What should i do </button>
        </div>

    );
};

// class Action extends React.Component {


//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >What should i do </button>
//             </div>

//         );


//     }

// }

const Options = (props)=>{
    return (

        <div>

            <p>Options Component here </p>
            <button onClick={props.handleRemoveAll}>Remove all</button>
          {props.optionsArray.length === 0 && <p><b>Please add some options !</b></p>}
            {props.optionsArray.map((optionsArray) =>

                <Option 
                key={optionsArray} 
                optionText={optionsArray} 
                handleDeleteOption={props.handleDeleteOption}
                />
            )
            }
        </div>

    );

};
// class Options extends React.Component {

//     render() {

//         return (

//             <div>

//                 <p>Options Component here </p>
//                 <button onClick={this.props.handleRemoveAll}>Remove all</button>
//                 {this.props.optionsArray.map((optionsArray) =>

//                     <Option key={optionsArray} optionText={optionsArray} />
//                 )
//                 }
//             </div>

//         );

//     };

// }

// add option component n options 

const Option = (props) =>{
    



        return (
            <div>

                {props.optionText}
                <button onClick = {(e)=>props.handleDeleteOption(props.optionText)}
                
                >Remove</button>

            </div>
        );
};

// class Option extends React.Component {


//     render() {



//         return (
//             <div>

//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {

            error: undefined
        };
    };

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

    if (!error){
        e.target.elements.option.value = '';
    }

        this.setState(() => ({ error}));
        

    }

    render() {

        return (

            <div>
                {this.state.error &&<p>warning:<b>{this.state.error}</b></p>}
                <form onSubmit={this.handleAddOption}>
                    <p>AddOptions Component here </p>
                    <input type="text" name="option" />
                    <button >Add option here</button>
                </form>
            </div>

        );

    };

}

const jsx = (

    <div>

        <Header />
        <Action />
        <Options />
        <AddOptions />

    </div>

);




ReactDOM.render(<IndecisionApp />, document.getElementById('app'));