const CRM = require('../models/CRM');

const getCRMRecords = async (userId) => {
  return await CRM.find({ user: userId });
};

const createCRMRecord = async (userId, recordData) => {
  const { name, email, phone } = recordData;
  const record = new CRM({
    user: userId,
    name,
    email,
    phone,
  });

  return await record.save();
};

module.exports = { getCRMRecords, createCRMRecord };
