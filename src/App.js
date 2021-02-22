import React from "react";
import { Route } from "react-router-dom";

import CharacterList from "./components/CharacterList/List.js";
import Card from "./components/CharacterCard/Card.js";

export default function App(props) {
  return (
          <div className={'App'}>
            <Route path="/" exact {...props} component={CharacterList} />
            <Route path="/chars/:id" {...props} component={Card} />
          </div>
  );
}
