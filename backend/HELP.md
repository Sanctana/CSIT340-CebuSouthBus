# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* [Official Gradle documentation](https://docs.gradle.org)
* [Spring Boot Gradle Plugin Reference Guide](https://docs.spring.io/spring-boot/4.1.0/gradle-plugin)
* [Create an OCI image](https://docs.spring.io/spring-boot/4.1.0/gradle-plugin/packaging-oci-image.html)
* [Spring Web](https://docs.spring.io/spring-boot/4.1.0/reference/web/servlet.html)

### Guides
The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)

### Additional Links
These additional references should also help you:

* [Gradle Build Scans – insights for your project's build](https://scans.gradle.com#gradle)

### How to run the application
1. Make sure you have Java 26 installed on your machine.
2. Clone the repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run the following command to build and run the application:
	 ```zsh
	 #Linux
	 ./gradlew bootRun

	 #Windows
	 gradlew.bat bootRun
	 ```
5. The application will start running on `http://localhost:8080`. You can access the API endpoints using a web browser or tools like Postman.
5. For the OpenAPI documentation, you can access it at `http://localhost:8080/swagger-ui/index.html`.


