import React, { Suspense, lazy } from 'react';
import { BlackDiv } from './Style/Home.style.js'
const MissionStatement = React.lazy(() => import('./MissionStatement/MissionStatement.jsx'))
const MapBlock = React.lazy(() => import('./MapBlock/MapBlock.jsx'))
const StatsBlock = React.lazy(() => import('./StatsBlock/StatsBlock.jsx'))


const Home = (props) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BlackDiv></BlackDiv>
        <MissionStatement />
        <MapBlock />
        <StatsBlock />
      </Suspense>
    </div>
  );
};

export default Home;