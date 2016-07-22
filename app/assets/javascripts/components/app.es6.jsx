class App extends React.Component {
	constructor() {
    super();
    this.state = {
      tweets: []
    };

    this.updateTweets = this.updateTweets.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/tweets/recent'
    })
    .done((response) => {
      this.setState({tweets: response});
    });
  }

  updateTweets(tweet) {
  	// updated the state variable for tweets
  	var newTweets = [tweet].concat(this.state.tweets);
  	this.setState({tweets: newTweets});
  }

	render() {
		return (
			<div>
				<header id="top-nav">
				  <div id="brand">Lil' Twitter API</div>
				  <form id="search-form">
				    <input id="search" type="text" name="query"/>
				  </form>
				  <i className="fa fa-search"></i>
				</header>
				<section className="container">
				  <TweetBox onTweetUpdate={this.updateTweets} />
				  <section id="trends-container">
				    <h3>Trends</h3>
				    <ul>
				      <li>filler</li>
				      <li>filler</li>
				      <li>filler</li>
				      <li>filler</li>
				      <li>filler</li>
				      <li>filler</li>
				      <li>filler</li>
				      <li>filler</li>
				      <li>filler</li>
				      <li>filler</li>
				    </ul>
				  </section>
				  <Timeline tweets={this.state.tweets} />
				</section>
			</div>
		);
	}
}