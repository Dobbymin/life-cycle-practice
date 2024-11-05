import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';

const commentsFromServer = [
	{ id: 1, author: 'John', text: 'Hello, World!' },
	{ id: 2, author: 'Alice', text: 'Hi, everyone!' },
	{ id: 3, author: 'Bob', text: 'Good morning!' },
];

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			comments: [
				{ id: 1, author: 'John', text: 'Hello, World!' },
				{ id: 2, author: 'Alice', text: 'Hi, everyone!' },
				{ id: 3, author: 'Bob', text: 'Good morning!' },
			],
		};
		this.timer = null;
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.addComment();
		}, 1000);
	}

	componentWillUnmount() {
		if (this.timer) {
			clearInterval(this.timer);
		}
	}

	addComment = () => {
		const { comments } = this.state;
		if (comments.length < commentsFromServer.length) {
			const newComment = commentsFromServer[comments.length];
			this.setState({ comments: [...comments, newComment] });
		} else if (this.timer) {
			clearInterval(this.timer);
		}
	};

	render() {
		const { comments } = this.state;
		return (
			<div className="App" style={{ padding: 16, backgroundColor: '#282c34' }}>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</p>
				</header>
				<div>
					{comments.map((comment) => (
						<Comment
							key={comment.id}
							name={comment.author}
							content={comment.text}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;
