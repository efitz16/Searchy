// class Categories extends React.Component {

//   constructor(){
//     super();
//     this.state = {
//       showComponent: false,
//     }
//     this.buttonOnclick = this.buttonOnClick.bind(this);
//   }

//   buttonOnClick() {
//     this.setState({
//       showComponent: true,
//     });
//   }

//   render(){

//     return (

//       <section id="categories" class="page-section">
//           <div class="container">
//               <div class="row page-heading">
//                   <div class="col-md-8 col-sm-8">
//                       <h3 class="page-title">Product Categories</h3>
//                       <p class="page-subtitle">Pick From A Category</p>
//                   </div>
//               </div>
//               <div class="row">
//                   <div class="categories-holder">
//                       <div class="col-md-3 col-sm-6 col-xs-12 gallery-item">
//                           <div class="categoies-thumb">
//                               <img src="" alt=""/>
//                               <div class="hover">
//                                   <a href="#" class="fa fa-plus">Electronics</a>
//                                   {this.state.showComponent ?
//                                     <Electronics /> :
//                                     null
//                                   }
//                               </div>
//                           </div>
//                       </div>
//                       <div class="col-md-3 col-sm-6 col-xs-12 gallery-item">
//                           <div class="categories-thumb">
//                               <img src="" alt=""/>
//                               <div class="hover">
//                                   <a href="#" class="fa fa-plus">Furniture</a>
//                                   {this.state.showComponent ?
//                                     <Furniture /> :
//                                     null
//                                   }
//                               </div>
//                           </div>
//                       </div>
//                       <div class="col-md-3 col-sm-6 col-xs-12 gallery-item">
//                           <div class="categories-thumb">
//                               <img src="" alt=""/>
//                               <div class="hover">
//                                   <a href="#" class="fa fa-plus">Travel</a>
//                                   {this.state.showComponent ?
//                                     <Travel /> :
//                                     null
//                                   }
//                               </div>
//                           </div>
//                       </div>
//                       <div class="col-md-3 col-sm-6 col-xs-12 gallery-item">
//                           <div class="categories-thumb">
//                               <img src="" alt=""/>
//                               <div class="hover">
//                                   <a href="#" class="fa fa-plus">Automotive</a>
//                                   {this.state.showComponent ?
//                                     <Automotive /> :
//                                     null
//                                   }
//                               </div>
//                           </div>
//                       </div>
//                       <div class="col-md-3 col-sm-6 col-xs-12 gallery-item">
//                           <div class="categories-thumb">
//                               <img src="" alt=""/>
//                               <div class="hover">
//                                   <a href="#" class="fa fa-plus">Books</a>
//                                   {this.state.showComponent ?
//                                     <Books /> :
//                                     null
//                                   }
//                               </div>
//                           </div>
//                       </div>
//                       <div class="col-md-3 col-sm-6 col-xs-12 gallery-item">
//                           <div class="categories-thumb">
//                               <img src="" alt=""/>
//                               <div class="hover">
//                                   <a href="#" class="fa fa-plus">Appliances</a>
//                                   {this.state.showComponent ?
//                                     <Appliances /> :
//                                     null
//                                   }
//                               </div>
//                           </div>
//                       </div>
//                       <div class="col-md-3 col-sm-6 col-xs-12 gallery-item">
//                           <div class="categories-thumb">
//                               <img src="" alt=""/>
//                               <div class="hover">
//                                   <a href="#" class="fa fa-plus">Something</a>
//                                   {this.state.showComponent ?
//                                     <Something /> :
//                                     null
//                                   }
//                               </div>
//                           </div>
//                       </div>
//                       <div class="col-md-3 col-sm-6 col-xs-12 gallery-item">
//                           <div class="categories-thumb">
//                               <img src="" alt=""/>
//                               <div class="hover">
//                                   <a href="#" class="fa fa-plus">Someting Else</a>
//                                   {this.state.showComponent ?
//                                     <SomethigElse /> :
//                                     null
//                                   }
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </section>
//     );
//   }
// }
