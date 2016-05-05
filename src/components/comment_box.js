import React, {Component} from "react";
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props){
    super(props);

    this.state = { comment: "" };
  }
  handleChange(event){
    this.setState({comment: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({comment: ""});
  }
  render(){
    return (
      <form onSubmit = {this.handleSubmit.bind(this)}className = "comment-box form-group">
        <h4>Enter a Comment</h4>
        <textarea
          onChange = {this.handleChange.bind(this)}
          value = {this.state.comment}
          />
        <div>
        <button className="btn btn-primary"> Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);
