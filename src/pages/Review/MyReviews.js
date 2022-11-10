import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyReviewCard from './MyReviewCard';



const MyReviews = () => {
    const reviews = useLoaderData();
    console.log(reviews);
    return (
        <div>
            {/* {
                <div className="d-flex flex-wrap">
                {reviews.map((re) => (
                  <MyReviewCard key={re._id} service={re}></MyReviewCard>
                ))}
              </div>
            } */}
            <h2>my reviews length: {reviews.length}</h2>
        </div>
            
        

    );
};

export default MyReviews;