import Header from "../components/Header";
import Card from "../components/Card";
import Title from "../components/Title";

const WorldPage = (props: any) => {
  return (
    <div>
      <Header />
      <Title />
      <Card allCountriesData={props.allCountriesData} />
    </div>
  );
};

export default WorldPage;
