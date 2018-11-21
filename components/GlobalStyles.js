import { createGlobalStyle } from "styled-components"
import { colors } from "constants"

const Global = createGlobalStyle`

*,
*:before,
*:after {
  box-sizing: border-box;
}

:root {
  font-size: 12px;
}

html,
body,
p,
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Martel", serif;
  font-size: 1.5rem;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.green_900};
  min-height: 100vh;
  color: ${colors.gold_300};
  h1 {
    position: absolute;
    transform: rotate(-90deg);
    transform-origin: top left;
    left: 2rem;
    bottom: 0;
    font-weight: 900;
  }
}
`

export default Global
