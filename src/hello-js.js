console.log('Loading function');
// AWS Lambda runtime is not recognizing the ES6 module syntax
// export const lambda_handler = async (event, context) => {

// Using CommonJS module syntax instead
exports.lambda_handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('value1 =', event.key1);
    //console.log('value2 =', event.key2);
    //console.log('value3 =', event.key3);
    return event.key1;  // Echo back the first key value
    // throw new Error('Something went wrong');
};