AI Playground – Frontend Assessment

A modern, React + TypeScript + Tailwind CSS interface for experimenting with AI models, parameters, and prompts.
Built as part of a Frontend & UI/UX Designer Assessment, this project demonstrates research, UI design, component engineering, accessibility, responsive layouts, and Storybook documentation.


---

Live Demo

Vercel Deployment:
https://ai-playground-assessment.vercel.app/


---

Figma Design

The UI was first designed in Figma before implementation.
Figma Link:
https://www.figma.com/design/doSj6CizIQsbI2Vh8EoXk6/AIplayground?node-id=0-1&t=HgrQwKiDJud74FHe-1


---

GitHub Repository

https://github.com/AkshinthP/AI-playground-Assessment-


---

1. Overview

The AI Playground is a frontend-only prototype that mimics essential functionality from leading AI model interfaces.
The UI allows users to:

Select an AI model

Adjust generation parameters

Write prompts

View mock assistant responses

Load templates

Download JSON metadata

Use light/dark theme

Navigate via responsive layout

Review component stories via Storybook


This project uses mock API responses to simulate real AI outputs, as required by the assessment.


---

2. Tech Stack

Core Technologies

React (with TypeScript, strict mode enabled)

Vite (fast bundler)

Tailwind CSS

Storybook (UI component documentation)

Mock API (/src/data JSON files)

React Context (global state & theme management)


Deployment

Vercel (Production build + hosting)



---

3. Research Summary

Reviewed 5 popular AI UIs:

1. OpenAI Playground


2. Anthropic Claude UI


3. HuggingFace Spaces


4. Microsoft Copilot Lab


5. Gemini Advanced



Key features adopted:

Model selector

Temperature slider

Max tokens limiter

Prompt input panel

Response panel

Template loader

JSON export

Light/Dark theme toggle


These features formed the final 6 core functions requested in the assessment.


---

4. UI/UX Design Summary

The design goal was to create a minimal, clean, and accessible interface.

Main design choices:

Soft neutral backgrounds

Rounded card containers

High contrast buttons

Uniform spacing system based on Tailwind

Smooth hover and active states

Clean typography hierarchy

Dark mode with the same visual structure

Responsive layout (desktop → mobile collapse)


The interface is inspired by the simplicity of OpenAI Playground and Claude.


---

5. Development Overview

Components Implemented

ModelSelector – Dropdown for GPT-3.5 / GPT-4 / Custom model

ParametersPanel – Temperature + max tokens sliders

PromptEditor – Textarea with templates button

ChatPanel – Displays simulated responses

ChatBubble – User vs assistant messages

ThemeToggle – Light/dark mode

AppStateContext – Centralized UI state management


Functionality

Mock fetch for templates and model metadata

Simulated AI response generation

State synched across components

Smooth animations for hover/focus

Tailwind-based responsive design



---

6. Storybook Documentation

Storybook includes stories for:

Button

Slider

Modal

ChatBubble


Run Storybook locally:

npm run storybook


---

7. Installation & Running Locally

git clone https://github.com/AkshinthP/AI-playground-Assessment-
cd AI-playground-Assessment-
npm install
npm run dev

To build production version:

npm run build


---

8. Folder Structure

src/
 ├─ components/
 │   ├─ ModelSelector.tsx
 │   ├─ ParametersPanel.tsx
 │   ├─ PromptEditor.tsx
 │   ├─ ChatPanel.tsx
 │   ├─ ui/
 │   │   ├─ Slider.tsx
 │   │   ├─ ChatBubble.tsx
 │   │   ├─ Modal.tsx
 │   │   └─ Button.tsx
 ├─ context/
 ├─ data/
 ├─ stories/
 ├─ styles/
 ├─ App.tsx
 └─ main.tsx


---

9. Known Limitations

Responses are mocked for UI testing.

No real AI API integration (per assessment guidelines).

Storybook deploy not included.



---

10. Assessment Deliverables Checklist

Submitted:

✔ Research
✔ Design mockup (Figma)
✔ Full TypeScript implementation
✔ Mock API
✔ Storybook components
✔ README (Research, Design, Development)
✔ Deployment Link
✔ GitHub repository


---

11. Author

Akshinth Pankan
Frontend Developer | React | UI/UX | TypeScript
