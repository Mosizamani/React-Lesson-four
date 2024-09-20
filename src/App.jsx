import { useState } from 'react'
import './App.css'

function App() {


  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: ''
  })

  const [error, setError] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const validateDob = () => {
    const dob = new Date(formData.dob)
    const currentDate = new Date()
    const age = currentDate.getFullYear() - dob.getFullYear()
    if (age < 18) {
      return 'Age must be greater than 18'
    }
    return ''
  }

  const validate = () => {
    let tempError = {}

    if (!formData.name) {
      tempError = { ...tempError, name: 'Name is required' }
    }

    setError(tempError)
    return Object.keys(tempError).length === 0

  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (validate()) {
      console.log(formData)
    } else {
      console.log('Form has errors')
    }

    if (validateDob()) {
      console.log(validateDob())
    }
  }

  const handleButtonClick = (event) => {
    event.stopPropagation()
    console.log('Button clicked', event)
  }

  const handleDivClick = (event) => {
    console.log('Div clicked', event)
  }

  return (
    <>
      <div onClick={handleDivClick} style={{ color: 'red'}}>
        <button onClick={handleButtonClick}>Click me</button>
      </div>
      <br></br><hr></hr><br></br>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default App
