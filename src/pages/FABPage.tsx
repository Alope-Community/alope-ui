import { useState } from 'react';
import { FAB, Button } from '../components';
import Container from './Container';

// Placeholder icons for actions
const EditIcon = () => <span role="img" aria-label="edit">✏️</span>;
const ShareIcon = () => <span role="img" aria-label="share">🔗</span>;
const HomeIcon = () => <span role="img" aria-label="home">🏠</span>;

function FABPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState<'vertical' | 'horizontal'>('vertical');

  return (
    <Container title="FAB Component" description="A floating action button that can display multiple related actions.">

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Interactive Demo</h2>
        <div className="space-y-4 p-4 border dark:border-white rounded-lg">
          <div className="flex flex-wrap gap-4 items-center">
            <p className='font-medium dark:text-white'>Toggle FAB:</p>
            <Button onClick={() => setIsOpen(!isOpen)} variant="outline">
              {isOpen ? 'Close FAB' : 'Open FAB'}
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <p className='font-medium dark:text-white'>Set Direction:</p>
            <Button
              variant={direction === 'vertical' ? 'solid' : 'outline'}
              onClick={() => setDirection('vertical')}
            >
              Vertical
            </Button>
            <Button
              variant={direction === 'horizontal' ? 'solid' : 'outline'}
              onClick={() => setDirection('horizontal')}
            >
              Horizontal
            </Button>
          </div>
        </div>
        <div className="h-64 mt-4 p-4 border border-dashed rounded-lg text-gray-600 dark:text-gray-400 flex items-center justify-center">
          <p className="text-center">
            The FAB is fixed to the bottom-right of the viewport.
            <br />
            Use the controls above to see it in action.
          </p>
        </div>
      </section>

      <FAB
        isOpen={isOpen}
        onOpen={() => setIsOpen(!isOpen)}
        direction={direction}
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="12" />
            <path
              d="M12 7v10M7 12h10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      >
        <Button onClick={() => alert('Edit clicked!')} title="Edit">
          <EditIcon />
        </Button>
        <Button onClick={() => alert('Share clicked!')} title="Share">
          <ShareIcon />
        </Button>
        <Button onClick={() => alert('Go Home')} title="Home">
          <HomeIcon />
        </Button>
      </FAB>

    </Container>
  );
}

export default FABPage;
