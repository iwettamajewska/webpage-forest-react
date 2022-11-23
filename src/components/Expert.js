import "./ExpertList";

const Expert = ({ name, department, description, index }) => {
  const circleClass =
    index % 2 === 0 ? "first-circle circle" : "second-circle circle";
  const expertClass =
    index % 2 === 0 ? "first-expert expert" : "second-expert expert";

  return (
    <div className="about-experts">
      <div className={circleClass}></div>
      <div className={expertClass}>
        <p className="name-expert">{`${name} [ ${department} ]`}</p>
        <p className="lorem-expert">{description}</p>
      </div>
    </div>
  );
};

export default Expert;
