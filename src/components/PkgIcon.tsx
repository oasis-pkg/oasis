import { SiRust } from 'solid-icons/si';
import { Component, Match, Switch } from 'solid-js';
import { platform } from '../types';

const PkgIcon: Component<{ platform: platform; class: string }> = props => {
	return (
		<Switch>
			<Match when={props.platform == 'crates'}>
				<SiRust {...props} />
			</Match>
		</Switch>
	);
};

export default PkgIcon;
