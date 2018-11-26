import React, { Component } from 'react'

export default class PigCard extends Component {
	render() {
		return (
			<div className='ui centered card move right reveal'>
				<div className="image visible content">
					<img src={this.props.img} className="ui small image visible" alt={this.props.pig.name} />
				</div>
				<div className="hidden content">
					<div className="ui left aligned container" style={{ height: 250 }}>
						<h2>{this.props.pig.name}</h2>

						<div className="ui horizontal divider"> {(this.props.pig.greased) ? 'Greasy ' : null }Details </div>

						<div className='ui list'>
							<div className='item'>
								<div className="header">Specialty</div> 
								{this.props.pig.specialty}
							</div>
							<div className='item'>
								<div className="header">Weight as a Ratio to the Large Fridge</div> 
								{this.props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
							</div>
							<div className='item'>
								<div className="header">Highest Medal Achieved</div> 
								{this.props.pig['highest medal achieved']}
							</div>
						</div>


					</div>
				</div>
			</div>
		)
	}
}
