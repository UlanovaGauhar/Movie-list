import React, { useRef, useState } from 'react';
import Modal from './UI/Modal';
import styled from 'styled-components';

const List = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const inputFile = useRef();
  const inputNumber = useRef();
  const inputText = useRef();
  const [list, setList] = useState([]);

  const onClose = () => {
    setModalIsVisible(false);
  };

  const addMovieHandler = () => {
    const fileInput = inputFile.current;
    const file = fileInput.files[0];

    if (file) {
      const newItem = {
        image: URL.createObjectURL(file),
        title: inputText.current.value,
        date: inputNumber.current.value,
      };

      setList((prevList) => [...prevList, newItem]);
      onClose();
    }
  };

  return (
    <div>
      {modalIsVisible && (
        <Modal
          inputFile={inputFile}
          inputNumber={inputNumber}
          inputText={inputText}
          setList={setList}
          onClose={onClose}
        />
      )}
      {list.map((element, index) => (
        <div key={index}>
          <StyledTitle>{element.title}</StyledTitle>
          <StyledImage src={element.image} alt="error" />
          <StyledDate>{element.date}</StyledDate>
        </div>
      ))}
      <StyledButon onClick={() => setModalIsVisible(true)}>Add Movie</StyledButon>
     
    </div>
  );
};

export default List;


const StyledTitle=styled.h1`
  display: flex;
  justify-content: center;
  font-size:40px;
   margin-top:60px;
`
const StyledImage=styled.img`
  width:70%;
  display: flex;
  justify-content: start;
  margin-top:70px;
`

const StyledDate=styled.h3`
  margin-left:1220px;
  font-size: 45px;
  margin-top:-400px;
`
const StyledButon=styled.button`
  margin-left:700px;
  width:250px;
  height: 67px;
  font-size:30px;

`