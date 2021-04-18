import React, { useEffect, useState } from 'react'
import { Grommet, Main, Heading, Box } from 'grommet'
import { UserDisplay, UserEditForm } from './components'

const App = () => {
  const [users, setUsers] = useState([])
  const [userToEdit, setUserToEdit] = useState(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('https://rawgit.com/wvchallenges/se-exp-challenge-invoice/master/settings.json')
        const json = await response.json()
        setUsers(json.customers)
      } catch (error) {
        console.log(error)
      }
    }

    getUsers()
  }, [])

  const handleEditSubmit = (newUserValues) => {
    console.log("Saved with value", newUserValues)
    // send object to edit endpoint
    setShowForm(false)
    let newUserArray = users;
    newUserArray[userToEdit] = newUserValues;

    setUsers(newUserArray)
  }

  const handleToggleEdit = (userIndex) => {
    setUserToEdit(userIndex)
    setShowForm(true)
  }

  const handleCancelEdit = () => {
    setUserToEdit(null)
    setShowForm(false)
  }

  return (
    <Grommet full>
      <Box as="header" pad="medium">
        <Heading level={1}>Wave FE Challenge - Linda Zhao</Heading>
      </Box>
      <Main pad="medium">
        {
          showForm ? 
          <UserEditForm user={users[userToEdit]} handleEditSubmit={handleEditSubmit} handleCancelEdit={handleCancelEdit} /> :
          <UserDisplay users={users} handleToggleEdit={handleToggleEdit}/> 
        }
      </Main>
    </Grommet>
  )
}

export default App;