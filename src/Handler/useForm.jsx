import {useState} from 'react'

const useForm = () => {
  const [values, setValues] = useState([])
  const [error, setError] = useState([])

    const validation =(value, name) => {
        switch(name){
            case 'fullName': 
                if(value.length <= 2) {
                    setError({...error, [name]: 'The name should be greater than two'})
                }
                else {
                    setError({})
                }
        }
    }

    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        validation(value, name)
        setValues({...values, [name]: value})
    }
    
    return {
        handleChange,
        values,
        error
    }

}



export default useForm
