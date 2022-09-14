import {getAPI, postAPI} from 'services'

export const getNewsAPI = (topic) => getAPI(`/people-news?category=${topic}`)
export const getNewsDetailAPI = (data) => postAPI(`/people-news`, data)