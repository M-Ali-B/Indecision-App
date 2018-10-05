class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {

            optionsArray: ['One', 'two', 'three']
        };
    }
    handleRemoveAll() {
        console.log('handle removeall clicked');

        this.setState(() => {
            return {
                optionsArray: []
            };

        });
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

        this.setState((prevState) => {
            return {
                optionsArray: prevState.optionsArray.concat(option)
            };
        });
    }

    render() {
        const title = 'Indecision app';
        const message = 'I like computers';
        // const optionsArray = ['One','two','three'];
        return (

            <div>
                <Header title={title} message={message} />
                <Action
                    hasOptions={this.state.optionsArray.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    optionsArray={this.state.optionsArray}
                    handleRemoveAll={this.handleRemoveAll}

                />
                <AddOptions handleAddOption={this.handleAddOption} />

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


    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >What should i do </button>
            </div>

        );


    }

}


class Options extends React.Component {

    render() {

        return (

            <div>

                <p>Options Component here </p>
                <button onClick={this.props.handleRemoveAll}>Remove all</button>
                {this.props.optionsArray.map((optionsArray) =>

                    <Option key={optionsArray} optionText={optionsArray} />
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

    

        this.setState(() => {

            return { error};
        });
        

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