module.exports = {
    moduleFileExtensions: [ "js", "jsx", "ts", "tsx" ],
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.jest.json",
            babelConfig: true,
            diagnostics: false,
        },
    },
    setupFilesAfterEnv: [ '<rootDir>/jest.setup.ts' ],
    testPathIgnorePatterns: ['<rootDir>/node_modules/' ],
    coverageReporters: [ "json", "lcov", "text", "text-summary" ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/test/mocks.ts",
        "\\.(css|less|sass|scss)$": 'identity-obj-proxy',
    },
    preset: "ts-jest",
};
