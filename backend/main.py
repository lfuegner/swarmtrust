import opensea
import json

address: str = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"

response = json.loads(opensea.getEventsByNFT(address, chain="ethereum", identifier= "1"))
print(response["asset_events"])

