import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import * as S from './styles'

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

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...highlightProps} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render align left when set left alignment prop', () => {
    const { container } = renderWithTheme(
      <Highlight {...highlightProps} alignment="left" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
