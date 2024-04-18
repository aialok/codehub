import submitCode from "../services/submit-code.services.js";

const submitCodeController = async (req, res) => {
  try {
    const response = await submitCode(req.body);

    return res.status(200).json({
      data: response,
      message: "Code submitted and executed successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: error.message || "Error in submitting code",
      success: false,
      err: error,
    });
  }
};

export { submitCodeController };
