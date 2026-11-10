# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.test.js >> Login for existing user 2
- Location: tests\Login.test.js:17:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.setViewportSize: Test timeout of 30000ms exceeded.
```

# Test source

```ts
  1  | import dotenv from 'dotenv';
  2  | dotenv.config();
  3  | 
  4  | class base {
  5  |      constructor(page) {
  6  |          this.page = page;
  7  |          //this.pageUrl = 'https://demowebshop.tricentis.com/';
  8  |          this.pageUrl = process.env.BASE_URL;
  9  |      }
  10 | 
  11 |      async pageOpen() {
  12 | 
> 13 |     await this.page.setViewportSize({
     |                     ^ Error: page.setViewportSize: Test timeout of 30000ms exceeded.
  14 |         width: 1366,
  15 |         height: 768
  16 |     });
  17 | 
  18 |     await this.page.goto('/', {
  19 |         waitUntil: 'domcontentloaded',
  20 |         timeout: 60000
  21 |     });
  22 | }
  23 | }
  24 | 
  25 | export { base };
```