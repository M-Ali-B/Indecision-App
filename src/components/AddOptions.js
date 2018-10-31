import React from "react";


export default class AddOptions extends React.Component {
    state = {
        error: undefined
    };
    

    handleAddOption = (e) => {
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
                {this.state.error && <p className="add-option-error">warning:<b>{this.state.error}</b></p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    
                    <input className="add-option__input" type="text" name="option" />
                    <button  className="button">Add option here</button>
                </form>
            </div>

        );

    };

}