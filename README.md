Result on Insomnia HTTP client

This repository shows how to create a professional api using node.js with express and other facilities.

The api aims to receive an array of addresses and return the distance among them. You will need to use a Google Geocoding Api Key on `src/rest/services/getGoogleGeocodingService.ts`.

Express is a lightweight node.js lib for creating REST apis.


# How to run

You have two easy ways to run this app.


### Without docker

Please make sure you have `node` and `yarn` or `npm` installed.

```
node -v
npm -v
yarn -v
```

You should enter `./src` folder where there is a `package.json` file.

```
cd src
```

Now install the dependencies defined on this `package.json` file.

```
yarn
```

or

```
npm install
```

Then you should be able to use `node` to run this `app.ts` file.

```
node app.ts
```

  


### With docker

Docker is used to ease running and deployment of applications.

Docker is a system for running containerized applications.

See `Dockerfile` to see how this docker image will be prepared.

  

Please first make sure you have docker engine installed. You will need to use `docker` cli for building and running this application.

  

#### How to build this docker image

From this same folder where `Dockerfile` is, run

`docker build -t euclidian-mapping-api . `

This command will create a docker image that can be used to run a container with our application.

  

#### How to run this docker image

`docker run -i -p 8001:8001 euclidian-mapping-api`

  
  

# How to confirm it's running

You should be able to see the following message once it's running:

  
```
👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾

Listening: euclidian-mapping-api is running on port 8001.

👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾
```

Then you should be able to start a POST request to the endpoint /api/geocode/calculate/distance which you will want to use the following body to test:

```
{
	"addresses": [
			{
			"address1": "Rua da Liberdade, 123",
			"address2": "Casa 12",
			"number": "123",
			"postalCode": "05833-000",
			"state": "SP",
			"city": "São Paulo"
		 },
			{
			"address1": "Av. Rio Branco",
			"address2":  "436",
			"number": "123",
			"postalCode": "44444-000",
			"state": "RJ",
			"city": "Rio de Janeiro"
		},
			{
			"address1": "Av. Paralela, 1000",
			"address2": "Casa 46",
			"number": "123",
			"postalCode": "04444-000",
			"state": "BA",
			"city": "Salvador"
		}
	]
}
```

And you will likely see the result:

```
[
  {
    "pair": [ //This is the pair of coordinates used to calculate the distance
      {
        "lat": -23.6731994,
        "lng": -46.7567663
      },
      {
        "lat": -22.9129993,
        "lng": -43.1747442
      }
    ], //This is the distance between this pair of coordinates
    "distance": 375.4462058768079
  },
  {
    "pair": [
      {
        "lat": -23.6731994,
        "lng": -46.7567663
      },
      {
        "lat": -12.974121,
        "lng": -38.4501968
      }
    ],
    "distance": 1476.7648873102978
  },
  {
    "pair": [
      {
        "lat": -22.9129993,
        "lng": -43.1747442
      },
      {
        "lat": -12.974121,
        "lng": -38.4501968
      }
    ],
    "distance": 1212.508436514706
  }
]
```
