import React from 'react'
import Option from './Option'


const Options = (props) =>(

        <div>

            <p>Options Component here </p>
            <button 
            className="button button--link"
            onClick={props.handleRemoveAll}>Remove all</button>
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


export default Options;