import { useState } from 'react';
import Input from './components/Input';
import Output from './components/Output';
import Categories from './components/Categories';


const MODE = {
  EDIT: 'EDIT',
  VIEW: 'VIEW'
};

const CATEGORIES = {
  adverbs: false,
  noum: false,
  adjetive: false
};

const VERBS = {
  participe: false,
  gerund: false,
}

const App = () => {
  const [mode, setMode] = useState(MODE.EDIT);
  const [categories, setCategories] = useState(CATEGORIES);
  const [verbs, setVerbs] = useState(VERBS);

  function changeModeHandler () {
    let newMode = mode === MODE.EDIT ? MODE.VIEW : MODE.EDIT;
    setMode(newMode);
  }

  function selectCategoriesHandler (event) {
    let cat = event.target.value;
    setCategories(() => {
      return {...categories, [cat]: event.target.checked}
    });
  }

  function selectVerbsHandler (event) {
    let cat = event.target.value;
    setVerbs(() => {
      return {...verbs, [cat]: event.target.checked}
    });
  }

  return (
    <div>
      <Categories options={categories} selectCategories={selectCategoriesHandler}/>
      <Categories options={verbs} selectCategories={selectVerbsHandler}/>
      { mode === MODE.EDIT && <Input changeMode={changeModeHandler}/> }
      { mode === MODE.VIEW && <Output changeMode={changeModeHandler} /> }
    </div>
  );
}

export default App;
