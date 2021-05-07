import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 180px;

  .toastbox {
    background: #fefefe;
    border: #ccc 1px solid;
    border-radius: 6px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0,0, 0.5);
    padding: 10px;
    margin-top: 15px;
    text-align: center;
  }
`;

function Toaster({ toasts }){
    return(
        <Wrapper>
            {toasts.map((toast,index) => (
                <div className="toastbox" key={index}>
                    {toast}
                </div>))}
        </Wrapper>
    );
}

export default Toaster;