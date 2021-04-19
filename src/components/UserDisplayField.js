import { Box, Heading, Text } from 'grommet'

export const UserDisplayField = ({ name, value }) => (
    <Box align="end" justify="center" pad="xsmall" gap="none" direction="row" data-testid="user-display-field">
        <Heading level={3} textAlign="start" margin={{"horizontal":"none","top":"none","bottom":"none","right":"xsmall"}} size="xsmall">
            {name}:
        </Heading>
        <Text size="med">{value}</Text>
    </Box>
)
