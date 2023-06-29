
import React, { useEffect, useState} from 'react';
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import {
    getBlogs,
    addBlog,
    getAllCategories
} from '../redux/actions';
import BlogList from './blogList';
import Blog from './blog';
import { CreateBlog } from './createBlog';

const Home = () => {
    const dispatch = useDispatch();
    const blogsList = useSelector((state) => state.moviesReducer.blogsList);
    const searchResult = useSelector((state) => state.moviesReducer.searchResult);
    const categories = useSelector((state) => state.moviesReducer.categories);
    

   
    const [ blogs, setBlogsList ] = useState([]);
    const [ blogsCount, setBlogsCount ] = useState(4);

    const [ _searchResult, setSearchResult ] = useState([]);
    const [ toggleSearch, setSearchToggle ] = useState(false);
    const [ searchString, setSearchString ] = useState('');
   


    useEffect(() => {
        dispatch(getAllCategories());
        const paramas =  {page: 1, perPage: 4, sortBy: 'created_at', sortDirection: 'asc', searchPhrase: '', categoryId: 1}
        dispatch(getBlogs(paramas))
    }, [dispatch])

    useEffect(() => {
        setBlogsList([...blogsList]);

    }, [blogsList]);


    useEffect(() =>{
        setSearchResult({...searchResult});
        // setSearchToggle(!toggleSearch);
    }, [searchResult])

    const loadMoreBlogs = () =>{
        const params =  {page: 1, perPage: blogsCount + 4, sortBy: 'title', sortDirection: 'asc', searchPhrase: '', categoryId: 1}
        dispatch(getBlogs(params))
        setBlogsCount(blogsCount + 4);
    }

    const addBlogPost = (data) => {
        let formData = new FormData();
        formData.append('image', data.image[0]);
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('category_id', data.category_id);
        dispatch(addBlog(formData));
    }

    return <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blogs List</title>
                <meta name="description" content={'Get graphic design and marketing tips on Simplified. Design a logo, business card, flyers, and more. Collaborate on projects. Thousands of templates'} />
                
                <link rel="canonical" href="http://socialbrothers.com/" />
            </Helmet>
       <div className='mt-5 home-page'>
        <Container className="homepage-theme px-5 mx-md-auto">
            { 
            !toggleSearch ? <Row style={{ margin: "auto" }}>
                <Col md={5} xs={12}>
                    <Container className='create-blog-section'>
                        <CreateBlog 
                            addBlogPost={addBlogPost} 
                            categories={categories}
                        />
                    </Container>
                </Col>
                <Col md={7} xs={12} className="p-0 mt-xs-2">
                    <div> 
                        <Container className="overflow-auto blogs-section pt-0">
                            <Row className="shows-section">
                                <BlogList
                                    blogs={blogs} 
                                    loadMoreBlogs={loadMoreBlogs}
                                  />
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
            : 
            <Row style={{ margin: "auto" }}>
                <Col md={12} className="p-0">
                    <div> 
                        <Container className="px-5">
                            Search data will be here
                        {
                     _searchResult.length ? _searchResult.map((m, k) =>  
                     <Blog 
                        show={m}  
                        key={k}
                       
                     />)
                : ""}
                </Container>
                </div>
                </Col>
            </Row>
            }
        </Container>
       </div>
    </div>
}

export default Home;