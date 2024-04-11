CREATE TABLE US_JOB_DATA (
    City VARCHAR(300) NOT NULL,
    Organization VARCHAR(100) NOT NULL,
    Exp_Sal INT NOT NULL,
    Type VARCHAR(9),
    PRIMARY KEY (City, Organization),
    CONSTRAINT Type_check CHECK (Type IN ('Remote', 'Hybrid', 'In Person'))
);
