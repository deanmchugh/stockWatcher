import axios from 'axios'

export default function fetchAPI(url: string) {
    axios.get(url)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}