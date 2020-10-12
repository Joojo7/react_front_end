import React from 'react';

const Hotels = ({name,
    address,
    stars,
    roomCount}) => {
    return(
        <div>
            <p>{name}</p>
            <p>{address}</p>
            <p>{stars}</p>
            <p>{roomCount}</p>
        </div>
    );
}

export default Hotels;

