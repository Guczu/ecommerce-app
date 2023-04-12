import React from 'react'
import ReactLoading from 'react-loading'

const LoadingProduct: React.FC = () => {
  return (
    <div className='loadingproduct--container'>
        <ReactLoading 
            type={'spinningBubbles'} 
            color={'gray'} 
            height={25} 
            width={25} 
            delay={0}
        />
    </div>
  )
}

export default LoadingProduct