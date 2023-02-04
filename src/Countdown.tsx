import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  date: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Unit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  @media (min-width: 768px) {
    margin: 0 20px;
  }
`;

const Number = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-size: 18px;
`;

const Countdown: React.FC<Props> = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const targetDate = new Date(date);
      const diff = targetDate.getTime() - currentDate.getTime();

      if (diff <= 0) {
        clearInterval(intervalId);
        return;
      }

      setTimeLeft({
        years: Math.floor(diff / (1000 * 60 * 60 * 24 * 365)),
        days: Math.floor((diff / (1000 * 60 * 60 * 24)) % 365),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [date]);

  return (
    <>
    <h1>Sue's Retirement Countdown!</h1>
    <Container style={{'display': 'flex', 'justifyContent': 'center', 'alignItems':'center'}}>
      <Unit>
        <Number>{timeLeft.years}</Number>
        <Label>Years</Label>
      </Unit>
      <Unit>
        <Number>{timeLeft.days}</Number>
        <Label>Days</Label>
      </Unit>
      <Unit>
        <Number>{timeLeft.hours}</Number>
        <Label>Hours</Label>
      </Unit>
      <Unit>
        <Number>{timeLeft.minutes}</Number>
        <Label>Minutes</Label>
      </Unit>
      <Unit>
        <Number>{timeLeft.seconds}</Number>
        <Label>Seconds</Label>
      </Unit>
    </Container>
    </>
  );
};

export default Countdown;
