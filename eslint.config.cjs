// eslint.config.cjs

const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');
const globals = require('globals');

module.exports = [
	{
		files: ['**/*.ts'],
		ignores: ['dist', 'node_modules'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2020,
			sourceType: 'module',
			globals: {
				...globals.node,
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
			prettier: prettierPlugin,
		},
		rules: {
			// Reglas de TypeScript
			...tseslint.configs.recommended.rules,
			'@typescript-eslint/no-unused-vars': ['warn'],
			'@typescript-eslint/explicit-function-return-type': 'off',
			'padding-line-between-statements': [
				'error',
				// Línea vacía ANTES de bloques: if, for, try, function, etc.
				{
					blankLine: 'always',
					prev: '*',
					next: ['block-like', 'multiline-block-like', 'multiline-expression'],
				},
				// Línea vacía DESPUÉS de bloques:
				{
					blankLine: 'always',
					prev: ['block-like', 'multiline-block-like', 'multiline-expression'],
					next: '*',
				},
			],
			'padded-blocks': ['error', 'always'],
			'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
			// Regla de Prettier para que ESLint marque errores de formato
			'prettier/prettier': 'error',
		},
	},

	// 2. 🚨 CRUCIAL: 'eslint-config-prettier' debe ser el ÚLTIMO objeto
	// Esto DESACTIVA todas las reglas de ESLint que entran en conflicto con Prettier.
	// Al estar al final, garantiza que se aplique después de todas las demás reglas.
	prettierConfig,
];
