import React, { useEffect, useState } from 'react';

const Statewise = () => {
  const [states, setStates] = useState({});

  const getCovidData = async () => {
    const apiURL = 'https://api.rootnet.in/covid19-in/stats/latest';
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data.data.regional);
    setStates(data);
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <h1>INDIA COVID 19 DASHBOARD</h1>
      <div>
        <h4>Total Cases : {states.data.summary.total}</h4>
        <h4>Total Discharged : {states.data.summary.discharged}</h4>
        <h4>Total Deaths : {states.data.summary.deaths}</h4>
        <h6>Last Updated : {states.lastOriginUpdate}</h6>
      </div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Discharged</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {states.data.regional.map((obj) => {
            return (
              <tr>
                <td>{obj.loc}</td>
                <td>{obj.totalConfirmed}</td>
                <td>{obj.discharged}</td>
                <td>{obj.deaths}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Statewise;
