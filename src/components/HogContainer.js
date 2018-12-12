import React, { Component } from 'react';
import Hog from './Hog.js'

export default class HogsContainer extends Component {

	constructor(props){
		super(props)
		this.state = {
			hogs: this.props.hogs,
			searchTerms: {
				greased: false,
				sortBy: null
			},
			hiddenHogs: []
		}
	}

	hideHog = (hog) => {
		this.setState({hiddenHogs: [...this.state.hiddenHogs, hog]})
	}

	showHogs = () => {
		let {hogs, searchTerms:{greased,sortBy}, hiddenHogs} = this.state
		let filteredHogs = hogs.filter((hog) => {
		 	 return !hiddenHogs.includes(hog) && greased === hog.greased
		})

		let sorted = sortBy ? (sortBy === "name" ? filteredHogs.sort((a,b) => a.name.localeCompare(b.name)) : filteredHogs.sort((a,b) => a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])) : filteredHogs

		return sorted.map(hog => this.showHog(hog))
	}
	showHog(hog){
		return <Hog onBanish={this.hideHog} key={this.hashCode(hog.name)} hog={hog}/>
	}

	hashCode(s) {
		let hash = 0
    for(let i = 0; i < s.length; i++)
        hash = Math.imul(31, hash) + s.charCodeAt(i) | 0;
    return hash;
}

  render() {
    return  (
    		<div>
				<select onChange={(e) => {this.setState({searchTerms: {...this.state.searchTerms, sortBy:`${[e.currentTarget.value]}`}})}}>
	    			<option name="name">name</option>
	    			<option name="weight">weight</option>
	    		</select>
	    		<input type="checkbox" onClick={() => this.setState({searchTerms: {...this.state.searchTerms, greased: !this.state.searchTerms.greased}})} />
    			 	<div className="ui link cards">
    					{this.showHogs()}

    			</div>
    		</div>
    		)
 	 }
}
