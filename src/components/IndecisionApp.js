
import React from "react";

import AddOptions from './AddOptions'
import Options from './Options'
import Action from "./Action";
import Header from "./Header"

export default class IndecisionApp extends React.Component {
    state = {
        optionsArray:[]
    }
    
    componentDidMount = () => {
        try {
            console.log('Component Did Mounted ');
            const json = localStorage.getItem('options');

            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ optionsArray: options }));
            }
        }
        catch (e) {
            // do nothing at all
        }
    }

    componentWillUnmount = ()=> {
        console.log('Component will un mount');


    }
    componentDidUpdate(prevProps, prevState) {

        if (prevState.optionsArray.length !== this.state.optionsArray.length) {

            const json = JSON.stringify(this.state.optionsArray);
            localStorage.setItem('options', json);
            console.log('data in array', this.state.optionsArray);


        }
        console.log('Copmonent Did update');



    }


    handleRemoveAll = () =>{
        console.log('handle removeall clicked');

        this.setState(() => ({ optionsArray: [] }));
    }

    handleDeleteOption(option) {
        console.log('hdo', option);
        this.setState((prevState) => ({
            optionsArray: prevState.optionsArray.filter((optionToRemove) => {
                return optionToRemove !== option; // it will be true so will remove every element except the filtered one so flip it
            })
        }));

    }
    handlePick = () => {
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

        this.setState((prevState) => ({ optionsArray: prevState.optionsArray.concat(option) }));
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

