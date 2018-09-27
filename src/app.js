class IndecisionApp extends React.Component {

    render() {
const title = 'Indecision app';
        const message = 'I like computers';
        const options = ['One','two','three'];
        return (

            <div>
                <Header title={title} message={message}/>
                <Action />
                <Options />
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

    render() {
        return (
            <div>
                <button>Click me </button>
            </div>

        );


    }

}


class Options extends React.Component {

    render() {

        return (

            <div>
                <p>Options Component here </p>
                <Option />
            </div>

        );

    };

}

// add option component n options 

class Option extends React.Component {

    render() {

        return (
            <div>
                <p>Option Component here</p>
            </div>
        );
    }
}

class AddOptions extends React.Component {

    render() {

        return (

            <div>
                <p>AddOptions Component here </p>
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