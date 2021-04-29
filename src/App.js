import React from "react";
import { render } from "react-dom";
import Movie from "./Movie";


function App() {
  return (
    <div> Hello_EFUB </div>
  );
};

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
};


componentDidMount() {
  setTimeout(() => {
    this.setState({ isLoading: false });
  }, 3000);
}

render() {
  const {isLoading, movies} = this.state;
  return(
    <section className="container">
      {isLoading
      ?(
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      )
    : (
      <div className="movies">
        <Movie/>
      </div>
    )}
    </section>
  );
}

export default App;
