import { Component } from 'react';
import { getPhotosByQuery } from 'services/api';
import ImageGalleryItem from 'components/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    const { searchQuery } = this.props;

    try {
      this.setState({ isLoading: true });
      const images = await getPhotosByQuery(searchQuery);
      this.setState({ images });
    } catch (error) {
      console.log(error.message);
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { images, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error occurred: {error.message}</div>;
    }

    return (
      <ul className="ImageGallery">
        {images.map(image => (
          <li key={image.id} className="ImageGalleryItem">
            <img
              className="ImageGalleryItem-image"
              src={image.url}
              alt={image.id}
            />
          </li>
        ))}
        {<ImageGalleryItem />}
      </ul>
    );
  }
}

export default ImageGallery;
