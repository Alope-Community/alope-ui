import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, FileUpload } from '../components';
import Container from './Container';

function FileUploadPage() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);

  const handleFilesChange = (newFiles: File[]) => {
    setFiles(newFiles);
  };

  return (
    <Container title='File Upload Component' description='Allow users to upload files.'>

      {/* Dropzone Mode */}
      <section>
        <h2 className="text-2xl font-semibold dark:text-white mb-4">Dropzone Mode</h2>
        <FileUpload 
        placeholder={(isActive) => isActive ? 'Drop like is hot' : 'Drag n\' drop files here, or click to select files'} 
        onFilesChange={handleFilesChange} 
        acceptedFiles='.pdf' 
        maxKiloByte={6500} 
        helperText='test'
        placeholderClassName={(isActive) => isActive && 'text-error-500'}
        />
      </section>

      {/* Simple Mode */}
      <section>
        <h2 className="text-2xl font-semibold dark:text-white mb-4">Simple Mode</h2>
        <FileUpload
          onFilesChange={handleFilesChange}
          mode="simple"
          maxFiles={3}
        />
      </section>

      {/* Media Capture - Use Camera */}
      <section>
        <h2 className="text-2xl font-semibold dark:text-white mb-4">Capture from Camera</h2>
        <FileUpload
          inputLabel='Open Camera'
          onFilesChange={handleFilesChange}
          mediaCapture="environment"
          acceptedFiles="image/*"
          maxFiles={1}
          mode="simple"
          helperText='This will open your camera app (on supported devices).'
        />
      </section>

      {/* Dropzone with maxFiles = 3 */}
      <section>
        <h2 className="text-2xl font-semibold dark:text-white mb-4">Dropzone Mode (Max 3 files)</h2>
        <FileUpload
          onFilesChange={handleFilesChange}
          maxFiles={3}
        />
      </section>

      {/* Display uploaded files */}
      <section>
        <h2 className="text-2xl font-semibold dark:text-white mb-4">Uploaded Files</h2>
        {files.length > 0 ? (
          <ul className="space-y-1 list-disc list-inside text-sm text-gray-700">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">No files uploaded yet.</p>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold dark:text-white mb-4">File Upload with Helper Text</h2>
        <FileUpload
          onFilesChange={handleFilesChange}
          mode="simple"
          maxFiles={2}
          acceptedFiles="image/*"
          inputLabel="Upload image(s)"
          helperText="You can upload up to 2 image files. Only .jpg, .png, etc. are allowed."
        />
      </section>

    </Container>
  );
}

export default FileUploadPage;
