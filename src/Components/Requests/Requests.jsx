import React, { useEffect, useState } from 'react';
import { ContributionsContainer, ContributionTitle, ContainerDiv, ButtonsDiv, Button } from '../Contributions/Styles/Contributions.style.js';
import Sidebar from './Sidebar.jsx';
import Items from './Items.jsx';
import axios from 'axios';

const Requests = ({ isLoggedIn, userInfo }) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [queriedSearch, setQueriedSearch] = useState('');
  const [page, setPage] = useState(0);

  useEffect(() => {
    getRequests(page);
  }, [page])

  const getRequests = (pageNum) => {
    axios.get(`/requestsAll?page=${pageNum}`)
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
      console.log(data);
    }
  }, [data])

  const loadMore = () => {
    var newPage = page;
    newPage = newPage + 1;
    setPage(newPage);
  }

  return (
    <ContributionsContainer>
      {/* <ContributionTitle>Requests</ContributionTitle> */}
      <ContainerDiv>
        <Sidebar setSearchQuery={setSearchQuery} handleSubmitSearch={handleSubmitSearch} setCategories={setCategories} categories={categories} isLoggedIn={isLoggedIn} userInfo={userInfo}/>
        {isLoaded ? <Items data={data} userinfo={userInfo} queriedSearch={queriedSearch} categories={categories}/>: null}
      </ContainerDiv>
      <ButtonsDiv>
        <Button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Go to top</Button>
        <Button onClick={loadMore}>Load more</Button>
      </ButtonsDiv>
    </ContributionsContainer>
  );
};

export default Requests;