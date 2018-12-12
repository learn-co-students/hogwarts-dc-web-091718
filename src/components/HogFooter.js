import React from 'react';

const HogFooter  = props =>{
    	return (
    		<div className="extra content">
     			<button className="btn btn-primary"onClick={props.onShowDetailsClick}> Show details </button>
          <button className="btn btn-danger" onClick={props.onBanish}> Banish </button>
    		</div>
    	)
  }



export default HogFooter
