import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import styled from '@emotion/styled'

const Header = ({prop}) => {
    const container = {
        backgroundColor: 'gold',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        height:'50px',
        padding:'10px 20px'
    }

  return (
    <div style={container}>
      <Nav to='/'>Page 1</Nav>
      <Nav to='/page2'>Page 2</Nav>
      <Nav to='/page3'>Page 3</Nav>
      <Nav to='/page4'>Page 4</Nav>
      <Nav to='/page5'>Page 5</Nav>
      <Nav to='/page6'>Page 6</Nav>
      <div>{prop}</div>
    </div>
  )
}

export default Header


const Nav = styled(NavLink)`
  text-decoration:none;
  color: white;

  &:hover {
    color: grey;
  }

  @media (max-width: 1000px){
    color:red;

  }
`