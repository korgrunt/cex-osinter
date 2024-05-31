const banner = `
██████╗███████╗██╗  ██╗      ██████╗ ███████╗██╗███╗   ██╗████████╗███████╗██████╗ 
██╔════╝██╔════╝╚██╗██╔╝     ██╔═══██╗██╔════╝██║████╗  ██║╚══██╔══╝██╔════╝██╔══██╗
██║     █████╗   ╚███╔╝█████╗██║   ██║███████╗██║██╔██╗ ██║   ██║   █████╗  ██████╔╝
██║     ██╔══╝   ██╔██╗╚════╝██║   ██║╚════██║██║██║╚██╗██║   ██║   ██╔══╝  ██╔══██╗
╚██████╗███████╗██╔╝ ██╗     ╚██████╔╝███████║██║██║ ╚████║   ██║   ███████╗██║  ██║
 ╚═════╝╚══════╝╚═╝  ╚═╝      ╚═════╝ ╚══════╝╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝                                                                                    
`;

const byebye = `
██████╗ ██╗   ██╗███████╗    ██████╗ ██╗   ██╗███████╗    
██╔══██╗╚██╗ ██╔╝██╔════╝    ██╔══██╗╚██╗ ██╔╝██╔════╝    
██████╔╝ ╚████╔╝ █████╗█████╗██████╔╝ ╚████╔╝ █████╗      
██╔══██╗  ╚██╔╝  ██╔══╝╚════╝██╔══██╗  ╚██╔╝  ██╔══╝      
██████╔╝   ██║   ███████╗    ██████╔╝   ██║   ███████╗    
╚═════╝    ╚═╝   ╚══════╝    ╚═════╝    ╚═╝   ╚══════╝ 
`;

const start = `                                                                                               
####  #####   ##   #####  #####     ####   ####  #####    ##   #####  #####  # #    #  ####  
#        #    #  #  #    #   #      #      #    # #    #  #  #  #    # #    # # ##   # #    # 
 ####    #   #    # #    #   #       ####  #      #    # #    # #    # #    # # # #  # #      
     #   #   ###### #####    #           # #      #####  ###### #####  #####  # #  # # #  ### 
#    #   #   #    # #   #    #      #    # #    # #   #  #    # #      #      # #   ## #    # 
 ####    #   #    # #    #   #       ####   ####  #    # #    # #      #      # #    #  ####                                                                                                                                                                               
`;

const end = `                                                                                   
###### #    # #####      ####   ####  #####    ##   #####  #####  # #    #  ####  
#      ##   # #    #    #      #    # #    #  #  #  #    # #    # # ##   # #    # 
#####  # #  # #    #     ####  #      #    # #    # #    # #    # # # #  # #      
#      #  # # #    #         # #      #####  ###### #####  #####  # #  # # #  ### 
#      #   ## #    #    #    # #    # #   #  #    # #      #      # #   ## #    # 
###### #    # #####      ####   ####  #    # #    # #      #      # #    #  ####                                                                                                                                                                       
`;


const printBanner = () => {
    console.log("Welcome to");
    console.log(banner)
    console.log("A search engine for email registration on central exchange.");
}

const printStartScrapping = () => {
    console.log(`${start}`)
}

const printEndScrapping = () => {
    console.log(`${end}`)
}

const printByeByeBanner = () => {
    console.log(`${byebye}`)
}

const printMsg = (msg) => {
    console.log(msg);
}

const printSupportedTarget = (targets) => {
    console.log("\n")
    console.log("*************************************")
    console.log("***  Suportted target list below: ***")
    console.log("*************************************")

    for (index in targets) {
        if (targets[index].active) {
            console.log(` - ${targets[index].name} - fiability is ${targets[index].fiability} - ${targets[index].description}`);
        }
    }
    console.log("\n *******************************\n")

}



module.exports = { printSupportedTarget, printBanner, printByeByeBanner, printStartScrapping ,printEndScrapping, printMsg };
