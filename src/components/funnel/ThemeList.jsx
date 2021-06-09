import React from 'react';
import FunnelContext from '../context/funnel-context';

const ThemeList = () => {
  const { funnel } = React.useContext(FunnelContext);

  return (
    <>
      <h1>Funnel</h1>
      <div>
        {funnel.themes.map((theme) => (
          <div key={theme.id}>
            <h1>{theme.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default ThemeList;
