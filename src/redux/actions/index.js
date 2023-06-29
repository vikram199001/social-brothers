import { 
  GET_TOP_BLOGS,
  GET_SEARCH_BLOGS,
  GET_CATEGORIES,
  ADD_BLOG,
  GET_ARCHIVE_BLOGS,
} from "../types";
import { 
  getTopBlogs,
  searchBlogs,
  getCategories,
  addBlogService,
  getArchiveBlogsService
} from '../../services';


export const getBlogs = (params) => (dispatch, getState) => {
  try {
          getTopBlogs(params).then((data) => {
              dispatch({
                  type: GET_TOP_BLOGS,
                  payload: data.data? data.data : []
                });
          })
      
    } catch (error) {
      console.log("Error", error);
    }

}

export const getSearchResults = (searchString) => (dispatch, getState) => {
  try {
    searchBlogs(searchString).then((data) => {
              dispatch({
                  type: GET_SEARCH_BLOGS,
                  payload: data.data.data
                });
          })
      
    } catch (error) {
      console.log("Error", error);
    }

}

export const getAllCategories = (params) => (dispatch, getState) => {
  try {
          getCategories(params).then((data) => {
              dispatch({
                  type: GET_CATEGORIES,
                  payload: data.data ? data.data : []
                });
          })
      
    } catch (error) {
      console.log("Error", error);
    }

}

export const addBlog = (params) => (dispatch, getState) => {
  try {
    addBlogService(params).then((data) => {
              dispatch({
                  type: ADD_BLOG,
                  payload: data.data
                });
          })
      
    } catch (error) {
      console.log("Error", error);
    }

}

export const getArchiveBlogs = (params) => (dispatch, getState) => {
  try {
    getArchiveBlogsService(params).then((data) => {
              dispatch({
                  type: GET_ARCHIVE_BLOGS,
                  payload: data.data
                });
          })
      
    } catch (error) {
      console.log("Error", error);
    }

}