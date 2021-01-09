import React from 'react';
import PreviewListContainer from '../../../../containers/productContainers/previewListContainer.js';

import defaultImg from '../../../../dist/images/image-not-available.jpg';

const Carousel = ({currentStyle, carouselPosition, handleCarouselChange, handleCenterImageClick}) => {
  let leftButtonClass = 'arrow-carousel left-carousel';
  let rightButtonClass = 'arrow-carousel right-carousel';
  if (currentStyle.photos !== undefined) {
    if (carouselPosition === 0) {
      leftButtonClass += ' hidden';
    }
    if (carouselPosition === currentStyle.photos.length - 1) {
      rightButtonClass += ' hidden';
    }
  }

  return (

    <div className="item1">

      <PreviewListContainer />
      <button className={leftButtonClass} type="submit" onClick={() => { handleCarouselChange(carouselPosition - 1); }}
            onMouseDown={(e) => {e.preventDefault()}}></button>
      <img className="center-image" src={currentStyle.photos !== undefined && currentStyle.photos[carouselPosition].thumbnail_url !== null ? currentStyle.photos[carouselPosition].thumbnail_url : defaultImg } alt="" onClick={() => {handleCenterImageClick()}} />
      <button className={rightButtonClass} type="submit" onClick={() => { handleCarouselChange(carouselPosition + 1); }}
      onMouseDown={(e) => {e.preventDefault()}}></button>
    </div>
  );
};

export default Carousel;
