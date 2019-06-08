import axios from 'axios'

const baseURL = 'https://opentdb.com/api.php';

export default axios.create({
    baseURL
})