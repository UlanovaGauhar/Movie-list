import React from 'react';
import Input from './Input';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const ModalContent = ({ children, onClose }) => {
  return (
    <>
      <Backdrop onClick={onClose} />
      <Card>{children}</Card>
    </>
  );
};

const Modal = ({ inputFile, inputNumber, inputText, setList, onClose, children }) => {
  const valueInputHandler = () => {
    const file = inputFile.current.files[0];
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

  return createPortal(
    <ModalContent onClose={onClose}>
      <Input ref={inputFile} type="file" accept="image/*" />
      <Input ref={inputText} type="text" />
      <Input ref={inputNumber} type="date" />

      <StyledButton onClick={valueInputHandler}>Add</StyledButton>
      <StyledButton onClick={onClose}>Close</StyledButton>
    </ModalContent>,
    document.getElementById('modal')
  );
};

export default Modal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Card = styled.div`
  min-height: 250px;
  min-width: 400px;
  background-color: #fff;
  color: black;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 35px;
  font-size: 20px;
  margin-top: 10px;
`;

