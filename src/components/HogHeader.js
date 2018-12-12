import React from 'react';
import logo from "../logo.svg"


const HogHeader = props =>{
    	return (
    		<div className="content">
    			<div className="image">
    				<img src={getImage(getSlug(props.name))}/>
    			</div>
     			 <div className="header"> {props.name}</div>

    		</div>
    	)
  }

export default HogHeader

function getImage(slug){
  return require(`../hog-imgs/${slug}.jpg`)
}

function getSlug(name){
    return name.includes(" ") ? name.split(" ").map(word => word.toLowerCase()).join("_") : name.toLowerCase()
}
