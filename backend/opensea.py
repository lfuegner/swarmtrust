from dotenv import load_dotenv
import os

load_dotenv('.env')

api: str = os.getenv('API_KEY')
print(api)