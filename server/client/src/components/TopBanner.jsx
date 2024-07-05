import React from 'react'

const TopBanner = (props) => {

   const backgroundImageStyle = {
      backgroundImage: props.imageUrl
   };
  return (
    <div className='top-banner'  style={backgroundImageStyle}>
        <div className="top-inner-banner">
            <h1>{props.heading}</h1>
            <p>{props.someLine}</p>
        </div>
    </div>
  )
}

export default TopBanner