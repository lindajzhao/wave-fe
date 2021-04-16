import { useState } from 'react'
import { Heading, Form, FormField, TextInput, Select, Button } from 'grommet'

export const UserEditForm = ({ user, handleEditSubmit, handleCancelEdit }) => {
    const [formValues, setFormValues] = useState(user);

    return (
        <div>
        <Heading level={2}>
        Edit Customer
        </Heading>
        <Form 
            name="editUser" 
            value={formValues} 
            onChange={nextValue => setFormValues(nextValue)}
            onSubmit={() => handleEditSubmit(formValues)}
            onReset={handleCancelEdit}
        >
          <FormField label="Name" htmlFor="user-edit-name">
            <TextInput name="name" id="user-edit-name"/>
          </FormField>
          <FormField label="email" htmlFor="user-edit-email">
            <TextInput name="email" id="user-edit-email"/>
          </FormField>
          <FormField label="Channel" name="channel">
            <Select 
              options={["website","email","phone","word-of-mouth","other"]} 
              placeholder="Choose an option" 
              name="channel"
            />
          </FormField>
          <FormField label="Address" htmlFor="user-edit-address">
            <TextInput name="address" id="user-edit-address" />
          </FormField>
          <FormField label="Postal Code" htmlFor="user-edit-postalCode">
            <TextInput name="postal" id="user-edit-postalCode"/>
          </FormField>
          <FormField label="City" htmlFor="user-edit-city">
            <TextInput name="city" id="user-edit-city"/>
          </FormField>
          <FormField label="Province" htmlFor="user-edit-province">
            <TextInput name="province" size="small" id="user-edit-province" />
          </FormField>
          <Button label="Submit Changes" size="small" type="submit"></Button>
          <Button label="Cancel" size="small" type="reset"></Button>
        </Form>
      </div>
    )
}
