import { useReducer, useEffect } from "react"
import generate from "generate-maze"

const { min, max } = Math

// CONSTANTS
const LOADED = "maze/LOADED"
const LEFT = "maze/LEFT"
const RIGHT = "maze/RIGHT"
const UP = "maze/UP"
const DOWN = "maze/DOWN"
const KEY_PRESS = "maze/KEY_PRESS"

// REDUCER
const reducer = (state, { type, payload }) => {
  switch (type) {
    case LOADED:
      return { ...state, loaded: true, maze: payload }
    case KEY_PRESS: {
      const cell = state.maze[state.y][state.x]
      if (payload === "ArrowLeft" && !cell.left) return { ...state, x: max(0, --state.x) }
      if (payload === "ArrowUp" && !cell.top) return { ...state, y: max(0, --state.y) }
      if (payload === "ArrowRight" && !cell.right)
        return { ...state, x: min(state.maze.length, ++state.x) }
      if (payload === "ArrowDown" && !cell.bottom)
        return { ...state, y: min(state.maze.length, ++state.y) }
    }
    default:
      return state
  }
}

// STATE HOOK
const useMaze = (seed) => {
  const [state, dispatch] = useReducer(reducer, {
    maze: [],
    x: 0,
    y: 0
  })
  useEffect(() => {
    const maze = generate(30, 30, true, seed)
    const handleKeyPress = ({ key }) => dispatch({ type: KEY_PRESS, payload: key })
    dispatch({ type: LOADED, payload: maze })
    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [])
  return state
}

export default useMaze
