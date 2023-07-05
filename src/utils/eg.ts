import eg1 from '../assets/eg/eg1.opus';
import eg2 from '../assets/eg/eg2.opus';

let eg = [eg1, eg2];

const egp = () => eg[Math.floor(Math.random() * eg.length)];

export default egp;
