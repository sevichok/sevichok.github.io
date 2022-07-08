import React from 'react'
import styled from 'styled-components'
import ListItem from '../ListItem'

const ListContainer = styled('div')`
display:flex;
flex-direction:row;
flex-wrap: wrap;
margin-top:40px ;
gap:16px;
`

function List({ list, handleDelete, handlePickDefault }) {

  let contentList = list.map((item) => <ListItem
    key={item.id}
    list={list}
    handlePickDefault={handlePickDefault}
    {...item} handleDelete={handleDelete}></ListItem>)

  return (
    <ListContainer>{contentList}</ListContainer>
  )
}

export default List