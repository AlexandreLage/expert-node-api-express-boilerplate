
This repository shows how to create a professional api using node.js with `express` and other facilities.

  

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

  

Then you should be able to use `node` to run this `app.js` file.

```
node app.js
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