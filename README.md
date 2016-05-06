
Welcome to project com.threeds.form !
===================

Get started
-------------

You need to install  on your local machine :

 1. nodejs :  https://nodejs.org/en/download/
 2. gulp : https://www.npmjs.com/package/gulp
 3. typescript : http://www.typescriptlang.org/
 4. ruby : http://rubyinstaller.org/
 5. bower : http://bower.io/

Guide of installation
-------------

Got to  https://nodejs.org/en/download/ and install nodejs

![install](/assets/images/nodejs.jpg)

After execute :

    sudo npm install -g gulp
    sudo npm install -g bower
    sudo npm install -g typescript
    sudo npm install -g tsd

----------

Got to http://rubyinstaller.org/ and install ruby

![install](/assets/images/rubyinstaller.jpg)

----------

Open a terminal and execute :

    cd ~/ 
    git clone https://github.com/oferreira/com.threeds.form.git
    cd ~/com.threeds.form
    sudo npm install
    sudo tsd install
    bower install

----------


RUN
-------------------

 Open a terminal and execute
 
    clear & gul watch --release
    open http://localhost:2000/
