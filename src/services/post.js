import axios from 'axios';

export function getTitle(id) {
    return axios.get('http://localhost:8080/test?input=' + id);
}

export function getContent(id) {
    return axios.get('http://localhost:8080/posts/content/' + id);
}
