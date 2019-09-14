module.exports = async function(context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  let envVarExample = process.env.ENV_VARIABLE_EXAMPLE_NAME;
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { envVarExample }
  };
};
