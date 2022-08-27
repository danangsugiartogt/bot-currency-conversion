exports.successResponse = (message, data) => {
  return { success: { status: true, message: 'success' }, data };
};

exports.errorResponse = (message) => {
  return { success: { status: false, message } };
};
