import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { getUrl } from '../../Util/Util';
import MyReviewCard from './MyReviewCard';



const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(getUrl(`/reviews?uid=${user?.uid}`), {
            headers: {
                authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
              },
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.uid, logOut])

    console.log(reviews);
    return (
        <Container>
            <h3>There are {reviews.length} reviews</h3>
            <div className="d-flex flex-wrap">
            {reviews.map((rev) => (
                <MyReviewCard key={rev._id} rev={rev}></MyReviewCard>
            ))}
        </div>
        </Container>
    );
};

export default MyReviews;