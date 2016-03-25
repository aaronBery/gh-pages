var React = require('react');
var ReactDOM = require('react-dom');
var app = app || {};

(function() {
  'use strict';

    app.HowtoApp = React.createClass({
    getInitialState() {
      return {data: []};
    }
    ,componentDidMount() {
      $.ajax({
        url: 'http://funnelback-dev.ucl.ac.uk/s/search.json?collection=isd-howto&query=!padrenullquery'
        ,dataType: 'jsonp'
        ,success: function(data) {
          //console.log(data.response.resultPacket.results);
          this.setState({data: data})
        }.bind(this)
        ,error: function(err) {
          console.log(err);
        }.bind(this)
      });
    }
    ,render() {
      var howToResponseObj = this.state.data
        ,resultsSummary
        ,resultsBreakDown
        ,howToListing = '';

      if(typeof howToResponseObj.response !== 'undefined') {
        resultsSummary = howToResponseObj.response.resultPacket.resultsSummary;
        resultsBreakDown = 'Displaying result ' + resultsSummary.currStart + 1 + ' to ' + resultsSummary.currEnd + ' of ' + resultsSummary.totalMatching;
        howToListing = howToResponseObj.response.resultPacket.results.map(function(howToItem) {
          return (
            <li key={ howToItem.rank }>
              <a href="{ howToItem.liveUrl }">{ howToItem.title }</a>
            </li>
          );
        });
      }
      return (
        <ul>
          { howToListing }
        </ul>
      ); 
    }
  });

  ReactDOM.render(
    <app.HowtoApp />,
    document.getElementById('howToListing')
  );

})();
