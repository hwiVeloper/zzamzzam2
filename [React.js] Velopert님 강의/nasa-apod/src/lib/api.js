import axios from 'axios';

export function getAPOD(date = '') {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=GK1BYabWJUauYefgZb8gKS8cLGntAOKFSNTROJrN&date=${date}`);
}