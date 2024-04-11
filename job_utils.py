import pandas as pd
import pymysql
from sqlalchemy import create_engine

engine = create_engine("mysql+pymysql://root:masood1965@localhost/uscitiesdata")

def load_job_data():
    query = "SELECT City, Organization, Exp_Sal, Type FROM US_JOB_DATA"
    job_data = pd.read_sql(query, engine)
    return job_data

job_data = load_job_data()
