import React from 'react'
import '../styles/Authors.css'

import md5 from 'md5'

import { useQuery } from 'urql'
import { getAuthorsBaseInfo, getAuthorsMainCategory, getAuthorsDiscussesEntities, getAuthorsDiscussesKeywords, getAuthorsPublishedDomains, getAuthorsArticleArchive, getAuthorsSimilarAuthors } from '../queriesAuthors'

import { Container, Row, Col, Image, Table } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';
import Anime from 'react-anime'

import Map from './Map'
import Calendar from './Calendar'
import SimilarAuthors from './SimilarAuthors'
import Topics from './Topics'
import PublishedIn from './PublishedIn'
import LatestPublished from './LatestPublished'
import WordCloud from './WordCloud'
import AddToList from './AddToList'
import TableRow from './TableRow'
import StatusMessage from './StatusMessage'
import QueryLoader from './QueryLoader'

const Authors = props => {

  const [gqlresBase] = useQuery({
    query: getAuthorsBaseInfo,
    variables: {name: props.authorName},
  })

  const emailHandler = str => {
    const emailArray = str.split(', ')
    return (emailArray.map((email,index) => (
      <span key={index} className="mb-2 mr-1" >
        <small>
          {email}
          {emailArray.length > 1 && index + 1 !== emailArray.length && ','}
        </small>
      </span>
    )))
  }

  if(!props.authorName) {
    return(
      <StatusMessage text="Enter a full name above to get started." instant/>
    )
  }
  else if (gqlresBase.fetching) {
    return (
      <StatusMessage text="Collecting results..." loading />
    )
  } else if (gqlresBase.error || gqlresBase.data.Author.length === 0) {
    return (
      <StatusMessage text="An error occurred. Please try again." />
    )
  } else {

    const authorBase = gqlresBase.data.Author[0]
    return (
      <Container fluid className="my-5">
      <Container>
        <Row className="mb-4">
          <Col sm={'auto'} className="mb-2">
            <Image src={
              authorBase.emails ? 
              `https://s.gravatar.com/avatar/${md5(authorBase.emails)}?s=80` :
              "https://s.gravatar.com/avatar/fa5bba24186a52aed45eba94d5543fa6?s=80"} roundedCircle />
          </Col>
          <Col>
            <h2 className="d-inline-block">
              {authorBase.name ? authorBase.name : null}
            </h2>
            <AddToList author={authorBase.name} />
            <hr style={{ margin:'0 0 .75em'}} />
            <div className="author-email-list">
              <Anime translateY={['-2em', 0]}
                opacity={[0, 1]}
                easing="easeOutBack"
                duration={300}
                delay={(el, index) => {
                  if (index < 10) return 700 + index * 200
                  if (index < 20) return 2100 + index * 40
                  return 2800 + index * 10
              }}>
                {authorBase.emails ?
                emailHandler(authorBase.emails) :
                (<span key="noemails" className="mb-2 mr-1" ><small>No emails found for this author</small></span>)}
              </Anime>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table className="bg-light" striped responsive bordered>
              <tbody>
                
                { (authorBase.twitter || authorBase.facebook || authorBase.linkedin) &&
                <tr>
                  <td><span role="img" aria-label="Social Media">💬</span> Social Media</td>
                  <td>
                    {authorBase.twitter && <SocialIcon url={`http://twitter.com/${authorBase.twitter}`}/> }
                    {authorBase.facebook && <SocialIcon url={`${authorBase.facebook}`}/>}
                    {authorBase.linkedin && <SocialIcon url={`${authorBase.linkedin}`}/>}
                  </td>
                </tr>}


                { authorBase.location &&
                <TableRow emoji="🌎" emojiDescription="Location">
                  {authorBase.location}
                  <Map location={authorBase.location} />
                </TableRow>}

                { authorBase.position &&
                <TableRow emoji="📝" emojiDescription="Position">{authorBase.position}</TableRow>}
                
                { authorBase.current_company &&
                <TableRow emoji="🌆" emojiDescription="Current Company">{authorBase.current_company}</TableRow>}
                
                { authorBase.current_company_size &&
                <TableRow emoji="📊" emojiDescription="Company Size">{authorBase.current_company_size}</TableRow>}
                
                { authorBase.current_company_website &&
                <TableRow emoji="🖥" emojiDescription="Current Company Website">{authorBase.current_company_website}</TableRow>}

                {authorBase.company &&
                <TableRow emoji="🏢" emojiDescription="Associated Workplaces">{authorBase.company}</TableRow>}

                <TableRow emoji="📢" emojiDescription="Associated topics">
                  <QueryLoader query={getAuthorsMainCategory} variables={{name:props.authorName}}>
                    <Topics />
                  </QueryLoader>
                </TableRow>

                <TableRow emoji="📆" emojiDescription="Days Published">
                  <QueryLoader query={getAuthorsArticleArchive} variables={{name:props.authorName}}>
                    <Calendar />
                  </QueryLoader>
                </TableRow>

                <TableRow emoji="📄" emojiDescription="Latest Articles Published">
                  <QueryLoader query={getAuthorsArticleArchive} variables={{name:props.authorName}}>
                    <LatestPublished page="authors" />
                  </QueryLoader>
                </TableRow>

                <TableRow emoji="🔗" emojiDescription="Published in">
                  <QueryLoader query={getAuthorsPublishedDomains} variables={{ name: props.authorName }}>
                    <PublishedIn />
                  </QueryLoader>
                </TableRow>

                <TableRow emoji="🔍" emojiDescription="Similar Authors">
                  <QueryLoader query={getAuthorsSimilarAuthors} variables={{ name: props.authorName, pagerank: 7.5 }}>
                    <SimilarAuthors changeSearch={props.changeSearch} />
                  </QueryLoader>
                </TableRow>  

                <TableRow emoji="🔶" emojiDescription="Discussed Entities">
                  <QueryLoader query={getAuthorsDiscussesEntities} variables={{ name: props.authorName }}>
                    <WordCloud endpoint="Discusses_Entities" kv="Entity" changeSearch={props.changeSearch} />
                  </QueryLoader>
                </TableRow>

                <TableRow emoji="🔠" emojiDescription="Discussed Keywords">
                  <QueryLoader query={getAuthorsDiscussesKeywords} variables={{ name: props.authorName }}>
                    <WordCloud endpoint="Discusses_Keywords" kv="Keyword" changeSearch={props.changeSearch} />
                  </QueryLoader>
                </TableRow>

                        
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      </Container>
    )
  }
}


export default Authors