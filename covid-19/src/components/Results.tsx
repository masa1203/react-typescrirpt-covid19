type TypeResults = {
  countryData: {
    date: string;
    // newConfirmed: string;
    totalConfirmed: string;
    // newRecovered: string;
    totalRecoverd: string;
  };
};

const Results = (props: TypeResults) => {
  console.log("Results.props:", props);
  return (
    <div>
      <p>日付:{props.countryData.date.slice(0, 10)}</p>
      {/* <p>新規感染者:{props.countryData.newConfirmed.toLocaleString()}</p> */}
      <p>感染者総数:{props.countryData.totalConfirmed.toLocaleString()}</p>
      {/* <p>新規回復者:{props.countryData.newRecovered.toLocaleString()}</p> */}
      <p>回復者総数:{props.countryData.totalRecoverd.toLocaleString()}</p>
    </div>
  );
};

export default Results;
