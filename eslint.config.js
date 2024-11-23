const nx = require('@nx/eslint-plugin');

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
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
              onlyDependOnLibsWithTags: ['type:ui', 'type:feature', 'type:utils', 'type:data'],
            },
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: [
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
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
