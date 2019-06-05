import styled from 'styled-components'

export const Container = styled.div`
position: absolute;
float: left;
`

export const Dropbox = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
padding: 30px;
border-width: 2px;
border-radius: 2px;
border-color: #eeeeee;
border-style: dashed;
border-radius: 50%;
color: #bdbdbd;
outline: none;
transition: border .24s ease-in-out;
&:hover {
  border-color: #2196f3;
}

&:disabled {
  opacity: 0.6;
}
`
