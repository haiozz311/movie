const mongoose = require("mongoose");
const SystemCinemaSchema = mongoose.Schema({
  listCumRap: [{ type: mongoose.Schema.Types.ObjectId, ref: "Theatre" }],
  maHeThongRap: { type: String, required: true },
  tenHeThongRap: { type: String, required: true },
  biDanh: { type: String, required: true },
  logo: { type: String, required: true },
});

const SystemCenima = mongoose.model(
  "SystemCenima",
  SystemCinemaSchema,
  "SystemCenima"
);
module.exports = {
  SystemCinemaSchema,
  SystemCenima,
};
