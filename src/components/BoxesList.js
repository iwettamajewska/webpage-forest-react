import Box from "./Box";

const BoxesList = () => {
  const boxes = [
    {
      name: "Usługa 1",
      isNew: true,
    },
    {
      name: "Usługa 2",
      isNew: false,
    },
    {
      name: "Usługa 3",
      isNew: false,
    },
    {
      name: "Usługa 4",
      isNew: false,
    },
    {
      name: "Usługa 5",
      isNew: false,
    },
    {
      name: "Usługa 6",
      isNew: false,
    },
  ];

  const BoxesMap = boxes.map((box, index) => (
    <Box key={index} isNew={box.isNew} name={box.name} />
  ));

  return (
    <section id="offer" className="about-company">
      <div className="container">
        <div className="container-of-main-text-about-company">
          <h4 className="main-text-about-company">
            Czym zajmuje się nasza firma?
          </h4>
        </div>
        <div className="container-of-company-boxes">{BoxesMap}</div>
      </div>
    </section>
  );
};
export default BoxesList;
