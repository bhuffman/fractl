import React from 'react';

const TableRow = props => {
  if (props.oneColumn) {
    return (
      <tr>
        <td colspan={2} >{props.children}</td>
      </tr>
    )
  } return (
    <tr>
      <td><span role="img" aria-label={props.emojiDescription}>{props.emoji}</span> {props.emojiDescription}</td>
      <td>{props.children}</td>
    </tr>
  )
}

export default TableRow