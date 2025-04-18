import React, { useState } from 'react';
import CanvasEditor from './CanvasEditor';
import SearchBar from './SearchBar';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1 class="text-3xl font-bold underline">
      Pexels Image Editor!
  </h1>
      {!selectedImage ? (
        <>
        <SearchBar onSelectImage={setSelectedImage} />
        </>
      ) : (
        <CanvasEditor imageUrl={selectedImage} />
      )}
    </div>
  );
}

export default App;