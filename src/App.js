import React, { useState } from 'react';
import CanvasEditor from './CanvasEditor';
import SearchBar from './SearchBar';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleGoBack = () => {
    setSelectedImage(null); // Reset image selection
  };

  return (
    <div>
      <h1 className="text-xl font-bold bg-gray-200">Name : SANKET KUMAR</h1>
      <h1 className="text-xl font-bold bg-gray-200">Email : sanketkumar0068@gmail.com</h1>

      {!selectedImage ? (
        <SearchBar onSelectImage={setSelectedImage} />
      ) : (
        <CanvasEditor imageUrl={selectedImage} goBack={handleGoBack} />
      )}
    </div>
  );
}

export default App;
