import React, { Component } from 'react';


const Detail = props => {
    return (
        <div>
            <p>{this.props.hog.specialty}</p>
            <p>Greased: {this.props.hog.greased}</p>
            <p>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
            <p>Metal: {this.props.hog['highest medal achieved']}</p>
        </ div >
    )
}

export default Detail