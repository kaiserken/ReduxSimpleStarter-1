import React, {Component} from "react";

export default class CommentBox extends Component {
  render(){
    console.log(CommentBox)
    return (
      <div className = "comment-box">
        <textarea/>
        <button> Submit Comment</button>
      </div>
    );
  }
}
