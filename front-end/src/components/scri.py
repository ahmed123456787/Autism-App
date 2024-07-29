import pandas as pd

# Function to transform an Excel column into an array
def excel_column_to_array(file_path, sheet_name, column_name):
    # Read the Excel file
    df = pd.read_excel(file_path, sheet_name=sheet_name)
    
    # Convert the column to a list (array)
    array = df[column_name].dropna().tolist()
    
    return array

# Example usage
file_path = r'C:\Users\hp\Desktop\Hybrid-Quest-EN-Long (1).xlsx'
sheet_name = 'Feuille 1'  # Replace with your sheet name
column_name = "• Child's name"  # Replace with your column name

array = excel_column_to_array(file_path, sheet_name, column_name)
print(array)
