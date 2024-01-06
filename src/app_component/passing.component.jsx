import PageLoader from "./loading.component";

function UsePageLoader (props) {
if(props.loading){
    return(
        <PageLoader/>
    )
 }

else{
    return(  
      <div className='row' style={{marginTop:8}}> 
      <div>{props.error ? error() : null}</div>
    <div className="col-md-3">
      <button className="btn-warning" type="submit" >Get weather for your location
        </button>
      </div>
    </div> 
  
    )
        function error() {
        return(
          <div className="error-content" type="alert">
             <p className="alert-danger">Please type a city name</p>
          </div>
      );
      }
 }
}

export default UsePageLoader;