import { Box, CardBody, Button } from 'grommet'
import { UserDisplayField } from './UserDisplayField'

export const UserDisplayCard = ({ user, handleToggleEdit }) => (
    <Box align="center" justify="center" border={{"color":"status-unknown"}} margin={{"bottom":"small"}} data-testid="user-display-card">
        <CardBody pad="xsmall" gap="none" align="start">
            {/* Display each property */}
            {
                Object.entries(user).map((userProperty, index) => {
                    const [name, value] = userProperty
                    return <UserDisplayField name={name} value={value} key={`user-${index}-${name}`}/>
                })
            }
            <Button label="Edit" size="small" onClick={handleToggleEdit}/>
        </CardBody>
    </Box>
)
