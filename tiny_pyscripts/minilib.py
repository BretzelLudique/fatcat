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