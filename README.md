
Welcome to project Cads !
===================


Get started
-------------

You need to install  on your local machine :

 1. nodejs :  https://nodejs.org/en/download/
 2. gulp : https://www.npmjs.com/package/gulp
 3. typescript : http://www.typescriptlang.org/
 4. ruby : http://rubyinstaller.org/
 5. jekyllrb : https://jekyllrb.com/
 6. bower : http://bower.io/

Guide of installation
-------------

Install NodeJs got to  https://nodejs.org/en/download/ and download nodejs  installer

![install](https://github.com/oferreira/card-3ds/blob/master/docs/assets/images/readme/download_node_js.jpg)

----------

Install Gulp open a terminal and execute

    sudo npm install -g gulp

----------

Install Typescript open a terminal and execute

    sudo npm install -g typescript
    sudo npm install -g tsd

----------

Install Ruby got to http://rubyinstaller.org/ and download ruby installer

![install](https://github.com/oferreira/card-3ds/blob/master/docs/assets/images/readme/rubyinstaller.jpg)

----------

Install jekyllrb open a terminal and execute

    gem install jekyll

----------

Install Bower open a terminal and execute

    sudo npm install -g bower

----------

Install all packages open a terminal and execute

    sudo npm install
    sudo tsd install
    bower install

----------

Create symbolic link  open a terminal and execute

    ln -s /Users/olivier/3ds/card-3ds/dist /Users/olivier/3ds/card-3ds/docs/dist
    ln -s /Users/olivier/3ds/card-3ds/bower_components /Users/olivier/3ds/card-3ds/docs/bower_components
    ln -s /Users/olivier/3ds/card-3ds/data /Users/olivier/3ds/card-3ds/docs/data

----------

Build
-------------------

Open a terminal and execute

    clear & gul watch

Open a terminal and execute

    cd docs/ & jekyll serve

![run](https://github.com/oferreira/card-3ds/blob/master/docs/assets/images/readme/run.jpg)


For mac os juste to execute

    bash run.sh

----------

https://github.com/bsorrentino/generator-polymerts