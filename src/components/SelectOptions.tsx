const SelectOptions = ({
  list,
  groupName,
  onChange
}: {
  list: string[];
  groupName: string;
  onChange: (val: string) => void;
}) => {
  return (
    <ul className="select-btn-div">
      {list.map((itm: string) => (
        <label role="button" className="select-btns" htmlFor={itm} key={itm}>
          <input
            type="radio"
            id={itm}
            name={groupName}
            value={itm}
            onChange={e => onChange(e.target.value)}
          />

          {itm}
        </label>
      ))}
    </ul>
  );
};
export default SelectOptions;
