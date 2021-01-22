import minilib as lib
import json

lib.naive_wd()

source_filename = "assets/traces-du-reseau-ferre-idf.json"
dest_filename = "assets/polyline_locs.json"

lib.del_file(dest_filename)

data = {}
data['polylines'] = []

def format_coord(coordinates):
    L_dest = []
    for longlat in coordinates:
        latlong = {
            'latitude': longlat[1],
            'longitude': longlat[0]
        }
        L_dest.append(latlong)
    return L_dest

def add_polyline(polyline, data):
    data['polylines'].append({
        'ratpid': polyline['properties']['objectid'],
        'coordinates': format_coord(polyline['geometry']['coordinates']),
        'line': polyline['properties']['indice_lig'],
        'color': "#" + polyline['properties']['colourweb_hexa']
    })

with open(source_filename) as src_file:
    src_data = json.load(src_file)

for polyline in src_data['features']:
    add_polyline(polyline, data)

with open(dest_filename, 'w') as dest_file:
    json.dump(data, dest_file)

print(dest_filename + " has been created")
