import styled from 'styled-components';

const ButtonStyled = styled.button`
  border : none;
  background: DodgerBlue;
  padding: 5px 15px;
`

function Button(loading, label, ...rest){
    return(
        <div>
            <ButtonStyled disabled={loading} {...rest}>
                {loading ? 'Loading' : label}
            </ButtonStyled>
        </div>
    );
}

export default Button;