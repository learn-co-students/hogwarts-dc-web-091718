import React, { Component } from 'react'
import PigCard from './PigCard'

import ag from "../hog-imgs/augustus_gloop.jpg";
import bop from "../hog-imgs/bay_of_pigs.jpg";
import ch from "../hog-imgs/cherub.jpg";
import gn from "../hog-imgs/galaxy_note.jpg";
import lme from "../hog-imgs/leggo_my_eggo.jpg";
import mb from "../hog-imgs/mudblood.jpg";
import ps from "../hog-imgs/piggy_smalls.jpg";
import pc from "../hog-imgs/porkchop.jpg";
import rd from "../hog-imgs/rainbowdash.jpg";
import so from "../hog-imgs/sobriety.jpg";
import tpc from "../hog-imgs/the_prosciutto_concern.jpg";
import tr from "../hog-imgs/trouble.jpg";
import ts from "../hog-imgs/truffleshuffle.jpg";

const imgMap = {
	'Augustus Gloop': ag,
	'Bay of Pigs': bop,
	'Cherub': ch,
	'Galaxy Note': gn,
	'Leggo My Eggo': lme,
	'Mudblood': mb,
	'Piggy smalls': ps,
	'Porkchop': pc,
	'Rainbowdash': rd,
	'Sobriety': so,
	'The Prosciutto Concern': tpc,
	'Trouble': tr,
	'TruffleShuffle': ts
}

export default class PigBrowser extends Component {
	render() {
		return (
				<div className="ui container cards">
					{this.props.pigs.map(pig => <PigCard key={pig.name} pig={pig} img={imgMap[pig.name]}/>)}
				</div>
		)
	}
}
