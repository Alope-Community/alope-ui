import { cn } from "clsx-for-tailwind";
import { useRef, type InputHTMLAttributes, type KeyboardEvent } from "react";

const CodeInputSize = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-14 h-14 text-lg',
    xl: 'w-16 h-16 text-xl',
}

export type CodeInputProps = {
    label?: string;
    value: string
    length: number;
    labelClassName?: string
    onCodeChange: (code: string) => void;
    inputSize?: keyof typeof CodeInputSize;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export const CodeInput: React.FC<CodeInputProps> = ({
    id,
    label,
    length,
    value,
    disabled,
    labelClassName,
    name,
    onCodeChange,
    inputSize = 'md',
    ...props
}) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const inputSizeClasses = CodeInputSize[inputSize]

    const findFirstEmptyIndex = () => {
        for (let i = 0; i < length; i++) {
            if (!inputRefs.current[i]?.value) {
                return i;
            }
        }
        return -1;
    };

    const handleInputChange = (index: number) => {
        const code = inputRefs.current.map(input => input?.value || '').join('');
        if (onCodeChange) {
            onCodeChange(code);
        }

        if (inputRefs.current[index]?.value && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleFocus = (index: number) => {
        const firstEmptyIndex = findFirstEmptyIndex();

        if (firstEmptyIndex !== -1 && firstEmptyIndex < index) {
            inputRefs.current[firstEmptyIndex]?.focus();
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !inputRefs.current[index]?.value && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, length);
        pastedData.split('').forEach((char, index) => {
            if (inputRefs.current[index]) {
                inputRefs.current[index]!.value = char;
                handleInputChange(index);
            }
        });
    };

    return (
        <div className="flex flex-col gap-2">
            {label && <label htmlFor={id || name} className={cn("block text-sm font-medium mb-1 dark:text-white", labelClassName)}>{label}</label>}
            <div className="flex gap-2" onPaste={handlePaste}>
                {Array.from({ length }, (_, index) => (
                    <input
                        key={index}
                        ref={el => { inputRefs.current[index] = el }}
                        type="text"
                        disabled={disabled}
                        value={value?.[index]}
                        maxLength={1}
                        onChange={() => handleInputChange(index)}
                        onKeyDown={e => handleKeyDown(e, index)}
                        onFocus={() => handleFocus(index)}
                        className={cn(
                            'text-center border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary border-secondary dark:text-white dark:placeholder:text-white',
                            inputSizeClasses,
                            {
                                'bg-secondary/40 cursor-not-allowed ': disabled
                            }
                        )}
                        {...props}
                    />
                ))}
            </div>
        </div>
    );
};