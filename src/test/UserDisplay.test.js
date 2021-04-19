import { render } from '@testing-library/react';
import { UserDisplay } from '../components/UserDisplay';
import { CUSTOMERS_MOCK } from './mocks'

describe('UserDisplay', () => {
  it('should show one card for each customer in array', () => {
    const { queryAllByTestId, queryByText } = render(
      <UserDisplay 
        users={CUSTOMERS_MOCK}
      />
    )

    expect(queryByText('No Customers')).toBeNull();
    expect(queryAllByTestId('user-display-card').length).toEqual(4);
  })

  it('should display "No Customers" if no customers in array', () => {
    const { queryAllByTestId, queryByText } = render(
      <UserDisplay 
        users={[]}
      />
    )

    expect(queryByText('No Customers')).toBeTruthy();
    expect(queryAllByTestId('user-display-card').length).toEqual(0);
  })
});
