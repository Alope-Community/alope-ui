import { useState } from 'react'
import { CodeInput } from '../components'
import Container from './Container'

const CodeInputPage = () => {
    const [code, setCode] = useState('');

    return (
        <Container title='Code Input Component' description='Used to input the code verification.'>

            {/* Basic Example */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2 dark:text-white">Basic Code Input</h2>
                <CodeInput length={4} value={code} onCodeChange={setCode} />
            </section>

            {/* With Label */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2 dark:text-white">Code Input with Label</h2>
                <CodeInput label="Enter your verification code" length={6} value={code} onCodeChange={setCode} />
            </section>

            {/* Different Sizes */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2 dark:text-white">Code Input with Different Sizes</h2>
                <div className="flex flex-col gap-4">
                    {(['sm', 'md', 'lg', 'xl'] as const).map((size, index) => (
                        <div key={index}>
                            <p className="mb-1 dark:text-white">Size: {size}</p>
                            <CodeInput length={4} inputSize={size} value={code} onCodeChange={setCode} />
                        </div>

                    ))}
                </div>
            </section>

            {/* Disabled and ReadOnly */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2 dark:text-white">Disabled and ReadOnly Code Input</h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="mb-1 dark:text-white">Disabled</p>
                        <CodeInput length={4} disabled value={code} onCodeChange={setCode} />
                    </div>
                    <div>
                        <p className="mb-1 dark:text-white">Read Only</p>
                        <CodeInput length={4} readOnly value={code} onCodeChange={setCode} />
                    </div>
                </div>
            </section>

            <section>
                <p className='dark:text-white'>Your code is: {code}</p>
            </section>

        </Container>
    );
};

export default CodeInputPage;