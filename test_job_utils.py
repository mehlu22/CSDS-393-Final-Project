import pytest
from unittest.mock import patch, MagicMock
import pandas as pd

from job_utils import load_job_data, find_job

# Adding mock data to test the function down the line
mock_job_data = pd.DataFrame({
    'City': ['Austin', 'Austin', 'Boston', 'Chicago'],
    'Organization': ['Cloudflare Consulting', 'Positive Energy Engineering', 'Zagaran Software Engineering', 'Cylon Consulting'],
    'Exp_Sal': [108000, 110000, 135000, 100000],
    'Profession': ['Software Developer', 'Consultant', 'Software Developer', 'Consultant'],
    'Type': ['Hybrid', 'Hybrid', 'Remote', 'Remote']
})

@patch('job_utils.pd.read_sql')
@patch('job_utils.create_engine')

def test_load_job_data(mock_engine, mock_read_sql):
    # creating a mock engine of the local database so to not mess with the actual database
    mock_read_sql.return_value = mock_job_data
    mock_engine.return_value = MagicMock()
