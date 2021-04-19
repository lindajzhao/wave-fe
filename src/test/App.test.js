import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('should show customers list by default', () => {
    const { queryByTestId } = render(
      <App />
    )

    expect(queryByTestId('user-edit-display')).toBeTruthy();
    expect(queryByTestId('user-edit-form')).toBeFalsy();
  })
});
