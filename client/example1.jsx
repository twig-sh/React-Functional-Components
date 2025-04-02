const React = require('react');
const { createRoot } = require('react-dom/client')

const HelloWorld = () => {
	let id = 'the-bonjour'
	const [name, setName] = React.useState('first');
	return (
		<div id={id} onClick={() => setName('second')}>
			Bonjour, {name}!
		</div>
	);
};

const init = () => {
	const appElement = document.getElementById('app');
	const root = createRoot(appElement)
	root.render(<HelloWorld />);
}

window.onload = init;