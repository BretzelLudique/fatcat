import minilib as lib

lib.naive_wd()
txt_dir = lib.txt_dir

source_filename = txt_dir + "Ligne-1.quasijson"
tmp_filename = txt_dir + "tmp.quasijson"
dest_filename = txt_dir + "ligne1.json"

lib.del_file(tmp_filename)
lib.del_file(dest_filename)


with open(tmp_filename, "w+") as tmp:
    with open(source_filename, "r") as source:
        for line in source:
            if (line != "\n"):
                tmp.write(line.replace('\t', '\\t'))

    tmp.seek(0, 0)

    count_lines = len(tmp.readlines())
    tmp.seek(0, 0)

    with open(dest_filename, "w") as dest:
        dest.write(tmp.readline())  # 1e ligne de tmp, sensee etre "{"

        # on procede par bloc de 3 lignes : on veut celle du milieu, et on lui rajoute une virgule
        for i in range(count_lines // 3 - 1):
            tmp.readline()
            dest.write(tmp.readline()[:-1] + ",\n")
            tmp.readline()

        tmp.readline()
        # le dernier bloc est particulier : on ne veut plus de virgule
        dest.write(tmp.readline()[:-1] + "\n")
        tmp.readline()

        dest.write(tmp.readline())  # derniere ligne de tmp, sensee etre "}"

print(dest_filename + " has been created")
