##Testing

**Jest Compatibilty Error:**

Testing kept failing due to Jest's incompatibility with ESModules since its based on NodeJS[^1] [^2]. I fixed the issue by setting the babelrc to use @babel/preset-env without a target (since "test" is not a option for @babel/preset-env for some reason - though apparently it did work with the old version of babel-preset-env), however this isn't a production ready solution since what it actually does in a default state is just turn all your code into es2015[^3] drastically increasing your bundle size.

**Todo:**

- [x] Get Jest to work with Import syntax
- [ ] rework the babel options so that the code is transpiled to es2015 only during test scenarios, and not during production (maybe dontenv library mixed with a custom webpack config)
 
[^2]: https://jestjs.io/docs/ecmascript-modules

[^1]: https://dev.to/aergonaut/setting-up-jest-with-react-and-webpacker-5dmo/#babel-modules

[^3]: https://babeljs.io/docs/en/babel-preset-env#no-targets