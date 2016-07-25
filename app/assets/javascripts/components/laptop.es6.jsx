class Laptop extends React.Component {

  constructor(props){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      results: []
    }
  }

  handleClick(event){
    var request = this.props
    var update = request.updateRequest(event.target.value.serializeArray());
    event.preventDefault();
    $.ajax({
      method: 'Post',
      url: '/searches',
      dataType: ''
      data: {data: JSON.stringify(update)}

    }).done(function(response){
      this.updateResults(response);
    };
  }

  updateResults(result) {
  // updated the state variable for tweets
  var newResults = [result].concat(this.state.results);
  this.setState({results: newResults});
  }

  render(){

    return (
      <div className="results-wrapper">
        <div className="form-container">
          <form className="laptop-form">
            <input name="price" type="range" min="0" max="10000" onchange="showValue(this.value)" />
            <input name="flash memory" type="range" min="0" max="512" onchange="showValue(this.value)"/>
            <input name="screen size" type="range" min="13" max="17" step="2" onchange="showValue(this.value)"/>
            <input name="ram" type="range" min="0" max="32" step="2" onchange="showValue(this.value)"/>
            {this.data.resolutionSelection()}
            {this.data.osSelection ()}
            <input name="rating" type="range" min="0" max="5" onchange="showValue(this.value)"/>
            <input type="submit" value="request" onClick={this.handleSubmit}></input>
          </form>
        </div>

          <div className="results-container">
            <Results />
          </div>
      </div>
    );
  }

}
