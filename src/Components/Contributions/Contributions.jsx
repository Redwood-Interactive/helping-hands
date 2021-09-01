import React, { useEffect, useState } from 'react';
import { ContributionsContainer, ContributionTitle, ContainerDiv, ButtonsDiv, Button } from './Styles/Contributions.style.js'
import Sidebar from './Sidebar.jsx';
import Items from './Items.jsx';
import axios from 'axios';
// import dummyData from '../../dummydata/dummydata.js'

const Contributions = ({ isLoggedIn, userInfo }) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [queriedSearch, setQueriedSearch] = useState('');
  const [page, setPage] = useState(0);


  useEffect(() => {
    getContributions(page);
  }, [page])

  const getContributions = (pageNum) => {
    axios.get(`/getcontributions?page=${pageNum}`)
      .then(res => {
        setData([...data].concat(res.data));
      })
  }

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setQueriedSearch(searchQuery);
  }

  useEffect(() => {
    if (data) {
      setIsLoaded(true);
    }
  }, [data])

  const loadMore = () => {
    var newPage = page;
    newPage = newPage + 1;
    setPage(newPage);
  }

  return (
    <ContributionsContainer>
      <ContributionTitle>Contributions</ContributionTitle>
      <ContainerDiv>
        <Sidebar getContributions={getContributions} setSearchQuery={setSearchQuery} handleSubmitSearch={handleSubmitSearch} setCategories={setCategories} categories={categories} setConditions={setConditions} conditions={conditions} isLoggedIn={isLoggedIn} userInfo={userInfo}/>
        {isLoaded ? <Items data={data} userinfo={userInfo} queriedSearch={queriedSearch} categories={categories} conditions={conditions}/>: null}
      </ContainerDiv>
      <ButtonsDiv>
        <Button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Go to top</Button>
        <Button onClick={loadMore}>Load more</Button>
      </ButtonsDiv>
    </ContributionsContainer>
  );
};

export default Contributions;