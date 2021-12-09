import React from "react"
import styled from "styled-components"

const { min } = Math

const showBorder = dir => (dir ? "2px solid #0d37bf" : "2px solid #587cf3")

const Hedges = ({ maze, className }) => (
  <section className={className}>
    {maze.map(row =>
      row.map(({ x, y, top, left, right, bottom }) => (
        <div
          key={`${x}-${y}`}
          className="hedge__square"
          style={{
            gridColumn: `${min(x + 1, 40)} / span 1`,
            gridRow: `${min(y + 1, 40)}/ span 1`,
            borderRight: showBorder(right),
            borderLeft: showBorder(left),
            borderTop: showBorder(top),
            borderBottom: showBorder(bottom)
          }}
        />
      ))
    )}
  </section>
)

const StyledHedges = styled(Hedges)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template: ${({ width, height }) => `repeat(${width}, 2.5vmin) / repeat(${height}, 2.5vmin)`};
  z-index: 10;
  @media (min-width: 90rem) {
    grid-template: ${({ width, height }) => `repeat(${width}, 1.5rem) / repeat(${height}, 1.5rem)`};
  }
  .hedge__square {
    border-color: $green-700;
    border-width: 4px;
    border-style: solid;
  }
`

export default StyledHedges
