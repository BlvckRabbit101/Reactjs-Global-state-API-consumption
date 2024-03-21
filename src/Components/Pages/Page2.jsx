import React, { useState } from 'react'

const Page2 = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [store, setStore] = useState({})

  console.log(store)
  const handleSubmit = (e) => {
    e.preventDefault()

    setStore({title: title, description: description})

    localStorage.setItem('dummyData', JSON.stringify(store))
  }

  const item = JSON.parse(localStorage.getItem('dummyData'))
  console.log(item)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)} />
        <input type="text" placeholder='Description' value={description} onChange={(e)=> setDescription(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Page2
