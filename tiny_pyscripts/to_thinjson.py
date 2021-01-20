import minilib as lib
import json

lib.naive_wd()

source_filename = "assets/emplacement-des-gares-idf.json"
dest_filename = "assets/marker_locs.json"

lib.del_file(dest_filename)

data = {}
data['stops'] = []


def add_stop(arret, data):
    duplicate_index = lib.is_duplicate(arret, data)

    if duplicate_index == -1:  # == no duplicate
        data['stops'].append({
            'name': arret['properties']['nom_iv'],
            'coordinates': arret['geometry']['coordinates'],
            'line': arret['properties']['indice_lig']
        })
    else:
        data['stops'][duplicate_index]['line'] += ", " + \
            arret['properties']['indice_lig']


with open(source_filename) as src_file:
    src_data = json.load(src_file)
    for arret in src_data['features']:
        add_stop(arret, data)

with open(dest_filename, 'w') as dest_file:
    json.dump(data, dest_file)

print(dest_filename + " has been created")
