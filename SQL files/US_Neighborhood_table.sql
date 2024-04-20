CREATE TABLE US_NEIGHBORHOOD_DATA (
    City VARCHAR(500) NOT NULL,
    Locality VARCHAR(500) NOT NULL,
    CostOfLiving INT,
    CrimeRate INT,
    PublicTransportation INT,
    EnvironmentalRating INT,
    PublicSchoolRating INT,
    PRIMARY KEY (City, Locality),
);

INSERT INTO US_NEIGHBORHOOD_DATA (City, Locality, CostOfLiving, CrimeRate, PublicTransportation, EnvironmentalRating, PublicSchoolRating) VALUES
    ('Austin', 'Bryker Woods', 2050000, 2925, 38, 75, 80),
    ('Austin', 'Ridgetop', 440000, 3590, 35, 70, 75),
    ('Austin', 'Rosedale', 949900, 3045, 40, 80, 80),
    ('Austin', 'Shoal Crest', 999000, 5510, 35, 70, 75),
    ('Austin', 'Zilker', 930500, 7131, 42, 85, 85),
    ('Boston', 'Hyde Park', 589000, 1567, 65, 50, 70),
    ('Boston', 'Dorchester', 723000, 3695, 70, 55, 60),
    ('Boston', 'Allston', 682500, 1381, 80, 70, 75),
    ('Boston', 'Brighton', 557500, 1381, 65, 70, 65),
    ('Boston', 'Charlestown', 935000, 1732, 85, 80, 80),
    ('Charlotte', 'Myers Park', 1507500, 1959, 20, 75, 80),
    ('Charlotte', 'Foxcroft', 1250000, 2668, 22, 70, 85),
    ('Charlotte', 'Eastover', 1702500, 2187, 25, 80, 90),
    ('Charlotte', 'Colonial Village', 528000, 2540, 22, 65, 75),
    ('Charlotte', 'Commonwealth', 499000, 1840, 27, 85, 95);

