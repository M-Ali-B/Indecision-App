class IndecisionApp extends React.Component {

    render() {
const title = 'Indecision app';
        const message = 'I like computers';
        const optionsArray = ['One','two','three'];
        return (

            <div>
                <Header title={title} message={message} />
                <Action />
                <Options optionsArray={optionsArray}/>
                <AddOptions />

            </div>
        );

    }

};



class Header extends React.Component {

    render() {

        return (<div>

            <h1>{this.props.title}</h1>
            <h2>{this.props.message} </h2>
        </div>);
    }

}

class Action extends React.Component {
handlePick(){

    alert('Clicked');
}


    render() {
        return (
            <div>
                <button onClick={this.handlePick}>Click me </button>
            </div>

        );


    }

}


class Options extends React.Component {
constructor(props){

    super(props);
    this.removeAll = this.removeAll.bind(this);

}

    removeAll() {

        console.log (this.props.optionsArray);
       // alert('removed');
    }
    render() {

        return (

            <div>
                  
                <p>Options Component here </p>
                <button onClick={this.removeAll}>Remove all</button>  
        {this.props.optionsArray.map((optionsArray)=>

            <Option key={optionsArray} optionText={optionsArray}/>
        )
        }
            </div>

        );

    };

}

// add option component n options 

class Option extends React.Component {


    render() {



        return (
            <div>
          
                {this.props.optionText}
            </div>
        );
    }
}

class AddOptions extends React.Component {
handleAddOptions(e){
e.preventDefault();
const option = e.target.elements.option.value.trim();

if (option){
    alert(option);
}

}

    render() {

        return (

            <div>
                <form onSubmit={this.handleAddOptions}>
                <p>AddOptions Component here </p>
            <input type="text" name="option"/>
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