import { Box, Heading, CardBody, Button } from 'grommet'
import { UserDisplayField } from './UserDisplayField'

export const UserDisplay = ({ user, handleEdit }) => {  
  return (
    <Box fill="vertical" overflow="auto" align="center" flex="grow">
      <Heading level="2">
        Customers
      </Heading>
      <Box align="center" justify="start" responsive wrap pad="small" direction="row-responsive" gap="small">
        <Box align="center" justify="center" border={{"color":"status-unknown"}} margin={{"bottom":"small"}}>
          <CardBody pad="xsmall" gap="none" align="start">
            <UserDisplayField name={"name"} value={"linda"}/>
            <Button label="Edit" size="small" onClick={() => handleEdit(user.id)}/>
          </CardBody>
        </Box>
      </Box>
    </Box>
  )
}
