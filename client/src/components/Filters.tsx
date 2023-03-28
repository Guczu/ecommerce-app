import React from 'react'
import SingleFilter from './SingleFilter'
import { BsFilter } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Filters: React.FC = () => {
  return (
    <div className='filters--container'>
      <div className='filters--wrapper'>
        <SingleFilter name={"Headphone Type"}/>
        <SingleFilter name={"Price"}/>
        <SingleFilter name={"Review"}/>
        <SingleFilter name={"Color"}/>
        <SingleFilter name={"Material"}/>
        
        <div className='filters--label'>
          <span>All Filters</span>
          <div className='filters--icon'><BsFilter /></div>
        </div>
      </div>
      <div className='filters--label allfilters'>
          <span>All Filters</span>
          <div className='filters--icon'><BsFilter /></div>
      </div>

      <div className='filters--label empty'>
        <span>Sort by</span>
        <div className='filters--icon'><MdKeyboardArrowDown /></div>
      </div>
    </div>
  )
}

export default Filters