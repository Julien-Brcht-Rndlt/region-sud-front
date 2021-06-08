import React from 'react';
import FunnelContext from '../context/funnel-context';

const ThemeList = () => {
  const { funnel } = React.useContext(FunnelContext);
  console.log(funnel);

  return (
    <>
      <h1>Funnel</h1>
      <ul>
        {funnel.themes.map((funn) => (
          <li key={funn.id}>{funn.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ThemeList;
