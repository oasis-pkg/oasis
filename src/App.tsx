import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import Home from './pages/Home';

const App: Component = () => {
	return (
		<div class='w-full h-screen'>
			<Routes>
				<Route path={'/'} component={Home} />
			</Routes>
		</div>
	);
};

export default App;
