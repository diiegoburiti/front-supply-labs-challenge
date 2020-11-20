import { render, screen } from '@testing-library/react'
import Home from '../../pages/Home/Home'

describe('<App />', () => {
  it('Renders <App /> component correctly', () => {
    render(<Home />)
    expect(screen.getByText(/Table App/)).toBeInTheDocument()
  })
})
