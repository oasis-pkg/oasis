let gradients = [
	'bg-gradient-to-bl from-blue-500 to-purple-600',
	'bg-gradient-to-tl from-orange-400 to-yellow-500',
	'bg-gradient-to-br from-sky-400 to-indigo-500',
	'bg-gradient-to-bl from-green-400 to-teal-600',
	'bg-gradient-to-tl from-fuchsia-500 to-rose-500',
];

const getRandomGradient = () => gradients[Math.floor(Math.random() * gradients.length)];

export default getRandomGradient;
