import React from 'react';

interface ImageUploadProps {
  setImage: React.Dispatch<React.SetStateAction<string | null>>; // Assuming you're using a string URL for the image
}

const ImageUpload: React.FC<ImageUploadProps> = ({ setImage }) => {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string); // Cast to string because it's a data URL
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label htmlFor="file-upload" className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600">
        <i className="fas fa-cloud-upload-alt"></i> Télécharger une image
      </label>
      <input
        type="file"
        id="file-upload"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  );
};

export default ImageUpload;
