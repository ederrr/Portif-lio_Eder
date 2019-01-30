import {http, test} from './http'

export const fetchRepos = () => http.get(`users/ederrr/repos`);
export const testImage = (name) => test.get(`ederrr/${name}/master/image_default.jpg`);
