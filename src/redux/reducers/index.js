import { 
  GET_TOP_BLOGS,
   GET_SEARCH_BLOGS,
    GET_CATEGORIES, 
    ADD_BLOG, 
    GET_ARCHIVE_BLOGS } from "../types";
const INITIAL_STATE = {
    blogsList: [],
    searchResult: [],
    archiveList: [],

};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TOP_BLOGS:
            return {
                ...state, 
                blogsList: action.payload.data,
                pageData: {total: action.payload.total}
      }
    case GET_SEARCH_BLOGS:
        return {
            ...state, 
            searchResult: action.payload
        }
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case ADD_BLOG:
     
        return {
          ...state,
          blogsList: [action.payload, ...state.blogsList]
      } 
    case GET_ARCHIVE_BLOGS:
      return {
        ...state, 
        archiveList: action.payload
      }
    default:
      return INITIAL_STATE;
  }
};

export default moviesReducer;