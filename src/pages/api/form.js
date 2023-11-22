import Airtable from 'airtable';
export const prerender = false;
export const POST = async ({ request }) => {
  const base = new Airtable({ apiKey: import.meta.env.AIRTABLE_TOKEN }).base('appVFv93LZD6mVhDl');
  const data = await request.json();
  console.log(data);

  //prettier-ignore
  try {
    base('tblz5bwLh2AOvkTkK').create(
      [
        {
          fields: {
            Name: data.name,
            Email: data.email,
            Company: data.company,
            Location: data.location,
            Message: data.message,
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
    console.log(error);
    return new Response(null, {
      status: 500,
      message: error.message,
    });
  }

  return new Response(
    JSON.stringify({
      message: 'Record Created Successfully',
      status: 200,
    }),
  );
};
