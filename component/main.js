var React = require('react');
var ReactDom = require('react-dom');
var main = react.createClass({
  render: function(){
    return(
      <div>
        Hello World
      </div>
    )
  }
});
ReactDom.render(<main />,document.getElementById('app'))
