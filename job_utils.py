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
    if profession.lower() == 'doctor':
        job_data_filtered = job_data[job_data['Profession'].str.contains('Doctor')]
    elif profession.lower() == 'software engineer':
        job_data_filtered = job_data[job_data['Profession'].str.contains('Software Developer')]
    elif profession.lower() == 'consultant':
        job_data_filtered = job_data[job_data['Profession'].str.contains('Consultant')]
    
    job_data_filtered = job_data_filtered[job_data_filtered['City'].str.lower() == city.lower()]
    job_data_filtered['Salary_Diff'] = abs(job_data_filtered['Exp_Sal'] - expected_salary)
    sorted_jobs = job_data_filtered.sort_values(by='Salary_Diff')
    
    # Return the best match
    return sorted_jobs[['City', 'Organization', 'Exp_Sal', 'Type']].head(1)

# # Example usage
# profession = 'doctor'
# city = 'Cleveland'
# expected_salary = 90000
# job_recommendation = find_job(city, profession, expected_salary)
# print("Recommended Job:")
# print(job_recommendation)
