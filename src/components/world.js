import React, { useState, useEffect } from 'react'

const World = () => {
  const [currentCount, setCount] = useState(0);
  const emoji = ['🌍', '🌎', '🌏'];

  useEffect(
    () => {
      const timer = () => setCount(currentCount + 1);
      /*if (currentCount <= 0) {
        return;
      }*/
      const id = setInterval(timer, 1000);
      return () => clearInterval(id);
    },
    [currentCount]
  );

  return (
    <>

      <span role="img" aria-label="world" style={{
        position: `relative`,
        top: `0.1em`,
        left: `-0.1em`
      }}>
        {emoji[currentCount % 3]}
      </span>
    </>
  )
}

export default World
