import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {logo,name,id,total}=topic;
    return (
        <div className=''>
            <Card>
            <Card.Img variant="top" src={logo} style={{backgroundColor:'rgba(137, 43, 226, 0.093)'}}/>
            <Card.Body>
                <p className='text-center' style={{color:'gray'}}>Total Quiz: {total}</p>
                <Card.Text className='d-flex justify-content-between align-items-center'>
                <p className='mt-3'>{name}</p>
                <div className="">
                <Button variant="info" className='btn-sm'>
                <Link to={`/topic/${id}`} className='text-decoration-none text-light fw-bold'>Start Practice</Link>
                </Button>
                </div>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Topic;