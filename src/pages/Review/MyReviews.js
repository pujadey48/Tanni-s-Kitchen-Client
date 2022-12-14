import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { getUrl } from "../../Util/Util";
import MyReviewCard from "./MyReviewCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const showDeleteToastMessage = () => {
    toast.success("Successfully deleted!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showUpdateeToastMessage = () => {
    toast.success("Successfully updated!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleDeleteReview = (id) => {
    const remaining = reviews.filter((odr) => odr._id !== id);
    setReviews(remaining);
    showDeleteToastMessage();
  };

  const handleUpdateReview = (updatedReview) => {
    const remaining = reviews.filter(rev => rev._id !== updatedReview._id);
    const updated = reviews.find(rev => rev._id === updatedReview._id);

    updated.review = updatedReview.review;

    const newReview = [updated, ...remaining];
    setReviews(newReview);
    showUpdateeToastMessage();
  };

  useEffect(() => {
    fetch(getUrl(`/reviews?uid=${user?.uid}`), {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.uid, logOut]);

  console.log(reviews);
  return (
    <Container>
      <h3>There are {reviews.length} reviews</h3>
      <div className="d-flex flex-wrap">
      <ToastContainer />
        {reviews.map((rev) => (
          <MyReviewCard
            key={rev._id}
            rev={rev}
            handleDeleteReview={handleDeleteReview}
            handleUpdateReview={handleUpdateReview}
          ></MyReviewCard>
        ))}
      </div>
    </Container>
  );
};

export default MyReviews;
