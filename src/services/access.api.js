import {http, test} from './http'

export const fetchRepos = () => http.get(`users/ederrr/repos`);
export const fetchReposName = (name) => http.get(`repos/ederrr/${name}`);
export const testImage = (name) => test.get(`ederrr/${name}/master/image_default.jpg`);
