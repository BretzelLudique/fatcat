from os import getcwd, path, remove
from sys import exit

txt_dir = "assets/txt/"

def naive_wd():
    if getcwd()[-6:] != "fatcat":
        print("wrong workdir name")
        exit()

def del_file(filename):
    if path.exists(filename):
        remove(filename)

def is_duplicate(candidate, data):
    """Returns the index of the occurrence of candidate in data. If no duplicate, returns -1"""
    i = 0
    for arret in data["stops"]:
        if candidate['properties']['nom_iv'] == arret['name']:
            return i
        i += 1
    return -1