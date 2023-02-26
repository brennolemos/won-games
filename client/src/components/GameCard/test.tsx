import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const gameCardProps = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300X140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...gameCardProps} />)

    expect(
      screen.getByRole('heading', { name: gameCardProps.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gameCardProps.developer })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: gameCardProps.title })
    ).toHaveAttribute('src', gameCardProps.img)

    expect(screen.getByText(gameCardProps.price)).toBeInTheDocument()
  })
})
