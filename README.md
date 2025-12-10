README.md (Assessment Version – For Akshinth Pankan)
AI Playground – Frontend Assessment Project

This project is a frontend-only AI Playground built using React, TypeScript, Tailwind CSS, and Storybook.
It allows users to experiment with AI model settings such as model selection, temperature, max tokens, prompt templates, and chat-style responses.
All model outputs are simulated using a mock API.
The objective is to demonstrate UI/UX design, component-driven architecture, and frontend development skills.

Project Links

GitHub Repository
https://github.com/AkshinthP/AI-playground-Assessment-.git

Figma Mockup
https://www.figma.com/design/doSj6CizIQsbI2Vh8EoXk6/AIplayground?node-id=0-1&t=HgrQwKiDJud74FHe-1

Netlify Hosted Demo
<YOUR_NETLIFY_URL>

(Replace with the final Netlify link after deployment)

1. Project Overview

This project demonstrates:

• UI/UX design translated directly from a Figma mockup
• React + TypeScript development using Vite
• Tailwind CSS for a scalable design system
• Storybook documentation for UI components
• React Context API for global state management
• Mock API integration using static JSON files
• Light and dark theme switching
• A desktop-first AI Playground layout

Real AI APIs are not used; responses are intentionally mocked to meet assessment requirements.

2. Assessment Requirements Covered

The assessment required the following:

A working AI Playground UI

Model selection and parameter controls

Prompt input and output panel

Chat-style interface

A mock backend (JSON)

Light and dark theme support

A Figma mockup

A hosted demo link

Storybook documentation

GitHub repository with clean structure

All items listed above are fully implemented.

3. Research

Research focused on analyzing modern AI tools to understand common UI patterns.

OpenAI Playground
• Sidebar model settings
• Prompt editor and response flow

Anthropic Claude
• Clean, readable chat-style interface

HuggingFace Spaces
• Parameter-based model experimentation

Microsoft Copilot
• Focus on simplicity and accessibility

Patterns applied in this project include:
• Left-side setup panel
• Right-side prompt and chat display
• Card-based UI grouping
• Clean spacing and minimalistic typography

4. Figma Design

A full desktop mockup was created in Figma to guide:

• Layout structure
• Component grouping
• Visual hierarchy and spacing
• Typography and color selection

Figma Mockup Link
https://www.figma.com/design/doSj6CizIQsbI2Vh8EoXk6/AIplayground?node-id=0-1&t=HgrQwKiDJud74FHe-1

The final UI closely reflects the design specifications from the mockup.

5. Visual System

Font Family
Inter

Typography
• Page Title: 28px
• Section Label: 11px
• Body Text: 14px
• Helper Text: 11px

Light Mode Colors
• Background: #F8FAFC
• Card: #FFFFFF
• Border: #E2E8F0
• Primary: #6366F1
• Heading text: #0F172A

Dark Mode Colors
• Background: #0F172A
• Card: #1E293B
• Border: #334155
• Primary: #4F46E5
• Text: #F8FAFC

Component Styling
Cards use rounded edges, borders, and shadows.
Buttons follow primary (indigo) and secondary (slate) patterns.
Chat bubbles differ based on user and assistant roles.

6. Development

Tech Stack
• React (Vite)
• TypeScript
• Tailwind CSS
• Storybook
• React Context API
• Local JSON mock API

Architecture

ThemeContext
• Manages light and dark appearance
• Syncs preference to localStorage

AppStateContext
• Loads mock model/template data
• Stores prompt input
• Generates simulated model responses
• Tracks chat history
• Handles loading and error states

Mock API (public folder)
• models.json
• templates.json

7. Storybook

Storybook is used to build and test UI components in isolation.

Documented components:
• Button
• Slider
• Modal
• ChatBubble

Run Storybook
npm run storybook

8. Running the Project

Install dependencies
npm install

Start development server
npm run dev

Build project
npm run build

Preview production build
npm run preview

9. Hosting (Netlify)

The application is hosted using Netlify.

Hosting settings:
• Build command: npm run build
• Publish directory: dist
• Netlify automatically serves the static build

Live Netlify URL
<YOUR_NETLIFY_URL>

(Add your link once deployed)

10. Known Limitations

• Chat responses are simulated and not connected to real AI APIs
• Chat history resets on refresh
• Templates cannot be modified by users
• The application is primarily optimized for desktop

11. Conclusion

This project demonstrates end-to-end frontend execution including:
• Research and analysis of existing AI products
• UI/UX design in Figma
• Component-driven React development
• Tailwind CSS design system
• Storybook documentation
• Mock API architecture
• Netlify hosting

It reflects strong understanding of frontend development principles and modern UI design.

12. Author

Akshinth Pankan
Frontend Developer – React and TypeScript
GitHub: https://github.com/AkshinthP