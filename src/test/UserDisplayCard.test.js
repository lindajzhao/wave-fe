import { render, fireEvent } from '@testing-library/react'

import { UserDisplayCard } from '../components/UserDisplayCard';
import { CUSTOMERS_MOCK } from './mocks'

describe('UserDisplayCard', () => {
  it('should show each customer property', () => {
    const { getAllByTestId } = render(
      <UserDisplayCard 
        user={CUSTOMERS_MOCK[0]}
        handleToggleEdit={() => {}}
      />
    )

    expect(getAllByTestId('user-display-field').length).toEqual(9)
  })

  it('should toggle edit when button is clicked', () => {
    const handleToggleEditStub = jest.fn()

    const { getByText } = render(
      <UserDisplayCard 
        user={CUSTOMERS_MOCK[3]}
        handleToggleEdit={handleToggleEditStub}
      />
    )

    const editButton = getByText('Edit')
    fireEvent.click(editButton)

    expect(handleToggleEditStub).toBeCalledTimes(1)
  })
});
