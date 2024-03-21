import React from 'react'
import { Form } from 'react-router-dom'
import styled from '@emotion/styled'
import useForm from '../../Handler/useForm'

const Page5 = () => {
    const {handleChange, values, error} = useForm()
  
    console.log(error);
    const FormData = async(values) => {
console.log(values)
    }

    const handleSubmit = (event) => {
      event.preventDefault()

      if(Object.keys(values).length !== 0 && Object.keys(error).length === 0) {
          FormData(values)
        } else {
          alert('Error! Input Fields')
        }
    }

  return (
    <Container>
      <Card onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <div style={{marginBottom:'20px'}}>
          <Head>Fullname</Head>
          <Input type="text" placeholder='Fullname...' name='fullName' onChange={handleChange}/>
          { error && <Error>{error.fullName}</Error>}
        </div>
        <div style={{marginBottom:'20px'}}>
          <Head>Email</Head>
          <Input type="text" placeholder='Email...' name='email' onChange={handleChange}/>
          <Error>Error</Error>
        </div>
        <div style={{marginBottom:'20px'}}>
          <Head>Password</Head>
          <Input type="text" placeholder='Password...' name='password' onChange={handleChange}/>
          <Error>Error</Error>
        </div>
        <Button>Sign Up</Button>
        
      </Card>
    </Container>
  )
}

export default Page5

const Container = styled.div`
  // background-color: beige;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100vh;
`

const Card = styled.form`
  width:400px;
  // height:300px;
  padding: 50px;
  background-color: beige;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;

`

const Title = styled.div`
  font-size:28px;
  font-weight:700;
  font-family:cursive;
  margin:20px;
  text-align:center;
  width:100%;
`

const Head = styled.div`
  font-size:18px;
  font-family:cursive;
`


const Input = styled.input`
  padding: 10px 35px;
  border: 1px solid grey;
  border-radius:5px;
  width:100%;
`

const Button = styled.button`
  background-color: gold;
  padding: 10px 35px;
  color:white;
  width:250px;
  margin-bottom:40px;

    &:hover{
      background-color: black;
    }
`

const Error = styled.div`
    color:red;
`