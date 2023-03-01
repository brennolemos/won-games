import 'match-media-mock'
import { render, screen } from '@testing-library/react'

import Slider from '.'

describe('<Slider />', () => {
  it('should render the heading', () => {
    render(
      <Slider settings={{ slidesToShow: 2 }}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>
    )

    expect(screen.getByText(/item 1/i)).toBeInTheDocument()
    expect(screen.getByText(/item 2/i)).toBeInTheDocument()
  })
})
