import pandas as pd
import pymysql
from sqlalchemy import create_engine

engine = create_engine("mysql+pymysql://root:masood1965@localhost/uscitiesdata")

def load_job_data():
    query = "SELECT City, Organization, Exp_Sal, Profession, Type FROM US_JOB_DATA"
    job_data = pd.read_sql(query, engine)
    return job_data

job_data = load_job_data()

def find_job(city, profession, expected_salary):
    # This example assumes `job_data` is globally accessible and a DataFrame
    filtered_data = job_data[(job_data['City'].str.lower() == city.lower()) & 
                             (job_data['Profession'].str.contains(profession, case=False))]
    if filtered_data.empty:
        return "No matching jobs found."
    
    filtered_data['Salary_Diff'] = abs(filtered_data['Exp_Sal'] - expected_salary)
    sorted_jobs = filtered_data.sort_values(by='Salary_Diff')
    
    if sorted_jobs.empty:
        return "No jobs close to the expected salary."
    else:
        return sorted_jobs.head(1)

# # Example usage
# profession = 'doctor'
# city = 'Cleveland'
# expected_salary = 90000
# job_recommendation = find_job(city, profession, expected_salary)
# print("Recommended Job:")
# print(job_recommendation)
