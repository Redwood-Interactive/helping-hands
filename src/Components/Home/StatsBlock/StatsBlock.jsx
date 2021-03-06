import React from 'react';
import { useEffect, useState } from 'react'
import { StatsBlockContainer, StatsBlockSection, StatsBlockTray, StatsBlockCounter, StatsBlockNumber } from './Styles/StatsBlock.styles.js'
import apiCalls from '../../../apiCalls.js'


const StatsBlock = (props) => {
  const [numUsers, setNumUsers] = useState('');
  const [numRequests, setNumRequests] = useState('');
  const [numContributions, setNumContributions] = useState('');

  useEffect(() => {

    apiCalls.getAllUsers()
      .then((results) => {
        setNumUsers('' + results.data[0].count);
        apiCalls.getAllReqCount()
        .then((results) => {
          setNumRequests('' + results.data[0].count);
          apiCalls.getAllContriCount()
          .then((results) => {
            setNumContributions('' + results.data[0].count);

            var counters = document.querySelectorAll('.stats-block-number');
            var speed = 200;
            counters.forEach(counter => {
              const updateCount = () => {
                const target = +counter.getAttribute('value');
                const count = +counter.innerText;
                const inc = Math.floor(target / speed);
                if (count < target) {
                  counter.innerText = count + inc;
                  setTimeout(updateCount, 1);
                } else {
                  count.innerText = target;
                }
              }
              updateCount()
            })

          })
          .catch((err) => {
            console.log(err)
          })
        })
        .catch((err) => {
          console.log(err)
        })
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])


  return (
    <StatsBlockContainer>
      <StatsBlockSection>
        <StatsBlockTray>
          <StatsBlockCounter>
            <h3>Users Active</h3>
            {numUsers > 200 ? <StatsBlockNumber value={numUsers} className='stats-block-number'>0</StatsBlockNumber> : <StatsBlockNumber>{numUsers}</StatsBlockNumber>}
          </StatsBlockCounter>
          <StatsBlockCounter>
            <h3>Contributions Made</h3>
            {numContributions > 200 ? <StatsBlockNumber value={numContributions} className='stats-block-number'>0</StatsBlockNumber> : <StatsBlockNumber>{numContributions}</StatsBlockNumber>}
          </StatsBlockCounter>
          <StatsBlockCounter>
            <h3>Requests Served</h3>
            {numRequests > 200 ? <StatsBlockNumber value={numRequests} className='stats-block-number'>0</StatsBlockNumber> : <StatsBlockNumber>{numRequests}</StatsBlockNumber>}
          </StatsBlockCounter>
        </StatsBlockTray>
      </StatsBlockSection>
    </StatsBlockContainer>
  )
}

export default StatsBlock;