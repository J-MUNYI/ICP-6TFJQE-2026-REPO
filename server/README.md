EcoWise is a MERN-based web application that promotes responsible consumption by enabling users to share items for reuse, repair or donation.
## Week 1 Progress
-Creation of project strusture
-Express backend initialized
-React frontend set up using Vite
-Basic "Hello World" proof of concept completed

## Tech Stack
-React (Vite)
-Node.js
-Express
_MongoDb(planned)

## How to run 

### Backend
'''bash
cd server
npm start


### Frontend
'''bash
cd client
npm run dev

## Week 2 progress
Project Overview

EcoWise is a web application aimed at promoting responsible consumption and production by tracking and managing eco-friendly items. This week (Week 2), the focus was on backend core concepts, including:

Setting up an Express.js server

Connecting to MongoDB

Creating CRUD endpoints for managing items

Testing API functionality using Postman

This lays the foundation for Week 3 and beyond.

1️⃣ Server Setup
Installed Tools

Node.js (v20.x)

npm

MongoDB (local installation)

Express.js

Postman (desktop version)

Running the Server

Navigate to the server folder:

cd EcoWise/server


Install dependencies:

npm install


Start the server in development mode:

npm run dev


The server runs on http://localhost:5000 by default.
When opened in a browser, you will see:

EcoWise API is running 🌱

2️⃣ MongoDB Integration

MongoDB is used to store item data.

Database: ecowise

Collection: items

Each item has the following fields:

Field	Type	Description
name	String	Name of the item
price	Number	Price of the item
ecoFriendly	Boolean	Indicates eco-friendly status
category	String	Category of the item
_id	ObjectId	Unique identifier
createdAt	Date	Timestamp of creation
updatedAt	Date	Timestamp of last update
3️⃣ API Endpoints (CRUD)

All endpoints are under /api/items.

1. Create Item (POST)
POST http://localhost:5000/api/items


Request Body Example (JSON):

{
  "name": "Reusable Bottle",
  "price": 500,
  "ecoFriendly": true,
  "category": "kitchen"
}


Response:

{
  "_id": "63f2e9...",
  "name": "Reusable Bottle",
  "price": 500,
  "ecoFriendly": true,
  "category": "kitchen",
  "createdAt": "2026-02-01T12:00:00.000Z",
  "updatedAt": "2026-02-01T12:00:00.000Z",
  "__v": 0
}

2. Get All Items (GET)
GET http://localhost:5000/api/items


Response: Array of all items.

3. Get Item by ID (GET)
GET http://localhost:5000/api/items/<ITEM_ID>


Response: Single item object

4. Update Item (PUT)
PUT http://localhost:5000/api/items/<ITEM_ID>


Request Body Example (JSON):

{
  "price": 450
}


Response: Updated item object

5. Delete Item (DELETE)
DELETE http://localhost:5000/api/items/<ITEM_ID>


Response:

{ "message": "Item deleted" }


All endpoints were tested using Postman Desktop to ensure proper functionality.

4️⃣ Postman Testing

Postman Desktop is required for local testing.

Created a collection called EcoWise API containing all CRUD endpoints.

Verified:

Successful item creation

Fetching all items

Fetching by ID

Updating items

Deleting items

