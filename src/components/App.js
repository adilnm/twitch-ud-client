import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import streamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={StreamList} />
          <Route exact path="/streams/new" component={StreamCreate} />
          <Route exact path="/streams/edit" component={StreamEdit} />
          <Route exact path="/streams/delete" component={StreamDelete} />
          <Route exact path="/streams/show" component={streamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
