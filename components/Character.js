import React from "react"
import styled from "styled-components"
import { colors } from "constants"

const { min } = Math

const Character = ({ x, y, className }) => {
  return (
    <div className={className} style={{ gridColumn: min(x + 1, 40), gridRow: min(y + 1, 40) }} />
  )
}

const StyledCharacter = styled(Character)`
  background: ${colors.gold_300};
  margin: 2px;
  border-radius: 2px;
`

export default StyledCharacter
