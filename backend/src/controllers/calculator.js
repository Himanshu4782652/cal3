// Logic for water usage calculation
exports.calculateWaterUsage = (req, res) => {
 const { landArea, cropType, irrigationMethod, etRate, rainfall } = req.body;

 const cropFactors = {
  wheat: 0.8,
  rice: 1.2,
  maize: 0.7,
 };

 const irrigationEfficiencies = {
  drip: 0.9,
  sprinkler: 0.75,
  flood: 0.5,
 };

 if (!landArea || !cropType || !irrigationMethod || !etRate) {
  return res.status(400).json({ error: 'Missing required parameters' });
 }

 const kc = cropFactors[cropType];
 const efficiency = irrigationEfficiencies[irrigationMethod];

 const cwr = kc * etRate;
 const totalWaterRequirement = (cwr * landArea) / efficiency;
 const netWaterRequirement = totalWaterRequirement - rainfall;

 res.json({
  cwr: cwr.toFixed(2),
  totalWaterRequirement: totalWaterRequirement.toFixed(2),
  netWaterRequirement: netWaterRequirement.toFixed(2),
 });
};
