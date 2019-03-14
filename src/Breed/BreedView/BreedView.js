import React from 'react';
import './BreedView.css';
import { Consumer } from '../../context/context';

const BreedView = () => {
    return (
        <Consumer>
            {context => {
                return (
                    <div className="breedView">
                        <div className="breedView-card">
                            <img src={context.data.image} alt={context.data.option} onClick={context.actions.breedImage}/>
                            <p>{context.data.image !== "" ? `Click image to view more ${context.data.option}s` : null}</p>
                        </div>
                    </div>
                )
            }}
        </Consumer>
    )
}

export default BreedView;