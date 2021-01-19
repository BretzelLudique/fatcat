import os, sys

if os.getcwd()[-6:] != "fatcat":
    print("wrong workdir name")
    sys.exit()

if os.path.exists("txt/big.json"):
    os.remove("txt/big.json")

str0 = "\t\"text"
str00 = "\": "
str1 = "\"Cluny, l'hôtel de Cluny accueillait jusqu'au XVème siècle les abbés étudiants venus suivre des études à la Sorbonne. C'est aujourd'hui et depuis 1844 un musée sur le moyen âge. La Sorbonne est un bâtiment parisien qui tire son nom de Robert de Sorbon, le fondateur du collège de Sorbonne, collège dédié à la théologie du temps de l'ancienne Université de Paris.\\nLe terme Sorbonne est aussi utilisé dans le langage courant pour désigner l'ancienne Université de Paris (avant 1793), les facultés de Paris y siégeant au XIXe siècle, et la nouvelle Université de Paris de 1896 à 1971.\",\n"

with open("txt/big.json", "w") as f:
    f.write("{\n")
    for i in range(10000):
        f.write(str0 + str(i) + str00 + str1)
    f.write(str0 + "10000" + str00 + str1[:-2] + "\n")
    f.write("}")
