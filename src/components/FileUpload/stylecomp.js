import styled from 'styled-components'

const Img = styled.img`
    display: 'block';
    width: 'auto';
    height: '100%';
    &:hover {
      border-color: #2196f3;
    }

    &:disabled {
      opacity: 0.6;
   }
`
export default Img
