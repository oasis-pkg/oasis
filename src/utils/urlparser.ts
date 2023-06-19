import { urltype } from '../types';

export default (url: string): urltype => {
	if (/github\.com/gim.test(url)) return 'github';
	if (/gitlab.*/gim.test(url)) return 'gitlab';

	return 'any';
};
