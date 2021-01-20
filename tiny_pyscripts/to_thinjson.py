import minilib as lib
import json

lib.naive_wd()

source_filename = "assets/emplacement-des-gares-idf.json"
dest_filename = "assets/marker_locs.json"

lib.del_file(dest_filename)

data = {}
data['stops'] = []

def find_duplicate_index(candidate, data):
    """Returns the index of the occurrence of candidate in data. If no duplicate, returns -1"""
    i = 0
    for arret in data["stops"]:
        if candidate['properties']['nom_gare'] == arret['name']:
            return i
        i += 1
    return -1

def add_stop(arret, data):
    duplicate_index = find_duplicate_index(arret, data)

    if duplicate_index == -1:  # == no duplicate
        data['stops'].append({
            'name': arret['properties']['nom_gare'],
            'coordinate': {
                'latitude': arret['geometry']['coordinates'][1],
                'longitude': arret['geometry']['coordinates'][0]
            },
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
