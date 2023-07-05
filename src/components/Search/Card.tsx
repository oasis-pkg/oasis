import { Component, For, Match, Show, Switch } from 'solid-js';
import { pkg, url } from '../../types';
import { SiGithub, SiGitlab, SiRust } from 'solid-icons/si';
import Earth from '../../assets/Earth';
import urlparser from '../../utils/urlparser';
import { A } from '@solidjs/router';
import PkgIcon from '../PkgIcon';

const Card: Component<{ data: pkg }> = ({ data }) => {
	let urls: url[] = [
		{ kind: urlparser(data.homepage), url: data.homepage },
		{ kind: urlparser(data.repo), url: data.repo },
	];

	if (urls[0].kind == urls[1].kind) {
		urls.pop();
	}

	return (
		<A
			href={`/${data.platform}/${data.name}`}
			class='flex gap-x-8 px-8 py-4 items-center rounded-md bg-gray-100 dark:bg-slate-800 shadow-md hover:shadow-lg ease-in-out duration-200'>
			<PkgIcon
				class='w-10 h-10 fill-slate-800 dark:fill-slate-200 hover:rotate-[360deg] ease-[cubic-bezier(.24,1.61,.27,.84)] duration-[1.5s]'
				platform={data.platform}
			/>
			<div class='flex grow flex-col gap-y-2'>
				<div class='flex items-baseline gap-x-3'>
					<p class=' text-slate-900 dark:text-slate-200 text-lg font-medium select-all font-heebo'>
						{data.name}
					</p>
					<p class='text-slate-700 dark:text-slate-300 text-sm font-light'>{data.version}</p>
				</div>
				<p class='text-slate-800 dark:text-slate-200 text-sm font-light'>{data.description}</p>
			</div>
			<div class='flex gap-x-4 items-center'>
				<For each={urls.filter(Boolean)}>
					{i => {
						return (
							<div>
								{
									<Show when={i.url}>
										<a href={i.url} target='_blank'>
											<Switch
												fallback={
													<Earth class='w-10 h-10 fill-slate-700 dark:fill-slate-300' />
												}>
												<Match when={i.kind == 'github'}>
													<SiGithub class='w-8 h-8 fill-slate-700 dark:fill-slate-300' />
												</Match>
												<Match when={i.kind == 'gitlab'}>
													<SiGitlab class='w-8 h-8 fill-slate-700 dark:fill-slate-300' />
												</Match>
											</Switch>
										</a>
									</Show>
								}
							</div>
						);
					}}
				</For>
			</div>
		</A>
	);
};

export default Card;
