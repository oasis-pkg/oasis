import { Component, For, Match, Show, Switch } from 'solid-js';
import { pkg, url } from '../../types';
import { SiGithub, SiGitlab, SiRust } from 'solid-icons/si';
import GitHub from '../../assets/GitHub';
import Earth from '../../assets/Earth';

/* const parseURL = (repo: url, link: url): url[] => {
	let urls = [repo, link];
	console.warn([repo.url && repo, link.url && link]);

	return urls;
}; */

const Card: Component<{ data: pkg }> = ({ data }) => {
	let urls: [url | null, url | null] = [
		data.repo.url ? data.repo : null,
		data.link.url && !data.link.url.startsWith(data.repo.url) ? data.link : null,
	];

	return (
		<div class='flex gap-x-8 px-8 py-4 items-center rounded-md bg-gray-100 shadow-md hover:shadow-lg ease-in-out duration-200'>
			<Switch>
				<Match when={data.platform == 'crates'}>
					<SiRust class='w-10 h-10 fill-slate-900' />
				</Match>
			</Switch>
			<div class='flex grow flex-col gap-y-2'>
				<div class='flex items-baseline gap-x-3'>
					<p class='text-slate-900 text-lg font-medium'>{data.name}</p>
					<p class='text-slate-700 text-sm font-light'>{data.version}</p>
				</div>
				<p class='text-slate-800 text-sm font-light'>{data.description}</p>
			</div>
			<div class='flex gap-x-4 items-center'>
				<For each={urls.filter(e => !!e)}>
					{i => {
						return (
							<div>
								<Show when={!i.url || i.url !== 'null'}>
									<a href={i.url} target='_blank'>
										<Switch fallback={<Earth class='w-10 h-10 fill-slate-700' />}>
											<Match when={i.kind == 'github'}>
												<GitHub class='w-8 h-8 fill-slate-700' />
											</Match>
											<Match when={i.kind == 'gitlab'}>
												<SiGitlab class='w-8 h-8 fill-slate-700' />
											</Match>
										</Switch>
									</a>
								</Show>
							</div>
						);
					}}
				</For>
				{/* <For each={urls}>
					{i => {
						return (
							<div>
								<Show when={true}>
									<a href={i.url} target='_blank'>
										<Switch fallback={<Earth class='w-10 h-10 fill-slate-700' />}>
											<Match when={i.kind == 'github'}>
												<GitHub class='w-9 h-9 fill-slate-700' />
											</Match>
											<Match when={i.kind == 'gitlab'}>
												<SiGitlab class='w-9 h-9 fill-slate-700' />
											</Match>
										</Switch>
									</a>
								</Show>
							</div>
						);
					}}
				</For> */}
			</div>
		</div>
	);
};

export default Card;
