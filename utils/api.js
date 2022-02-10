/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

export function MCItems() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://minecraft-ids.grahamedgecombe.com/items.json')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // eslint-disable-next-line no-shadow
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}


// export const getWeather = async woeid => {
//   const response = await fetch(
//     `https://www.metaweather.com/api/location/${woeid}/`,
//   );

//   let {title, consolidated_weather} = await response.json();
//   let {weather_state_name, the_temp, created} = consolidated_weather[0];

//   return {
//     location: title,
//     weather: weather_state_name,
//     temperature: the_temp,
//     created: created,
//   };
// };
