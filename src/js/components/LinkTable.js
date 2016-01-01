/** @jsx React.DOM */
var React = require('react');
var Firebase = require("firebase");
var ReactFireMixin = require('reactfire');

var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var LinkTable = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      links: []
    };
  },
  componentDidMount: function() {
    var myFirebaseRef = new Firebase("https://shining-heat-7214.firebaseio.com/links");
     this.bindAsArray(myFirebaseRef, "links");
  },
    render:function(){
      var lines = this.state.links.map(function(link){
        return(
          <tr>
            <td>
              {link.id}
            </td>
            <td>
              <a href={link.url} target="_blank">{link.name}</a>
            </td>
            <td>
              {link.contributions}
            </td>
            <td>
              {link.clics}
            </td>
            <td>
              <button type="button" className="btn btn-default">Signaler</button>
            </td>
          </tr>
        );
      });
      return (
        <table className="table">
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Adresse
              </th>
              <th>
                Contributions
              </th>
              <th>
                Clics à partir du site
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            {lines}
          </tbody>
        </table>
      )
    }
  });
module.exports = LinkTable;
