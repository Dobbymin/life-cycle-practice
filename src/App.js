import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';

const commentsFromServer = [
	{ id: 1, author: 'John', text: 'Hello, World!' },
	{ id: 2, author: 'Alice', text: 'Hi, everyone!' },
	{ id: 3, author: 'Bob', text: 'Good morning!' },
];

var timer;

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
	}

	componentDidMount() {
		let comments = this.state.comments;

		timer = setInterval(() => {
			if (comments.length < commentsFromServer.length) {
				let index = comments.length;

				comments.push(commentsFromServer[index]);

				this.setState({ comments: comments });
			} else if (timer) {
				clearInterval(timer);
			}
		}, 1000);
	}

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
					{comments.map((comment, index) => (
						<Comment key={index} name={comment.author} content={comment.text} />
					))}
				</div>
			</div>
		);
	}
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
