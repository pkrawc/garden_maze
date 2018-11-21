import generate from "generate-maze"
import Field from "components/Field"
import Hedges from "components/Hedges"
import Character from "components/Character"
import GlobalStyles from "components/GlobalStyles"

const { min, max } = Math

class App extends React.Component {
  state = { x: 0, y: 0, loaded: false }
  componentDidMount() {
    const maze = generate(40)
    document.addEventListener("keydown", this.handleKeyPress.bind(this))
    this.setState({ loaded: true, maze })
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress.bind(this))
  }
  handleKeyPress = ({ key }) =>
    this.setState(({ x, y, maze }) => {
      const cell = maze[y][x]
      if (key === "ArrowLeft" && !cell.left) return { x: max(0, x - 1) }
      if (key === "ArrowUp" && !cell.top) return { y: max(0, y - 1) }
      if (key === "ArrowRight" && !cell.right) return { x: min(40, x + 1) }
      if (key === "ArrowDown" && !cell.bottom) return { y: min(40, y + 1) }
      return { x, y }
    })
  render() {
    const { x, y, maze, loaded } = this.state
    return (
      <main className="app">
        <GlobalStyles />
        <h1 className="title">Garden Maze</h1>
        {loaded && (
          <Field width={40} height={40}>
            <Hedges maze={maze} width={40} height={40} />
            <Character x={x} y={y} />
          </Field>
        )}
      </main>
    )
  }
}

export default App
