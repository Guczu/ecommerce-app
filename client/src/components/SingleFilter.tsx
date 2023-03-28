import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

interface Props {
    name: string;
}

const SingleFilter: React.FC<Props> = ({ name }) => {
  return (
    <div className='filters--label'>
        <span>{name}</span>
        <div className='filters--icon'><MdKeyboardArrowDown /></div>
    </div>
  )
}

export default SingleFilter