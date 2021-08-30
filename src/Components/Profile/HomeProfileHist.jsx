import React, { useState, useEffect } from 'react';
import { ProfileHistContainer, Text, HistoryContainer, ButtonWrapper, ContriButton, ReqButton } from './Styles/HomeProfileHistory.style.js';
import dummyData from '../../dummydata/dummydata.js'
import AllUserContri from './AllUserContri.jsx';
import AllUserReqs from './AllUserReqs.jsx';

const HomeProfileHist = () => {
  const [showContributions, setContributions] = useState(true);
  const [allContributions, setAllContributions] = useState([]);
  const [allRequests, setAllRequests] = useState([]);

  useEffect(() => {
    // get req to DB, given User Name/ ID - get all current & past contributions and requests
      // once data is back
      // setAllRequests
      // setAllContributions
    setAllContributions(dummyData.contributions);
    setAllRequests(dummyData.requests);
  }, [])

  const showContri = () => {
    setContributions(true);
  }

  const showReqs = () => {
    setContributions(false);
  }

  return (
    <ProfileHistContainer>
      <Text>User History</Text>
      <HistoryContainer>
        <ButtonWrapper>
          <ContriButton selected={showContributions} onClick={showContri}>Contributions</ContriButton>
          <ReqButton selected={showContributions} onClick={showReqs}>Requests</ReqButton>
        </ButtonWrapper>
        {showContributions ? <AllUserContri contributions={allContributions}/> : <AllUserReqs requests={allRequests}/>}
      </HistoryContainer>
    </ProfileHistContainer>
  );
};

export default HomeProfileHist;