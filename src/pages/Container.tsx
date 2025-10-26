import { useNavigate } from 'react-router-dom'
import { Button } from '../components'
import { useTheme } from '../context/ThemeContext';

type ContainerProps = {
    title: string;
    description: string;
    children: React.ReactNode;
}

const Container = ({ title, description, children }: ContainerProps) => {
    const navigate = useNavigate()
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`p-10 space-y-12 min-h-screen bg-gradient-to-br dark:from-gray-900 dark:to-gray-700 from-primary/25 not-dark:via-white to-blue-100`}>

            <Button
                onClick={() => navigate(-1)}
                className="absolute top-10 left-10 flex items-center gap-2"
                prefixIcon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                }>
                Back
            </Button>

            <header className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{title}</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                    {description}
                </p>
            </header>

            <Button onClick={toggleTheme} className="absolute top-10 right-10">
                Toggle {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode
            </Button>

            <div className="max-w-4xl mx-auto space-y-10">
                {children}
            </div>

        </div>
    )
}

export default Container