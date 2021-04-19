import { render, fireEvent } from '@testing-library/react'

import { UserEditForm } from '../components/UserEditForm';
import { CUSTOMERS_MOCK } from './mocks'

describe('UserEditForm', () => {
  it('should show initial values in form', () => {
    const { getByLabelText, getByTestId } = render(
      <UserEditForm 
        user={CUSTOMERS_MOCK[1]}
        handleEditSubmit={() => {}}
        handleCancelEdit={() => {}}
      />
    )

    const nameField = getByLabelText('Name');
    expect(nameField.value).toBe(CUSTOMERS_MOCK[1].name)
    const emailField = getByLabelText('Email');
    expect(emailField.value).toBe(CUSTOMERS_MOCK[1].email)
    const addressField = getByLabelText('Address');
    expect(addressField.value).toBe(CUSTOMERS_MOCK[1].address)
    const postalField = getByLabelText('Postal Code');
    expect(postalField.value).toBe(CUSTOMERS_MOCK[1].postal)
    const cityField = getByLabelText('City');
    expect(cityField.value).toBe(CUSTOMERS_MOCK[1].city)
    const provinceField = getByLabelText('Province');
    expect(provinceField.value).toBe(CUSTOMERS_MOCK[1].province)
    
    const channelField = getByTestId('user-edit-form-select');
    expect(channelField.value).toBe(CUSTOMERS_MOCK[1].channel)
  })
  
  it('should submit form if there are no errors', () => {
    const submitStub = jest.fn();

    const { getByText } = render(
      <UserEditForm 
      user={CUSTOMERS_MOCK[1]}
      handleEditSubmit={submitStub}
      handleCancelEdit={() => {}}
      />
    )

    const submitBtn = getByText("Submit Changes");

    fireEvent.click(submitBtn)
    expect(submitStub).toBeCalledTimes(1)
    expect(submitStub).toBeCalledWith(CUSTOMERS_MOCK[1])
  })
});
