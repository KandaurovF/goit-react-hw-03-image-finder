import React from 'react';

const ImageGalleryItem = ({ webformatURL, tags, onClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(webformatURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
