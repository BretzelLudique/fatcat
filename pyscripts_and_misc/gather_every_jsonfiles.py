import minilib as lib
import json

lib.naive_wd()
txt_dir = lib.txt_dir

text_filename = txt_dir + "ligne1.json"
loc_filename = "assets/marker_locs.json"

stopnames_filename = txt_dir + "noms_arrets.txt"
dest_filename = "assets/data.json"

lib.del_file(dest_filename)

with open(text_filename, 'r', encoding='utf-8-sig') as text_file:
    text = json.load(text_file)

with open(loc_filename) as loc_file:
    data = json.load(loc_file)

j = 0
for key in text:
    j +=1
    key = key[:-3]
    print(key)


#with open(dest_filename, 'w') as dest_filename:
    