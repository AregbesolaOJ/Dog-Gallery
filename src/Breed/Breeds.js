import React from 'react';
import BreedList from './BreedList/BreedList';
import BreedView from './BreedView/BreedView';
import Contact from './Contact/Contact';
import './Breeds.css';

const Breeds = () => {
    const header = {
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '10px 0',
        color: '#999999'  
    }
    
    return (
        <div className="breeds">
            <h1 style={header}>Select a Breed</h1>
            <BreedList />
            <BreedView />
            <Contact />
        </div>
    )
}

export default Breeds;