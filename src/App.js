import { useState } from 'react';
import Input from './components/Input';
import Output from './components/Output';

const MODE = {
  'EDIT': 'EDIT',
  'VIEW': 'VIEW'
}

const App = () => {
  const [mode, setMode] = useState(MODE.EDIT);

  function changeModeHandler () {
    let newMode = mode === MODE.EDIT ? MODE.VIEW : MODE.EDIT;
    setMode(newMode);
  }

  return (
    <div>
      { mode === MODE.EDIT && <Input changeMode={changeModeHandler}/> }
      { mode === MODE.VIEW && <Output changeMode={changeModeHandler} /> }
    </div>
  );
}

export default App;
