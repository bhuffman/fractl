import React from 'react'
import { useQuery } from 'urql'

import { getKeywordsBaseInfo } from '../queriesKeywords'
import { Container, Row, Col, Table } from 'react-bootstrap'

import StatusMessage from './StatusMessage'
import TableRow from './TableRow'
// import QueryLoader from './QueryLoader'
import WordCloud from './WordCloud'
import SimilarAuthors from './SimilarAuthors'
import LatestPublished from './LatestPublished'

const Keywords = props => {


  const [gqlresBase] = useQuery({
    query: getKeywordsBaseInfo,
    variables: { search_input: props.keywordName, min_pagerank: 7.5 },
  })

  if (!props.keywordName) {
    return <StatusMessage text="Enter any search term above to get started." />
  } else if (gqlresBase.fetching) {
    return <StatusMessage text="Collecting results..." loading />
  } else if (gqlresBase.error) {
    return <StatusMessage text="An error occurred. Please try again." />
  } 
    return (
    <Container fluid className="my-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="d-inline-block">
              {props.keywordName}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table className="bg-light" striped responsive bordered>
              <tbody>
                  <TableRow emoji="🔠" emojiDescription="Most Associated Keywords">
                    <WordCloud data={gqlresBase.data.Term_Search_Most_Associated_Keywords} kv="Keyword" changeSearch={props.changeSearch} />
                  </TableRow>
                  <TableRow emoji="🔣" emojiDescription="Most Associated Entities">
                    <WordCloud data={gqlresBase.data.Term_Search_Most_Associated_Entities} kv="Entity" changeSearch={props.changeSearch} />  
                  </TableRow>
                  <TableRow emoji="💻" emojiDescription="Most Associated Articles">
                    <LatestPublished data={gqlresBase.data.Term_Search_Most_Associated_Articles} page="keywords" />
                  </TableRow>
                  <TableRow emoji="🌎" emojiDescription="Most Associated Domains">
                    <WordCloud data={gqlresBase.data.Term_Search_Most_Associated_Domains} kv="Domain" changeSearch={props.changeSearch} />
                  </TableRow>
                  <TableRow emoji="📕" emojiDescription="Most Associated Authors">
                    <SimilarAuthors data={gqlresBase.data.Term_Search_Most_Associated_Authors} kv="Name" changeAuthor={props.changeAuthor} changeSearch={props.changeSearch} />
                  </TableRow>
                  <TableRow emoji="📚" emojiDescription="Most Associated Topics">
                    <WordCloud data={gqlresBase.data.Term_Search_Most_Associated_Topics} kv="Topic" changeSearch={props.changeSearch} />
                  </TableRow>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Keywords