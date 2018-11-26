import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigBrowser from './PigBrowser';
import FilterBar from './FilterBar'


class App extends Component {
	constructor() {
		super()
		this.state = {
			filterGreased: false,
			sort: 'name'
		}
	}

	onFilterChange = (filter) => {
		this.setState({filterGreased: !this.state.filterGreased})
	}

	onSortChange = (sortType) => {
		this.setState({sort: sortType})
	}

	getHogs() {
		let res = [...hogs]

		if (this.state.filterGreased) {
			res = res.filter(hog => hog.greased)
		}

		if (this.state.sort === 'name') {
			res.sort((a,b)=> a.name.localeCompare(b.name))
		} else if (this.state.sort === 'weight') {
			res.sort((a, b) => a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
		}

		return res
	}

	render() {
		return (
			<div className="App">
				< Nav />
				<FilterBar sortBy={this.state.sort} onSortChange={this.onSortChange} filterGreased={this.state.filterGreased} onFilterChange={this.onFilterChange}/>
				<hr/>
				<br />
				< PigBrowser pigs={this.getHogs()}/>
			</div>
		)
	}
}

export default App;
