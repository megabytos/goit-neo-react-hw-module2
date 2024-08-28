import './App.css';
import { useState, useEffect } from 'react';
import Description from './description/Description';
import Feedback from './Feedback/Feedback ';
import Options from './Options/Options';
import Notification from './Notification/Notification';

const App = () => {
  const defaultRatings = { good: 0, neutral: 0, bad: 0 };
  const ratingsKey = 'ratings';

  const [ratings, setRatings] = useState(() => {
    const savedRating = localStorage.getItem(ratingsKey);
    return savedRating == null ? defaultRatings : JSON.parse(savedRating);
  });

  const totalFeedback = ratings.good + ratings.neutral + ratings.bad;
  const positiveFeedback = totalFeedback ? Math.round((ratings.good / totalFeedback) * 100) : 0;

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setRatings(defaultRatings);
    } else {
      setRatings({
        ...ratings,
        [feedbackType]: ratings[feedbackType] + 1,
      });
    }
  };

  useEffect(() => {
    localStorage.setItem(ratingsKey, JSON.stringify(ratings));
  }, [ratings]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback ? (
        <Feedback ratings={ratings} total={totalFeedback} positive={positiveFeedback} />
      ) : (
        <Notification>No feedback yet</Notification>
      )}
    </>
  );
};

export default App;
