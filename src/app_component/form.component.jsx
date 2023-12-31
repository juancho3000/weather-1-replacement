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

      <div className="col-md-3">
        <button className="btn-warning" type="submit" >Get weather for your location
          </button>
        </div>
        
      </div> 
          </div>
        </form>
      </div>
    );
  } 
export default Form;