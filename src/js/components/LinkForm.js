/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var LinkForm = React.createClass({
  handleClick:function(){
    var ccUrl = $("#basic-url").val();
    AppActions.addItem(ccUrl);
  },

  getInitialState: function() {
    return {
      mypointnumber:0
    };
  },

  loadMyPoints: function(){
    this.setState({ mypointnumber: getCookie("commuclic_nbclic") })
  },

  componentDidMount: function() {
     this.loadMyPoints();
     setInterval(this.loadMyPoints, 2000);
  },

  render: function() {
    return (
      <form role="form">
        <div className="form-group">
          <ul className="nav nav-pills">
            <li>
               <a href="#"> <span id="myPoints" className="badge pull-right">{this.state.mypointnumber}</span> Mes points </a>
            </li>
          </ul>
          <label for="basic-url">Adresse à partager</label>
        <div className="input-group input-group-sm">
          <span className="input-group-addon" id="basic-addon3">Adresse</span>
          <input type="url" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
          <input type="number" className="form-control" step="1" min="0" max={this.state.mypointnumber} id="points" aria-describedby="basic-addon3"/>
        </div>
        </div>
        <button onClick={this.handleClick} type="button" className="btn btn-default">
          Submit
        </button>
      </form>
    );
  }
});
module.exports = LinkForm;
