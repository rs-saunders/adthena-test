Adthena Test Client
================

This is a simple client created using vanilla javascript (ECMAScript 6) using babel.

### How to Run It

You can run the application from command line or using an IDE (IntelliJ Community Edition is available on the laptop we
provide).

#### Running from Command Line

1. Make sure you are inside the `test-client` folder.
2. First you will need to install the npm dependencies:
    ```
    npm install
    ```
3. Run tests:
    ```
    npm test
    ```    
4. Run using npm:
    ```
    npm start
    ```
5. Your client will be available on port 8082. Go to **http://127.0.0.1:8082/** to test it.
6. From the client code you can access the java test api at **http://127.0.0.1:8082/api**. An example of accessing the status endpoint is:
    ```
    http://127.0.0.1:8082/api/status
    ```
