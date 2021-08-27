import React from 'react';
import MissionStatement from './MissionStatement/MissionStatement.jsx';
import MapBlock from './MapBlock/MapBlock.jsx';
import StatsBlock from './StatsBlock/StatsBlock.jsx'

const Home = (props) => {
  return (
    <div>
      <MissionStatement/>
      <MapBlock/>
      <StatsBlock/>
    </div>
  );
};

export default Home;