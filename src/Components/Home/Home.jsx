import React, { Suspense, lazy } from 'react';

const MissionStatement = React.lazy(() => import('./MissionStatement/MissionStatement.jsx'))
const MapBlock = React.lazy(() => import('./MapBlock/MapBlock.jsx'))
const StatsBlock = React.lazy(() => import('./StatsBlock/StatsBlock.jsx'))


const Home = (props) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MissionStatement />
        <MapBlock />
        <StatsBlock />
      </Suspense>
    </div>
  );
};

export default Home;