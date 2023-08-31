REACT TODO  LIST
================

Requirements: 
 NodeJS
 React
 CSS, HTML

To run this app, inside of the working directory where the package.json is located:
--------------------------------------------------------------------------------------------
 Open a cmd window and type:
 npm run dev

This project is built using the Vite react-project template.
Like any React application, this is built using different components.
All the components were written in JSX.

There is a main APP component where all the sub components are bundled together, these sub components are:
NewTodoForm
TodoItem 
TodoList
ToggleColor


NewTodoForm is the form component for creating a new todo list item 

TodoItem is the component for a single todo list item and its attributes like completed state, checkbox and delete button

TodoList is the component that loops through all the created TodoItem components and renders them

ToggleColor is the component responsible for changing theme of the app.
This theme change is done by using only CSS and vanilla JS

The items on a created TodoList are stored in LocalStorage in your browser until deleted


