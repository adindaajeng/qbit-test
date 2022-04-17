import PersonalData from "../component/PersonalData";

const About = () => {
  const dataPersonal = [
    {
      header: "Birthdate",
      content: "September 1995",
    },
    { header: "Home", content: "South Tangerang, Banten" },
    {
      header: "Email",
      content: "adindaajengcd@gmail.com",
    },
    {
      header: "Phone",
      content: "0819 0192 2330",
    },
    {
      header: "Experience",
      content: [
        {
          title:
            "(2018 - present) Primary Packaging Supervisor - PT Pharos Indonesia (Pharmaceutical Manufacturing)",
          text: [
            "Monitor officer and primary packaging process of pharmaceutical products by adhering to process parameters and SOPs related to packaging process",
            "Organize workflow by setting objectives and ensure safety use of packaging equipment",
            "Submit reports on performance and process output",
            "Maintain quality product and improve production effectiveness",
            "Review and update standard procedure documents related with packaging equipment and process workflow",
            "Report for deviation related with packaging process and establish CAPA",
          ],
        },
      ],
    },
    {
      header: "Education",
      content: [
        {
          title: "(2021 - 2022) Purwadhika Digital Technology School",
          text: "Fullstack Web Development Bootcamp",
        },
        {
          title: "(2013 - 2017) Swiss German University, Tangerang",
          text: "Bachelor Degree of Chemical Engineering",
        },
        {
          title: "(2013 - 2017) Fachhochschule Sudwestfalen, Germany",
          text: "Dual Degree Program",
        },
      ],
    },
    {
      header: "Skills",
      content: [
        {
          title: "Programming",
          text: [
            "Javascript Programming",
            "SQL",
            "NodeJS",
            "ReactJS",
            "React Native",
            "Git Command",
          ],
        },
        {
          title: "Tools",
          text: ["VS Code", "MySQL", "Postman", "Git and GitHub"],
        },
        {
          title: "Languages",
          text: ["English (Fluent, C1)", "German (Basic, A2)"],
        },
      ],
    },
  ];

  const renderPersonalData = () => {
    return dataPersonal.map((data) => {
      return <PersonalData header={data.header} content={data.content} />;
    });
  };

  return (
    <div className="m-auto col-12 col-lg-6 d-flex flex-column align-items-center mb-5">
      <div className="d-flex justify-content-between mb-4">
        <h2 className="my-5">Adinda Ajeng Citra Dewi</h2>
      </div>
      <div className="row m-auto">{renderPersonalData()}</div>
    </div>
  );
};

export default About;
