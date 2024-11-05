import React from 'react';

const styles = {
	root: {
		width: '20%',
		margin: 'auto',
		marginTop: 16,
		padding: 16,
		textAlign: 'left',
		backgroundColor: 'white',
		borderRadius: 16,
	},

	imageContainer: {
		display: 'inline-block',
		width: '50',
	},

	image: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},

	commentContainer: {
		display: 'inline-block',
		marginLeft: 16,
		textAlign: 'left',
		verticalAlign: 'top',
	},

	nameText: {
		color: 'black',
		fontSize: 20,
		fontWeight: '700',
	},

	contentsText: {
		color: 'black',
		fontSize: 16,
	},
};

class Comment extends React.Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('componentDidMount() called.');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate() called.');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount() called.');
	}

	render() {
		const { name, content } = this.props;

		return (
			<div style={styles.root}>
				<div style={styles.imageContainer}>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
						style={styles.image}
						alt="profile"
					/>
				</div>
				<div style={styles.commentContainer}>
					<div style={styles.nameText}>{name}</div>
					<span style={styles.contentsText}>{content}</span>
				</div>
			</div>
		);
	}
}

export default Comment;
