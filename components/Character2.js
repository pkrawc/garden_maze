import React from "react"
import styled from "styled-components"
import { colors } from "constants"

const { min } = Math

const Character2 = ({ x, y, className }) => {
  return (
    <div className={className} style={{ gridColumn: min(x + 1, 40), gridRow: min(y + 1, 40) }} />
  )
}

const StyledCharacter2 = styled(Character2)`
  background: blue;
  margin: 2px;
  border-radius: 2px;
`

export default StyledCharacter2