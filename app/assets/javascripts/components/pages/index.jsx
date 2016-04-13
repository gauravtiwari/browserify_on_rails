import React from 'react';
import $ from 'jquery';

export default class IndexComponent extends React.Component {
	constructor(props) {
		super(props);
		this._sendPing = this._sendPing.bind(this);
		this._setupSubscription = this._setupSubscription.bind(this);
		this.state = {
			message: props.message,
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this._sendPing();
		}, 5000);
		this._setupSubscription();
	}

	componentWillUnmount() {
		App.EchoChannel.unsubscribe();
	}

	_setupSubscription() {
		const EchoChannel = App.cable.subscriptions.create('EchoChannel', {
			received: function(data) {
				this.setState({ message: data.message });
			}.bind(this)
		});
		App.EchoChannel = EchoChannel;
	}

	_sendPing() {
		$.get('/ping', function(data) {
			console.log("Pinging server...");
		});
	}

	render() {
		return <h2>Echo: {this.state.message}</h2>;
	}
}
