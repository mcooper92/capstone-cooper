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

The Client Service handles six processes: 
1. Retrieve products from the product inventory (stored in an Elasticsearch DB) using a user defined search query.
2. Send new products to the Product Inventory Service.
3. Send completed purchase orders to the Order Service.
4. Retrieve recommendations from the Recommendation Service.
5. Send active user_IDs to the Recommendation Service.
6. Send users' product page views to the Events Service.

Process #1 relies on an Elasticsearch Database, which is updated on a set interval, to return user search queries in real-time. Similarly, process #4 relies on Redis, which caches the most recent users' recommendations, to return users' recommendations in real-time. In the background, recommendations are added to the Redis cache via an SQS queue and polling service. All other processes happen in real-time. If a user's recommendations are not present in the cache, a default set of recommendations based on popularity is returned to the user and that user is added to the SQS queue to the Recommendation Service.


## Getting Started

These instructions will a copy of the project running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* Docker 17.12.0
* Koa 2.4.1
* Elasticsearch 6.1.3
* Java 1.8.0_152
* Redis 4.0

### Installing

Do I need ESDB and Redis installation instructions here?

Step 1:

```
Download Elasticsearch
```

Step 2

```
Well done, kid. Go buy yourself a drink.
```

Here's an example of what you get from each DB......

## Running the tests

Once tests are added, this is where I'll tell you how to use them.

## Deployment

Hold your horses. I haven't even deployed yet...but when I do, this is where you'll find those instructions. 

## Built With

* [Elasticsearch](http://www.dropwizard.io/1.0.2/docs/) - Search Database
* [Redis](https://maven.apache.org/) - Cache 

## Contributing

Please read [CONTRIBUTING.md]for details on our code of conduct, and the process for submitting pull requests to me.
