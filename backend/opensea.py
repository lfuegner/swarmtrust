from dotenv import load_dotenv
import os
import requests
import json

load_dotenv('.env')

opensea_api_key: str = os.getenv('OPENSEA_API_KEY')
address: str = "0xac8D429d383a4a5c03f05Ae5A14DC491783bFa56"

headers = {
      "accept": "application/json",
      "x-api-key": opensea_api_key
  }

def getAccount(address: str):
  """
  Get an OpenSea Account Profile including details such as bio, social media usernames, and profile image.
  
  ### Parameter:
    address : string
      The unique public blockchain identifier for the contract or wallet.
  
  ### Docs:
    https://docs.opensea.io/reference/get_account
  """
  url = f"https://api.opensea.io/api/v2/accounts/{address}"

  response = requests.get(url, headers=headers)

  return response.text

def getNFTsByAccount(chain: str, address: str, collection: str = None, limit: int = 50, next: str = None):
  """
  Get NFTs owned by a given account address.

  ### Parameter:
    address : string 
      The unique public blockchain identifier for the contract or wallet.
    chain : string
      The blockchain on which to filter the results. 
    collection : string, optional
      Unique string to identify a collection on OpenSea. This can be found by visiting the collection on the OpenSea website and noting the last path parameter.
    limit : integer, optional
      The number of NFTs to return. Must be between 1 and 200. Default to 50
    next : string, optinal
      The cursor for the next page of results. This is returned from a previous request.

  ### Docs: 
    https://docs.opensea.io/reference/list_nfts_by_account
  """
  url = f"https://api.opensea.io/api/v2/chain/{chain}/account/{address}/nfts?collection={collection}&limit={limit}&next={next}"

  response = requests.get(url, headers=headers)

  return response.text

########################
# Analytics Endpoints
########################

def getCollectionStats(collection_slug: str):
  """
  Get stats for a single collection.

  ### Parameter:
    collection_slug : string
      Unique string to identify a collection on OpenSea. This can be found by visiting the collection on the OpenSea website and noting the last path parameter.
  
  ### Docs: 
    https://docs.opensea.io/reference/get_collection_stats 
  """

  url = f"https://api.opensea.io/api/v2/collections/{collection_slug}/stats"

  response = requests.get(url, headers=headers)

  return response.text

def getEventsByAccount(address: str, chain: str = "", event_type: str ="sale", next: str = ""):
  """
  Get a list of events for an account. The list will be paginated and include up to 100 events per page.

  ### Parameter:
    address : string
      The unique public blockchain identifier for the contract or wallet.
    after : number, optional TODO
      Filter to only include events that occurred at or after the given timestamp. The Unix epoch timstamp must be in seconds
    before : number, optional TODO
      Filter to only include events that occurred before the given timestamp. The Unix epoch timstamp must be in seconds.
    chain : string, optional
      The blockchain on which to filter the results.
    event_type : array of strings, optional TODO
      The type of event to filter by. If not provided, only sales will be returned.
      Default to sale.
    next : string, otional
      The cursor for the next page of results. This is returned from a previous request.
  
  ### Docs:
    https://docs.opensea.io/reference/list_events_by_account
  """
  url = f"https://api.opensea.io/api/v2/events/accounts/{address}?chain={chain}&event_type={event_type}&next={next}"

  response = requests.get(url, headers=headers)

  return response.text

def getEventsByNFT(address: str, chain: str, identifier: str, after = "", before = "", event_type: str = "sale", next: str = ""):
  """
  Get a list of events for a single NFT. The list will be paginated and include up to 100 events per page.
  
  ### Parameter:
    address : string
      The unique public blockchain identifier for the contract or wallet.
    chain : string
      The blockchain on which to filter the results.
    identifier : string
       The NFT token id.
    after : number, optional TODO after={after}&before={before}&
      Filter to only include events that occurred at or after the given timestamp. The Unix epoch timstamp must be in seconds.
    before : number, optional TODO
      Filter to only include events that occurred before the given timestamp. The Unix epoch timstamp must be in seconds.
    event_type : array of strings, optional TODO
      The type of event to filter by. If not provided, only sales will be returned.
      Default to sale.
    next : string, optional TODO &next={next}
      The cursor for the next page of results. This is returned from a previous request.

  ### Documentaion:
    https://docs.opensea.io/reference/list_events_by_nft
  """

  url = f"https://api.opensea.io/api/v2/events/chain/{chain}/contract/{address}/nfts/{identifier}?event_type={event_type}"

  response = requests.get(url, headers=headers)

  return response.text

# def getEventsByCollection():