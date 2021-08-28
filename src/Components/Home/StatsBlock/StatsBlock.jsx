import React from 'react';
import { useEffect, useState } from 'react'
import { StatsBlockContainer, StatsBlockSection, StatsBlockTray, StatsBlockCounter, StatsBlockNumber } from './Styles/StatsBlock.styles.js'

const StatsBlock = (props) => {

  useEffect(() => {
    var counters = document.querySelectorAll('.stats-block-number');
    var speed = 200;
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('value');
        const count = +counter.innerText;
        const inc = target / speed;
        if (count < target) {
          counter.innerText = count + inc;
          setTimeout(updateCount, 1);
        } else {
          count.innerText = target;
        }
      }
      updateCount()
    })
  }, [])


  return (
    <StatsBlockContainer>
      <StatsBlockSection>
        <StatsBlockTray>
          <StatsBlockCounter>
            <h3>requests served</h3>
            <StatsBlockNumber value='60000' className='stats-block-number'>0</StatsBlockNumber>
          </StatsBlockCounter>
          <StatsBlockCounter>
            <h3>contributions made</h3>
            <StatsBlockNumber value='30000' className='stats-block-number'>0</StatsBlockNumber>
          </StatsBlockCounter>
          <StatsBlockCounter>
            <h3>users active</h3>
            <StatsBlockNumber value='2500' className='stats-block-number'>0</StatsBlockNumber>
          </StatsBlockCounter>
        </StatsBlockTray>
      </StatsBlockSection>
    </StatsBlockContainer>
  )
}

export default StatsBlock;