import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const Search = props => {

  let heading, placeholder, recentList

  switch(props.pageName) {
    case 'authors':
      heading = "Enter a full name:"
      placeholder = "John Smith"
      recentList = props.recentAuthors
      break
    case 'keywords':
      heading = "Enter a keyword:"
      placeholder = "Politics"
      recentList = props.recentKeywords
      break
    default:
      heading = "Enter a search term:"
      placeholder = "John Smith"
  }

  const recentHandler = recentList.map((value,index)=>{
    if (index < 5){
      return (
        <span key={index}>
          <u onClick={() => props.changeSearch(props.pageName,value)} style={{cursor:'pointer'}}>
            {value}
          </u>
          {index < 4 ? ', ' : null}
        </span>
      )
    } return null
  })

  return (
    <Container fluid className="bg-light py-5">
      <Container>
        <Row>
          <Col>
            <form onSubmit={props.setSearch}>
              <div className="form-group">
                <label><span role="img" aria-label="Search">🔍</span> {heading}</label>
                <input type="text" name="name" placeholder={placeholder} className="form-control form-control-lg" id="searchComponentInput" />
              </div>
              {recentHandler.length > 0 &&
              <div className="mb-3 text-muted">
                Your Recent Searches: {recentHandler}
              </div>
              }
              <input type="submit" value="Search" className="btn btn-primary btn-lg"/>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>

  )
}

export default Search