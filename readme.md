Project Overview

This system integrates an LLM (Groq / LLaMA) with a Node.js backend to generate structured outputs for sustainable commerce use cases.

Two AI modules are fully implemented:

1. AI Auto Category & Tag Generator

3. AI B2B Proposal Generator

Each module produces structured JSON output, stores the results in MongoDB, and logs all AI interactions for debugging and monitoring.

A minimal React frontend is provided to demonstrate the modules through a simple UI.

Implemented Modules
Module 1 – AI Auto Category & Tag Generator

Automatically categorizes products and generates SEO metadata.

Input --
Product Name

Product Description

AI Output --
Primary Category

Sub Category

SEO Tags (5–10)

Sustainability Filters

Example Output

Primary Category: Office Supplies

Sub Category: Corporate Gifts

SEO Tags:
• Eco Friendly

• Corporate Gifts

• Sustainable

• Office Supplies

Sustainability Filters:
• plastic-free

• recycled


Database Storage--
Stored in MongoDB collection:

ProductMeta


Fields:

name

description

primary_category

sub_category

seo_tags

sustainability_filters

Module 2 – AI B2B Proposal Generator--

Generates sustainable product bundles based on business requirements.

Input --
Budget
Industry / Use Case

Example:

Budget: 10000
Industry: Eco-friendly corporate gifts

AI Output--
Product Mix

Budget Allocation

Cost Breakdown

Impact Summary

Example Output

Product Mix
• Bamboo Pen Set

• Recycled Notebook

• Seed Bomb 

• Reusable Water Bottle

Impact Summary
Promotes sustainable gifting, reduces plastic waste and encourages eco-friendly office practices.
Database Storage

Stored in MongoDB collection:

Proposal

Fields:

industry

budget

product_mix

budget_allocation

cost_breakdown

impact_summary

Prompt & Response Logging

Every AI interaction is logged for monitoring and debugging.

Stored in:

AiLog

Example log:

module: proposal-generator
prompt: <full prompt sent to LLM>
response: <LLM response>
createdAt

Benefits:

Debugging AI responses
Improving prompts
Monitoring AI usage

System Architecture

Frontend (React)
        |
        
Express API (Node.js)
        |
        
Controller Layer
        |
        
Service Layer
        |
        
LLM API (Groq)
        |
        
Structured JSON Output
        |
        
MongoDB Storage

Backend Structure--
backend
 ├ controllers
 
 ├ services
 
 ├ prompts
 
 ├ models
 
 ├ routes
 
 ├ utils
 
 └ server.js


Responsibilities -- 

Controllers :
Handle HTTP requests and responses.

Services :
Communicate with the LLM API and clean responses.

Prompts :
Define structured prompt templates for each AI module.

Models :
MongoDB schemas for storing generated data.

Utils :
External service helpers such as AI client.

AI Prompt Design --

Prompts are designed to enforce structured JSON outputs.

Example rule included in prompts:

Return ONLY valid JSON.
Do not include markdown, explanations, or extra text.

Additionally, the service layer cleans the LLM response to remove markdown wrappers before parsing.
This ensures reliable structured outputs from the AI model.

Tech Stack --

Backend :

Node.js
Express
MongoDB
Mongoose
Groq LLM (LLaMA 3.1)

Frontend

React (Vite)
Axios

Frontend Demo Interface :

A minimal React UI allows users to:
Generate product metadata
Generate B2B proposals

Two simple modules are available:

Product Generator
Proposal Generator

Each module sends requests to the backend API and displays formatted results.

Modules Designed (Architecture Only)
Module 3 – AI Impact Reporting Generator -- 

Goal: Generate sustainability impact reports after purchases.

Architecture
Order Data
      |
      v
Impact Calculator
      |
      v
AI Summary Generator
      |
      v
Impact Report Storage

Outputs include:

Estimated plastic saved

Carbon emission reduction

Local sourcing impact

Human-readable sustainability summary

Module 4 – AI WhatsApp Support Bot --

Goal: Provide automated customer support via WhatsApp.

Architecture
WhatsApp API (Twilio)
        |
        
Webhook Endpoint
        |
        
LLM Intent Detection
        |
        
Database Query
        |
        
Automated Response

Capabilities:

Order status queries

Return policy responses

Refund escalation

Conversation logging


Setup Instructions --
Clone Repository:

git clone https://github.com/JarmanKingra/Rayeva-Ai-Assignment

Backend Setup:
cd backend
npm install

Create .env file

GROQ_API_KEY=your_api_key

MONGO_URI=your_mongodb_uri
PORT=3001

Run backend:
npm run dev

Frontend Setup:

cd frontend
npm install
npm run dev


Demo

The demo video demonstrates:

Architecture walkthrough

Product metadata generation

B2B proposal generation

MongoDB storage

AI prompt logging

Future Improvements ---

Possible production improvements:

Authentication

Admin dashboard

Advanced prompt evaluation

Cost monitoring for AI calls

Caching AI responses


Author ---

Jarman Jot Singh
BCA Student | Full Stack Developer

GitHub: https://github.com/JarmanKingra
LinkedIn: https://www.linkedin.com/in/jarman-jot-singh-53638623a/
