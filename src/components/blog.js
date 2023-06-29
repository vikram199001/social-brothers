import React from "react";
import { Card, Col } from "react-bootstrap";


import { imgBaseUrl } from "../services";
import moment from 'moment';
const Blog = ({ show }) => {
 

  return (
    <Col className='d-flex justify-content-center m-3'>
                 <Card className="blog-card">
                  <Card.Img variant="top" src={`${imgBaseUrl}${show.img_url}`} />
                  <div className="detail-overlay"><span>{moment(show.created_at).format('MM-DD-YYYY')}</span><span>{show.category && show.category.name}</span></div>
                  <Card.Body>
                    <Card.Title className="blog-title">{show.title}</Card.Title>
                    <div className="blog-content">
                      {show.content}
                    </div>
                  </Card.Body>
                </Card>



               
                
            </Col>
  );
};

export default Blog;
