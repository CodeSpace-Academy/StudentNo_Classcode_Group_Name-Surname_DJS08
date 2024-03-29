### Project Brief: Spotify Track Search Performance Optimisation

#### Overview
In this project, you will be building a "Spotify Track Search" feature that allows users to search for tracks by typing into a search input field. As users type, search results will dynamically update below the input field. The challenge focuses on implementing debouncing to optimise performance and reduce the number of "API calls" made while searching.

#### Objective
Your primary objective is to optimise the search functionality by implementing debouncing. This will enhance the application's performance by limiting the rate at which search requests are made as the user types. You will simulate API calls to fetch search results, focusing on efficiency and user experience.

#### Key Concepts
- **Debouncing**: A programming practice used to ensure that time-consuming tasks do not fire so often, thereby decreasing the workload on the application and improving performance.
- **React Hooks**: Utilise `useState`, `useEffect`, and custom hooks to manage state and side effects in your functional component.
- **Simulated API Calls**: Instead of real API calls, you will use a mock function to simulate fetching data from an API. This approach helps in focusing on debouncing logic without dealing with external APIs.

#### Task Description
1. **Setup**: Begin with the provided starter code for the search component. The UI and a mock fetch function are provided for you.
2. **Implement Debouncing**: Create a custom hook named `useDebounce` that takes in the user's input from the search field and a delay time as parameters. The hook should return the debounced value of the search query. Use this debounced value to control when the simulated API call is triggered.
3. **Simulated API Call**: Use the provided mock function `fetchSearchResults` to simulate fetching search results. Ensure this function is called using the debounced search query.
4. **Display Results**: Display the fetched "tracks" below the search input as the user types. Ensure the search results update correctly and reflect the debounced input.

#### Requirements
- The search input should be responsive and update as the user types.
- The number of simulated API calls made as the user types should be reduced using debouncing.
- The debouncing delay should be set to 500 milliseconds.
- Display the search results dynamically as the user types. When there is no input, the results should be cleared.

#### Project Files
- **index.js**: Entry point of the application. You might need to import and render the `Search` component here.
- **Search.js**: Contains the search component logic. Implement your debouncing logic and simulated API call here.
- **index.css**: Use this file for styling your application to match the Spotify theme.

#### Deliverable
Submit your project to the LMS Project Tab. Ensure your submission includes all source code files and any additional resources used.
