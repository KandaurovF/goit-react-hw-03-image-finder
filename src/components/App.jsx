import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
// import Button from './Button';
// import Modal from './Modal/Modal.jsx';
// import * as API from '../services/api';

export class App extends Component {
  state = {
    searchQuery: null,

    // showModal: false,
  };

  handleSearch = formData => {
    this.setState({ searchQuery: formData });
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({ showModal: !showModal }));
  // };

  render() {
    const { searchQuery } = this.state;

    return (
      <>
        {/* {showModal && <Modal onClose={this.toggleModal} />} */}
        <Searchbar onFormSubmit={this.handleSearch} />
        {searchQuery && <ImageGallery searchQuery={searchQuery} />}
        {/* <Button /> */}
      </>
    );
  }
}
