module.exports = {
  tests: [
    {
      title: "Test App/Run",
      tests: [
        {
          title: "Test of without parameters",
          params: [
            "nexss App/Run",
            "You need to pass at least application name to run"
          ]
        },
        {
          title: "Test of without parameters",
          // shows nexss version like: 2.0.9
          params: ["nexss app/run nexss --version", /\d+\.\d+\.\d+/]
        }
      ]
    }
  ]
};
