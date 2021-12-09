import React, { useEffect, useState } from 'react';
import useMaze from "state/maze"
import Field from "components/Field"
import Hedges from "components/Hedges"
import Character from "components/Character"
import GlobalStyles from "components/GlobalStyles"
import io from 'socket.io-client';
import Identify from 'components/Identify';
import Legend from 'components/Legend';


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

  const [identified, setIdentified] = useState(false);
  const [playerName, setPlayerName] = useState("");

  function setIdentity(name) {
    setPlayerName(name);
    setIdentified(true);
  }

  const [w, h] = [40, 40];
  const seed = 123456;
  const { x, y, maze, loaded } = useMaze(w, h, seed)
  return (
    <main className="app">
      <GlobalStyles />
      <h1 className="title">A-maze'in Routable</h1>
      {!identified && <Identify setIdentity={setIdentity} />}
      {identified && (
        <Legend playerName={playerName}/>
      )}
      {identified && loaded && (
        <Field width={w} height={h}>
          <Hedges maze={maze} width={w} height={h} />
          <Character x={x} y={y} />
        </Field>
      )}
    </main>
  )
}

export default App
