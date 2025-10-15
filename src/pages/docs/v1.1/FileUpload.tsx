"use client";

import { useState } from "react";
import CodeBlock from "../../../components/CodeBlock";
import { FileUpload } from "alope-ui";
import { useTheme } from "../../../context/ThemeContext";

export default function FileUploadDocs() {
  const { theme } = useTheme();
  const [, setFiles] = useState<File[]>([]);

  return (
    <div
      className={`transition-colors ${
        theme === "dark"
          ? "prose prose-invert max-w-none"
          : "prose prose-slate prose-headings:text-gray-900 max-w-none"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">FileUpload</h2>
        <p>
          The <code>FileUpload</code> component provides a flexible file upload
          interface with support for drag-and-drop, file validation, preview,
          and two display modes (<code>dropzone</code> and{" "}
          <code>textinput</code>).
        </p>

        {/* Import */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Import</h3>
        <CodeBlock code={`import { FileUpload } from "alope-ui";`} />

        {/* Props Table */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Props</h3>
        <div className="overflow-x-auto border border-gray-200 dark:border-gray-800 rounded-lg mb-10">
          <table className="w-full text-sm text-left">
            <thead
              className={`${
                theme === "dark"
                  ? "bg-gray-800 text-gray-200"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <tr>
                <th className="px-4 py-2 font-semibold">Prop</th>
                <th className="px-4 py-2 font-semibold">Type</th>
                <th className="px-4 py-2 font-semibold">Default</th>
                <th className="px-4 py-2 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "onFilesChange",
                  "(files: File[]) => void",
                  "required",
                  "Callback fired when files change",
                ],
                [
                  "acceptedFiles",
                  "string",
                  "'image/*'",
                  "Accepted file types (MIME or extensions)",
                ],
                ["maxFiles", "number", "1", "Maximum number of files allowed"],
                ["maxByte", "number", "2048", "Maximum file size in kilobytes"],
                [
                  "mode",
                  "'dropzone' | 'textinput'",
                  "'dropzone'",
                  "Display mode of the file upload",
                ],
                [
                  "clearable",
                  "boolean",
                  "true",
                  "Show clear button on file previews",
                ],
                ["inputLabel", "string", "undefined", "Label for input button"],
                [
                  "helperText",
                  "string",
                  "undefined",
                  "Helper text displayed below input",
                ],
                [
                  "mediaCapture",
                  "'user' | 'environment'",
                  "undefined",
                  "Camera capture mode (mobile)",
                ],
              ].map(([prop, type, def, desc]) => (
                <tr
                  key={prop}
                  className={`border-t ${
                    theme === "dark" ? "border-gray-800" : "border-gray-200"
                  }`}
                >
                  <td className="px-4 py-2 font-medium">{prop}</td>
                  <td className="px-4 py-2 font-mono text-blue-500">{type}</td>
                  <td className="px-4 py-2 text-gray-500">{def}</td>
                  <td className="px-4 py-2">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Basic Example */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Basic FileUpload (Dropzone Mode)
        </h3>
        <div
          className={`border rounded-lg p-6 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <FileUpload onFilesChange={setFiles} />
        </div>
        <CodeBlock
          code={`import { useState } from "react";
import { FileUpload } from "alope-ui";

const BasicExample = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUpload
      onFilesChange={setFiles}
    />
  );
};`}
        />

        {/* Text Input Mode */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Text Input Mode</h3>
        <div
          className={`border rounded-lg p-6 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <FileUpload
            mode="textinput"
            onFilesChange={setFiles}
            inputLabel="Upload File"
          />
        </div>
        <CodeBlock
          code={`<FileUpload
  mode="textinput"
  onFilesChange={setFiles}
  inputLabel="Upload File"
/>`}
        />

        {/* Multiple Files */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Multiple Files</h3>
        <div
          className={`border rounded-lg p-6 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <FileUpload
            maxFiles={5}
            onFilesChange={setFiles}
            helperText="You can upload up to 5 files"
          />
        </div>
        <CodeBlock
          code={`<FileUpload
  maxFiles={5}
  onFilesChange={setFiles}
  helperText="You can upload up to 5 files"
/>`}
        />

        {/* Custom File Types */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Custom File Types</h3>
        <div
          className={`border rounded-lg p-6 flex flex-wrap gap-6 justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Accept only images */}
          <FileUpload acceptedFiles="image/*" onFilesChange={setFiles} />
          {/* Accept specific image types */}
          <FileUpload
            acceptedFiles="image/png, image/jpeg, image/jpg"
            onFilesChange={setFiles}
          />
          {/* Accept PDFs */}
          <FileUpload
            acceptedFiles="application/pdf"
            onFilesChange={setFiles}
          />
          {/* Accept by file extension */}
          <FileUpload
            acceptedFiles=".pdf, .doc, .docx"
            onFilesChange={setFiles}
          />
          {/* Accept multiple types */}
          <FileUpload
            acceptedFiles="image/*, .pdf, .doc"
            onFilesChange={setFiles}
          />
        </div>
        <CodeBlock
          code={`{
  /* Accept only images */
}
<FileUpload acceptedFiles="image/*" onFilesChange={setFiles} />;

{
  /* Accept specific image types */
}
<FileUpload
  acceptedFiles="image/png, image/jpeg, image/jpg"
  onFilesChange={setFiles}
/>;

{
  /* Accept PDFs */
}
<FileUpload acceptedFiles="application/pdf" onFilesChange={setFiles} />;

{
  /* Accept by file extension */
}
<FileUpload acceptedFiles=".pdf, .doc, .docx" onFilesChange={setFiles} />;

{
  /* Accept multiple types */
}
<FileUpload acceptedFiles="image/*, .pdf, .doc" onFilesChange={setFiles} />;`}
        />

        {/* File Size Limit */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">File Size Limit</h3>
        <div
          className={`border rounded-lg p-6 flex flex-wrap gap-6 justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* 5MB limit */}
          <FileUpload
            maxByte={5120}
            onFilesChange={setFiles}
            helperText="Maximum file size: 5MB"
          />
          ;{/* 500KB limit */}
          <FileUpload
            maxByte={512}
            onFilesChange={setFiles}
            helperText="Maximum file size: 500KB"
          />
          ;
        </div>
        <CodeBlock
          code={`{
  /* 5MB limit */
}
<FileUpload
  maxByte={5120}
  onFilesChange={setFiles}
  helperText="Maximum file size: 5MB"
/>;

{
  /* 500KB limit */
}
<FileUpload
  maxByte={512}
  onFilesChange={setFiles}
  helperText="Maximum file size: 500KB"
/>;`}
        />

        {/* Helper Text */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">With Helper Text</h3>
        <div
          className={`border rounded-lg p-6 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <FileUpload
            onFilesChange={setFiles}
            helperText="Accepted formats: PNG, JPG, JPEG. Max size: 2MB"
          />
        </div>
        <CodeBlock
          code={`<FileUpload
  onFilesChange={setFiles}
  helperText="Accepted formats: PNG, JPG, JPEG. Max size: 2MB"
/>`}
        />

        {/* Camera Capture */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Camera Capture (Mobile)
        </h3>
        <div
          className={`border rounded-lg p-6 flex flex-wrap gap-6 justify-center mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Use front camera */}
          <FileUpload
            acceptedFiles="image/*"
            mediaCapture="user"
            onFilesChange={setFiles}
          />
          {/* Use back camera */}
          <FileUpload
            acceptedFiles="image/*"
            mediaCapture="environment"
            onFilesChange={setFiles}
          />
        </div>
        <CodeBlock
          code={`{
  /* Use front camera */
}
<FileUpload
  acceptedFiles="image/*"
  mediaCapture="user"
  onFilesChange={setFiles}
/>

{
  /* Use back camera */
}
<FileUpload
  acceptedFiles="image/*"
  mediaCapture="environment"
  onFilesChange={setFiles}
/>`}
        />

        {/* Non-clearable */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Non-clearable Files
        </h3>
        <div
          className={`border rounded-lg p-6 mb-6 transition-colors ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <FileUpload onFilesChange={setFiles} clearable={false} />
        </div>
        <CodeBlock
          code={`<FileUpload onFilesChange={setFiles} clearable={false} />`}
        />

        {/* Complete Examples */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Complete Example (Dropzone Mode)
        </h3>
        <DropzoneExample theme={theme} />

        <CodeBlock
          code={`import { useState } from "react";
import { FileUpload } from "alope-ui";

const DropzoneExample = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFilesChange = (files: File[]) => {
    setUploadedFiles(files);
    console.log('Uploaded files:', files);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Upload Your Images</h2>

      <FileUpload
        mode="dropzone"
        acceptedFiles="image/png, image/jpeg, image/jpg"
        maxFiles={3}
        maxKiloByte={5120}
        onFilesChange={handleFilesChange}
        helperText="Upload up to 3 images. Max 5MB per file."
      />

      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <p className="font-medium">Selected files:</p>
          <ul className="list-disc list-inside">
            {uploadedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};`}
        />

        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Complete Example (Text Input Mode)
        </h3>
        <TextInputExample theme={theme} />

        <CodeBlock
          code={`import { useState } from "react";
import { FileUpload } from "alope-ui";

const TextInputExample = () => {
  const [documents, setDocuments] = useState<File[]>([]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Upload Documents</h2>

      <FileUpload
        mode="textinput"
        acceptedFiles=".pdf, .doc, .docx"
        maxFiles={5}
        maxKiloByte={10240}
        inputLabel="Choose Documents"
        onFilesChange={setDocuments}
        helperText="Accepted: PDF, DOC, DOCX. Max 10MB per file."
      />
    </div>
  );
};
`}
        />
      </div>
    </div>
  );
}

/* === Complete Example Components === */
function DropzoneExample({ theme }: { theme: string }) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFilesChange = (files: File[]) => {
    setUploadedFiles(files);
    console.log("Uploaded files:", files);
  };

  return (
    <div
      className={`border rounded-lg p-6 mb-6 transition-colors ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">Upload Your Images</h2>

      <FileUpload
        mode="dropzone"
        acceptedFiles="image/png, image/jpeg, image/jpg"
        maxFiles={3}
        maxByte={5120}
        onFilesChange={handleFilesChange}
        helperText="Upload up to 3 images. Max 5MB per file."
      />

      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <p className="font-medium">Selected files:</p>
          <ul className="list-disc list-inside">
            {uploadedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function TextInputExample({ theme }: { theme: string }) {
  const [, setDocuments] = useState<File[]>([]);
  return (
    <div
      className={`border rounded-lg p-6 mb-6 transition-colors ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <h4 className="text-lg font-bold mb-4">Upload Documents</h4>
      <FileUpload
        mode="textinput"
        acceptedFiles=".pdf, .doc, .docx"
        maxFiles={5}
        maxByte={10240}
        inputLabel="Choose Documents"
        onFilesChange={setDocuments}
        helperText="Accepted: PDF, DOC, DOCX. Max 10MB per file."
      />
    </div>
  );
}
