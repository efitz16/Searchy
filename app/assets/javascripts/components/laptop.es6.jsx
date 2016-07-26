// class Laptop extends React.Component {

//   constructor(){
//     super();

//     this.state = {
//       results: [],
//       showComponent: false,
//     }
//     this.handleClick = this.handleClick.bind(this);
//     this.buttonOnClick = this.buttonOnClick.bind(this);
//   }

//   buttonOnClick(){
//     this.setState({
//       showComponent : true,
//     });
//   }

//   componentDidMount(){

//     $.ajax({
//       url: '/semantics',
//       method: 'POST',
//       data: { 'category': 'laptop'}

//     }).done((response) => {
//       this.props = response;
//     });
//   }


//   handleClick(event){
//     var request = this.props
//     var update = request.updateRequest(event.target.value.serializeArray());
//     event.preventDefault();
//     $.ajax({
//       method: 'Post',
//       url: '/searches',
//       dataType: 'json',
//       contentType: 'application/json',
//       data: {data: JSON.stringify(update)}

//     }).done(function(response){
//       this.updateResults(response);
//     };
//   }

//   updateResults(result) {
//   // updated the state variable for tweets
//   var newResults = [result].concat(this.state.results);
//   this.setState({results: newResults});
//   }

//   render(){

//     return (

//         <section id="subcat" class="page-section">
//             <div class="container">
//                 <div class="row page-heading">
//                     <div class="col-md-8 col-sm-8">
//                         <h3 class="page-title">Customize Search</h3>
//                         <p class="page-subtitle">Choose values to make the search more accurate</p>
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="col-md-9 col-sm-12">
//                         <div class="row">
//                             <form action="#" method="post" class="subcat-form">
//                                 <fieldset class="col-md-4 col-sm-6 col-xs-12">
//                                   <input name="price" type="range" min="0" max="10000" onchange="showValue(this.value)" />
//                                 </fieldset>
//                                 <fieldset class="col-md-4 col-sm-6 col-xs-12">
//                                   <input name="flash memory" type="range" min="0" max="512" onchange="showValue(this.value)"/>
//                                 </fieldset>
//                                 <fieldset class="col-md-4 col-sm-12 col-xs-12">
//                                   <input name="screen size" type="range" min="13" max="17" step="2" onchange="showValue(this.value)"/>
//                                 </fieldset>
//                                 <fieldset class="col-md-12 col-sm-12 col-xs-12">
//                                   <input name="ram" type="range" min="0" max="32" step="2" onchange="showValue(this.value)"/>
//                                 </fieldset>
//                                 <fieldset class="col-md-12 col-sm-12 col-xs-12">
//                                   {this.data.resolutionSelection()}
//                                 </fieldset>
//                                 <fieldset class="col-md-12 col-sm-12 col-xs-12">
//                                   {this.data.osSelection ()}
//                                 </fieldset>
//                                 <fieldset class="col-md-12 col-sm-12 col-xs-12">
//                                   <input name="rating" type="range" min="0" max="5" onchange="showValue(this.value)"/>
//                                 </fieldset>
//                                 <fieldset class="col-md-12 col-sm-12 col-xs-12">
//                                   <input type="submit" value="request" onClick={this.handleSubmit}></input>
//                                 </fieldset>
//                             </form>
//                         </div>
//                     </div>
//                     <div class="col-md-3 col-sm-12">
//                         <div class="subcat-info">
//                             <h4>Search Parameters</h4>
//                             <p>Choosing the specifications carefuly will mean a more yield a result more customized to youre needs.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     );
//   }

// }
