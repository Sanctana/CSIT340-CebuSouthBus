import React from 'react';
import TripReview from '../components/TripReview';
import ReviewActions from '../components/ReviewActions';

export default function Review() {
  return (
    <div className="review-page">
      <TripReview />
      <ReviewActions />
    </div>
  );
}
