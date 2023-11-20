import Airtable from 'airtable';

export const POST = async ({ request }) => {
  const base = new Airtable({ apiKey: import.meta.env.AIRTABLE_TOKEN }).base('appjKe4x3eQsE7d9K');
  const data = await request.json();

  //prettier-ignore
  try {
    base('tbl55XOsTU8HUj6YI').create([
      {
        "fields": {
          "Name": data.name,
          "Email": data.email,
          "Company": data.company,
          "Location": data.location,
          "Message": data.message
        }
      },
    ], function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
    });
  } catch (error) {
    return new Response(null, {
      status: 500,
      message: error.message,
    });
  }

  return new Response(
    JSON.stringify(
      {
        message: 'Record Created Successfully',
      },
      {
        status: 200,
      },
    ),
  );
};
