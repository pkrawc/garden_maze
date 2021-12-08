import styled from "styled-components"
import { colors } from "constants"

const Field = styled.section`
  position: relative;
  display: grid;
  grid-template: ${({ width, height }) => `repeat(${width}, 2.5vmin) / repeat(${height}, 2.5vmin)`};
  justify-content: center;
  justify-self: center;
  align-self: center;
  background: ${colors.green_500};
  box-shadow: 0 2rem 2rem -2rem rgba(0, 0, 0, 0.24);
  border: 1px solid ${colors.green_700};
  @media (min-width: 90rem) {
    grid-template: ${({ width, height }) => `repeat(${width}, 1.5rem) / repeat(${height}, 1.5rem)`};
  }
  &::before,
  &::after {
    position: absolute;
    background: red;
    height: 1.5rem;
    font-size: 1rem;
    font-weight: 700;
    padding: 0 0.5rem;
    color: white;
    background: ${colors.green_300};
    border-radius: 2px;
  }
  &:before {
    content: "start";
    top: 0;
    right: calc(100% + 0.5rem);
  }
  &:after {
    content: "end";
    bottom: 0;
    left: calc(100% + 0.5rem);
  }
`

export default Field
