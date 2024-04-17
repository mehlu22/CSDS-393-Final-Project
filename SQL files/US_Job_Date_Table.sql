CREATE TABLE US_JOB_DATA (
    City VARCHAR(300) NOT NULL,
    Organization VARCHAR(300) NOT NULL,
    Exp_Sal INT NOT NULL,
    Type VARCHAR(20),
    Profession VARCHAR(20),
    PRIMARY KEY (City, Organization),
    CONSTRAINT Type_check CHECK (Type IN ('Remote', 'Hybrid', 'In Person'))
    CONSTRAINT Profession_check CHECK (Profession IN ('Software Developer', 'Consultant', 'Doctor'))
);
