import React, { Component } from 'react';
import axios from 'axios';
import DisplayDogs from './displayDogs';
import { withRouter } from 'react-router';

class RandomImg extends Component { 
    constructor (props) {
        super (props)
        this.state = {
            dogImages: []
        }
    };

    handleRandomButton = () => {
        axios
        .get('https://dog.ceo/api/breeds/image/random')
        .then(res => {
            let dogImg = res.data.message;
            let newDogArr = [dogImg];
            this.setState({ dogImages:newDogArr })
        })
    };
    
    routeFromSelect = () => {
        const { history } = this.props;
        const { selectedValue } = this.state;
        if (selectedValue) {
            debugger
            history.push(`/random/${selectedValue}`)
        }
    }

    componentDidMount () {
       if (this.props.match.params.num) {
        let numOfDogs = this.props.match.params.num
        axios
        .get(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
        .then(res => {
            let dogImages = res.data.message;
            this.setState({ dogImages: dogImages })
        })
      }     
    };


    handleSelect = (event) => {
        const { history } = this.props;

        this.setState({ [event.target.name]: event.target.value })
        history.push(`/random/${event.target.value}`)
        
        axios
        .get(`https://dog.ceo/api/breeds/image/random/${event.target.value}`)
        .then(res => {
            let dogImages = res.data.message;
            this.setState({ 
                dogImages: dogImages
             })
        })
    }


    populateSelectMenu = () => {
        let optionsArr = []
        for (let i = 2; i <= 100; i++) {
            optionsArr.push(i)
        }
        return optionsArr.map(num => <option value={ num }>{ num }</option>)
    }

    render () {
        const { dogImages, selectedValue } = this.state;

        return (
            <React.Fragment>
                 <div className='buttonAndSelect'>
                    <button id='randomImg' onClick={ this.handleRandomButton }>Random Dog</button> 
                    <select onChange={ this.handleSelect } name='selectedValue' value={ selectedValue }>
                        <option value=''>How many dogs do you wanna see?</option>
                        { this.populateSelectMenu() }
                    </select>
                </div> 
                <DisplayDogs
                 dogArr={ dogImages }
                 />
            </React.Fragment>
        )
    }
}

export default withRouter(RandomImg);