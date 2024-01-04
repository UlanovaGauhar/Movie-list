import React from 'react';
import styled from 'styled-components';

const Input = React.forwardRef(({ type = 'text' }, ref, accept) => {
  return (
    <>
      <StyledInput type={type} ref={ref} accept={accept} />
    </>
  );
});

export default Input;


const StyledInput=styled.input`
  margin-top:30px;
  margin-left:90px;
  display:flex;
  display:block;
`