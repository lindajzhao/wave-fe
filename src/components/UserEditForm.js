import { Box, Nav, Heading, Form, FormField, TextInput, Select } from 'grommet'

export const UserEditForm = () => {
    return (
        <>
         <Box fill="vertical" overflow="auto" align="center" flex="grow">
        <Nav align="center" flex={false}>
          <Heading>
            Edit Customer
          </Heading>
        </Nav>
        <Form>
          <FormField label="Name" name="name">
            <TextInput />
          </FormField>
          <FormField label="email" name="email">
            <TextInput />
          </FormField>
          <FormField label="Channel">
            <Select options={["Website","Email","Phone","Word of mouth","Other"]} placeholder="Choose an option" />
          </FormField>
          <FormField label="Address" name="address">
            <TextInput />
          </FormField>
          <FormField label="Postal Code" name="postalCode">
            <TextInput name="postalCode" />
          </FormField>
          <FormField label="City" name="city">
            <TextInput name="city" />
          </FormField>
          <FormField label="Province" name="province">
            <TextInput name="province" size="small" />
          </FormField>
        </Form>
      </Box>
      </>
    )
}
