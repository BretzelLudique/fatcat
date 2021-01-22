import minilib as lib
import json

lib.naive_wd()
txt_dir = lib.txt_dir

source_filename = txt_dir + "noms_arrets.txt"
dest_filename = txt_dir + "NamedEmpty.json"

lib.del_file(dest_filename)

L_names = []
with open(source_filename, "r") as source_file:
    L_names = [source_file.readline()[:-1] for i in range(302)]

data = {}
for name in L_names:
    data[name] = ""

with open(dest_filename,'w') as dest_file:
    json.dump(data, dest_file)

print(dest_filename + " has been created")
