const BASE_URL="https://ticketing-system-be.herokuapp.com";

const paths = {
    LOGIN: '/users/login',
    REGISTER: '/users/register',
    TAGS: '/tags',
}

const API_PATHS = (()=>{
    Object.keys(paths).forEach(path => {
        paths[path] = `${BASE_URL}${paths[path]}`
    });
    return paths;
})()


export default API_PATHS;