import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #ae6ed3;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

const Card = styled.div`
  display: flex;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 800px;
  width: 100%;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 800px;
    width: 90%;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s ease-in-out;
    &:focus {
      outline: none;
      border-color: #4caf50;
    }
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: #45a049;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Feedback = () => {
  return (
    <>
    <center style={{fontSize:'20px',fontWeight:'bold',color:'purple'}}>FEEDBACK FORM</center>
    <Container>
       
      <Card>
        <ImageWrapper>
          <Image src="https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Images-Wallpaper-HD-Background.jpg" alt="Feedback Image" />
        </ImageWrapper>
        <FormWrapper>
          <form action='https://formspree.io/f/xvoeoajd'method='POST' >
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="Message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </FormWrapper>
      </Card>
    </Container>
    </>
  );
};

export default Feedback;
