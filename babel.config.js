module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json'
                ],
                alias: {
                    screens: './src/screens',
                    state: './src/state',
                    routing: './src/routing',
                    components: './src/components',
                    theme: './src/theme',
                    types: './src/types',
                    utils: './src/utils',
                    api: './src/api'
                }
            }
        ]
    ]
}
