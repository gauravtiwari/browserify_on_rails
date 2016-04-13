import React from 'react';
class IndexSecondComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <h2>Echo: {this.props.message}</h2>;
	}
}

module.exports = IndexSecondComponent;
