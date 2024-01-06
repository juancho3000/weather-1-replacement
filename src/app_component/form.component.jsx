import React from 'react';

const Form = props => {
    return (
      <div className="container">
        <form onSubmit={props.loadWeather}>
          <div className="row">
            <div>
              <input
                type="text"
                className="form-control"
                name="city"
                placeholder='type city name'
                autoComplete="off"/>
            </div>
            <div className='row'>  
      </div> 
          </div>
        </form>
      </div>
    );
  } 
export default Form;