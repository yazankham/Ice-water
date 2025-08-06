import React from 'react';

const PRIMARY_COLOR = '#115A77';
const ACCENT_COLOR = '#B2892D';

function StarIcon({ filled }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? ACCENT_COLOR : 'none'} stroke={ACCENT_COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle'}}>
      <polygon points="12 2 15 8.5 22 9.3 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.3 9 8.5 12 2" />
    </svg>
  );
}

// Example user reviews data
const userReviews = [
  {
    name: "Alaa",
    rating: 5,
    review: "Excellent water quality and fast delivery!",
    time: "2024-06-01 14:23"
  },
  {
    name: "Sara",
    rating: 4,
    review: "Very good taste, but delivery was a bit late.",
    time: "2024-06-02 09:10"
  },
  {
    name: "Mohammed",
    rating: 3,
    review: "Average experience, but the staff was friendly.",
    time: "2024-06-03 17:45"
  }
];

function ReviewsList() {
  return (
    <div style={{ background: PRIMARY_COLOR, color: '#fff', padding: 32, borderRadius: 12, maxWidth: 500, margin: '40px auto', boxShadow: `0 2px 12px rgba(17,90,119,0.15)` }}>
      <h2 style={{ color: ACCENT_COLOR, marginBottom: 24 }}>User Reviews</h2>
      {userReviews.map((review, idx) => (
        <div key={idx} style={{ marginBottom: 24, borderBottom: '1px solid #B2892D', paddingBottom: 16 }}>
          <div style={{ fontWeight: 600, fontSize: 16 }}>{review.name}</div>
          <div style={{ margin: '8px 0' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled={i < review.rating} />
            ))}
            <span style={{ marginLeft: 8, color: ACCENT_COLOR, fontWeight: 500 }}>{review.rating} / 5</span>
          </div>
          <div style={{ fontSize: 15 }}>{review.review}</div>
          <div style={{ fontSize: 13, color: '#eee', marginTop: 4 }}>{review.time}</div>
        </div>
      ))}
    </div>
  );
}

export default ReviewsList;
