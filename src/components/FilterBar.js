import React, { Component } from 'react'

export default class FilterBar extends Component {
	render() {
		return (
			<div className="ui top attached text menu">
				<div className="header item">Filter</div>
				<a 
					className={this.props.filterGreased ? "active item blue" : "item"}
					onClick={this.props.onFilterChange}
				>
					Greased
  				</a>
				<div className="header right item">Sort By</div>
				<a 
					className={this.props.sortBy === 'name' ? "active item blue" : "item"}
					onClick={() => this.props.onSortChange('name')}
				>
					Name
  				</a>
				<a
					className={this.props.sortBy === 'weight' ? "active item blue" : "item"}
					onClick={() => this.props.onSortChange('weight')}
				>
					Weight
  				</a>
			</div>
		)
	}
}
