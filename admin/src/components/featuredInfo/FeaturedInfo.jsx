import React from 'react';
import "./featuredInfo.css";
import { ArrowDownward,ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
  return <div className='featured'>
      <div className='featuredItem'>
          <span className='featuredTitle'>Revanue</span>
          <div className='featuerdMoneyContainer'>
              <span className='featuredMoney'>฿2,022</span>
              <span className='featuredMoneyRate'>-10<ArrowDownward className='featuredIcon negative'/></span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
          <span className='featuredTitle'>Sales</span>
          <div className='featuerdMoneyContainer'>
              <span className='featuredMoney'>฿5,000</span>
              <span className='featuredMoneyRate'>-8<ArrowDownward className='featuredIcon negative'/></span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
          <span className='featuredTitle'>Cost</span>
          <div className='featuerdMoneyContainer'>
              <span className='featuredMoney'>฿3,522</span>
              <span className='featuredMoneyRate'>+5<ArrowUpward className='featuredIcon'/></span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
      </div>
  </div>;
}
