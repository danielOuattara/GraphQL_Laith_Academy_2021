import "./App.css";
import Nav from "./components/Nav/Nav";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import AnimalPage from "./pages/AnimalPage/AnimalPage";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact strict path="/" component={LandingPage} />
            <Route
              exact
              strict
              path="/products/:slug"
              component={CategoryPage}
            />
            <Route exact strict path="/product/:slug" component={AnimalPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
