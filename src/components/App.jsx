import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: null,
    page: 1,
    showModal: false,
    selectedImageURL: '',
  };

  handleSearch = searchInput => {
    this.setState({ searchQuery: searchInput });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = imageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      selectedImageURL: imageURL,
    }));
  };

  render() {
    const { searchQuery, page, showModal, selectedImageURL } = this.state;

    return (
      <div className="App">
        {showModal && (
          <Modal imageURL={selectedImageURL} onClose={this.toggleModal} />
        )}
        <Searchbar onFormSubmit={this.handleSearch} />
        {searchQuery && (
          <ImageGallery
            key={page}
            searchQuery={searchQuery}
            page={page}
            onImageClick={this.toggleModal}
          />
        )}
        <Button onClick={this.handleLoadMore} isShown={searchQuery !== null} />
      </div>
    );
  }
}

export default App;
