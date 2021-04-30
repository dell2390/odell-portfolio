module.exports = {
    verbose: true,
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    moduleDirectories: ["node_modules", "<rootDir>"],
}
