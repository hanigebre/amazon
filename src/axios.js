import axios from 'axios';
const instance=axios.create({
    baseurl: 'http://127.0.0.1:5001/e-clonned/us-central1/api',
});
export default instance;