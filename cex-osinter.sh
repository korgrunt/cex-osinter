#!/bin/bash

# check if no parameters provided
if [ $# -eq 0 ]; then
    echo "Aucun paramètre spécifié. Utilisation : $0 <paramètre>"
    echo "pour plus d'information, lancer la commande ci dessous"
    echo "./cex-osinter.sh -help" 
    exit 1
fi

# get first param
param=$1

# commande parse
case $param in
    "-build")
        sudo docker build -t cex-osinter .
        ;;
    "-run")
        sudo docker run -it --rm cex-osinter
        ;;
    "-help")
        cat ./help.txt
        ;;
    "-version")
        echo "CEX-osinter"
        cat ./package.json | grep "version"
        ;;
    *)  # unknow params
        echo "Paramètre non reconnu : $param"
        exit 1
        ;;
esac


