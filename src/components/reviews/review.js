import React, { useState } from 'react';
import './review.css';

const PRIMARY_COLOR = '#115A77';
const ACCENT_COLOR = '#B2892D';

function StarIcon({ filled }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={filled ? ACCENT_COLOR : 'none'} stroke={ACCENT_COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle'}}>
      <polygon points="12 2 15 8.5 22 9.3 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.3 9 8.5 12 2" />
    </svg>
  );
}

function getUserReview() {
  const data = localStorage.getItem('userReview');
  return data ? JSON.parse(data) : null;
}

function formatTime(dateString) {
  if (!dateString) return ""; // إذا لم يوجد تاريخ، لا تعرض شيئاً
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString; // إذا كان التاريخ غير صالح، اعرض النص كما هو
  const day = date.toLocaleDateString('ar-EG', { day: '2-digit', month: '2-digit', year: '2-digit' });
  const time = date.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit', hour12: false });
  return `${day} - ${time}`;
}

function ReviewSection() {
  const [userReview, setUserReview] = useState(getUserReview());
  const [editing, setEditing] = useState(false);
  const [rating, setRating] = useState(userReview ? userReview.rating : 0);
  const [reviewText, setReviewText] = useState(userReview ? userReview.review : '');
  const [userName, setUserName] = useState(userReview ? userReview.name : '');

  const handleRate = (star) => {
    setRating(star);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0 && reviewText.trim() && userName.trim()) {
      const review = {
        name: userName,
        rating,
        review: reviewText,
        time: new Date().toLocaleString()
      };
      localStorage.setItem('userReview', JSON.stringify(review));
      setUserReview(review);
      setEditing(false);
    }
  };

  const handleEdit = () => {
    setEditing(true);
    setRating(userReview.rating);
    setReviewText(userReview.review);
    setUserName(userReview.name);
  };

  const handleDelete = () => {
    localStorage.removeItem('userReview');
    setUserReview(null);
    setEditing(false);
    setRating(0);
    setReviewText('');
    setUserName('');
  };

  return (
    <div id="review" className="review-section" style={{
      background: PRIMARY_COLOR,
      color: '#fff',
      padding: 32,
      borderRadius: 12,
      maxWidth: 500,
      margin: '120px auto 40px auto',
      boxShadow: `0 2px 12px rgba(17,90,119,0.15)`
    }}>
      <h1 style={{
        color: ACCENT_COLOR,
        marginBottom: 32,
        fontSize: 24,
        fontWeight: 700,
        textAlign: 'center'
      }}>
        How do you see our services?
      </h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {userReview && !editing && (
          <li style={{ marginBottom: 24, borderBottom: '1px solid #B2892D', paddingBottom: 16 }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: '0.5px'
            }}>
              <span style={{ color: '#161616' }}>{userReview.name}</span>
              <span style={{ fontSize: 13, color: ACCENT_COLOR, marginLeft: 8 }}>
                {formatTime(userReview.time)}
              </span>
            </div>
            <div style={{ margin: '8px 0', display: 'flex', alignItems: 'center', gap: 2 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} filled={i < userReview.rating} />
              ))}
              <span style={{ marginLeft: 8, color: ACCENT_COLOR, fontWeight: 500 }}>{userReview.rating} / 5</span>
            </div>
            <div style={{
              fontSize: 16,
              color: '#fff',
              fontWeight: 400,
              background: PRIMARY_COLOR,
              padding: '8px 12px', // زيادة المسافة من اليسار
              borderRadius: 4,
              direction: 'ltr',
              textAlign: 'left'
            }}>
              {userReview.review}
            </div>
            <div style={{ marginTop: 8 }}>
              <button type="button" onClick={handleEdit} style={{ background: ACCENT_COLOR, color: '#fff', border: 'none', padding: '6px 16px', borderRadius: 6, fontWeight: 500, marginRight: 8, cursor: 'pointer' }}>Edit</button>
              <button type="button" onClick={handleDelete} style={{ background: '#c00', color: '#fff', border: 'none', padding: '6px 16px', borderRadius: 6, fontWeight: 500, cursor: 'pointer' }}>Delete</button>
            </div>
          </li>
        )}
        {(editing || !userReview) && (
          <li style={{ marginBottom: 24, borderBottom: '1px solid #B2892D', paddingBottom: 16 }}>
            <form onSubmit={handleSubmit} style={{ direction: 'ltr', textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                {[1,2,3,4,5].map(star => (
                  <span key={star} onClick={() => handleRate(star)} style={{ cursor: 'pointer' }}>
                    <StarIcon filled={star <= rating} />
                  </span>
                ))}
              </div>
              <input
                type="text"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                style={{
                  width: '100%',
                  marginBottom: 12,
                  borderRadius: 6,
                  border: 'none',
                  padding: 8,
                  color: '#161616',
                  background: '#fff',
                  fontWeight: 500,
                  fontSize: 15
                }}
                placeholder="Your name"
                required
              />
              <textarea
                value={reviewText}
                onChange={e => setReviewText(e.target.value)}
                style={{
                  width: '100%',
                  minHeight: 60,
                  marginBottom: 12,
                  borderRadius: 6,
                  border: 'none',
                  padding: 8,
                  color: '#161616',
                  background: '#fff',
                  direction: 'ltr',
                  textAlign: 'left'
                }}
                placeholder="Write your review..."
                required
              />
              <button type="submit" style={{ background: ACCENT_COLOR, color: '#fff', border: 'none', padding: '8px 20px', borderRadius: 6, fontWeight: 500, marginRight: 8, cursor: 'pointer' }}>
                {editing ? 'Save' : 'Submit'}
              </button>
              {editing && (
                <button type="button" onClick={() => setEditing(false)} style={{ background: '#888', color: '#fff', border: 'none', padding: '8px 20px', borderRadius: 6, fontWeight: 500, cursor: 'pointer' }}>Cancel</button>
              )}
            </form>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ReviewSection;