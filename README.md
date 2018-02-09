# Project Name: Nile

Nile is a micro-service application modelled after Amazon.com's recommendation service architecture. This repository is the Client Service for Nile. 

## Author
* Michael Cooper

## Project Goal

The goal of this project was to contrast the effectiveness of a collaborative filtered recommendation system with a content filtered recommendation system.


## Tell Me More

Sure.

When a user shops on Nile (or Amazon), he or she expects to see relevant product recommendations. These recommendations are generated using either content based or collaborative based filtering algorithms. 

Content based filtering prioritizes past user activity for a specific user when filtering the product inventory for product recommendations. In this context, user activity is defined as search queries, product views, and product purchases.

Collaborative based filtering uses a collection of similar users' activity when filtering the product inventory for product recommendations. In this context, similar users are defined as users with similar purchase histories. 

The inputs into this application are user events processed through this micro-service, Client Service, which handles user search queries, user views, and user purchases. 

The Client Service has six duties: 
1. To retrieve products from the product inventory (stored in an Elasticsearch DB) using a user defined search query
2. To send new products to the Product Inventory Service
3. To send completed purchase orders to the Order Service
4. To retrieve recommendations from the Recommendation Service
5. To send active user_ID to the Recommendation Service
6. To send user product page views to the Events Service

Process #1 relies on an Elasticsearch Database, which is updated on a set interval, to return user search queries in real-time. Similarly, process #4 relies on Redis, which caches the most recent users' recommendations, to return users' recommendations in real-time. In the background, recommendations are added to the Redis cache via an SQS queue and polling service. All other processes happen in real-time. If a user's recommendations are not present in the cache, a default set of recommendations based on popularity is returned to the user and that user is added to the queue to the Recommendation Service.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* Docker 17.12.0
* Koa 2.4.1
* Elasticsearch 6.1.3
* Java 1.8.0_152
* Redis 4.0

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md]for details on our code of conduct, and the process for submitting pull requests to us.
