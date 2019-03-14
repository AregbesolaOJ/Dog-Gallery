import React from 'react';
import './BreedList.css';
import { Consumer } from '../../context/context';

const BreedList = () => {
    return (
        <Consumer>
            {context => {
                const breedOptions = context.data.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))
                return (
                    <div className="breedList">
                        <select className="breedSelect" value={context.data.option} name="option" onChange={context.actions.change}>
                            {breedOptions}
                        </select>
                    </div>
                )
            }}
        </Consumer>
    )
}

export default BreedList;