Adthena Test Client
================

### Prerequisites

1. Install nvm:
    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
    ```
2. Ensure nvm is installed:
    ```
    nvm --version
    ```
3. Install node:
    ```
    nvm install node
    ```
4. Ensure node is installed:
    ```
    nvm use node
    ```

This is a simple client created using vanila javascript (ECMAScript 6) using babel.

### How to Run It

You can run the application from command line or using an IDE.

#### Running from Command Line

1. First you will need to install the npm dependencies:
    ```
    npm install
    ```
2. Run tests:
    ```
    npm test
    ```    

3. Run using npm:
    ```
    npm start
    ```

4. Your client will be available on port 8082. Go to **http://127.0.0.1:8082/** to test it.

5. From the client code you can access the java test api at **http://127.0.0.1:8082/api**. An example of accessing the status endpoint is:
    ```
    http://127.0.0.1:8082/api/status
    ```
