const nx = require('@nx/eslint-plugin');
const eslintPluginImport = require('eslint-plugin-import'); // Include eslint-plugin-import

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    plugins: {
      import: eslintPluginImport, // Load the 'import' plugin as an object
    },
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: 'type:app',
              onlyDependOnLibsWithTags: [
                'type:ui',
                'type:routing-ui',
                'type:feature',
                'type:utils',
                'type:data',
              ],
            },
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: [
                'type:ui',
                'type:utils',
                'type:models',
                'scope:shared',
              ],
            },
            {
              sourceTag: 'type:routing-ui',
              onlyDependOnLibsWithTags: [
                'type:ui',
                'type:layout',
                'type:feature',
                'type:utils',
                'type:models',
                'scope:shared',
              ],
            },
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: [
                'type:ui',
                'type:data',
                'type:models',
                'scope:shared',
              ],
            },
            {
              sourceTag: 'type:layout',
              onlyDependOnLibsWithTags: [
                'type:ui',
                'scope:shared',
              ],
            },
            {
              sourceTag: 'type:data',
              onlyDependOnLibsWithTags: ['type:models', 'scope:shared'],
            },
            { sourceTag: 'type:models', onlyDependOnLibsWithTags: [] },
            {
              sourceTag: 'type:state',
              onlyDependOnLibsWithTags: ['type:models'],
            },
            {
              sourceTag: 'scope:app',
              onlyDependOnLibsWithTags: ['type:ui', 'type:feature'],
            },
          ],
        },
      ],
      // Add import order rules
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",         // Node.js built-in modules (e.g., 'fs', 'path')
            "external",        // Third-party NPM modules
            "internal",        // Internal libraries (Nx libraries)
            "parent",          // Imports from parent folders (e.g., '../')
            "sibling",         // Imports from sibling files (e.g., './')
            "index"            // Index imports (e.g., './index')
          ],
          "pathGroups": [
            {
              "pattern": "react**", // Match React and React-related imports
              "group": "builtin",
              "position": "before"
            },
            {
              "pattern": "@landscape/**", // Match your scoped Nx libraries (update this scope as needed)
              "group": "internal",
              "position": "before"
            }
          ],
          "pathGroupsExcludedImportTypes": ["builtin"], // Exclude built-in imports from path group ordering
          "newlines-between": "always",                // Enforce a newline between groups
          "alphabetize": {
            "order": "asc",                             // Alphabetize imports  within each group
            "caseInsensitive": true                    // Ignore case when alphabetizing
          }
        }
      ]
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Additional overrides or customizations
    rules: {},
  },
];
