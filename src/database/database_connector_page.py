import urllib.request
contents = urllib.request.urlopen("localhost:3000/").read()
print(contents)