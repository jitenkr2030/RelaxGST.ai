const asyncHandler = require('express-async-handler');
const Organization = require('../models/Organization');

const checkOrganization = asyncHandler(async (req, res, next) => {
  const organization = await Organization.findById(req.user.organization);

  if (!organization) {
    res.status(404);
    throw new Error('Organization not found');
  }

  req.organization = organization;
  next();
});

module.exports = { checkOrganization };
