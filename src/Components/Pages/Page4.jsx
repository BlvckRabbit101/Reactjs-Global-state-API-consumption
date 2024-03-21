import React from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom'; 
import { useEffect, useState } from 'react';

const Page4 = () => {
    const container = {
        backgroundColor: 'red',
        color:'white',
        padding:'10px 20px',
        height:'100%',
        fontSize:'16px',
        fontWeight:'700'
    }
    const [data, setData] = useState()
    const {id} = useParams()
    const getOneProduct = async() => {
      await axios.get(`https://fakestoreapi.com/products/${id}`).then(res => {
        console.log(res.data);
        setData(res.data)
      }).catch(error => {
        console.log(error);
      })
    }

    useEffect(() => {
      getOneProduct()
    },[])

  return ( 
    <div style={container}>
        <div>{data?.title}</div>
        <div>{data?.price}</div>
        <div>{data?.category}</div>
        <div>{data?.description}</div>
    </div>
  )
}

export default Page4

