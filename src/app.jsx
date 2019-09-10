import React, { Component } from 'react';
import Axios from 'axios';
import TopSpot from './topspot'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      topspots : []
    };

  }
  componentWillMount(){
    Axios.get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({topspots}))
  }
  
  render() {
    
    
    return (
      <div className='global-container'>
            {/* <pre>{JSON.stringify(this.state.topspots,null, 2)}</pre> */}
          
          <div className="jumbotron jumbotron-fluid border border-dark ">
              <div className="container">
                  <h1>San Deigo Top Spots</h1>
                  <p className='diff'>A list of the top 30 places to see in San Diego, California</p>
                  {this.state.topspots.map(topspot => (
                    <TopSpot
                    key = {topspot.id}
                    name = {topspot.name}
                    description = {topspot.description}
                    location = {topspot.location}
                    />
                    ))}
              </div>
          </div> 
       </div> 
    );
  }
}

export default App;
