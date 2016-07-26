class Results extends React.Component{
  component(props){
    super();
  }

  render(){

    var data = this.props;
    return (

      <section id="results" class="page-section first-section">
          <div className="container">
              <div className="row page-heading">
                  <div className="col-md-8 col-sm-8">
                      <h3 className="page-title">{data.name}</h3>
                      <p className="page-subtitle">These are the results of the query</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="result-image">
                          <img src={data.image_url} alt=""/>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="result-content">
                          <h4>Product Name</h4>
                          <span>Product Category</span>
                          <p>Extended Product Description</p>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-12 col-xs-12">
                      <div className="result-info">
                          <h4>Result Explanation</h4>
                          <p>Short Explanation of the Results</p>
                          <ul className="result-graph">
                              <li>
                                  <span>Product Spec 1</span>
                                  <div className="result-accuracy">
                                      <div className="result-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;"></div>
                                  </div>
                              </li>
                              <li>
                                  <span>Product Spec 2</span>
                                  <div className="result-accuracy">
                                      <div className="result-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%;"></div>
                                  </div>
                              </li>
                              <li>
                                  <span>product Spec 3</span>
                                  <div className="result-accuracy">
                                      <div className="result-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;"></div>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>


  }







}
