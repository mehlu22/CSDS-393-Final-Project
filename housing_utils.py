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

def predict_top_localities(city, features, n=2):
    """    
    Parameters:
    city: str - The city from which to filter localities.
    features: list - A list containing the features in the following order:
                      [CostOfLiving, CrimeRate, PublicTransportation, EnvironmentalRating, PublicSchoolRating]
    n: int - Number of top localities to return

    Returns:
    list: Predicted top 2 locality names
    """
    city_data = data[data['City'].str.lower() == city.lower()]
    if city_data.empty:
        return ["No data available for this city."]
    
    X_city = city_data[['CostOfLiving', 'CrimeRate', 'PublicTransportation', 'EnvironmentalRating', 'PublicSchoolRating']]
    y_city = city_data['Locality']

    X_train, _, y_train, _ = train_test_split(X_city, y_city, test_size=0.3, random_state=42)

    # ML pipeline
    pipeline = make_pipeline(
        StandardScaler(), 
        MLPClassifier(hidden_layer_sizes=(100,), max_iter=300, activation='relu', solver='adam', random_state=1)
    )
    pipeline.fit(X_train, y_train)
    
    features_df = pd.DataFrame([features], columns=['CostOfLiving', 'CrimeRate', 'PublicTransportation', 'EnvironmentalRating', 'PublicSchoolRating'])
    probabilities = pipeline.predict_proba(features_df)
    classes = pipeline.classes_
    top_localities = sorted(zip(classes, probabilities[0]), key=lambda x: x[1], reverse=True)[:n]
    return [locality for locality, prob in top_localities]
