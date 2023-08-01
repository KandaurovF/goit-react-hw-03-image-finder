import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal/Modal.jsx';

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        {showModal && <Modal onClose={this.toggleModal} />}
        <Searchbar />
        <ImageGallery />
        <Button />
      </>
    );
  }
}
