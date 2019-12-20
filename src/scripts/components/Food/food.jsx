import React from 'react';
import ReactDOM from 'react-dom';
import music from '../../../assets/audio/eat.wav';

const eatingSound = new Audio(music)
eatingSound.volume = 0.05

class Food extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			position: {
				top:  this.props.position.top,
				left: this.props.position.left
			},
			hidden: false
		};
	}

	componentDidMount() {
		this.container = ReactDOM.findDOMNode(this);
	}

	ate() {
		eatingSound.play()
		this.setState({
			hidden: true
		});
	}

	render() {
		return (
			<div style = {this.state.position} className={this.state.hidden ? 'food hidden' : 'food'}>
				<div className="effective-food"></div>
			</div>
		);
	}
}

Food.defaultProps = {
	foodSize: 60
};

export default Food;
