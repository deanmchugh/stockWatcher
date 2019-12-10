import axios from 'axios'

export default function getURL(url: string) {
    axios.get(url)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}