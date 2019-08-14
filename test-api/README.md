Adthena Test API
================

This is a simple API service created using Dropwizard.

### Prerequisites

> NOTE: These will already be installed if you choose to use a laptop provided by us.

1. Java 1.8 - You should have Java 1.8 already installed on your computer.
2. Maven 3 - This is a Maven project and it is required to build it and pull all of the dependencies correctly. Depending on your OS, these instructions can vary:
    * MacOS - the easiest way to install is is via Homebrew (https://brew.sh/):
        ```
        brew install maven
        ```
    * Linux - most package managers (e. g. `apt`) will already have it available for you.
    * Others - please Google it and follow the instructions.

### How to Run It

You can run the application from command line or using an IDE (IntelliJ Community Edition is available on the laptop we
provide).

#### Running from Command Line

1. Make sure you are inside the `test-api` folder.
2. First you will need to build the fat jar for the application:
    ```
    mvn clean package
    ```
3. After this completes, run the following command:
    ```
    java -jar target/test-api-1.0.0-SNAPSHOT.jar server configuration.yml
    ```
4. Your API will be available on port 8080. Go to **http://localhost:8080/status** to test it.
5. You can stop the API using `Ctrl + C`. If you need to use the console for something else, you should open a new terminal tab or window.

#### Running from an IDE

Depending on the IDE you're using, you will have to perform the following steps:
1. Load the project in the IDE.
2. Create a run configuration for the **com.adthena.AdthenaApi** class.
3. Specify the following program arguments in the run configuration: `server configuration.yml`

### Project Structure

The project has a simple structure with appropriately named packages. Any new resources you are requested to add
will have to go into the `com.adthena.resources` package.

The project uses Guice for dependency injection.
