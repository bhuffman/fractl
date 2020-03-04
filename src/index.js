import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { Auth0Provider } from "./react-auth0-spa"
import history from "./utils/history"
import { resetContext, getContext } from "kea"
import { Provider } from "react-redux"
import localStoragePlugin from "kea-localstorage"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"

const client = new ApolloClient({
  uri: "https://graphql.frac.tl:3333/graphql"
})

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  )
}

resetContext({
  createStore: {},
  plugins: [localStoragePlugin]
})

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    client_id={process.env.REACT_APP_AUTH0_CLIENTID}
    redirect_uri={window.location.href}
    onRedirectCallback={onRedirectCallback}
  >
    <ApolloProvider client={client}>
      <Provider store={getContext().store}>
        <App />
      </Provider>
    </ApolloProvider>
  </Auth0Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
