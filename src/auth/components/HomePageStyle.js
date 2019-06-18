import styled, { css } from 'styled-components'

export const WelcomeMessage = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');
  padding: 100px;
  margin-left: 25%;
  font-family: 'Noto Sans', sans-serif;
  font-size: 28px;

  ${props => props.primary && css`
  background-color: red;
`}
`

export const FontMessage = styled.div`
@import url('https://fonts.googleapis.com/css?family=B612+Mono|Pacifico&display=swap');
font-family: 'Pacifico', cursive;
`

export const WelcomeFontMessage = styled.div`
@import url('https://fonts.googleapis.com/css?family=B612+Mono|Pacifico&display=swap');
font-family: 'Pacifico', cursive;
color: #fc756f;
font-size: 18px;
`
