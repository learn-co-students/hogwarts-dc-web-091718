import React, { Component } from 'react';
import Hog from './Hog.js'

export default class HogsContainer extends Component {
	state = {
		hogs: this.props.hogs,
		searchTerms: {
			name: null,
			weight: null,
			greased: false
		}
	}

 renderHogs = hogs =>{
 	let searchName = this.state.searchTerms.name
  let new_arr = hogs.sortBy((hog1, hog2) => {
 			hog1 < hog2
 			})

 	return new_arr.map((hog)=> <Hog hog={hog}/>) 
 }

 changeSearchTerm = (e) => {
 	this.setState({
 					searchTerms: 
 						{...this.state.searchTerms,
 						 [e.currentTarget.id]: e.currentTarget.value
 						}
 					})
 }
  changeSearchCheckTerm = (e) => {
 	this.setState({
 					searchTerms: 
 						{...this.state.searchTerms,
 						 [e.currentTarget.id]: !this.state.searchTerms.greased
 						}
 					})
 }


  render() {
    return  (
    	<div>
    		<div>
    	<input onChange={this.changeSearchTerm} id='name'/> NAME
    		</div>

    		<input onChange={this.changeSearchTerm} id='weight'/>weight
    	<input type="checkbox" onClick={this.changeSearchCheckTerm} id='greased' />

    	{this.renderHogs(this.state.hogs)}
    	</div>
    	)
  }
}


