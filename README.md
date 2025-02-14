Collecting workspace information# Candidate Search Application

This is a React application built with TypeScript and Vite that allows users to search for GitHub users and save potential candidates. The application uses the GitHub API to fetch user data.

## Features

- Search for GitHub users
- View user details such as name, email, location, company, and avatar
- Save potential candidates to local storage
- View saved candidates

## Project Structure

```
Develop/
  .env
  .eslintrc.cjs
  .gitignore
  environment/
    .env.example
  index.html
  package.json
  public/
    vite.svg
  README.md
  src/
    api/
      API.tsx
    App.tsx
    assets/
      react.svg
    components/
      Nav.tsx
    index.css
    interfaces/
      Candidate.interface.tsx
    main.tsx
    pages/
      CandidateSearch.tsx
      ErrorPage.tsx
      SavedCandidates.tsx
    vite-env.d.ts
  tsconfig.json
  tsconfig.node.json
  vite.config.ts
```

## Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/candidate-search-app.git
cd candidate-search-app/Develop
```

2. Install dependencies:

```sh
npm install
```

3. Create a .env file in the root directory and add your GitHub token:

```sh
VITE_GITHUB_TOKEN=your_github_token
```

4. Start the development server:

```sh
npm run dev
```

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview the production build

## API

The application uses the GitHub API to fetch user data. The API functions are defined in API.tsx:

- `searchGithub`: Fetches a list of GitHub users
- `searchGithubUser`: Fetches details of a specific GitHub user

## Components

- `App`: Main application component
- `Nav`: Navigation component
- `CandidateSearch`: Candidate search page
- `SavedCandidates`: Saved candidates page
- `ErrorPage`: Error page

## Interfaces

- `Candidate`: Interface for candidate objects

## Styling

The application uses a global CSS file for styling: `index.css`.

## License

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
