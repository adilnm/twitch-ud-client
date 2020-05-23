import React from "react";
import { BrowserRouter as Router, Route, link } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import streamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
const App = () => {
  return (
    <div>
      <Router>
        <div>
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
