This was an interesting challenge on a fundamental topic and I spent a lot of time getting to know this pattern. Although I have used dependency management tools, this is my first time writing any kind of IoC library. I took some inspiration from inversify using decorators to control dependency injection.

Some notes:
- Dependency injection needs to be recursive, it is currently superficial.
- Things to test/features with more time: 
    - decorators correctly decorating.
    - missing dependency injection handling.
    - circular dependency handling.
    - figure out why the key in inject.ts:6 is undefined. This is preventing the correct mapping of dependencies.