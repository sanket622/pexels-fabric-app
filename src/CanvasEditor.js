import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

function CanvasEditor({ imageUrl, goBack }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      width: 800,
      height: 600,
      backgroundColor: '#fff',
    });
    canvasRef.current = canvas;

    fabric.Image.fromURL(imageUrl, (img) => {
      img.set({ left: 0, top: 0, crossOrigin: 'anonymous' });
      img.scaleToWidth(600);
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleX: 1,
        scaleY: 1,
      });
    }, { crossOrigin: 'anonymous' });

    return () => {
      canvas.dispose();
    };
  }, [imageUrl]);

  const addText = () => {
    const canvas = canvasRef.current;
    const text = new fabric.Textbox('Your caption', {
      left: 100,
      top: 100,
      fontSize: 24,
      fill: '#000',
      editable: true,
    });
    canvas.add(text);
  };

  const addShape = (shapeType) => {
    const canvas = canvasRef.current;
    let shape;
    switch (shapeType) {
      case 'circle':
        shape = new fabric.Circle({ radius: 50, fill: 'blue', left: 100, top: 100 });
        break;
      case 'rectangle':
        shape = new fabric.Rect({ width: 100, height: 60, fill: 'green', left: 150, top: 150 });
        break;
      case 'triangle':
        shape = new fabric.Triangle({ width: 100, height: 100, fill: 'red', left: 200, top: 200 });
        break;
      default:
        return;
    }
    canvas.add(shape);
  };

  const download = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL({
      format: 'png',
      quality: 1.0,
    });
    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = dataURL;
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <canvas
        id="canvas"
        width={800}
        height={600}
        className="border border-gray-300 shadow-md rounded-lg"
      />
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <button onClick={addText} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add Text
        </button>
        <button onClick={() => addShape('circle')} className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
          Circle
        </button>
        <button onClick={() => addShape('rectangle')} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Rectangle
        </button>
        <button onClick={() => addShape('triangle')} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Triangle
        </button>
        <button onClick={download} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
          Download
        </button>
        <button onClick={goBack} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Back to Search
        </button>
      </div>
    </div>
  );
}

export default CanvasEditor;
