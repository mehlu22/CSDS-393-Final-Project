import pytest
from unittest.mock import patch, MagicMock
import pandas as pd
from housing_utils import predict_top_localities

# creating mock data for testing the functions
mock_data = pd.DataFrame({
    'City': ['Austin', 'Austin', 'Austin', 'Boston', 'Boston'],
    'Locality': ['Bryker Woods', 'Ridgetop', 'Rosedale', 'Hyde Park', 'Dorchester'],
    'CostOfLiving': [2050000, 440000, 949900, 589000, 723000],
    'CrimeRate': [2925, 3590, 3045, 1567, 3695],
    'PublicTransportation': [38, 35, 40, 65, 70],
    'EnvironmentalRating': [75, 70, 80, 50, 55],
    'PublicSchoolRating': [80, 75, 80, 70, 60]
})

@patch('housing_utils.pd.read_sql')
@patch('housing_utils.create_engine')

def test_predict_top_localities(mock_engine, mock_read_sql):
    # set up the mocks
    mock_engine.return_value = MagicMock()
    mock_read_sql.return_value = mock_data

    # adding in the mock data into the function
    with patch('housing_utils.data', mock_data):
        city = 'Austin'
        features = [500000, 3000, 37, 70, 75]  # assuming certain features for the city
        top_localities = predict_top_localities(city, features, 2)

        assert len(top_localities) == 2  # use to return the top 2 localities in the city
        assert 'Rosedale' in top_localities  # expecting Rosedale due to closer feature matching
        assert 'Ridgetop' in top_localities  # expecting Ridgetop as another top locality
