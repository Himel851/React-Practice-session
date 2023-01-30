import React, { useState, useEffect } from "react";

function Country() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      setCountries(data.map(country => country.name));
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>List of Countries:</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
    </div>
  );
}

export default Country;