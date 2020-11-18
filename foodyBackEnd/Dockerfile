#
# Build stage
#
FROM openjdk:11-jdk as build

WORKDIR /build
COPY pom.xml .
COPY mvnw .
COPY src src
COPY .mvn .mvn
RUN chmod +x ./mvnw
RUN ./mvnw dependency:go-offline -B
RUN ./mvnw package -DskipTests
RUN mkdir -p target/dependency  && (cd target/dependency; jar -xf ../*.jar)

# 
# Package stage
# 
FROM gcr.io/distroless/java:11
COPY --from=build /build/target/foody-0.0.1-SNAPSHOT.jar /usr/app/foody.jar
EXPOSE 4444
ENTRYPOINT ["java","-jar","/usr/app/foody.jar"]