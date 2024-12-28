import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const { name, email, phone, message, company, website } = JSON.parse(event.body || '');

    // Here you would typically:
    // 1. Validate the data
    // 2. Store it in a database
    // 3. Send notification emails
    // 4. Integrate with your CRM

    // For now, we'll just log it (you'll want to remove this in production)
    console.log('Form submission:', { name, email, phone, message, company, website });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid request' }),
    };
  }
};