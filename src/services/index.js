import axios from 'axios';

export const baseUrl1 = 'https://frontend-case-api.sbdev.nl/api/'
export const imgBaseUrl = 'https://frontend-case-api.sbdev.nl/storage/'

axios.interceptors.request.use(function (config) {
    config = {...config, params: {
        ...config.params,
       
    }};
    config.headers['token'] = `pj11daaQRz7zUIH56B9Z`;
    return config;
}, function (error) {
    return Promise.reject(error);
});

export const getTopBlogs = (params) => {
    const { page, perPage, sortBy, sortDirection, searchPhrase, categoryId} = params;
    return axios.get(baseUrl1 + `posts?page=${page}&perPage=${perPage}&sortBy=${sortBy}&sortDirection=${sortDirection}&searchPhrase=${searchPhrase}&categoryId=${categoryId}`);
}


export const searchBlogs = (searchPhrase) => {
    return axios.get(baseUrl1 + `posts?page=${1}&perPage=${4}&sortBy=${'title'}&sortDirection=${'asc'}&searchPhrase=${searchPhrase}`);
}
export const getCategories = () => {
    return axios.get(baseUrl1 + `categories`);
}


export const addBlogService = (data) => {
    return axios.post(baseUrl1 + `posts`, data);
}
export const getArchiveBlogsService = (data) => {
    return axios.get(baseUrl1 + `posts?page=${data.page}&perPage=${data.perpage}&sortBy=${'title'}&sortDirection=${'asc'}&searchPhrase=${data.searchPhrase}`);
}
