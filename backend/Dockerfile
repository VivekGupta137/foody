FROM openjdk:8-jdk-alpine as build

WORKDIR /build
COPY ./pom.xml .
COPY ./mvnw .
COPY ./src src
COPY ./.mvn .mvn
RUN chmod +x ./mvnw
RUN ./mvnw dependency:go-offline -B
RUN ./mvnw package -DskipTests
RUN mkdir -p target/dependency  && (cd target/dependency; jar -xf ../*.jar)

# 
# Package stage
# 
FROM gcr.io/distroless/java
COPY --from=build /build/target/*.jar /usr/app/apiserver.jar
EXPOSE 4444
ENTRYPOINT ["java","-jar","/usr/app/apiserver.jar"]