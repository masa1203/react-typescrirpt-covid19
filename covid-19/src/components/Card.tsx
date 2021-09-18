export interface InterfaceCountriesSummaryData {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: {};
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface InterfaceCard {
  allCountriesData: [];
}

const Card = (props: InterfaceCard) => {
  return (
    <div>
      {console.log(props.allCountriesData)}
      {props.allCountriesData.map(
        (singleCountryData: InterfaceCountriesSummaryData, index: number) => (
          <div key={index}>
            <h2>{singleCountryData.Country}</h2>
            <p>新規感染者：{singleCountryData.NewConfirmed}</p>
            <p>感染者総数：{singleCountryData.TotalConfirmed}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Card;
