# ChatPDF

## Overview

Backend system for chatting with PDF documents using a RAG pipeline.

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Ollama (Local LLM)

## How it works

* User sends a query
* Relevant data is fetched from MongoDB
* Context is passed to Ollama
* Response is generated

## Setup

```bash
git clone https://github.com/your-username/ChatPdf.git
cd ChatPdf/backend
npm install
npm start
```

## Environment Variables

Create a `.env` file in `/backend`:

```
PORT=5000
MONGO_URI=your_mongodb_uri
OLLAMA_URL=http://localhost:11434
```
