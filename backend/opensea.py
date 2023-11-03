from dotenv import load_dotenv
import os
import requests

load_dotenv('.env')

opensea_api_key: str = os.getenv('OPENSEA_API_KEY')

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

def getNFTsByAccount(address: str, chain: str, collection_slug: str = "", limit: int = 50, next: str = ""):
  """
  Get NFTs owned by a given account address.

  ### Parameter:
    address : string 
      The unique public blockchain identifier for the contract or wallet.
    chain : string
      The blockchain on which to filter the results. 
    collection_slug : string, optional
      Unique string to identify a collection on OpenSea. This can be found by visiting the collection on the OpenSea website and noting the last path parameter.
    limit : integer, optional
      The number of NFTs to return. Must be between 1 and 200. 
      Default: 50
    next : string, optional
      The cursor for the next page of results. This is returned from a previous request.

  ### Docs: 
    https://docs.opensea.io/reference/list_nfts_by_account
  """
  url = f"https://api.opensea.io/api/v2/chain/{chain}/account/{address}/nfts?collection={collection_slug}&limit={limit}&next={next}"

  response = requests.get(url, headers=headers)

  return response.text

def getContract(address: str, chain: str):
  """
  Get a smart contract for a given chain and address.

  ### Parameter:
    address : string
      The unique public blockchain identifier for the contract or wallet.
    chain : string
      The blockchain on which to filter the results.
  ### Documentation:
    https://docs.opensea.io/reference/get_contract
  """

  url = f"https://api.opensea.io/api/v2/chain/{chain}/contract/{address}"

  response = requests.get(url, headers=headers)

  return response.text

def getNFTsByContract(address: str, chain: str, limit: int = 50, next: str = ""):
  """
  Get multiple NFTs for a smart contract.

  ### Parameter:
    address : string
      The unique public blockchain identifier for the contract or wallet.
    chain : string
      The blockchain on which to filter the results.
    limit: int, optional
      The number of NFTs to return. Must be between 1 and 200. 
      Default: 50
    next : string, optional
      The cursor for the next page of results. This is returned from a previous request.

  ### Documenation:
    https://docs.opensea.io/reference/list_nfts_by_contract
  """

  url = f"https://api.opensea.io/api/v2/chain/{chain}/contract/{address}/nfts?limit={limit}&next={next}"

  response = requests.get(url, headers=headers)

  return response.text

def getAnNFT(address: str, chain: str, identifier: str):
  """
  Get metadata, traits, ownership information, and rarity for a single NFT.

  ### Parameter: 
    address : string
      The unique public blockchain identifier for the contract or wallet.
    chain : string
      The blockchain on which to filter the results.
    identifier : string
      The NFT token id.

  ### Documentation:
    https://docs.opensea.io/reference/get_nft
  """

  url = f"https://api.opensea.io/api/v2/chain/{chain}/contract/{address}/nfts/{identifier}"

  response = requests.get(url, headers=headers)

  return response.text

def getNFTsByCollection(collection_slug: str, limit: int = 50, next: str = ""):
  """
  Get multiple NFTs for a collection.

  ### Parameter:
    collection_slug : string
      Unique string to identify a collection on OpenSea. This can be found by visiting the collection on the OpenSea website and noting the last path parameter.
    limit : integer, optional
      The number of NFTs to return. Must be between 1 and 200. 
      Default: 50
    next : string, optional
      The cursor for the next page of results. This is returned from a previous request.
  ### Documentation:
    https://docs.opensea.io/reference/list_nfts_by_collection
  """

  url = f"https://api.opensea.io/api/v2/collection/{collection_slug}/nfts?limit={limit}&next={next}"

  response = requests.get(url, headers=headers)

  return response.text

