import { urltype } from '../types';

export default (url: string): urltype => {
	if (url.includes('github.com')) return 'github';
	if (url.includes('gitlab.')) return 'gitlab';

	return 'any';
};
