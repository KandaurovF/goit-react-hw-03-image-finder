import React, { Component } from 'react';
import { getPhotosByQuery } from 'services/api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';

class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    const { searchQuery, page } = this.props;
    this.setState({ isLoading: true });

    try {
      const images = await getPhotosByQuery(searchQuery, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    } catch (error) {
      console.log(error.message);
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleImageClick = imageURL => {
    console.log('Image clicked:', imageURL);
  };

  render() {
    const { images, isLoading, error } = this.state;

    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <div>Error occurred: {error.message}</div>;
    }

    return (
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            tags={image.tags}
            onClick={this.handleImageClick}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
