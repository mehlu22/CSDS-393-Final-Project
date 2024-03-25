import pandas as pd
import pymysql
from sqlalchemy import create_engine
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline
from sklearn.metrics import accuracy_score, f1_score

engine = create_engine("mysql+pymysql://root:masood1965@localhost/uscitiesdata") # Change password here as per your local device

#query data into a df
query = """
SELECT * FROM us_cities
"""
data = pd.read_sql(query, engine)

#done with database connection

data = pd.get_dummies(data, columns=['PoliticalAffiliation'], drop_first=True)
data.rename(columns={'PoliticalAffiliation_Republican': 'PoliticalAffiliation'}, inplace=True)
# print(data)

feature_columns = ['Population', 'CostOfLiving', 'AverageHighTemp', 'AverageLowTemp', 
                   'Precipitation', 'MedianAge', 'CrimeRate', 'PoliticalAffiliation', 'PublicTransportation']
X = data[feature_columns]  
y = data['City']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=42)

pipeline = make_pipeline(StandardScaler(), RandomForestClassifier(n_estimators=100))
pipeline.fit(X_train, y_train)

# # show accuracy of the model
# pipeline.fit(X_train, y_train)
# y_pred = pipeline.predict(X_test)
# accuracy = accuracy_score(y_test, y_pred)
# print(f"Accuracy: {accuracy}")
# print()

def predict_city(features):
    """    
    Parameters:
    features (list): A list containing the features in the following order:
                     [Population, CostOfLiving, AverageHighTemp, AverageLowTemp, Precipitation, 
                      MedianAge, CrimeRate, PoliticalAffiliation, PublicTransportation]
                     Here, 'PoliticalAffiliation' should be False for Democratic and True for Republican.
    
    """
    column_names = ['Population', 'CostOfLiving', 'AverageHighTemp', 'AverageLowTemp', 
                    'Precipitation', 'MedianAge', 'CrimeRate', 'PoliticalAffiliation', 'PublicTransportation']
    
    features_df = pd.DataFrame([features], columns=column_names)
    
    prediction = pipeline.predict_proba(features_df)
    top3_cities = [y_train.unique()[i] for i in prediction.argsort()[0][-3:][::-1]]
    
    return top3_cities

# Example usage
user_input = [60000000, 105, 72, 45, 37, 34, 2000, 1 , 45]
predicted_cities = predict_city(user_input)
print(f"3 City Predictions = {predicted_cities}")