def getCollectionList(chain: str, include_hidden: bool = False, limit: int = 100, next: str = ""):
  """
  Get a list of OpenSea collections.

  ### Parameter:
    chain : string
      The blockchain on which to filter the results
    include_hidden : boolean, optional
      If true, will return hidden collections. 
      Default: false
    limit : integer, optional
      The number of collections to return. Must be between 1 and 100. 
      Default: 100
    next : string, optional
      The cursor for the next page of results. This is returned from a previous request.

  ### Documentation: 
    https://docs.opensea.io/reference/list_collections
  """

  url = f"https://api.opensea.io/api/v2/collections?chain_identifier={chain}&include_hidden={include_hidden}&limit={limit}&next={next}"

  response = requests.get(url, headers=headers)

  return response.text

def getCollection(collection_slug: str):
  """
  Get a single collection including details such as fees, traits, and links.

  ### Parameter:
    collection_slug : string
      Unique string to identify a collection on OpenSea. This can be found by visiting the collection on the OpenSea website and noting the last path parameter.
  ### Documenation:
    https://docs.opensea.io/reference/get_collection
  """

  url = f"https://api.opensea.io/api/v2/collections/{collection_slug}"

  response = requests.get(url, headers=headers)

  return response.text

def getTraits(collection_slug: str):
  """
  Get the traits in a collection.
  
  ### Parameter:
    collection_slug : string
      Unique string to identify a collection on OpenSea. This can be found by visiting the collection on the OpenSea website and noting the last path parameter.

  ### Documentation:
    https://docs.opensea.io/reference/get_traits
  """

  url = f"https://api.opensea.io/api/v2/traits/{collection_slug}"

  response = requests.get(url, headers=headers)

  return response.text
#####################################################################################
# Analytics Endpoints
#####################################################################################

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
    chain : string, optional
      The blockchain on which to filter the results.
    event_type : strings, optional 
      The type of event to filter by. If not provided, only sales will be returned.
      Default: sale.
      cancel, redemption, sale, transfer | all and order does not work TODO
    next : string, otional
      The cursor for the next page of results. This is returned from a previous request.
  
  ### Docs:
    https://docs.opensea.io/reference/list_events_by_account
  """
  url = f"https://api.opensea.io/api/v2/events/accounts/{address}?chain={chain}&event_type={event_type}&next={next}"

  response = requests.get(url, headers=headers)

  return response.text

def getEventsByNFT(address: str, chain: str, identifier: str, event_type: str = "sale", next: str = ""):
  """
  Get a list of events for a single NFT. The list will be paginated and include up to 100 events per page.
  
  ### Parameter:
    address : string
      The unique public blockchain identifier for the contract or wallet.
    chain : string
      The blockchain on which to filter the results.
    identifier : string
       The NFT token id.
    event_type : string, optional 
      The type of event to filter by. If not provided, only sales will be returned.
      Default: sale.
      cancel, redemption, sale, transfer | all and order does not work TODO
    next : string, optional
      The cursor for the next page of results. This is returned from a previous request.

  ### Documentaion:
    https://docs.opensea.io/reference/list_events_by_nft
  """

  url = f"https://api.opensea.io/api/v2/events/chain/{chain}/contract/{address}/nfts/{identifier}?event_type={event_type}&next={next}"

  response = requests.get(url, headers=headers)

  return response.text

def getEventsByCollection(collection_slug: str, event_type: str = "sale", next: str = ""):
  """
  Get a list of events for a collection. The list will be paginated and include up to 100 events per page.

  ### Parameter:
    collection_slug : string
      Unique string to identify a collection on OpenSea. This can be found by visiting the collection on the OpenSea website and noting the last path parameter.
    event_type : strings, optional
      The type of event to filter by. If not provided, only sales will be returned.
      Default: sale.
      cancel, redemption, sale, transfer | all and order does not work TODO
    next : string, optional
      The cursor for the next page of results. This is returned from a previous request.
  
  ### Documentation:
    https://docs.opensea.io/reference/list_events_by_collection
  """ 

  url = f"https://api.opensea.io/api/v2/events/collection/{collection_slug}?event_type={event_type}&next={next}"
  print(url)

  response = requests.get(url, headers=headers)

  return response.text