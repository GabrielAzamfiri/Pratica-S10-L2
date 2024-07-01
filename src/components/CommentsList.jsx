import { Component } from "react";
import SingleComment from "./SingleComment";


class CommentsList extends Component {
    state = {
        comments: []
    };

    // author:     "ciaocaro@caro.caro"
    // comment: "130 Martin Garrix si vola"
    // createdAt : "2024-01-26T10:53:21.282Z"
    // elementId  :   "65b38f0931a73f0019d5c801"
    // rate  :  5
    // updatedAt :   "2024-01-26T10:53:21.282Z"
    // __v :   0
    // _id  :   "65b38f2131a73f0019d5c802"

    render() {
        return (
            <div>
                {this.props.comments.map((comment, index) => (
                    <SingleComment comment={comment} key={comment._id}/>
                ))}
            </div>
            
        );
    }
}
export default CommentsList