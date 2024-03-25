CREATE TABLE `US_Cities_Data` (
  `City` VARCHAR(255) NOT NULL,
  `Population` BIGINT,
  `CostOfLiving` DECIMAL(5,2),
  `AverageHighTemp` INT,
  `AverageLowTemp` INT,
  `Precipitation` DECIMAL(5,2),
  `MedianAge` DECIMAL(4,1),
  `CrimeRate` INT,
  `PoliticalAffiliation` VARCHAR(50),
  `PublicTransportation` INT,
  PRIMARY KEY (`City`)
);