import pandas as pd
import pymysql
from sqlalchemy import create_engine
from sklearn.model_selection import train_test_split
from sklearn.neural_network import MLPClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline

# Set up the database connection
engine = create_engine("mysql+pymysql://root:masood1965@localhost/uscitiesdata") # Replace with your database password

query = """
SELECT City, CostOfLiving, CrimeRate, PublicTransportation, EnvironmentalRating, PublicSchoolRating, Locality
FROM us_neighborhood_data
"""
data = pd.read_sql(query, engine)
