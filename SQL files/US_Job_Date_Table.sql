CREATE TABLE ‘US_JOB_DATA’ (
	‘City’ VARCHAR(300) NOT NULL,
	‘Organization’ VARCHAR(20) NOT NULL,
	‘Exp_Sal’ INT NOT NULL,
	‘Type’ VARCHAR(9),
	PRIMARY KEY (‘City’, ‘Organization’)
	Check ‘Type’ in {‘Remote’, ‘Hybrid’, ‘In Person’}
);
