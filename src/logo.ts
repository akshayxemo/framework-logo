import chalk from 'chalk';
import { FrameworkName, frameworks } from './details.js';

export const logos: Record<FrameworkName, string> = {
  angular: chalk.hex(frameworks.angular.color)(`                                                
                 ##########                   
            ####################              
       ##############*###############         
    #################::#################      
    ################-  -################      
    ###############=    =###############      
    ##############+  ..  +##############      
     ############*.  ==  .*#############      
     ###########*.  -##-  .############       
     ###########:  .####.  :###########       
     ##########-  .*####*.  -##########       
     #########=              =#########       
      #######+.              .*#######        
      ######*.  :##########.  .*######        
      ######.  .*##########*.  :######        
      #####:   +############=   :#####        
      ################################        
        ##########################           
           ####################              
              ##############                 
                  ######                         
    `),
  react: chalk.hex(frameworks.react.color)(`                                                                                                                           
               ######                ######
             ###     ####        ####     ###
            ##          ###    ###          ##
            ##             ####             ##
            ##             ####             ##
            ##           ##    ##           ##
            ##         ###      ###         ##
             ##  ########################  ##
          ######    ###            ###    ######
      ###     ##    ##              ##    ##     ###
   ###         ## ###      ####      ### ##         ###
  ##           ####      ########      ####           ##
 ##             ###     ##########     ###             ##
  ##           ####      ########      ####           ##
   ###         ## ###      ####      ### ##         ###
      ###     ##    ##              ##    ##     ###
          ######    ###            ###    ######
             ##  ########################  ##
            ##         ###      ###         ##
            ##           ##    ##           ##
            ##             ####             ##
            ##             ####             ##
            ##          ###    ###          ##
             ###     ####        ####     ###
               ######                ######                                                                                                                                                 
    `),
  vue: chalk.hex(frameworks.vue.color)(`
   =========+#########*        *#########+=========
    =========+*########*      *########*+========+ 
     =========+*########*    *########*+=========  
      =+=======+*########*  *########*+=======+=   
       ==========*########**########*==========    
        +=========*################*=========+     
         ++========+##############+========++      
           =========+############+=========        
            =========+##########+=========         
             +========+########+========+          
              =========+######+=========           
               =========+####+=========            
                =========+#*+========+             
                 =========++=========              
                  =+==============+=               
                   ================                
                    +============+                 
                     +=========++                  
                      =========                    
                        ======                     
                         +==+                      
                          ==                       
                             
   `),
  svelte: chalk.hex(frameworks.svelte.color)(`                       
                            ***************          
                       **********************       
                    ***************************     
                  *************+=---=+***********   
               ************+-.        .:-+********  
            ************+-:              .-+******* 
         +***********+=:.                  .+*******
        ***********=:           :===-.      :*******
       *********=:.          :-+*****+       +******
      ********=.          :-+*********-:.    +******
     *******+.         :-+***************+=::*******
    *******+.       :-+*****************************
    *******-      .=*********+=-::::-=+************ 
    *******-      :*******=:.          :=+********  
    *******=       -=++=:.               .=*******  
     *******-                              -******* 
      *******-.               .:=*+=:       +****** 
      ********+-.          .:=*******:      -*******
     ************+=-::::-=+*********=.      -*******
    *****************************+-.       .+****** 
    ******+.:=+***************+-.         .=******* 
    ******=    .:=*********+-.          .-+*******  
    ******+      .+*****+-:          .-=**********  
    *******:      .-==-:           :=***********    
    *******+.                  .:=+***********      
     *******+-.              :-+************        
      ********+-:         .-+************           
       ***********==---==+************              
         **************************                 
           *********************+                   
              ***************                       
`),
  next: chalk.hex(frameworks.next.color)(`               
                   @@@@@@@@@@@@@@@@@@               
               @@@@@@@@@@@@@@@@@@@@@@@@@@           
             @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         
          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       
         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    
       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  
     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@ 
    @@@@@@@@@@@@@@@    @@@@@@@@@@@  @@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@     @@@@@@@@@@  @@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@   @  @@@@@@@@@  @@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@   @@@ @@@@@@@@  @@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@   @@@@  @@@@@@  @@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@  @@@@@@  @@@@@  @@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@  @@@@@@@  @@@@@ @@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@  @@@@@@@@  @@@@@@@@@@@@@@@@@@@@@
     @@@@@@@@@@@@@@  @@@@@@@@@@ @@@@@@@@@@@@@@@@@@@ 
      @@@@@@@@@@@@@@ @@@@@@@@@@@  @@@@@@@@@@@@@@@@  
      @@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@  
        @@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@   
         @@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@     
           @@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@       
            @@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@         
               @@@@@@@@@@@@@@@@@@@@@@@@@            
                   @@@@@@@@@@@@@@@@@@               
    `),
  nuxt: chalk.hex(
    frameworks.nuxt.color
  )(`                                                       
                    =======                                           
                   =========                                          
                  ==========+                                         
                 =============        ======                           
                ===============      ========+                         
               ========  ========   ===========                        
              ========    ======== =============                       
             ========      ======================                      
            ========        ============= =======+                     
           ========          ==========    ========                    
          ========            ========+     ========                   
         ========             =======        ========                  
        ========             =======          ========                 
       ========            +=======            ========                
      ========            ========              +=======               
     =======+            ========                +=======              
    =======+           =========                  ========             
    ===========================         ===================            
    ==========================        ======================            
     =======================         ======================            
        =+=============+==            ===================+                                                                  
    `),
  'svelte-kit': chalk.hex(
    frameworks['svelte-kit'].color
  )(`                       
                            ***************          
                       **********************       
                    ***************************     
                  *************+=---=+***********   
               ************+-.        .:-+********  
            ************+-:              .-+******* 
         +***********+=:.                  .+*******
        ***********=:           :===-.      :*******
       *********=:.          :-+*****+       +******
      ********=.          :-+*********-:.    +******
     *******+.         :-+***************+=::*******
    *******+.       :-+*****************************
    *******-      .=*********+=-::::-=+************ 
    *******-      :*******=:.          :=+********  
    *******=       -=++=:.               .=*******  
     *******-                              -******* 
      *******-.               .:=*+=:       +****** 
      ********+-.          .:=*******:      -*******
     ************+=-::::-=+*********=.      -*******
    *****************************+-.       .+****** 
    ******+.:=+***************+-.         .=******* 
    ******=    .:=*********+-.          .-+*******  
    ******+      .+*****+-:          .-=**********  
    *******:      .-==-:           :=***********    
    *******+.                  .:=+***********      
     *******+-.              :-+************        
      ********+-:         .-+************           
       ***********==---==+************              
         **************************                 
           *********************+                   
              ***************                       
`),
  analog: chalk.hex(frameworks.analog.color)(`          
                                      ##                                            
                                      ###                                           
                                    ######                                          
                          %         %#######                                         
                        ###       ##########                                        
                      ######     ############%                                      
                      ########   ##############                                      
                    ########## #################                                    
                    ##############################                                   
                  ################################                                  
                  ##################################                                 
                ##########=++###################=:##                                
                ###########-*+###################--###                               
              #####=*+####-**############--*####--*###                              
              ######=#-##-#-*+#.=#########-#=#=+#--**==#                             
            +-*#-=#=#:#:=#-**#.=##+=##=:#-#=#+-#--**+-##                            
          --+-+:====-+:+-=--==+:-+-++-.+=+:+-===+-:++=-+++--                         
          #######*==#*-##.+**#:*--#####+++#==#*-*-**+**###                          
          #########-+#####*#*+#.#==#####*-######*#=**+*:*###                         
        ####################=*-##################*+*+#######                        
        #####################+=####################==#########                       
      ##########################################################                                          
  `),
  astro: chalk.hex(frameworks.astro.color)(`
                 @@@@@@@@@@@@@@@@@@@@@              
                 @@@@@@@@@@@@@@@@@@@@@@             
                @@@@@@@@@@@@@@@@@@@@@@@@            
               @@@@@@@@@@@@@@@@@@@@@@@@@            
               @@@@@@@@@@@@@@@@@@@@@@@@@@           
              @@@@@@@@@@@@@@@@@@@@@@@@@@@@          
              @@@@@@@@@@@@@@@@@@@@@@@@@@@@          
             @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         
            @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@        
           @@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@       
           @@@@@@@@@@@@@@@    @@@@@@@@@@@@@@@       
          @@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@      
         @@@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@@     
        @@@@@@@@@@@@@@@@        @@@@@@@@@@@@@@@     
        @@@@@@@@@@@@@@@          @@@@@@@@@@@@@@@    
       @@@@@@@@@@@@@@@@          @@@@@@@@@@@@@@@@   
       @@@@@@@@@@@@@@@            @@@@@@@@@@@@@@@   
      @@@@@@@@@@@@@@@@            @@@@@@@@@@@@@@@@  
     @@@@@@@@@@@@@@@@              @@@@@@@@@@@@@@@@ 
    @@@@@@@@@@                            @@@@@@@@@@
    @@@         @                                @@@
               @@@@@                 @@@@           
               @@@@@@@@@@@@@@@@@@@@@@@@@@           
               @@@@@@@@@@@@@@@@@@@@@@@@@            
                @@@@@@@@@@@@@@@@@@@@@@@@            
                @@@@@@@@@@@@@@@@@@@@@@@             
                 @@@     @@@@@@@@@@@@               
                         @@@@@@@@@@                 
                         @@@@@@@                    
                         @@@@@@                     
                          @@@@                      
                            @@@                     
  `),
  preact: chalk.hex(frameworks.preact.color)(`                      
                      XXXX                      
                   XXXXXXXXXX                   
               XXXXXXXXXXXXXXXXXX               
            XXXXXXXXXXXXXXXXXXXXXXXX            
         XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX         
      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX      
   XXXXXX+..::...;+xXXXXXXXXx+;...:...+XXXXXX   
   XXXXX;.XXXXXXXX+:.:+XX+..:+XXXXXXXX.+XXXXX   
   XXXXX;:XXXXXXXXXXXX+  +XXXXXXXXXXXX:;XXXXX   
   XXXXXx.+XXXXXXXXx..+XX+..xXXXXXXXX+.xXXXXX   
   XXXXXX+.xXXXXX;.;xXXXXXXx;.;XXXXXx.+XXXXXX   
   XXXXXXX+.+XX+.;XXXX+::+XXXX:.+XX;.xXXXXXXX   
   XXXXXXXXX...;XXXXx.    .xXXXX:...XXXXXXXXX   
   XXXXXXXXX...;XXXXx.    .xXXXX;...XXXXXXXXX   
   XXXXXXXx.+XX;.;XXXX;..;XXXX;.+XX;.xXXXXXXX   
   XXXXXX+.xXXXXX;.;xXXXXXXx;.;XXXXXx.+XXXXXX   
   XXXXXx.+XXXXXXXXx..xXX+..xXXXXXXXX+.xXXXXX   
   XXXXX;:XXXXXXXXXXXX+..+XXXXXXXXXXXX:;XXXXX   
   XXXXX;.XXXXXXXX+:..+Xx+..:+XXXXXXXX.+XXXXX   
   XXXXXX+..::...;+xXXXXXXXXx+;...:...+XXXXXX   
      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX      
         XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX         
            XXXXXXXXXXXXXXXXXXXXXXXX            
               XXXXXXXXXXXXXXXXXX               
                   XXXXXXXXXX                   
                      XXXX                      
  `),
  gatsby: chalk.hex(frameworks.gatsby.color)(`
                 .:=++**####**++=-.               
           .-+*##################*+-.           
        .:*##########################*:.        
      .-*######**=.          .-+*######*-..     
    .:*#####*+.   ...::::::...   .=*#####*:.    
   .=#####*-.  .:=*##########*=:.   -*#####=.   
  .+#####=.  .=*#################+.   -#####+.  
 .=####*-. .-######################=..+######+. 
.-####*-  .*##################################-.
.*####=  .####################################*.
=####*   :*####################################=
*#####*:   :*##################################*
########+.  .-*#################################
#####:####+.  .+##############*.          .#####
*####-.-*###=.  .+############*.........  -####*
=####+  .=###*-. .:+##################*.  +####=
.*####-   .=###*-  .:*################.  -####*.
.-####*:   ..+###*:  .:*#############.  :*####=.
 .=####*:     .*###*.   -*#########=.  :*####+. 
  .+#####-.     :*###+.   =*#####+.. .-#####+.  
   .=#####*-     .-*###=.  .=*+:.  .-*#####=.   
    .:*#####*=.    .-###*=.     ..=*#####*:.    
      .-*######*+-.  .-###*- .=+*######*-..     
        .:############################:.        
           .-+*##################**-.           
               .-=+***####***+=-.               

  `),
  solid: chalk.hex(frameworks.solid.color)(`
                            ----                          
                   --------------------                 
                 --------------------------=            
                -------------------------------=        
               -----------------------------------      
              ------------------------------------====  
             --===++++++++====-------------------====== 
            =++++++++++++++++++++==-------------======  
           +++++++++++++++++++++++++++==-------======   
          ++++++++++++++++++++++++++++++++=---======    
          +++++++++++++++++++++++++++++++++++======     
          ++++++++++++++++++++++++++++++++++++++==      
           +++++++++++++++++++++++++++++++++++          
             ++++++******+++++++++++++++++++            
            ***********+++++++++++++++++++++**          
       ***************+++++++++++++++++++++****         
      ***************+++++++++++++++++++++*****         
     **************+++++++++++++++++++++*******         
    **************+**************++++++*******          
   **********************************+*******           
  *******##############**********************           
 *############################*************             
   ##################################*****              
      ##################################*               
         ##############################*                
             ##########################                 
                 ####################                   
                           ###                          
  `),
  remix: chalk.hex(frameworks.remix.color)(`                                                                                                        
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@                              
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                           
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                         
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                        
   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                       
                         @@@@@@@@@@@@@                      
                          @@@@@@@@@@@@                      
                          @@@@@@@@@@@@                      
                          @@@@@@@@@@@@                      
                        @@@@@@@@@@@@@                       
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                        
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                         
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                            
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                           
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                         
                       @@@@@@@@@@@@@                        
                         @@@@@@@@@@@                        
                         @@@@@@@@@@@                        
   @@@@@@@@@@@@          @@@@@@@@@@@                        
  @@@@@@@@@@@@@@         @@@@@@@@@@@                        
  @@@@@@@@@@@@@@@        @@@@@@@@@@@                       
  @@@@@@@@@@@@@@         @@@@@@@@@@@                        
  `),
  qwik: chalk.hex(frameworks.qwik.color)(`
             ==========================           
         ======--======================         
        ========..-=====================        
       =====+++=:  :=====================       
      =====+++++:.  .-====================      
     =====++++++-.    .====================     
    ====++++++++=.      :===================    
   ====++++++++++:       .-==================   
   ==++++++++++++-         .-=================  
 ===+++++++++++++=.         .:==================
 +=+++++++++++++-.            .-================
+++++++++++++==.                .-==============
++++++++++++=-.                  .==============
++++++++++++++=:.             ..-===============
+++++++++++++++==:            .-=============== 
 +++++++++++++++++=..         .-=============   
  =++++++++++++++++==.         :=============   
   +++++++++++++++++++-.       :============    
    ++++++++++++++++++++-.     .===========     
     ++++++++++++++++++++=:    .==========      
       ++++++++++++++++++++=:.  -========       
       +=++++++++++++++++++++=: :=======        
         ++++++++++++++++++++++=:======         
          +++++++++++++++++++++++======         
               =+++++++++++++++++++=====        
                         ++=++++++++=====       
                               =++++++====      
                                     =++===     
  `),
  lit: chalk.hex(frameworks.lit.color)(`
                       *                        
                     ***                        
                   *****                        
                 *******                        
               *********                        
              **********                        
            ************                        
            ************          ##            
            ************        ####            
            ************      %#####            
            ************    %#######            
            ************  %#########            
            ************ %##########            
*           ***********+############           *
***         *********+==############         ***
*****       ********====############       #****
*******     ******======############     *******
*********   ****========############   *********
**********  **+=========############  **********
************+===========############************
**********##-===========###########=************
********####---=========#########===************
*******#####-----=======#######+====************
*****#######-------=====#####+======************
***#########---------===###*========************
*###########----------==#*==========************
############------------============************
 %%#########-----------  ===========*********** 
   #########---------      =========*********   
     #######-------          =======*******     
       %####-----              =====*****       
         %##---                  ===***         
           #-                      =*           
  `),
  alpine: chalk.hex(frameworks.alpine.color)(`
            %%                             =-                      
          %%%%%%                          -----                    
        %%%%%%%%%                      ---------                  
      %%%%%%%%%%%%%                  -------------                
    %%%%%%%%%%%%%%%%%              -----------------              
  %%%%%%%%%%%%%%%%%%%%           --------------------=            
%%%%%%%%%%%%%%%%%%%%%%%%       =-----------------------           
%%%%%%%%%%%%%%%%%%%%%%%%%%     -------------------------          
  %%%%%%%%%%%%%%%%%%%%%%%%%%     --------------------=            
    %%%%%%%%%%%%%%%%%%%%%%%%%%%    =-----------------              
      %%%%%%%%%%%%%%%%%%%%%%%%%%     --------------                
        %%%%%%%%%%%%%%%%%%%%%%%%%%     ----------=                 
          %%%%%%%%%%%%%%%%%%%%%%%%%%     ------=                  
            %%%%%%%%%%%%%%%%%%%%%%%%%%     ---
              %%%%%%%%%%%%%%%%%%%%%%%%%                            
  `),
  gridsome: chalk.hex(frameworks.gridsome.color)(`
                  ===========                     
            ================                    
         ===================                    
       -====================                    
     =-==================                       
    ---==========                               
  ----========                                  
  ---=======                                    
 ----======                                     
=---======                                      
----=====             ====         ===========  
---======           ========     ===============
--=======          ========--   ==============--
=-======+           ======--     ==========----+
**====+**            ===---       =======----=**
**********                            **********
 **********                          ********** 
  ++++******                        **********  
  +++++++++***                    ************  
    +++++++++++**              *************    
     ++++++++++++++++**********************     
       ++++++++++++++++++****************       
         +++++++++++++++++++***********         
            ++++++++++++++++********            
                ++++++++++*****                 
  `),
  vuepress: chalk.hex(frameworks.vuepress.color)(`
                      :.......   .              
         :.......                 .             
         ..                       .             
      +:::.       ...:. :+x+;:     .            
      +::;.     .;;;xXx;xX+++.      .           
    XxX;::;.      .;++xXXX++:       .           
   &Xxxx;;;.        .+++Xx+;         .          
    $xxx;;;:          .++++:          .         
    &XxXx;;;.          .:x+.          .         
    &$XXX+;;;.           ..            .        
     &XXXx;;+.         ...::::..:.     .:       
     &$XXX+++;.......:....::.:;..........       
      &XXXx+++.........::;::.:::.:........      
      &$XXX+++;.......:.:........:........:     
      &&XXXx+++........::::................     
       &$XXX+++;...........................;    
       &$$$$xxxx..................:;+xxxx       
        &$$$$xxx;........:;+xxxxxxxxxxxxx       
        &$$$$Xxxx++xxxxxxxxxxxxxxXXX$$$         
         &$$$XxxxxxxxxxxXXX$$$$$$$$$$$$         
         &$$$$XXXX$$$$$$$$$$$$$$$$$&&&&         
         &&$$$$$$$$$$$$$$$&&&&&&&               
          &$$$$$$&&&&&&&                        
           &&&&&                                
`),
  vitepress: chalk.hex(frameworks.vitepress.color)(`                                          
                                  ===+               
                      =============--:===             
        =========-----::..............=+             
      ==-::..............            .:=+            
      *+=-.              .....        .:=+            
    *++==.          ..:::::::==:     .:=+            
    *+*==.     .:=====::::--=+-..    ..-++           
    ***+=:.     ..-===------==...     .-++           
    #***=-.       .:====---==....     .:=+           
    %***==.        ..=++===+:..       ..=+           
    @***+=:.        ..:++=+-...       ..-+           
      ****=-.           .=+=. ..       ..-+*          
      #***=-..           .:...         ...=+          
      %***+=:.                           .=+          
      ****=:.         ....:::-------.   .=+*         
      #***=-.   .:--::........:=: .=.   .:++         
      %***+-..  .::.==:.:==:..:+-..-:   ..++         
      @****=:.  .::.-=-==:=-.:=++-..=.  ..=+*        
        ###*=:..  .-.:=:...=-....:..:+.  ..:++        
        %##*+-..  .-..::::-------::::..   ..++        
        @###*=..  .............      ..    .++*       
        ###*+..                     ......:+*#       
        %##*+-.        ......:::--==++******         
        @###*+-::---===+++***#####%%%%%%%%@          
          ######*######%%%%%%%%%%%%%%%%%%%@           
          @##########%%%%%%%%%@@@@@@@@@               
          @@%%%%@@@@@@@@                                                                                          
      `),
  docus: chalk.hex(frameworks.docus.color)(`
                    --++####+++-                  
              .####################-             
            -##########################-          
          +##############################+        
        -##################################+      
      ######################################     
      ########################################.   
    .##########################################-  
    ############################################  
  +############################################+ 
  #################+     +#########     -####### 
  .################         ######         +#####-
  +###############           ####           #####+
  +###############           ####           +####+
  +###############+         +#####         -#####-
  +#################.     -########+      ####### 
  +#############################################+ 
  +#############################################  
  +############################################-  
  +###########################################-   
  +##########################################     
  +########################################+      
  +#######################################        
  +####################################-          
  +#################################-             
  -##########################++-                           
  `),
  express: chalk.hex(frameworks.express.color)(`       
      ..:=+++++-..       ....               ....
    .=%@@#+--=*@@%+.     .*@%-             -%@=.
  .+@@=...     ..-@@+     .-@@=.          *@%:. 
..*@+             .+@%.    .:#@%.      .:%@*.   
.*@=.              .+@#.     .+@@-.   .=@%-     
-@*.                .%@=      .:%@*. .*@*:.     
*@=                  +@*.       .+@#=@@=.       
@@@@@@@@@@@@@@@@@@@@@@@*.        .=@@@:.        
@%-......................       .:%@%@%..       
%@=                            .=@%-.-@%-.      
+@+.                .=+:     .:#@*.   :#@+.     
.%%-.               =@%.    .-%@=.     .*@%:    
.-@@-             .-@@:    .+@%:        .-@@+.  
  :#@%.         ..*@%.    .%@+.           .%@*. 
    :#@@%+---=*@@@#:.   .=@%=              .+@@-
      ..-+****+-..      .:..                ..::                           
  `),
  nestjs: chalk.hex(frameworks.nestjs.color)(`
                                 ****                     
                                ********                
                                **********              
                    ******      ***********             
              ******************************            
           *********************************            
         ***********************************  **        
    ***************************************   ****      
 *****************************************  *******     
 **************************************** **********    
 ****************************************************   
   ***************************************************  
    **************************************************  
     ****        ************************************** 
                     ********************************** 
                        ******************************* 
                         ****************************** 
                          ***************************** 
               ****        **************************** 
             ******      *****************************  
             ******   *******************************   
             ******************* ********************   
              *****************  *************** ***    
              ***************   ****************        
                 ********      ****************         
                            #****************           
                               ********  ***            
                             *******    *               
                          *******                       
  `)
};
