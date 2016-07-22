class Timeline extends React.Component {
  render() {
    var data = this.props.tweets;
    return (
      <section id="tweets-container">
        <h3>Tweets</h3>
        <ul>
          {data.map((tweet) => {
            return <Tweet key={tweet.id} data={tweet} />;
          })}
        </ul>
      </section>
    );
  }
}