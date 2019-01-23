import React, { Component } from 'react';
import axios from 'axios';
import DisplayDogs from './displayDogs';

class BreedImg extends Component {
    constructor (props) {
        super (props)
        this.state = {
            selectedBreed: '',
            breedArr: [],
            breedImages:[]
        }
    }

    componentDidMount () {
        axios
        .get('https://dog.ceo/api/breeds/list/all')
        .then(result => {
            let breeds = Object.keys(result.data.message)
            this.setState({ breedArr: breeds })
        })
    };

    populateBreedSelector = () => (
         this.state.breedArr.map((breed, i) => {
          let capitalizedBreed = breed.charAt(0).toUpperCase() + breed.slice(1);
          return <option key={ i } value={ breed }>{ capitalizedBreed }</option>
        })
    );

    handleButton = () => {
        const { selectedBreed } = this.state;
        
        if (selectedBreed) {
            axios
            .get(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
            .then(result => {
                let dogImage = result.data.message;
                this.setState({ breedImages:[dogImage] })
            })
        }
    }

    handleBreedSelect = (event) => this.setState({ [event.target.name]: event.target.value });

    render () {
        const { selectedBreed, breedImages } = this.state;
        console.log(this.state)
        return (
            <div className='randomBreed'>
                <label htmlFor='breedSelector'>Select a breed</label>
                 <select value={ selectedBreed } name='selectedBreed' onChange={ this.handleBreedSelect }>
                    <option value=''>Dog Breed</option>
                    { this.populateBreedSelector() }
                 </select>
                 <button type='button' name='button' onClick={ this.handleButton }>Random Breed</button>
                 <DisplayDogs
                  dogArr={ breedImages }
                  />
            </div>
        )
    }
}

export default BreedImg;