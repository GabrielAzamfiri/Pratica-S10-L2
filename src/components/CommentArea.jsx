import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import StickyBox from "react-sticky-box";

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
  componentDidUpdate(prevProps) {
    console.log("PREV props", prevProps.idBook);
    console.log("THIS props", this.props.idBook);
    if (prevProps.idBook !== this.props.idBook) {
      this.fetchGetComments();
    } else {
      // se siamo qui è probabilmente per via di un setState avviato dentro this.fetchGetComments che scatena un nuovo update,
      // ma rispetto a prima le props non saranno diverse questa volta e quindi abbiamo lo STOP.
      console.log("no new props, STOP!");
    }
  }
  render() {
    return (

      <StickyBox offsetTop={20} offsetBottom={20}>
        <div className="">
          <h2>Recensioni del libro <span className="text-info">{this.props.selectedBook.title}</span> </h2>
        
          <CommentsList comments={this.state.comments} reloadComments={this.fetchGetComments}/>
          <AddComment idBook={this.props.idBook} reloadComments={this.fetchGetComments}/>
        </div>
      </StickyBox>

      //   <CommentsList comments={this.state.comments}/>
      //   {/* <AddComment/> */}
    );
  }
}
export default CommentArea;
