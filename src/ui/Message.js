import styled, {css} from "styled-components";

const PStyled = styled.p`
  padding: 10px;
  border: 1px solid lightGray;
  background: #f0f0f0;
  border-radius: 6px;

  ${(props) => {
    if (props.className === "error")
      return css`
        border-color: transparent;
        background: Tomato;
        color: white;
      `
    else if (props.className === "success")
      return css`
        border-color: transparent;
        background: green;
        color: white;
      `;
  }}
`;

const Message = (props) => {
    return(
        <>
            {props.error && (<PStyled className={props.type}>{props.error}</PStyled>)}
        </>
    );
};

export default Message;