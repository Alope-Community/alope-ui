import { Masonry } from '../components'
import { useTheme } from '../context/ThemeContext'
import Container from './Container'

const MasonryPage = () => {
  const { theme } = useTheme()

  const item = [
    {
      id: 1,
      src: theme === 'light' ? 'https://placehold.co/400x600?text=Item+1' : 'https://placehold.co/400x600/000000/FFFFFF/png?text=Item+1',
    },
    {
      id: 2,
      src: theme === 'light' ? 'https://placehold.co/400x400?text=Item+2' : 'https://placehold.co/400x400/000000/FFFFFF/png?text=Item+2',
    },
    {
      id: 3,
      src: theme === 'light' ? 'https://placehold.co/400x500?text=Item+3' : 'https://placehold.co/400x500/000000/FFFFFF/png?text=Item+3',
    },
    {
      id: 4,
      src: theme === 'light' ? 'https://placehold.co/400x600?text=Item+4' : 'https://placehold.co/400x600/000000/FFFFFF/png?text=Item+4',
    },
    {
      id: 5,
      src: theme === 'light' ? 'https://placehold.co/400x300?text=Item+5' : 'https://placehold.co/400x300/000000/FFFFFF/png?text=Item+5',
    },
    {
      id: 6,
      src: theme === 'light' ? 'https://placehold.co/400x400?text=Item+6' : 'https://placehold.co/400x400/000000/FFFFFF/png?text=Item+6',
    },
    {
      id: 7,
      src: theme === 'light' ? 'https://placehold.co/400x600?text=Item+7' : 'https://placehold.co/400x600/000000/FFFFFF/png?text=Item+7',
    },
    {
      id: 8,
      src: theme === 'light' ? 'https://placehold.co/400x500?text=Item+8' : 'https://placehold.co/400x500/000000/FFFFFF/png?text=Item+8',
    },
    {
      id: 9,
      src: theme === 'light' ? 'https://placehold.co/400x700?text=Item+9' : 'https://placehold.co/400x700/000000/FFFFFF/png?text=Item+9',
    },
    {
      id: 10,
      src: theme === 'light' ? 'https://placehold.co/400x300?text=Item+10' : 'https://placehold.co/400x300/000000/FFFFFF/png?text=Item+10',
    },
  ]
  return (
    <Container title='Masonry Component' description='Create a "Masonry Grid" layout.'>
      <Masonry cols={{ base: 1, md: 2, lg: 4 }} gap={4} className='outline-4 p-4 bg-white dark:bg-gray-600 outline-dashed rounded-2xl outline-gray-600 dark:outline-white'>
        {item.map((item) => (
          <img
            src={item.src}
            alt="placeholder"
            className="w-full h-auto rounded-lg mb-4"
          />
        ))}
      </Masonry>
    </Container>
  )
}

export default MasonryPage