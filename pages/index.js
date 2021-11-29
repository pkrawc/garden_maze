import useMaze from "state/maze"
import Field from "components/Field"
import Hedges from "components/Hedges"
import Character from "components/Character"
import Character2 from "components/Character2"
import GlobalStyles from "components/GlobalStyles"

const { min, max } = Math

const App = props => {
  const { x, y, x2, y2, maze, loaded } = useMaze()
  if (x===39 && y===39){
    alert("Player yellow has won!!!");
    window.location.reload();
  }
  else if (x2===39 && y2===39){
    alert("Player blue has won!!!");
    window.location.reload();
  }
  return (
    <main className="app">
      <GlobalStyles />
      <h1 className="title">Garden Maze</h1>
      {loaded && (
        <Field width={40} height={40}>
          <Hedges maze={maze} width={40} height={40} />
          <Character x={x} y={y} />
          <Character2 x={x2} y={y2} />
        </Field>
      )}
    </main>
  )
}

export default App
