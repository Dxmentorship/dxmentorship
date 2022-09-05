const settings = {
  graphql: {
    uri: "http://localhost:5001/api/graphql",
  },
  meta: {
    rootUrl: "http://localhost:8888",
    title: "Online DevRel Mentorship Program for dev advocates",
    description:
      "Get equipped with knowledge and information that will propel you into a fulfilling Developer Advocacy career.",
    social: {
      graphic:
        "https://res.cloudinary.com/kennyy/image/upload/v1662128709/mentor_ltu3vc.jpg",
      twitter: "@kenny_io",
    },
  },
  routes: {
    authenticated: {
      pathAfterFailure: "/login",
    },
    public: {
      pathAfterFailure: "/documents",
    },
  },
};

export default settings;
