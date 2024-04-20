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

