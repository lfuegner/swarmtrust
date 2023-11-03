import opensea
import json

address: str = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
collection_slug: str = "warriors-of-aradena"
cursor = "LWV2ZW50X3RpbWVzdGFtcD0yMDIzLTA4LTEyKzIxJTNBNDklM0EyNy4zNDUyNTAmLWV2ZW50X3R5cGU9Y2FuY2VsbGVkJi1waz0xNDI4OTUyNTQyNA=="

response = json.loads(opensea.getEventsByCollection(collection_slug, event_type = "cancel",next = cursor))
# print(len(response["asset_events"]))
print(response)


