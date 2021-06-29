const Categories = (props) => {
  let options = Object.keys(props.options).map((name, idx) => {
    return (
      <li key={idx}>
        <label>{name}
          <input
            value={name}
            type="checkbox"
            checked={props.options[name]}
            onChange={props.selectCategories} />
        </label>
      </li>
    );

  });

  return (
    <ul>{options}</ul>
  )
}

export default Categories;
