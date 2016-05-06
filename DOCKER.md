
Welcome to project com.threeds.form !
===================

Get started
-------------

You need to install  on your local machine :

 1. docker toolbox
 
Guide of installation
-------------

Got to https://www.docker.com/products/docker-toolbox to install docker

![install](/assets/images/docker-toolbox.jpg)

After open a docker terminal and execute :

![install](/assets/images/docker-terninal.jpg)
 
    cd ~/
    git clone https://github.com/oferreira/com.threeds.form.git
    cd com.threeds.form
    docker-compose build

----------


Run
-------------------

Open a docker terminal and execute :

    cd ~/com.threeds.form
    docker-compose up -d -t 30
    open http://192.168.99.100:2000/
