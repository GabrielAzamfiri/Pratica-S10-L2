import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";


class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
  };
  fetchGetComments = async () => {
    this.setState({ isLoading: true });

    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.idBook, {
      headers: {
        // chiave di autenticazione
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNmFhYjNhMzhjYjAwMTVmNjNkMTEiLCJpYXQiOjE3MTk0OTUzMzksImV4cCI6MTcyMDcwNDkzOX0.5vVe16YRa1Bcku51ZRl4mQCyD5otMCjV230YZ_RzwgU",
      },
    })
      .then(resp => {
        if (resp.ok) {
          // restituiamo il dato convertito in array da JSON
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento del commento");
        }
      })
      .then(comLibro => {
        console.log(comLibro);
        this.setState({ comments: comLibro });
      })
      .catch(err => alert(err));
  };
  componentDidMount() {
    this.fetchGetComments();
  }
  
  render() {
    return (
      <div>
        <h2> Commenti </h2>
        <CommentsList comments={this.state.comments} />
        <AddComment idBook={this.props.idBook}/>
      </div>

      //   <CommentsList comments={this.state.comments}/>
      //   {/* <AddComment/> */}

     
    );
  }
}
export default CommentArea;
