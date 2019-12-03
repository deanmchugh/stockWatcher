import axios from 'axios'

export default function getURL(url: string) {
    axios.get(url)
    .then(data => console.log(data))
    .catch(err => console.log(err))
}