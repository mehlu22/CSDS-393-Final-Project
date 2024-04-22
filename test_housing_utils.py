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
