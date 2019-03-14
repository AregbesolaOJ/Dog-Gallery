import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Breeds from './Breed/Breeds';
import Order from './Order/Order';
import Works from './Works/Works';
import Footer from './Footer/Footer';
import Modal from './Modal/Modal';
import { Provider } from './context/context';

class App extends Component {
  state = {
    options: [],
    option: 'affenpinscher',
    images: [],
    image: '',
    name: '',
    comment: '',
    id: '',
    email: '',
    showOrder: false,
    isLoading: false,
    modalIsOpen: false  
  }

  orderClick = () => {
    this.setState({ showOrder: true })
  }

  handleChange = event => {
    const value = event.target.value;
    const breed = this.state.option;

    this.setState({
      option: value
    })

    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => response.json())
      .then(data => {
        this.setState({ image: data.message })
      })
  }

  fetchBreedImage = () => {
    const breed = this.state.option;

    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => response.json())
      .then(data => {
        this.setState({ image: data.message })
      })
  }

  handleContactChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })

  }

  handleError = (response) => {
    if(response.ok) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statustext))
    }
  }

  handleContactSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    const comment = this.state.comment;
    const email = this.state.email;

    const api_URI = 'https://jsonplaceholder.typicode.com/comments';
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, comment: comment, email: email })
    }

    if (this.state !== "" && this.state.email !== "") {
      this.setState({ isLoading: true })
      fetch(api_URI, config)
      .then(this.handleError)
      .then(response => response.json())
      .then(data => {
        this.setState({ id: data.id})

        setTimeout(() => {
          this.setState({ modalIsOpen: true, isLoading: false })
        }, 1000)    
      })
      .catch(error => alert('Something went wrong, please check your internet connection and reload this page', error))


    } 
  }

  modalCloseHandler = () => {
    this.setState({ 
      modalIsOpen: false, 
      showOrder: false, 
      name: '', 
      email: '', 
      comment: '',
      id: '' 
    })
  }
  componentDidMount () {
    fetch('https://dog.ceo/api/breeds/list')
      .then(this.handleError)
      .then(response => response.json())
      .then(data => {
        this.setState({ options: data.message})
      })
      .catch(error => alert('Something went wrong, please check your internet connection and reload this page', error))


    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        this.setState({ image: data.message })
      })

  }

  render() {
    return (
      <Provider value={{
        data: this.state,
        actions: {
          change: this.handleChange,
          contactChange: this.handleContactChange,
          submit: this.handleContactSubmit,
          orderClick: this.orderClick,
          breedImage: this.fetchBreedImage,
          modalClose: this.modalCloseHandler
        }
      }}>
        <div className="App">
          {this.state.modalIsOpen ? <Modal/> : null}
          <Header />
          <div className="App-body">
            <Order />
            {this.state.showOrder ? <Breeds /> : null}
          </div>
          <Works />
          <Footer />            
        </div>
      </Provider>
    );
  }
}

export default App;
