import React, { useEffect, useState} from 'react';
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import {
    getBlogs,
} from '../redux/actions';

import Blog from './blog';

const ArchiveList = () => {
    const history = useNavigate();

    const dispatch = useDispatch();
    const blogsList = useSelector((state) => state.moviesReducer.blogsList); 
    const pageData = useSelector((state) => state.moviesReducer.pageData); 
    
    const [ blogs, setBlogsList ] = useState([]);
    const queryParams = new URLSearchParams(window.location.search)
    const page = queryParams.get("page") || 1
    useEffect(() => {
        const paramas =  {page: page, perPage: 8, sortBy: 'created_at', sortDirection: 'asc', searchPhrase: '', categoryId: 1}
        dispatch(getBlogs(paramas))
    }, [dispatch])


    useEffect(() => {
        setBlogsList([...blogsList]);
    }, [blogsList]);
    

    const [itemOffset, setItemOffset] = useState(0);
  
    const itemsPerPage = 8;
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = blogs.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(pageData?.total / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % blogs.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
      history(`/blog-list?page=${event.selected + 1}`)
      const paramas =  {page: event.selected + 1, perPage: 8, sortBy: 'created_at', sortDirection: 'asc', searchPhrase: '', categoryId: 1}
      dispatch(getBlogs(paramas))
    
    };

    return <div className='mt-2'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Archive List</title>
                <meta name="description" content={'Well, do you love travel? Starting with a question draws readers in, making the description personal. It goes on to explain exactly how Lonely Planet helps travelers, all within the 160 character count.'} />
                <link rel="canonical" href="http://socialbrothers.com/" />
            </Helmet>
        <Container className="overflow-auto">
                <Row className="shows-section p-0 mt-md-5 p-5 p-md-0">
                {
                    currentItems.map((m, k) =>  
                        <Col md={3} className="p-0">
                            <Blog 
                                show={m}  
                            />
                        </Col>)    
                }
                </Row>
                <Row>
                    <div id="react-paginate">
                    <ReactPaginate
                        previousLabel="<  previous"
                        nextLabel="next  >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        renderOnZeroPageCount={null}
                        page={page}
                        breakLabel={<a href="">...</a>}
                        breakClassName={'break-me'}
                        marginPagesDisplayed={2}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                        nextClassName={'nextClassName'}
                        previousClassName={'nextClassName'}
                    />
                    </div>
                </Row>
        </Container>
    </div>
}

export default ArchiveList;