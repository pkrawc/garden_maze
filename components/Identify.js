import { useState } from 'react';

const Identify = ({setIdentity}) => {
  const [name, setName] = useState("");

  return (
    <div className="identify">
      <div className="content">
        YAY! Let's play together in
        <h2>A-maze'in Routable!</h2>
        <label>
          <p>Please type a player name</p>
          <input type="text" onChange={event => setName(event.target.value)}/>
        </label>
        <button onClick={() => setIdentity(name)}>Play</button>
      </div>
    </div>
  )
}

export default Identify;
