class Welcome extends React.Component {

  constructor(){
    super();
    this.state = {
      showComponent: false,
    }

    this.buttonOnclick = this.buttonOnclick.bind(this);
  }

  buttonOnClick(){
    this.setState({
      showComponent : true,
    });
  }

  render () {

    return (

      <div id="welcome">
        <div class="welcome-inner">
          <div class="item">
            <div class="item-1"></div>
              <div class="welcome-caption">
                <div class="container">
                  <div class="col-md-offset-2 col-md-8 col-sm-12">
                  <h2>Searchy</h2>
                    <p><strong><span class="green"></span><span class="yellow"></span></strong></p>
                  <a href="#" class="button default" onClick={this.buttonOnClick}></a>
                  {this.state.showComponent ?
                    <Categories /> :
                    null
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
