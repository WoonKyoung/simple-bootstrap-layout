import React from "react";
import ReactDOM from "react-dom"
import styled from "styled-components"

const Background = styled.div`
  width : 100%;
  height: 100%;
  background : rgba (0,0,0,0.6);
  position : fixed;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled.div`
  width: 100%;
  height : 100%;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  background : #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position : relative;
  z-index : 10;
  border-radius: 10px;
`



const Modal = ({ showModal, setShowModal }) => {
    return(
        <>
            {showModal ? <div>Modal></div> : null }
        </>
    )
}

export default Modal;

