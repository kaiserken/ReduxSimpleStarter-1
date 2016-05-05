import React from 'react';
import { Component } from 'react';
import CommentBox from './comment_box';
import CommentList from './comment_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Comment list</h1>
          <p className="lead">This displays comments using react-redux with testing done using Mocha.</p>
        </div>
        <div className = 'col-md-12'>
          <CommentBox/>
        </div>
        <div className = "col-md-9, ">
          <CommentList/>
        </div>
      </div>
    );
  }
}
