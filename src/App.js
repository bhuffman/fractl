import React, { useEffect } from "react"
import "./styles/App.css"
import "mapbox-gl/src/css/mapbox-gl.css"
import { Provider, createClient } from "urql"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Authors from "./components/Authors"
import Search from "./components/Search"
import LoginNotice from "./components/LoginNotice"
import NavigationBar from "./components/NavigationBar"
import StatusMessage from "./components/StatusMessage"
import ProfileLists from "./components/ProfileLists"
import Keywords from "./components/Keywords"
import Dashboard from "./pages/dashboard/dashboard"

import { firebaseClient } from "./firebase"
import { useAuth0 } from "./react-auth0-spa"

const GraphQLClient = createClient({
  url: "https://graphql.frac.tl:3333/graphql"
})

const App = () => {
  const [getSearch, setSearch] = React.useState("")
  const [getRecentAuthorSearches, setRecentAuthorSearches] = React.useState([])
  const [getRecentKeywordSearches, setRecentKeywordSearches] = React.useState(
    []
  )
  const [getPageName, setPageName] = React.useState("authors")

  const { loading, isAuthenticated } = useAuth0()

  useEffect(() => {
    !loading &&
      isAuthenticated &&
      firebaseClient
        .recentAuthorSearches()
        .then(res => setRecentAuthorSearches(res))
    !loading &&
      isAuthenticated &&
      firebaseClient
        .recentKeywordSearches()
        .then(res => setRecentKeywordSearches(res))
  }, [loading, isAuthenticated])

  const setSearchHandler = e => {
    e.preventDefault()
    let searchBarNameValue = document.querySelector("#searchComponentInput")
      .value
    firebaseClient.addRecentSearch(searchBarNameValue, getPageName)
    switch (getPageName) {
      case "authors":
        setRecentAuthorSearches([
          searchBarNameValue,
          ...getRecentAuthorSearches
        ])
        break
      case "keywords":
        setRecentKeywordSearches([
          searchBarNameValue,
          ...getRecentKeywordSearches
        ])
        break
      default:
    }
    setSearch(document.querySelector("#searchComponentInput").value)
  }

  const changePageHandler = pageName => {
    if (document.querySelector("#searchComponentInput")) {
      document.querySelector("#searchComponentInput").value = ""
    }
    setSearch("")
    setPageName(pageName)
  }

  // need to refactor this code
  async function loadSearchViaChild(page, value) {
    await setSearch(value)
    await setPageName(page)
    await changeSearch(page, value)
  }

  const changeSearch = (page, value) => {
    document.querySelector("#searchComponentInput").value = value
    let searchBarNameValue = document.querySelector("#searchComponentInput")
      .value
    firebaseClient.addRecentSearch(page, searchBarNameValue)
    switch (page) {
      case "authors":
        setRecentAuthorSearches([
          searchBarNameValue,
          ...getRecentAuthorSearches
        ])
        break
      case "keywords":
        setRecentKeywordSearches([
          searchBarNameValue,
          ...getRecentKeywordSearches
        ])
        break
      default:
    }
    setSearch(document.querySelector("#searchComponentInput").value)
  }

  if (loading) {
    return <StatusMessage text="Loading Campground..." loading />
  }

  return (
    <Provider value={GraphQLClient}>
      <Router>
        {isAuthenticated && (
          <Dashboard />
          // <Switch>
          //   <Route path="/lists">
          //     <Search
          //       setSearch={setSearchHandler}
          //       changeSearch={changeSearch}
          //       recentAuthors={getRecentAuthorSearches}
          //       recentKeywords={getRecentKeywordSearches}
          //       pageName={getPageName}
          //     />
          //   </Route>
          //   <Route path="/AuthorSearch">
          //     <Authors
          //       authorName={getSearch}
          //       changeSearch={loadSearchViaChild}
          //     />
          //   </Route>
          //   <Route path="/Keyword">
          //     <Keywords
          //       keywordName={getSearch}
          //       changeSearch={changeSearch}
          //       changeAuthor={loadSearchViaChild}
          //     />
          //   </Route>
          //   <Route path="/lists">
          //     <ProfileLists changeSearch={loadSearchViaChild} />
          //   </Route>
          //   <Route path="/">
          //     <div>Home </div>
          //   </Route>
          // </Switch>
        )}
        {!isAuthenticated && (
          <>
            <NavigationBar setPage={changePageHandler} />
            <LoginNotice />
          </>
        )}
        {/* {isAuthenticated && getPageName !== "lists" && (
          <Search
            setSearch={setSearchHandler}
            changeSearch={changeSearch}
            recentAuthors={getRecentAuthorSearches}
            recentKeywords={getRecentKeywordSearches}
            pageName={getPageName}
          />
        )}
        {isAuthenticated && getPageName === "authors" && (
          <Authors authorName={getSearch} changeSearch={loadSearchViaChild} />
        )}
        {isAuthenticated && getPageName === "keywords" && (
          <Keywords
            keywordName={getSearch}
            changeSearch={changeSearch}
            changeAuthor={loadSearchViaChild}
          />
        )}
        {isAuthenticated && getPageName === "lists" && (
          <ProfileLists changeSearch={loadSearchViaChild} />
        )}
         */}
      </Router>
    </Provider>
  )
}

export default App
