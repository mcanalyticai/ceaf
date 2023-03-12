import urllib.request

webUrl = urllib.request.urlopen('http://localhost:3000/?name=aaaa')
print("result code:" + str(webUrl.getcode()))

data = webUrl.read()
print(data)