# iDoctor Review

This is a web application for finding doctors and booking appointments. It provides a user-friendly interface to search for doctors, view their profiles, and schedule a visit.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- [pnpm](https://pnpm.io/installation) package manager

### Installation

1.  Clone the repository to your local machine:

    ```bash
    git clone https://github.com/AnsarIKz/idoctor-review.git
    cd idoctor-review
    ```

2.  Install the dependencies using pnpm:

    ```bash
    pnpm install
    ```

### Running the Application

To start the development server, run the following command:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand), [TanStack Query](https://tanstack.com/query/latest)
- **Linting & Formatting**: [Biome](https://biomejs.dev/)

## Project Structure

The project follows the [Feature-Sliced Design (FSD)](https://feature-sliced.design/) methodology. This architectural approach helps in organizing the codebase in a scalable and maintainable way. The main layers are:

- `src/app`: Contains application-wide setup, styles, app router, and providers.
- `src/pages`: Contains the pages of the application.
- `src/widgets`: Combines multiple entities and features into standalone blocks (e.g., Header, DoctorsList).
- `src/features`: Contains pieces of business logic that are valuable to the user (e.g., book-appointment, search-doctor).
- `src/entities`: Contains business entities (e.g., Doctor, Clinic, Appointment).
- `src/shared`: Contains reusable code that doesn't have any business logic (e.g., UI components, libraries, helpers).

## Available Scripts

In the project directory, you can run:

- `pnpm dev`: Runs the app in development mode with Turbopack.
- `pnpm build`: Builds the app for production.
- `pnpm start`: Starts a production server.
- `pnpm lint`: Checks the code for linting errors using Biome.
- `pnpm format`: Formats the code using Biome.
