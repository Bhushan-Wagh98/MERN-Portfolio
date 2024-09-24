export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();

  res
    .status(statusCode)
    .cookie(process.env.COOKIE_NAME, token, {
      // expires: new Date(Date.now() + process.env.COOKIE_EXPIRE),
      maxAge: process.env.COOKIE_EXPIRE,
      httpOnly: true,
    })
    .json({
      success: true,
      message,
      token,
      user,
    });
};
