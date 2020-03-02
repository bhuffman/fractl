import React from 'react';
import { SplitButton, Dropdown, FormControl, Badge, Overlay, Tooltip } from 'react-bootstrap'

import { firebaseClient } from '../firebase'

const AddToList = props => {
  const [getAuthorRecords, setAuthorRecords] = React.useState({})
  // The get/setRefresh stateful variable is incremented to trigger useEffect
  const [getRefresh, setRefresh] = React.useState(0)
  const [getPopup, setPopup] = React.useState(false)

  const target = React.useRef(null);

  React.useEffect(()=>{
    firebaseClient.getAuthorList()
      .then(res=>{
        setAuthorRecords(res)
      })
  }, [getRefresh])

  const keyPressHandler = e => {
    if (e.charCode === 13) {
      const typedValue = document.querySelector('.newlistentry').value
      if (typedValue){
        firebaseClient.addAuthorToList(props.author, typedValue)
        document.querySelector('.newlistentry').value = ''
        popupHandler()
        setRefresh(getRefresh + 1)
      }
    }
  }

  const popupHandler = () => {
    setPopup(true)
    setTimeout(()=>setPopup(false),2000)
  }


  const listHandler = () => {
    if (Object.keys(getAuthorRecords).length === 0) return null;
    const listKeys = Object.keys(getAuthorRecords)
    const mappedLists = listKeys.map((el,index)=>{
      const base64name = Buffer.from(el,'base64').toString('ascii')
      return (
      <Dropdown.Item 
        eventKey={index} 
        key={index} 
        onClick={() => {
          firebaseClient.addAuthorToList(props.author, base64name);
          setRefresh(getRefresh + 1)
          popupHandler()
        }}>
        {base64name === 'uncategorized' ? <em className="text-muted">{base64name}</em> : base64name} <Badge variant="secondary" className="ml-2">{Object.keys(getAuthorRecords[el].names).length}</Badge>
      </Dropdown.Item>
    )})
    mappedLists.push(<Dropdown.Divider key='iHadToPutThisHereToSilenceTheError'/>)
    return mappedLists
  }
    
  return (
    <>
    <SplitButton 
      alignRight
      title="Add to my saved authors"
      variant="outline-secondary"
      size="sm"
      ref={target}
      className="ml-3 mb-3 d-inline-block align-middle saved-authors-dropdown-shadow"
      onClick={()=>{
        popupHandler()
        firebaseClient.addAuthorToList(props.author);
        setRefresh(getRefresh + 1)
      }}
    >
      {listHandler()}
      
      <FormControl
        className="mx-3 my-2 w-auto newlistentry"
        placeholder="Create a new list..."
        onKeyPress={keyPressHandler}
        />

    </SplitButton>
    <Overlay target={target.current} show={getPopup} placement="top">
      {props => (
        <Tooltip {...props}>
          Added!
        </Tooltip>
      )}
    </Overlay>
    </>
  )
}


export default AddToList