class TweetBox extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		event.preventDefault();
		var content = this.refs.tweetContent.value;
		$.ajax({
			method: 'POST',
			url: '/tweets',
			data: { tweet: { content: content } }
		})
		.done((response) => {
			this.props.onTweetUpdate(response);
		});
	}

	render() {
		return (
			<section id="tweet-box">
			  <p id="tweet-box-title">Compose New Tweet</p>
			  <form id="tweet-form">
			    <textarea ref="tweetContent" id="new-tweet" cols="30" rows="5" maxlength="140" name="tweet"></textarea>
			    <input 
			    	type="submit" 
			    	value="Tweet" 
			    	onClick={this.handleClick}
			    />
			  </form>
			</section>
		);
	}
}