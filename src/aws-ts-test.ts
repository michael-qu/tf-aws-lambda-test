import type { Handler, Context } from 'aws-lambda';

export const handler: Handler = async (event, context: Context): Promise<string> => {
    try {
        console.log('EVENT: \n' + JSON.stringify(event, null, 2));
        console.log('value1 =', event.key1);
        return event.key1 as string;
    } catch (err) {
        console.log('Error: ', err);
        // Ensure err is of type Error
        if (err instanceof Error) {
            return `Error occurred: ${err.message}`;
        } else {
            return 'An unknown error occurred';
        }
    }
    
}