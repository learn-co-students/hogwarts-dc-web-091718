import React, { Component } from 'react';


const Detail = props => {
    return (
        <div>
            <p>{props.specialty}</p>
            <p>Greased: {props.details.greased ? 'Yes' : 'No'}</p>
            <p>Weight: {props.details['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
            <p>Metal: {props.details['highest medal achieved']}</p>
        </ div >
    )
}

export default Detail