import "./BoxesList";

const Box = ({ name, isNew }) => {
  const boxClass = isNew ? "box box1" : "box";

  return (
    <div className={boxClass}>
      {name}
      <br />
      {isNew && <>(nowość)</>}
      {isNew && <div className="small-circle"></div>}
    </div>
  );
};

export default Box;
