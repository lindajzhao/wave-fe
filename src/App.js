import React, { useEffect, useState } from 'react'
import { Grommet } from 'grommet'
import { UserDisplay, UserEditForm } from './components'

const App = () => {
  const [users, setUsers] = useState([])
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
  }

  const handleToggleEdit = (userToEdit) => {
    console.log(userToEdit)
  }

  return (
    <Grommet full>
      <>
        <div>
        <button onClick={() => setShowForm(true)}>show</button>
        </div>
        <UserDisplay users={users} handleToggleEdit={handleToggleEdit}/>
        {
          showForm && <UserEditForm user={users[0]} handleEditSubmit={handleEditSubmit} />
        }
      </>
    </Grommet>
  )
}

export default App;