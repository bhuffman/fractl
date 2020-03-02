import React from 'react'
import StatusMessage from './StatusMessage'
import { useQuery } from 'urql'

const QueryLoader = props => {
  const [queryResult] = useQuery({
    query: props.query,
    variables: props.variables,
  })

  if (queryResult.fetching) {
    return (
      <StatusMessage text="Collecting additional results..." loading noborder transparent />
    )
  } else if (queryResult.error || queryResult.data.Author.length === 0) {
    return (
      <StatusMessage text="Information not available." noborder error transparent />
    )
  } else {
    return React.cloneElement(props.children,{query:queryResult})
  }
}

export default QueryLoader