import pandas as pd

# Load the CSV file
df = pd.read_csv('dump.csv')

# Remove duplicate rows
df.drop_duplicates(inplace=True)

# Fill missing values
df.fillna(0, inplace=True)

# Convert columns to appropriate data types
df['open_index_value'] = pd.to_numeric(df['open_index_value'], errors='coerce')
df['high_index_value'] = pd.to_numeric(df['high_index_value'], errors='coerce')
df['low_index_value'] = pd.to_numeric(df['low_index_value'], errors='coerce')
df['closing_index_value'] = pd.to_numeric(df['closing_index_value'], errors='coerce')

# Rename columns
df.rename(columns={
    'open_index_value': 'Open',
    'high_index_value': 'High',
    'low_index_value': 'Low',
    'closing_index_value': 'Close'
}, inplace=True)

# Remove unwanted columns
df.drop(columns=['points_change', 'change_percent'], inplace=True)

# Remove outliers
df = df[df['Close'] < 30000]  # Adjust as necessary

# Save the cleaned DataFrame
df.to_csv('cleaned_dump.csv', index=False)

print("Data cleaning completed. Cleaned data saved as 'cleaned_dump.csv'.")
