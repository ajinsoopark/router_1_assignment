import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import BreedImg from './BreedImg';
import RandomImg from './RandomImg';
import { withRouter } from 'react-router';
import FavoriteFeed from './favoriteFeed';
import FavoriteImage from './favoriteImage';

// const AppContext = React.createContext();

// class AppProvider extends Component {
//   constructor () {
//     super ()
//     this.state = {
//       favoriteImages: []
//     }
//   }
  
//   render () {
//     return (
//       <AppContext.Provider value={ this.state }>
//         { this.props.children }
//       </AppContext.Provider>
//     )
//   }
// }

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      favoriteImages: [],
      commentInput:''
    }
  }

  addFavImage = (url) => {
    const { favoriteImages } = this.state;
    
    const doesImageExists = () => {
        let exists = false
        if (favoriteImages.length) {
          favoriteImages.forEach(image => {if (image.url === url) exists = true})
        }
        return exists;
      };
    
    if (!favoriteImages.length) {
      let favoriteImage = [{
        url: url,
        id: 0,
        comments: []
      }];

      this.setState({
        favoriteImages: favoriteImage
      })
    } else if (!doesImageExists()) {
      let newId = favoriteImages[favoriteImages.length - 1].id + 1;
      let newFave = { url: url, id: newId, comments: [] }
      let newFavImages = [...favoriteImages, newFave]

      this.setState({ favoriteImages: newFavImages })
    }
  };

  addComment = (imageId, event) => {

    const newImageObj = this.state.favoriteImages[imageId]
    const newFavoriteImages = this.state.favoriteImages;

    newImageObj.comments.push(this.state.commentInput);
    newFavoriteImages[imageId] = newImageObj;

    this.setState({ 
      favoriteImages: newFavoriteImages,
      commentInput:''  
    })
  }

  handleText = (event) => this.setState({ [event.target.name]: event.target.value });

  render () {
    // console.log(this.state)
    return (
      <React.Fragment>
        <h1>DoggyStyle</h1>
        <Route component={ Navbar }/>
        <Switch>
          <Route exact path='/randomBreed' render={() => {
          return <BreedImg addFavImage={ this.addFavImage }/>
          }}/>
          <Route path='/random/:num' render={() => {
          return <RandomImg addFavImage={ this.addFavImage }/>
          }}/>
          <Route exact path='/random' render={() => {
          return <RandomImg addFavImage={ this.addFavImage }/>
          }}/>
          <Route exact path='/favorite' render={() => {
          return <FavoriteFeed favoriteImages={ this.state.favoriteImages }/>
          }}/>
          <Route exact path='/favorite/:id' render={() => {
            return <FavoriteImage 
                    favoriteImages={ this.state.favoriteImages }
                    commentInput={ this.state.commentInput }
                    addComment={ this.addComment }
                    handleText={ this.handleText }
                    />
          }}/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(App);
// export const AppConsumer = AppContext.Consumer;
