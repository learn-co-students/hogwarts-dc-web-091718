import React from 'react';
import HogHeader from './HogHeader.js'
import HogDetails from './HogDetail.js'
import HogFooter from './HogFooter.js'


export default class Hog extends React.Component{

	state = {
		onShowDetails: false
	}

	onShowDetailsClick  = () => {
		this.setState({showDetails: !this.state.showDetails})
	}

	render(){

		let {specialty,greased} = this.props.hog
		return (
				<div className="card">
					<HogHeader name={this.props.hog.name} />
					{this.state.showDetails ? <HogDetails details={this.props.hog} /> : null}
					<HogFooter onBanish={() => this.props.onBanish(this.props.hog)}onShowDetailsClick={this.onShowDetailsClick}/>
				</div>
			)
		}
	}
