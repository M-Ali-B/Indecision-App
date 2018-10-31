import React from 'react'
import Option from './Option'


const Options = (props) =>(

        <div>
            <div className="widget-header">
            <h3 className="widget-header__title"> Your Options </h3>
            <button 
            className="button button--link"
            onClick={props.handleRemoveAll}>Remove all</button>
            </div>
            {props.optionsArray.length === 0 && <p className="widget__message">Please add some options !</p>}
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


export default Options;