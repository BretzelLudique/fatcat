import os, sys

if os.getcwd()[-6:] != "fatcat":
    print("wrong workdir name")
    sys.exit()

source_filename = "txt/Ligne-1.quasijson"
tmp_filename = "txt/tmp.quasijson"
dest_filename = "txt/ligne1.json"

if os.path.exists(tmp_filename):
    os.remove(tmp_filename)

if os.path.exists(dest_filename):
    os.remove(dest_filename)


with open(tmp_filename, "w+") as tmp:
    with open(source_filename, "r") as source:
        for line in source:
            if (line != "\n"):
                tmp.write(line.replace('\t', '\\t'))

    tmp.seek(0,0)
    with open(dest_filename, "w") as dest:
        dest.write(tmp.readline()) # 1e ligne de tmp, sensee etre "{"
        for i in range(len(tmp.readlines()) // 3 - 1): # on procede par bloc de 3 lignes : on veut celle du milieu, et on lui rajoute une virgule
            tmp.readline()
            dest.write(tmp.readline()[:-1] + ",\n")
            tmp.readline()

        tmp.readline()
        dest.write(tmp.readline()[:-1] + "\n") # le dernier bloc est particulier : on ne veut plus de virgule
        tmp.readline()

        dest.write(tmp.readline()) # derniere ligne de tmp, sensee etre "}"
