import opensea
import json

address: str = "0xac8D429d383a4a5c03f05Ae5A14DC491783bFa56"

response = json.loads(opensea.getAccount(address))
print(response)