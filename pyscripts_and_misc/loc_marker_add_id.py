import minilib as lib
import json

lib.naive_wd()
txt_dir = lib.txt_dir

loc_filename = "assets/map/marker_locs.json"

dest_filename = "assets/new_marker_locs.json"

lib.del_file(dest_filename)

with open(loc_filename, 'r') as loc_file:
    data = json.load(loc_file)

stopLen = len(data)
for i in range(stopLen):
    data[i]['id'] = i

with open(dest_filename, 'w') as dest_file:
    json.dump(data, dest_file)

print(dest_filename + " has been created")
    