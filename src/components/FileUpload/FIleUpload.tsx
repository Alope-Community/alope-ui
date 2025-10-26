import React, { useState, useRef } from 'react';
import { cn } from 'clsx-for-tailwind';

interface FileUploadProps {
    acceptedFiles?: string;
    maxFiles?: number;
    helperText?: string;
    inputLabel?: string;
    maxKiloByte?: number
    mediaCapture?: 'user' | 'environment';
    mode?: 'dropzone' | 'textinput';
    clearable?: boolean;
    onFilesChange: (files: File[]) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({
    acceptedFiles = 'image/*',
    maxFiles = 1,
    inputLabel,
    maxKiloByte = 2048,
    helperText,
    mediaCapture,
    mode = 'dropzone',
    clearable = true,
    onFilesChange,
}) => {
    const [files, setFiles] = useState<File[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isDragActive, setIsDragActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newFiles = event.target.files ? Array.from(event.target.files) : [];

        if (newFiles.length === 0) return;

        const validFiles = handleValidation(newFiles);
        if (!validFiles.length) return;

        const allFiles = maxFiles === 1
            ? validFiles.slice(0, 1)
            : [...files, ...validFiles].slice(0, maxFiles);

        setFiles(allFiles);
        onFilesChange(allFiles);
        setErrorMessage('');

        inputRef.current!.value = '';
    };

    const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragActive(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragActive(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragActive(false);

        const droppedFiles = Array.from(event.dataTransfer.files);

        const validFiles = handleValidation(droppedFiles);
        if (!validFiles.length) return;

        const allFiles = maxFiles === 1
            ? validFiles.slice(0, 1)
            : [...files, ...validFiles].slice(0, maxFiles);

        setFiles(allFiles);
        onFilesChange(allFiles);
        setErrorMessage('');

        inputRef.current!.value = '';
    };

    const handleClear = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
        event.stopPropagation();
        const restFiles = files.filter((_, i) => i !== index);
        setFiles(restFiles);
        onFilesChange(restFiles);

        if (restFiles.length === 0 && inputRef.current) {
            inputRef.current.value = ''
        }
    };

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const isFileAccepted = (file: File, accepted: string): boolean => {
        const acceptedList = accepted.split(',').map(type => type.trim());

        return acceptedList.some(type => {
            if (type === '') return false;
            if (type === file.type) return true;
            if (type.endsWith('/*')) {
                const baseType = type.split('/')[0];
                return file.type.startsWith(baseType + '/');
            }
            if (type.startsWith('.')) {
                return file.name.toLowerCase().endsWith(type.toLowerCase());
            }
            return false;
        });
    };

    const handleValidation = (newFiles: File[]): File[] => {
        const maxByte = maxKiloByte * 1024;

        const tooLarge = newFiles.find(f => f.size > maxByte);
        if (tooLarge) {
            setErrorMessage(
                `File "${tooLarge.name}" exceeds size limit of ${(maxKiloByte / 1024).toFixed(2)} MB.`
            );
            inputRef.current!.value = '';
            return [];
        }

        const invalidType = newFiles.find(f => !isFileAccepted(f, acceptedFiles));
        if (invalidType) {
            setErrorMessage(`File type "${invalidType.type}" is not accepted.`);
            inputRef.current!.value = '';
            return [];
        }

        const total = files.length + newFiles.length;
        if (total > maxFiles) {
            setErrorMessage(`You can only upload up to ${maxFiles} files.`);
            inputRef.current!.value = '';
            return [];
        }

        return newFiles;
    };

    const renderPreview = () => {
        return files.map((file, index) => (
            <div
                key={index}
                onClick={(e) => e.stopPropagation()}
                className="relative pt-7 pb-3 px-5 border border-secondary dark:border-secondary-dark-700 rounded max-w-sm cursor-default"
            >
                <div className="flex items-center justify-center max-w-full h-56 mb-3">
                    {file.type.startsWith('image/') ? (
                        <img src={URL.createObjectURL(file)} alt={file.name} className="max-w-full h-56 object-cover" />
                    ) : (
                        <div className="text-secondary dark:text-secondary-dark text-sm italic">Preview not available</div>
                    )}
                </div>
                <p className="text-xs text-secondary dark:text-secondary-dark text-center">{file.name}</p>
                {clearable && files.length > 0 && (
                    <div className="absolute top-0 right-0 z-10">
                        <button onClick={(event) => handleClear(event, index)} className="w-auto h-auto py-2 px-2 bg-error text-white rounded-xs hover:cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                className="w-4 h-4 fill-white"
                            >
                                <g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                    <g transform="scale(5.33333,5.33333)">
                                        <path d="M39.48633,6.97852c-0.39614,0.00936 -0.77249,0.17506 -1.04687,0.46094l-14.43945,14.43945l-14.43945,-14.43945c-0.28248,-0.2909 -0.67069,-0.45506 -1.07617,-0.45508c-0.61064,0.00015 -1.16026,0.37042 -1.38978,0.93629c-0.22952,0.56587 -0.09314,1.21439 0.34486,1.63988l14.43945,14.43945l-14.43945,14.43945c-0.39185,0.37623 -0.54969,0.9349 -0.41265,1.46055c0.13704,0.52565 0.54754,0.93616 1.07319,1.07319c0.52565,0.13704 1.08432,-0.02081 1.46055,-0.41265l14.43945,-14.43945l14.43945,14.43945c0.37623,0.39185 0.9349,0.54969 1.46055,0.41265c0.52565,-0.13704 0.93616,-0.54754 1.07319,-1.07319c0.13704,-0.52565 -0.0208,-1.08432 -0.41265,-1.46055l-14.43945,-14.43945l14.43945,-14.43945c0.44646,-0.42851 0.58398,-1.08719 0.34628,-1.65854c-0.2377,-0.57135 -0.80184,-0.93811 -1.4205,-0.92349z"></path>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        ));
    };

    if (mode === 'dropzone') {
        return (
            <div className="">
                <div
                    className={cn(
                        'flex gap-5 flex-wrap items-center-safe justify-center-safe border-4 border-dashed rounded-lg p-6 text-center cursor-pointer dark:text-white',
                        isDragActive ? 'border-info dark:border-info-dark' : 'border-secondary dark:border-secondary-dark'
                    )}
                    onDragEnter={handleDragEnter}
                    onDragOver={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleClick}
                >
                    <input
                        type="file"
                        ref={inputRef}
                        className="hidden"
                        accept={acceptedFiles}
                        multiple={maxFiles > 1}
                        capture={mediaCapture}
                        onChange={handleFileChange}
                    />
                    {files.length > 0 ? renderPreview() : <p className='text-sm md:text-base'>Drag & drop files here, or click to select files</p>}
                </div>
                {errorMessage ? (
                    <p className="text-error text-sm mt-2">{errorMessage}</p>
                ) : (
                    helperText && <p className="text-sm text-gray-500 dark:text-secondary-dark mt-2">{helperText}</p>
                )}
            </div>
        );
    }

    return (
        <div onClick={handleClick} className="cursor-pointer inline-block">
            <input
                type="file"
                ref={inputRef}
                accept={acceptedFiles}
                multiple={maxFiles > 1}
                capture={mediaCapture}
                onChange={handleFileChange}
                className="hidden"
            />

            <div className="inline-flex items-center gap-2 px-4 py-2 border border-secondary rounded bg-gray-50 hover:bg-secondary-30 text-sm dark:border-secondary-dark dark:bg-gray-700 dark:hover:bg-secondary-dark-700 dark:text-white">
                <span className="font-medium">
                    {files.length > 0
                        ? `${files.length} file${files.length > 1 ? 's' : ''} selected`
                        : inputLabel ?? 'Choose file'}
                </span>
            </div>

            {files.length > 0 && <div className="flex gap-5 flex-wrap mt-2">{renderPreview()}</div>}

            {errorMessage ? (
                <p className="text-error text-sm mt-2">{errorMessage}</p>
            ) : (
                helperText && <p className="text-sm text-gray-500 dark:text-secondary-dark mt-2">{helperText}</p>
            )}
        </div>
    );

};
