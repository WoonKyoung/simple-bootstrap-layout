import styled , {css} from 'styled-components';

const ButtonStyled = styled.button`
  border : none;
  background: DodgerBlue;
  padding: 5px 15px;
  color : white;
  font-weight: bold;
  border-radius: 6px;
  font-size: 15px;
  ${props => {
    return props.outline && css`
      border: 1px solid lightgray;
    `;
  }}
`

function Button({loading,label ,...rest}){
    return(
            <ButtonStyled disabled={loading} {...rest} >
                {loading ? "Loading" : label }

            </ButtonStyled>
    );
}

export default Button;