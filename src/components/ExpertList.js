import Expert from "./Expert";

const twoExperts = [
  {
    name: "Anna Kowalska",
    department: "Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jan Kowalski",
    department: "Finance",
    description:
      "Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.",
  },
];

const ExpertList = () => {
  const ExpertsMap = twoExperts.map(
    ({ name, department, description }, index) => (
      <Expert
        key={index}
        index={index}
        name={name}
        department={department}
        description={description}
      />
    )
  );

  return (
    <section id="about-us" className="about-us-container">
      <div className="container-experts container">
        <h3 className="main-text-experts">Nasi specjaliści</h3>
        <div className="container-of-circles-and-experts"></div>
        {ExpertsMap}
      </div>
    </section>
  );
};

export default ExpertList;
