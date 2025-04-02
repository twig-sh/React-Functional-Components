const React = require('react');
const { createRoot } = require('react-dom/client')

const HelloWorld = () => {
	let id = 'the-bonjour'
	return (
		<div id={id}>
			Bonjour!
		</div>
	);
};

const init = () => {
	const appElement = document.getElementById('app');
	const root = createRoot(appElement)
	root.render(<HelloWorld />);
}

window.onload = init;