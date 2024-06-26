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
    # test the first function in the code to load in the data and required metrics from the mysql database
    data = load_job_data()
    assert not data.empty
    assert len(data) == 4

def test_find_job():
    with patch('job_utils.job_data', mock_job_data):
        # Creating an example test case to test the finding job function
        result = find_job('Austin', 'software developer', 105000)
        assert not result.empty
        assert result.iloc[0]['Organization'] == 'Cloudflare Consulting'

if __name__ == "__main__":
    pytest.main()
