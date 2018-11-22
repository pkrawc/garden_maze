import useMaze from "state/maze"
import Field from "components/Field"
import Hedges from "components/Hedges"
import Character from "components/Character"
import GlobalStyles from "components/GlobalStyles"

const { min, max } = Math

const App = props => {
  const { x, y, maze, loaded } = useMaze()
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

export default App
