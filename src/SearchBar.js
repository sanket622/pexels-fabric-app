import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://api.pexels.com/v1/search';
const API_KEY = 'vzQKiJ4WWMLnBJElkJ2eGENHJtlCT1rmBJthiju9rlPODxrb7wACWeaR';

export default function SearchBar({ onSelectImage }) {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError('Please enter a search term.');
      return;
    }

    setError('');
    setLoading(true);
    try {
      const res = await axios.get(API_URL, {
        headers: { Authorization: API_KEY },
        params: { query, per_page: 10 },
      });

      if (res.data.photos.length === 0) {
        setError('No images found for this search.');
      }

      setImages(res.data.photos);
    } catch (err) {
      console.error('Search failed:', err);
      setError('Something went wrong while fetching images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-200">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && (
        <div className="mb-4 text-red-600 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} className="flex flex-col items-center">
            <img
              src={img.src.medium}
              alt={img.alt}
              className="w-78 h-62 object-cover rounded-md shadow-md cursor-pointer"
              onClick={() => onSelectImage(img.src.large)}
            />
            <button
              onClick={() => onSelectImage(img.src.large)}
              className="mt-2 text-sm text-blue-600 hover:underline"
            >
              Add Captions
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
