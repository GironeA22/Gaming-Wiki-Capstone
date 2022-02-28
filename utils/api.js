/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

export function MCItems() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // useEffect(() => {
    console.log('test');
    fetch('https://minecraft-ids.grahamedgecombe.com/items.json')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          return result;
        }
      }
        // eslint-disable-next-line no-shadow
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // // }, []);
  // if (error) {
  //   return <Text>Error: {error.message}</Text>;
  // } else if (!isLoaded) {
  //   return <Text>Loading...</Text>;
  // } else {
  //   return (
  //     <ul>
  //       {items.map(item => (
  //         <li key={item.type}>
  //           {item.name}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }
//   console.log(useEffect);

// export function MCApi() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   fetch('https://minecraft-ids.grahamedgecombe.com/items.json')
//     .then(res => res.json())
//     .then(
//       (result) => {
//         console.log(result);
//         setIsLoaded(true);
//         setItems(result);
//         console.log(result)
//       },
//       // eslint-disable-next-line no-shadow
//       (error) => {
//         setIsLoaded(true);
//         setError(error);
//       }
//     );
// }

// export function MCApi2() {
//   fetch('https://minecraft-ids.grahamedgecombe.com/items.json')
//   .then(response => response.json())
//   .then(data => console.log(data));
// }




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