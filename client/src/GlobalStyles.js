import { createGlobalStyle } from 'styled-components/macro';
import { setColor, setFont } from './styles';
const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}

*,
*::after,
*::before {
	box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; 
}

body{
  color:${setColor.primaryText};
  font-weight: 400;
  line-height: 1.6;
  background-image: linear-gradient(to right bottom, ${setColor.bkgnd_light}, ${setColor.bkgnd_dark});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  ${setFont.secondary};
}

section, article, aside, header, p {
  font-size: 1.75rem;
  margin: 0.67rem 0;
}

h1 {
  font-size: 4rem;
  margin: 0.67rem 0;
}

h2 {
  font-size: 3rem;
  margin: 0.67rem 0;
}

h3 {
  font-size: 2.5rem;
  margin: 0.67rem 0;
}

`;

export default GlobalStyles;
