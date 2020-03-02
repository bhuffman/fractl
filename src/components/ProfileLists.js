import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap'
import { firebaseClient } from '../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import Anime from 'react-anime'

import StatusMessage from './StatusMessage'

import moment from 'moment'

const ProfileLists = props => {
  const [getAuthorRecords, setAuthorRecords] = React.useState({})
  const [getListNum,setListNum] = React.useState(0)
  const [getAuthNum,setAuthNum] = React.useState(0)
  // The get/setRefresh stateful variable is incremented 
  // to refresh the use of the useEffect hook.
  // eslint-disable-next-line
  const [getRefresh, setRefresh] = React.useState(0)

  const iconColor = "#aaa"

  React.useEffect(() => {
    firebaseClient.getAuthorList()
      .then(res => {
        let resKeys = Object.keys(res);
        let authNum = 0;
        for(let resKey of resKeys) {
          authNum += Object.keys(res[resKey]['names']).length
        };
        setListNum(resKeys.length)
        setAuthNum(authNum)
        setAuthorRecords(res)
      })

  }, [getRefresh])

  const listHandler = () => {
    if (Object.keys(getAuthorRecords).length === 0) {
      return <StatusMessage text="Search for authors and keywords to create your first list." />;
    }
    const listKeys = Object.keys(getAuthorRecords)

    const mappedLists = listKeys.map((el, index) => {
      const lastUpdated = getAuthorRecords[el].lastupdated
      const unbase64list = Buffer.from(el,'base64').toString('ascii')
      if (!getAuthorRecords[el].names) {
        firebaseClient.removeAuthorList(unbase64list)
        return null
      };
      const mappedListValues = Object.entries(getAuthorRecords[el].names).reverse().map((name,i)=>{
        const unbase64author = Buffer.from(name[0],'base64').toString('ascii')
        return(
        <tr key={i}>
          <td>
            <span style={{cursor:'pointer',textDecoration:'underline'}}
                onClick={() => props.changeSearch('authors',unbase64author)}>
              {unbase64author}
            </span>
          </td>
          <td>{moment(moment.unix(name[1])).calendar()}</td>
          <td style={{textAlign:'center'}}>
            <FontAwesomeIcon icon={faTimes}
              size="lg"
              color={iconColor}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (window.confirm(`Are you sure you want to remove "${unbase64author}" from this list?`)) {
                  firebaseClient.removeAuthor(unbase64author, unbase64list)
                  setRefresh(getRefresh + 1)
                }
              }} />
          </td>
        </tr>
      )})

      return (
        <>
        <Container className="bg-light my-5 rounded border">
          <Row className="align-items-top">
            <Col className="p-3">
              <h4>{unbase64list}</h4>
              <small>Last updated: {moment(moment.unix(lastUpdated)).calendar()}</small>
            </Col>
            <Col xs="auto pt-4 pr-4">
              <FontAwesomeIcon icon={faTrashAlt} 
                size="lg" 
                color={iconColor} 
                style={{ cursor : 'pointer' }} 
                onClick={()=>{
                  if (window.confirm(`Are you sure you want to delete the "${unbase64list}" list?`)){
                    firebaseClient.removeAuthorList(unbase64list)
                    setRefresh(getRefresh + 1)
                  }
                }}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table className="mt-2 mb-2" striped responsive>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th style={{ width: 250 }}>Added</th>
                    <th style={{ width: 100 }}>Remove</th>
                  </tr>
                </tbody>
                {mappedListValues}
              </Table>
            </Col>
          </Row>
        </Container>
        </>
      )
    })
    return mappedLists
  }

  return (
    <>
    <Container fluid className="bg-light py-4">
      <Container className="mt-5 mb-3">
        <Row>
          <Col sm={'auto'}>
            <h2>My Saved Authors</h2>
            <p>{getListNum} Lists with {getAuthNum} Authors</p>
          </Col>
        </Row>
      </Container>
    </Container>
    <Anime translateY={['-2em', 0]}
      opacity={[0, 1]}
      easing="easeOutBack"
      duration={300}
      delay={(el, index) => {return index * 200}}>
      {listHandler()}
    </Anime>
    </>
  )
}

export default ProfileLists