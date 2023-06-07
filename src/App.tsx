import { Navigate, Outlet, Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import Home from './pages/Home';
import Search from './pages/Search';
import Header from './components/Header';

const Test1: Component<{}> = props => {
	return <div>Test: /search</div>;
};

const Test2: Component<{}> = props => {
	return <div>Test 2: /gato</div>;
};

const Test3: Component<{}> = props => {
	return <div>Fallback: 404</div>;
};

const Global: Component<{}> = props => {
	return (
		<div>
			<Header />
			<Outlet />
			{/* FIXME add footer */}
		</div>
	);
};

const App: Component = () => {
	return (
		<div class='w-full h-screen'>
			<Routes>
				<Route path='/' component={Home} />
				<Route path='*' component={Global}>
					<Route path='/search'>
						<Route path='/' component={Search} />
						<Route path='/:data' component={Search} />
					</Route>
					<Route path='*' component={Test3} /> {/* FIXME add better 404 */}
				</Route>
			</Routes>
		</div>
	);
};

export default App;
