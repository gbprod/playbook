import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "./components";
import { SongListContainer } from "./containers/SongListContainer";
import { SongContainer } from "./containers/SongContainer";

export const Router: React.FC<{}> = () => (
  <Layout>
    <Switch>
      <Route path="/song/:id">
        <SongContainer />
      </Route>
      <Route path="/">
        <SongListContainer />
      </Route>
    </Switch>
  </Layout>
);
