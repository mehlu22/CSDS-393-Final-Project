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
