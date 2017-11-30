module.exports = logic => async (req, res) => {
  const startTime = Date.now();
  try {
    const response = await logic(req);
    const took = Date.now() - startTime;
    return res.status(response.status.success || 200).send(Object.assign({}, {took}, response));
  } catch (error) {
    console.log(error); // this can be sent to external logger app
    let errorStatus;
    if (logic.onFail && typeof logic.onFail === "object") {
      errorStatus = logic.onFail.status || 500;
    }
    const errors = [
      {
        title: error.name || "error",
        details: error.message || "",
        source: req.originalUrl
      }
    ];
    const took = Date.now() - startTime;
    return res.status(errorStatus).send({errors, took});
  }
};
