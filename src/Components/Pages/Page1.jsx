import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { AppState } from '../Globalstate';
import styled from '@emotion/styled'
import axios from "axios";
import {NavLink} from 'react-router-dom';

const Button = styled.button`
  background-color: gold;
  padding: 4px 10px;
  font-size: 18px;
  color: white;
`
const Page1 = () => {

    const {count, setCount} = useContext(AppState)
    const [data, setData] = useState()
    

    const getProduct = async () => {
      await axios.get('https://fakestoreapi.com/products').then((res) => {
        console.log(res.data)
        setData(res.data)
      }).catch((error) => {
        console.log(error)
      })
    }

    const deleteProduct = async (id) => {
      await axios.delete(`https://fakestoreapi.com/products/${id}`).then((res) => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
    }

    useEffect(() => {
      getProduct()
      console.log('hello');
    },[])

  return (
    <Container>
      <div>Count: {count} </div>
      <Button onClick={()=> setCount(()=> count + 1)}>Add</Button>
      <Button onClick={()=> setCount(()=> count - 1)}>Minus</Button>
      <Button onClick={()=> setCount(()=> count / 2)}>Divide</Button>
      <Button onClick={()=> setCount(()=> count * 2)}>Multiply</Button>

      {data?.map((props) => (
        <div key={props.id}>
          <NavLink to={`/page4/${props.id}`}><div>{props.title}</div></NavLink>
          <Image src={props.image} />
          <NavLink to={`/page3/${props.id}`}><div>Edit</div></NavLink>
          <Buttoned onClick={()=> deleteProduct(props.id)}>Delete</Buttoned>

        </div>
      ))}
    </Container>
  )
}

export default Page1

const Container = styled.div`
  // background-color: beige;
  padding:10px 20px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  gap: 5px;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
`


const Buttoned = styled.button`
  background-color:transparent;
  border: 1px solid black;
  color:black;
  transition: all .3s;
  cursor:pointer;
  height:50px;
  border-radius: 5px;

  &:hover{
    background-color:black;
    color:white;
  }
`