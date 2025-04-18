🖼️ Pexels Image Caption Editor

🔗 Deployed Link: https://pexels-fabric-app.vercel.app/

This is a React-based web application that allows users to search for high-quality images using the Pexels API, edit selected images using Fabric.js, and download the final version with added captions and shapes.

✨ Features

🔍 Search for images using the Pexels API

🖼️ Select an image and open it in an interactive Fabric.js canvas

✍️ Add customizable text captions

🔷 Insert basic shapes: Circle, Rectangle, Triangle

📐 Layer elements (shapes above image, text above shapes)

↔️ Drag, resize, and reposition elements freely

💾 Download the edited image

🔙 Navigate back to the search page using the "Back" button

🚀 Getting Started
✅ Prerequisites
Node.js (v14 or higher recommended)

npm or yarn

🛠️ Installation

Clone the repository:

git clone https://github.com/your-username/image-caption-editor.git
cd image-caption-editor
Install dependencies:

npm install
Start the development server:

npm run dev

🧭 Objective & Functional Requirements
🎯 Objective
Create a web app that allows users to search for images from a free API, edit them with captions and shapes, and download the modified result.

✅ Functional Requirements
🔎 Search Page
Search images via the Pexels API.

Display results in a responsive grid layout.

Each image has an "Add Captions" button to initiate editing.

🖼️ Image Editor
Loads selected image into a Fabric.js canvas.

Provides editing tools to customize the image.

🧩 Canvas Interaction
Add:

Editable and resizable text layers.

Basic shapes: Circle, Rectangle, Triangle (Polygon support optional).

Layering support:

Shapes above image.

Text above shapes.

Allow dragging, resizing, and repositioning of all elements.

💾 Download Feature
A Download button generates and downloads the edited image as a file.

⚠️ Error Handling
Graceful handling of API errors (e.g., network failure, bad API key).

Validate inputs (e.g., empty search) with helpful feedback.

Ensure stable and smooth interactions on the canvas.

🧩 Visual Flow
🔎 Search Page UI

+----------------------------------------------------+
|             [ Search for images... ] [Search]      |
|                                                    |
|   [ Error Message / Loading Text if any ]          |
|                                                    |
|  +---------+   +---------+   +---------+           |
|  |  Image  |   |  Image  |   |  Image  |   ...      |
|  |         |   |         |   |         |           |
|  | [Add    |   | [Add    |   | [Add    |           |
|  | Caption]|   | Caption]|   | Caption]|           |
|  +---------+   +---------+   +---------+           |
+----------------------------------------------------+
🖼️ Editor Canvas UI

+------------------------------------------------------------------------------------------------------+
|                                        Selected Image (Canvas)                                      |
|                                                                                                      |
|   +--------------------------------------------------Canvas---------------------------------------+  |
|   |                                                                                              |  |
|   |                             [  IMAGE DISPLAYED ON CANVAS  ]                                  |  |
|   |                                                                                              |  |
|   +----------------------------------------------------------------------------------------------+  |
|                                                                                                      |
| [ Add Text ]  [ Triangle ]  [ Circle ]  [ Rectangle ]  [ Download ] [ Back ]
+------------------------------------------------------------------------------------------------------+
🧱 Folder Structure

.
├── public/
├── src/
│   ├── App.js           # Main app component with routing logic
│   ├── SearchBar.js     # Handles image search and display
│   └── CanvasEditor.js  # Image editor with Fabric.js features
└── README.md

🛠️ Tech Stack
React – UI framework

Fabric.js – Canvas rendering and manipulation

Axios – API requests

Tailwind CSS – Styling and layout