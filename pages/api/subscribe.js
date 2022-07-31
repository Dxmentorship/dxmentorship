const { createClient } = require("@supabase/supabase-js");

const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;

const registerUser = async (req, res) => {
  //   const mailchimpInstance = process.env.MAILCHIMP_INSTANCE;
  //   const listUniqueId = process.env.MAILCHIMP_LIST_UNIQUE_ID;
  //   const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;

  const email = req.body.email;

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    res.status(500).json({ message: "Email is invalid" });
  }
  try {
    // Initialize Supabase
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data, error } = await supabase.from("dxt-newsletter").upsert({
      email: email,
    });
    if (data) {
      res.status(200).json({ message: "Success" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export default registerUser;
