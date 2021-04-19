import React, { useEffect, useState } from 'react'
import { Grommet, Heading, Box } from 'grommet'
import { UserDisplay, UserEditForm } from './components'

const App = () => {
  // This `user` state is the "single source of truth"
  const [users, setUsers] = useState([])
  const [userIndexToEdit, setUserIndexToEdit] = useState(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    /**
     * Fetch customers array from endpoint and set to state.
     * It currently only runs once - on load
     */
    const getUsers = async () => {
      try {
        const response = await fetch('https://rawgit.com/wvchallenges/se-exp-challenge-invoice/master/settings.json')
        const json = await response.json()
        setUsers(json.customers)
      } catch (error) {
        // Add more error handling here
        console.log(error)
      }
    }

    getUsers()
  }, [])

  /**
   * Send new customer object to server
   * Close the form
   * Updates the app with the new customer properties (probably shouldn't do this in a real app though)
   */
  const handleEditSubmit = (newUserValues) => {
    console.log("Saved with value", newUserValues)
    // send object to edit endpoint
    setShowForm(false)

    const newUserArray = users;
    newUserArray[userIndexToEdit] = newUserValues;

    setUsers(newUserArray)
  }

  /**
   * Determine which customer is being edited, and save it to state
   * Show form
   */
  const handleToggleEdit = (userIndex) => {
    setUserIndexToEdit(userIndex)
    setShowForm(true)
  }

  /**
   * Cancel user edit, clear `userIndexToEdit` state
   * Close form
   */
  const handleCancelEdit = () => {
    setUserIndexToEdit(null)
    setShowForm(false)
  }

  return (
    <Grommet full>
      <Box as="header" pad="medium">
        <Heading level={1}>Wave FE Challenge - Linda Zhao</Heading>
      </Box>
      <Box as="main" pad="medium" height="auto">
        {
          showForm ? 
          <UserEditForm user={users[userIndexToEdit]} handleEditSubmit={handleEditSubmit} handleCancelEdit={handleCancelEdit} /> :
          <UserDisplay users={users} handleToggleEdit={handleToggleEdit}/> 
        }
      </Box>
    </Grommet>
  )
}

export default App;