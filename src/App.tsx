import { Outlet, Route, Routes } from '@solidjs/router';
import { Component, onCleanup, onMount } from 'solid-js';
import Home from './pages/Home';
import Search from './pages/Search';
import Header from './components/Header';
import Package from './pages/Package';
import Toast from './components/Toast';

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
	const keyHandler = (e: KeyboardEvent) => {
		const input = document.getElementById('header_input');

		switch (e.key.toUpperCase()) {
			case e.ctrlKey && 'K':
			case e.ctrlKey && 'P':
				// case 'S':
				e.preventDefault();
				input.focus({ preventScroll: true });

				break;
			case 'ESCAPE':
				input.blur();
				break;
		}
	};

	onMount(() => {
		document.addEventListener('keydown', keyHandler);
	});

	onCleanup(() => {
		document.removeEventListener('keydown', keyHandler);
	});

	return (
		<div class='relative dark:bg-gray-950'>
			<Toast />
			<Header />
			<Outlet />
			{/* FIXME add footer */}
		</div>
	);
};

const App: Component = () => {
	return (
		<div class='dark:bg-gray-950 w-full h-screen subpixel-antialiased text-gray-800 dark:text-gray-100 selection:bg-blue-200 dark:selection:bg-blue-800 relative'>
			<Routes>
				<Route path='/' component={Home} />
				<Route path='*' component={Global}>
					<Route path='/:platform/:pkg' component={Package} />
					<Route path='/search' component={Search} />
					{/* <Route path={['/pkg', '/package']}>
						<Route path='/' element={<Navigate href='/' />} />
					</Route> */}
					<Route path='*' component={Test3} /> {/* FIXME add better 404 */}
				</Route>
			</Routes>
		</div>
	);
};

export default App;
