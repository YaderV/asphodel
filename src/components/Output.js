const DATA = [
  { 'word': 'Muchos', 'type': '', },
  { 'word': 'años', 'type': '', },
  { 'word': 'después,', 'type': '', },
  { 'word': 'frente', 'type': '', },
  { 'word': 'al', 'type': '', },
  { 'word': 'pelotón', 'type': '', },
  { 'word': 'de', 'type': '', },
  { 'word': 'fusilamiento,', 'type': '', },
  { 'word': 'el', 'type': '', },
  { 'word': 'coronel', 'type': '', },
  { 'word': 'Aureliano', 'type': '', },
  { 'word': 'Buendía', 'type': '', },
  { 'word': 'había', 'type': '', },
  { 'word': 'de', 'type': '', },
  { 'word': 'recordar', 'type': '', },
  { 'word': 'aquella', 'type': '', },
  { 'word': 'tarde', 'type': '', },
  { 'word': 'remota', 'type': 'adj', },
  { 'word': 'en', 'type': '', },
  { 'word': 'que', 'type': '', },
  { 'word': 'su', 'type': '', },
  { 'word': 'padre', 'type': 'noum', },
  { 'word': 'lo', 'type': '', },
  { 'word': 'llevó', 'type': '', },
  { 'word': 'a', 'type': '', },
  { 'word': 'conocer', 'type': 'verb', },
  { 'word': 'el', 'type': '', },
  { 'word': 'hielo.', 'type': '', },
  { 'word': 'Macondo', 'type': '', },
  { 'word': 'era', 'type': '', },
  { 'word': 'entonces', 'type': '', },
  { 'word': 'una', 'type': '', },
  { 'word': 'aldea', 'type': '', },
  { 'word': 'de', 'type': '', },
  { 'word': '20', 'type': '', },
  { 'word': 'casas', 'type': '', },
  { 'word': 'de', 'type': '', },
  { 'word': 'barro', 'type': '', },
  { 'word': 'y', 'type': '', },
  { 'word': 'cañabrava', 'type': '', },
  { 'word': 'construidas', 'type': '', },
  { 'word': 'a', 'type': '', },
  { 'word': 'la', 'type': '', },
  { 'word': 'orilla', 'type': '', },
  { 'word': 'de', 'type': '', },
  { 'word': 'un', 'type': '', },
  { 'word': 'río', 'type': '', },
  { 'word': 'de', 'type': '', },
  { 'word': 'aguas', 'type': '', },
  { 'word': 'diáfanas', 'type': '', },
  { 'word': 'que', 'type': '', },
  { 'word': 'se', 'type': '', },
  { 'word': 'precipitaban', 'type': '', },
  { 'word': 'por', 'type': '', },
  { 'word': 'un', 'type': '', },
  { 'word': 'lecho', 'type': '', },
  { 'word': 'de', 'type': '', },
  { 'word': 'piedras', 'type': '', },
  { 'word': 'pulidas,', 'type': '', },
  { 'word': 'blancas', 'type': '', },
  { 'word': 'y', 'type': '', },
  { 'word': 'enormes', 'type': '', },
  { 'word': 'como', 'type': '', },
  { 'word': 'huevos', 'type': '', },
  { 'word': 'prehistóricos.', 'type': '', },
  { 'word': 'El', 'type': '', },
  { 'word': 'mundo', 'type': '', },
  { 'word': 'era', 'type': '', },
  { 'word': 'tan', 'type': '', },
  { 'word': 'reciente,', 'type': '', },
  { 'word': 'que', 'type': '', },
  { 'word': 'muchas', 'type': '', },
  { 'word': 'cosas', 'type': '', },
  { 'word': 'carecían', 'type': '', },
  { 'word': 'de', 'type': '', },
  { 'word': 'nombre,', 'type': '', },
  { 'word': 'y', 'type': '', },
  { 'word': 'para', 'type': '', },
  { 'word': 'mencionarlas', 'type': '', },
  { 'word': 'había', 'type': '', },
  { 'word': 'que', 'type': '', },
  { 'word': 'señalarlas', 'type': '', },
  { 'word': 'con', 'type': '', },
  { 'word': 'el', 'type': '', },
  { 'word': 'dedo', 'type': '', },
];

const WORD_MARKUP_CLASSES = {
  'adj': 'adj',
  'noum': 'noum',
  'verb': 'verb',
}

const Output = (props) => {
  let word_classes = Object.keys(WORD_MARKUP_CLASSES);
  let text = DATA.map((e, k) => {
    let word = e.word;
    if (word_classes.includes(e.type)) {
      word = <span className={e.type} key={k}>{ word }</span>;
    }
    return word;
  });
  text = text.reduce((prev, curr) => [prev, ' ', curr]);
  return (
    <p>{ text }</p>
  )
}

export default Output;
