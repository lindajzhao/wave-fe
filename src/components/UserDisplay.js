import { Box, Heading } from 'grommet'
import { UserDisplayCard } from './UserDisplayCard'

export const UserDisplay = ({ users, handleToggleEdit }) => {  
  return (
    <div>
      <Heading level="2">
        Customers
      </Heading>
      <Box align="center" justify="start" responsive wrap pad="small" direction="row-responsive" gap="small">
        {
          users.map((user, index) => 
            <UserDisplayCard user={user} key={`user-field-${user.id}-${index}`} handleToggleEdit={() => handleToggleEdit(index)} />
          )
        }
      </Box>
    </div>
  )
}
