import React, { useState, useEffect } from 'react';

const ApiExample = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>API Example</h1>
      {data.length > 0 ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.info}{item.image}</li>
            ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <h2>{count ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo praesentium minus error odio tempora quisquam architecto suscipit recusandae nihil? Molestiae adipisci laborum alias odit iste dolores quod at voluptate natus!': 'no' }</h2>
    <button onClick={() => setCount(true)}>no</button>
    <button onClick={() => setCount(false)}>yes</button>
    </div>
  );
};


export default ApiExample;
