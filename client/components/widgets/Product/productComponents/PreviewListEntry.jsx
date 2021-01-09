import React from 'react';
import defaultImg from '../../../../dist/images/image-not-available.jpg';

const PreviewListEntry = ({currentStyle, index, handlePreviewClick, carouselPosition}) => (
  <li onClick={()=> {handlePreviewClick(index)}}><img src={currentStyle.photos !== undefined && currentStyle.photos[index].thumbnail_url !== null ? currentStyle.photos[index].thumbnail_url : defaultImg}
  className={index === carouselPosition ? "thumbnail-img thumbnail-selected" : "thumbnail-img"} alt="" /></li>
);

export default PreviewListEntry;
