const CRM = require('../models/CRM');

const getCRMs = async (req, res) => {
  const crms = await CRM.find({});
  res.json(crms);
};

const getCRM = async (req, res) => {
  const crm = await CRM.findById(req.params.id);
  if (crm) {
    res.json(crm);
  } else {
    res.status(404).json({ message: 'CRM not found' });
  }
};

const createCRM = async (req, res) => {
  const { name, email, phone, company, status } = req.body;
  const crm = new CRM({
    name,
    email,
    phone,
    company,
    status,
  });
  const createdCRM = await crm.save();
  res.status(201).json(createdCRM);
};

module.exports = { getCRMs, getCRM, createCRM };

