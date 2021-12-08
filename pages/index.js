import React, {useEffect} from 'react';
import useMaze from "state/maze"
import Field from "components/Field"
import Hedges from "components/Hedges"
import Character from "components/Character"
import GlobalStyles from "components/GlobalStyles"
import io from 'socket.io-client';


const { min, max } = Math

const socket = io('http://localhost:8080');


const App = props => {
  useEffect(() => {
    socket.on('message1', (payload) => {
      console.log('message1', payload);
    });
  
    socket.on('message2', (payload) => {
      console.log('message2', payload);
    });
    
    setTimeout(() => {
      socket.emit('message2', 'message2');
    }, 2000)
    
  }, [])
  
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
