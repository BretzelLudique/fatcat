import minilib as lib
import json

lib.naive_wd()
txt_dir = lib.txt_dir

loc_filename = "assets/map/marker_locs.json"
terminus_filename = "liste-terminus.json"

dest_filename = "assets/new_marker_locs.json"

lib.del_file(dest_filename)

with open(loc_filename, 'r') as loc_file:
    data = json.load(loc_file)

with open(terminus_filename, 'r') as term_file:
    term = json.load(term_file)

print(term)

stopLen = len(data)
for i in range(stopLen):
    data[i]['displayed_at_minzoom'] = True if (data[i]['name'] in term) else False

with open(dest_filename, 'w') as dest_file:
    json.dump(data, dest_file)

print(dest_filename + " has been created")
    