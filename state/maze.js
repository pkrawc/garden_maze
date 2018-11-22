import { useReducer, useEffect } from "react"
import generate from "generate-maze"

const { min, max } = Math

// CONSTANTS
const LOADED = "maze/LOADED"
const LEFT = "maze/LEFT"
const RIGHT = "maze/RIGHT"
const UP = "maze/UP"
const DOWN = "maze/DOWN"

// REDUCER
const reducer = (state, { type, payload }) => {
  switch (type) {
    case LOADED:
      return { ...state, loaded: true, maze: payload }
    case LEFT:
      return { ...state, x: max(0, --state.x) }
    case RIGHT:
      return { ...state, x: min(state.maze.length, ++state.x) }
    case UP:
      return { ...state, y: max(0, --state.y) }
    case DOWN:
      return { ...state, y: min(state.maze.length, ++state.y) }
    default:
      return state
  }
}

// STATE HOOK
const useMaze = () => {
  const [state, dispatch] = useReducer(reducer, {
    maze: [],
    x: 0,
    y: 0
  })
  const maze = generate(40)
  const handleKeyPress = ({ key }) => {
    const cell = state.maze[state.y][state.x]
    if (key === "ArrowLeft" && !cell.left) dispatch({ type: LEFT })
    if (key === "ArrowUp" && !cell.top) dispatch({ type: UP })
    if (key === "ArrowRight" && !cell.right) dispatch({ type: RIGHT })
    if (key === "ArrowDown" && !cell.bottom) dispatch({ type: DOWN })
  }
  useEffect(() => dispatch({ type: LOADED, payload: maze }), [])
  useEffect(
    () => {
      document.addEventListener("keydown", handleKeyPress)
      return () => document.removeEventListener("keydown", handleKeyPress)
    },
    [state.x, state.y]
  )
  return state
}

export default useMaze
