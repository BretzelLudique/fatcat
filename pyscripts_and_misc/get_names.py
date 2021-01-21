import minilib as lib
import json

lib.naive_wd()
txt_dir = lib.txt_dir

loc_filename = "assets/marker_locs.json"

dest_filename = txt_dir + "noms_arrets.txt"

lib.del_file(dest_filename)

with open(loc_filename, 'r') as loc_file:
    data = json.load(loc_file)

L_names = []
L_lines = {} # repertorier les arrets accuillant plusieurs lignes

for i in range(1, 15):
    L_lines[str(i)] = []
L_lines['7b'] = []
L_lines['3bis'] = []

def fill_names_multiline_stop(arret):
    for line in arret['line'].split(', '):
        L_lines[line].append(arret['name'])

for arret in data['stops']:
    L_names.append(arret['name'])
    if arret['line'].find(',') != -1:
        fill_names_multiline_stop(arret)
        #L_lines[]

for line in L_lines:
    L_lines[line].sort()
    L_lines[line] = ', '.join(L_lines[line])

with open(dest_filename, 'w') as dest_file:
    for name in sorted (L_names):
        dest_file.write(name + '\n')
    dest_file.write('\n\nDOUBLONS :\n')
    for line in sorted (L_lines):
        dest_file.write('LIGNE ' + line + ' : ' + L_lines[line] + '\n')
        #print(L_lines[line])

print(dest_filename + " has been created")
    