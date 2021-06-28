import { useState } from 'react';
import Input from './components/Input';
import Output from './components/Output';
import Categories from './components/Categories';


const MODE = {
  'EDIT': 'EDIT',
  'VIEW': 'VIEW'
};

const CATEGORIES = {
  'adverbs': true,
  'noum': true,
  'verbs': true,
  'adjetive': true
};

const App = () => {
  const [mode, setMode] = useState(MODE.EDIT);
  const [categories, setCategories] = useState(CATEGORIES);

  function changeModeHandler () {
    let newMode = mode === MODE.EDIT ? MODE.VIEW : MODE.EDIT;
    setMode(newMode);
  }

  function selectCategoriesHandler (holi) {
    console.log(holi);
    let newCategories = {
      'adverbs': false,
      'noum': false,
      'verbs': false,
      'adjetive': false
    }
    setCategories(newCategories);
  }

  return (
    <div>
      <Categories options={categories} selectCategories={selectCategoriesHandler}/>
      { mode === MODE.EDIT && <Input changeMode={changeModeHandler}/> }
      { mode === MODE.VIEW && <Output changeMode={changeModeHandler} /> }
    </div>
  );
}

export default App;
