import type { Handler, Context } from 'aws-lambda';

export const handler: Handler = async (event: string, context: Context): Promise<void> => {
    try {
        console.log('EVENT: \n' + JSON.stringify(event, null, 2));
    } catch (err) {
        console.log('Error: ', err);
    }
    
}