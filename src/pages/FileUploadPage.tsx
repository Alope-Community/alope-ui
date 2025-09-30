import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, FileUpload } from '../components';

function FileUploadPage() {
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);

  const handleFilesChange = (newFiles: File[]) => {
    setFiles(newFiles);
  };

  return (
    <div className="relative p-10 space-y-12 bg-gray-50 min-h-screen bg-gradient-to-br from-primary/25 via-white to-blue-100">

      {/* Back Button */}
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

      {/* Page Title */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">File Upload Component</h1>
        <p className="text-lg text-gray-600 mt-2">Allow users to upload files.</p>
      </header>

      <div className="max-w-4xl mx-auto space-y-12">

        {/* Dropzone Mode */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Dropzone Mode</h2>
          <FileUpload onFilesChange={handleFilesChange} />
        </section>

        {/* TextInput Mode */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">TextInput Mode</h2>
          <FileUpload
            onFilesChange={handleFilesChange}
            mode="textinput"
            maxFiles={3}
          />
        </section>

        {/* Media Capture - Use Camera */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Capture from Camera</h2>
          <FileUpload
            inputLabel='Open Camera'
            onFilesChange={handleFilesChange}
            mediaCapture="environment"
            acceptedFiles="image/*"
            maxFiles={1}
            mode="textinput"
            helperText='This will open your camera app (on supported devices).'
          />
        </section>

        {/* Dropzone with maxFiles = 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Dropzone Mode (Max 3 files)</h2>
          <FileUpload
            onFilesChange={handleFilesChange}
            maxFiles={3}
          />
        </section>

        {/* Display uploaded files */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Uploaded Files</h2>
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
          <h2 className="text-2xl font-semibold mb-4">File Upload with Helper Text</h2>
          <FileUpload
            onFilesChange={handleFilesChange}
            mode="textinput"
            maxFiles={2}
            acceptedFiles="image/*"
            inputLabel="Upload image(s)"
            helperText="You can upload up to 2 image files. Only .jpg, .png, etc. are allowed."
          />
        </section>

      </div>
    </div>
  );
}

export default FileUploadPage;
