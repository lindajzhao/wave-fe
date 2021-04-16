import { useState } from 'react'
import { Box, Nav, Heading, Form, FormField, TextInput, Select, Button } from 'grommet'

export const UserEditForm = ({ user, handleEditSubmit }) => {
    const [formValues, setFormValues] = useState(user);
    console.log(user)
    return (
        <>
         <Box fill="vertical" overflow="auto" align="center" flex="grow">
        <Nav align="center" flex={false}>
          <Heading level={2}>
            Edit Customer
          </Heading>
        </Nav>
        <Form 
            name="editUser" 
            value={formValues} 
            onChange={nextValue => setFormValues(nextValue)}
            onSubmit={() => handleEditSubmit(formValues)}
        >
          <FormField label="Name" htmlFor="user-edit-name">
            <TextInput name="name" id="user-edit-name"/>
          </FormField>
          <FormField label="email" htmlFor="user-edit-email">
            <TextInput name="email" id="user-edit-email"/>
          </FormField>
          <FormField label="Channel">
            <Select options={["Website","Email","Phone","Word of mouth","Other"]} placeholder="Choose an option" />
          </FormField>
          <FormField label="Address" htmlFor="user-edit-address">
            <TextInput name="address" id="user-edit-address" />
          </FormField>
          <FormField label="Postal Code" htmlFor="user-edit-postalCode">
            <TextInput name="postalCode" id="user-edit-postalCode"/>
          </FormField>
          <FormField label="City" htmlFor="user-edit-city">
            <TextInput name="city" id="user-edit-city"/>
          </FormField>
          <FormField label="Province" htmlFor="user-edit-province">
            <TextInput name="province" size="small" id="user-edit-province" />
          </FormField>
          <Button label="Submit Changes" size="small" type="submit"></Button>
        </Form>
      </Box>
      </>
    )
}
