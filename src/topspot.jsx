import React from 'react'

export default props => (
    <div className='well border border-dark rounded mb-5 p-3 bg-secondary'> 
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a className='btn btn-info' href={'https://maps.google.com/?q=' + props.location[0] + ',' +  props.location[1]} target='blank'>Open in Google Maps </a>
   </div>
);