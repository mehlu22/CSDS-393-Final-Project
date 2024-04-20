import pytest
from unittest.mock import patch, MagicMock
import pandas as pd
import numpy as np

from utils import predict_city

# Adding in some sample data here to test
city_data = pd.DataFrame({
    'Population': [2283371, 4941632, 2660329, 9618502, 2088251],
    'CostOfLiving': [106.6, 132.6, 97.9, 100.1, 90],
    'AverageHighTemp': [81, 59, 72, 61, 61],
    'AverageLowTemp': [59, 45, 51, 44, 44],
    'Precipitation': [36.3, 43.6, 43.6, 40.9, 41],
    'MedianAge': [32.7, 31.8, 34.3, 34.2, 36],
    'CrimeRate': [3612, 2758, 3836, 4381, 6538],
    'PoliticalAffiliation': ['Democrat', 'Democrat', 'Democrat', 'Democrat', 'Democrat'],
    'PublicTransportation': [35, 72, 27, 65, 44],
    'City': ['Austin', 'Boston', 'Charlotte', 'Chicago', 'Cleveland']
})

# Map the text for political affiliations
affiliation_mapping = {'Democrat': 1, 'Republican': 0, 'Neutral': -1}

@patch('utils.create_engine')
@patch('utils.pd.read_sql', return_value=city_data)
def test_data_loading(mock_read_sql, mock_engine):
    city_data['PoliticalAffiliation'] = city_data['PoliticalAffiliation'].map(affiliation_mapping)

    # create a mock engine to avoid changes to actual database
    mock_engine.return_value = MagicMock()

    loaded_data = mock_read_sql("SELECT * FROM us_cities", mock_engine.return_value)
    assert not loaded_data.empty
    assert (loaded_data['PoliticalAffiliation'] == 1).all()

# Testing the predict city function's predict_proba line simulation
@patch('utils.pipeline.predict_proba')
def test_predict_city(mock_predict_proba):
    # Simulate the model's predict_proba output for test purposes
    mock_predict_proba.return_value = np.array([[0.1, 0.2, 0.3, 0.4]])
    features = [6000000, 105, 72, 45, 37, 34, 2000, 1, 45]
    
    # Predict cities based on features
    top_cities = predict_city(features)
    assert len(top_cities) == 3  # FInd top 3 cities
    assert top_cities[0] == 'Charlotte'  # Assume a random city with high probability for the mock

if __name__ == "__main__":
    pytest.main()
