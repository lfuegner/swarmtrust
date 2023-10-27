from dotenv import load_dotenv
import os
import requests
import json

load_dotenv('.env')

opensea_api_key: str = os.getenv('OPENSEA_API_KEY')
address: str = "0xac8D429d383a4a5c03f05Ae5A14DC491783bFa56"

def getAccount(address):
  """
  Get an OpenSea Account Profile including details such as bio, social media usernames, and profile image.
  """
  url = f"https://api.opensea.io/api/v2/accounts/{address}"

  headers = {
      "accept": "application/json",
      "x-api-key": opensea_api_key
  }

  response = requests.get(url, headers=headers)
  
  return response.text