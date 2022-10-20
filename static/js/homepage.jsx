'use strict';

function Homepage() {
  return (
    <React.Fragment>
      <h3> Welcome, card enthusiast! </h3>
      <a href ="/cards">Trading Cards</a>
      <img className="home_img" src="/static/img/balloonicorn.jpg" />
    </React.Fragment>);
} 

ReactDOM.render(<Homepage />, document.querySelector('#app'));
