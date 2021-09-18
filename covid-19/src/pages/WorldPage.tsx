import Card from "../components/Card";

const WorldPage = (props: any) => {
  return (
    <Card
      allCountriesData={props.allCountriesData}
      getAllCountriesData={props.getAllCountriesData}
    />
  );
};

export default WorldPage;
