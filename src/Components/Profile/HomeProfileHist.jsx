import React, { useState, useEffect } from 'react';
import { ProfileHistContainer, Text, HistoryContainer, ButtonWrapper, ContriButton, ReqButton } from './Styles/HomeProfileHistory.style.js';
import dummyData from '../../dummydata/dummydata.js'
import AllUserContri from './AllUserContri.jsx';
import AllUserReqs from './AllUserReqs.jsx';
import axios from 'axios';

const HomeProfileHist = ({ userInfo }) => {
  const [showContributions, setContributions] = useState(true);
  const [allContributions, setAllContributions] = useState([]);
  const [allRequests, setAllRequests] = useState([]);

  useEffect(() => {
    function contributions() {
      axios.get(`/getAllContriForOneUser?user_id=${userInfo.id}`)
      .then((res) => {
        setAllContributions(res.data);
      })
      .catch((err) => {
        console.log('there was an error!: ', err)
      })
    }

    function requests() {
      axios.get(`/getAllReqForOneUser?user_id=${userInfo.id}`)
      .then((res) => {
        setAllContributions(res.data);
      })
      .catch((err) => {
        console.log('there was an error!: ', err)
      })
    }

    requests();
    contributions();
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