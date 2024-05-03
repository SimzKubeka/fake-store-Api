# React + TypeScript + Vite

This template provides a minimalTypeScript-based e-commerce project.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12.x or higher)
- [npm](https://npmjs.com/) (usually comes with Node.js)

## Quick Start

Follow these steps to get the project up and running on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/SimzKubeka/fake-store-Api.git
cd fake-store-Api\frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application

```bash
npm run dev
```

This will start the Vite server with HMR enabled. Open your browser and navigate to `http://localhost:3000` to view the application.

## Plugins

This project uses two official Vite plugins for React to enable fast refresh capabilities:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) which utilizes [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) which employs [SWC](https://swc.rs/) for Fast Refresh.

## ESLint Configuration

This template comes with a basic ESLint configuration. For a production-level application, consider enhancing the ESLint setup to enable type-aware linting rules.

### Expanding ESLint Rules

1. **Configure parser options** to include your TypeScript configuration files:

    ```javascript
    export default {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
    }
    ```

2. **Update ESLint rules** for stricter type checks:

    - Change `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
    - Optionally add `plugin:@typescript-eslint/stylistic-type-checked`.

3. **Add React specific rules** by installing `eslint-plugin-react`:

    ```bash
    npm install eslint-plugin-react
    ```

    Then, add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list in your ESLint configuration.

## Contributing

Contributions are always welcome! Please read the [contributing guide](./CONTRIBUTING.md) before making a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
```

### Key Additions and Improvements:

1. **Prerequisites Section**: Added to ensure users know what they need before starting the installation.
2. **Quick Start Guide**: Clearly defined steps for cloning, installing dependencies, and running the project.
3. **Plugins Section**: Detailed explanations of the plugins used, along with links for further reading.
4. **ESLint Configuration**: Expanded instructions for configuring ESLint for a production environment.
5. **Contributing and License**: Encourage contributions and provide legal information.
