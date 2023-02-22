import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const highlightProps = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-image.jpg'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...highlightProps} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...highlightProps} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${highlightProps.backgroundImage})`
    })
  })

  it('should render float image', () => {
    renderWithTheme(
      <Highlight {...highlightProps} floatImage="/float-image.png" />
    )

    expect(
      screen.getByRole('img', { name: highlightProps.title })
    ).toHaveAttribute('src', '/float-image.png')
  })
})
