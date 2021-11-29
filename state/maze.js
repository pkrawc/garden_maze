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
      const cell2 = state.maze[state.y2][state.x2]
      if (payload === "ArrowLeft" && !cell.left) return { ...state, x: max(0, --state.x) }
      if (payload === "ArrowUp" && !cell.top) return { ...state, y: max(0, --state.y) }
      if (payload === "ArrowRight" && !cell.right)
        return { ...state, x: min(state.maze.length, ++state.x) }
      if (payload === "ArrowDown" && !cell.bottom)
        return { ...state, y: min(state.maze.length, ++state.y) }

      if (payload === "a" && !cell2.left) return { ...state, x2: max(0, --state.x2) }
      if (payload === "w" && !cell2.top) return { ...state, y2: max(0, --state.y2) }
      if (payload === "d" && !cell2.right)
        return { ...state, x2: min(state.maze.length, ++state.x2) }
      if (payload === "s" && !cell2.bottom)
        return { ...state, y2: min(state.maze.length, ++state.y2) }
    }
    default:
      return state
  }
}

// STATE HOOK
const useMaze = () => {
  const [state, dispatch] = useReducer(reducer, {
    maze: [],
    x: 0,
    y: 0,
    x2: 0,
    y2: 0,
  })
  useEffect(() => {
    const maze = generate(40)
    console.log(maze)
    const handleKeyPress = ({ key }) => dispatch({ type: KEY_PRESS, payload: key })
    dispatch({ type: LOADED, payload: maze })
    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [])
  return state
}

export default useMaze
