CREATE TABLE US_NEIGHBORHOOD_DATA (
    City VARCHAR(500) NOT NULL,
    Locality VARCHAR(500) NOT NULL,
    CostOfLiving DECIMAL(5,2),
    CrimeRate INT,
    PublicTransportation INT,
    DistanceToWork INT,
    DistanceToSchool INT,
    PRIMARY KEY (City, Locality),
);