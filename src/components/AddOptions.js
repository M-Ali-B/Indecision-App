import React from "react";


export default class AddOptions extends React.Component {
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

        if (!error) {
            e.target.elements.option.value = '';
        }

        this.setState(() => ({ error }));


    }

    render() {

        return (

            <div>
                {this.state.error && <p>warning:<b>{this.state.error}</b></p>}
                <form onSubmit={this.handleAddOption}>
                    <p>AddOptions Component here </p>
                    <input type="text" name="option" />
                    <button >Add option here</button>
                </form>
            </div>

        );

    };

}