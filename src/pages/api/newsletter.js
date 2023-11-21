import Airtable from 'airtable';
export const prerender = false;
export const POST = async ({ request }) => {
  const base = new Airtable({ apiKey: import.meta.env.AIRTABLE_TOKEN }).base('apphTpWpbUnPtNqiX');
  const data = await request.json();

  //prettier-ignore
  try {
    base('tblhCtMV0iIQGbzKb').create(
      [
        {
          fields: {
            Name: data.name,
            Email: data.email,
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
      },
    );
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
