import React from 'react';

const HogDetail = props =>{

    let {specialty} = props.details
    let weight = props.details['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']

    	return (
    		<div className="content">
    		      <div className="description">
    		        	{specialty}
    		      </div>
    		      <div className="description">
    		          {weight}
    		      </div>
    		  </div>
    	)
  }


export default HogDetail
