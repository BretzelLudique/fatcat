import json



with open('assets/map/marker_locs.json', 'r') as f:
	dict_stations=json.load(f)

with open('assets/txt/ligne1.json', 'r') as f:
	dict_descriptions=json.load(f)

for x in dict_stations:
	x['description']=dict_descriptions[x['name']]
	x['path_img_principale']=''

with open('assets/map/marker_locs_v2.json','w') as f:
	f.write(json.dumps(dict_stations))