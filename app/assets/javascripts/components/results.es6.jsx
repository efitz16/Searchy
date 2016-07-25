class Results extends React.Component{
  component(props){
    super();
  }

  render(){

    var data = this.props;
    return (
      <div>
        <h3 className="product-name">{data.name}</h3>
        <img className="product-img" src={data.image_url} alt=""/>
      </div>
    );
  }







}
