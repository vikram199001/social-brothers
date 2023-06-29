import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Blog from './blog';

const BlogList = ({ blogs, loadMoreBlogs}) => {
    return <div className='mt-2'>
                <Row className="p-2">
                               {
                                    blogs.length ? blogs.map((m, k) =>  
                                   <Col md={6} className="p-0">
                                        <Blog 
                                            show={m}  
                                            key={k} 
                                            
                                            />
                                    </Col>)
                                    : ""
                               }
                </Row>
                <div className='d-flex mt-4 justify-content-center '>
                    <button className='orange-round-btn mt-4' onClick={()=> loadMoreBlogs() }>Laad meer</button>
                </div>
                
    </div>
}

export default BlogList;