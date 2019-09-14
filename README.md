# m-serverless

Why did it make this?

What is technically special in the solution is (which I tried quite hard to find a solution for)
- it is somewhat like a NodeJS Express app
- that can be deployed on Azure functions
- that organises by middlewares
- and parses form-data fields and forms
- that is deployable on Google Cloud Functions as well
therefore if you are going to deploy nodeJS on Azure Functions monika is a good template

## Functions offered

#### HttpTriggerHello
Template code, provided by Azure.

#### HttpTriggerAccessEnv || accessEnv
Read environment variables and return.

#### HttpTriggerImport || importFunction
Calling code from another file. We want different endpoint to share certain functions.

#### HttpTriggerPost || makeRequest
Call a function which make a POST request.
Featuring package `axios`

#### HttpTriggerFormData || parseFormData
Parse multipart/form-data into its fields and files. The content type of the files is a buffer.
Featuring package `azure-func-multipart-parser`

#### HttpTriggerRelay || relayFormData
Parses multipart/form-data and relays to somewhere else.

#### basicMiddleware || importMiddleware
Use of middleware on Azure functions.
Featuring package `azure-function-express`

#### importedMiddleware || serialisedMiddleware
Use of middleware on Azure functions. 
Featuring package `middleware-flow`

## Deployment

#### Deployment on Azure
???

#### Deployment on GCP
importedMiddleware can be deployed on Google Cloud Functions

## Testing
A postman collection has been included in the repository.

I appreciate advice on how to test.
