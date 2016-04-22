# Uikit3ds
replace this path ~/3ds/uikit-3ds by the path of your project !

## Git config
git clone https://github.com/oferreira/uikit-3ds.git uikit-3ds
git config core.filemode false

## Install npm
cd ~/3ds/uikit-3ds
sudo npm install
npm install -g gulp
npm install -g yuidocjs
npm install -g mocha
npm install -g karma-cli
npm install -g tsd
tsd install jquery --save

## Install  bower
cd ~/3ds/uikit-3ds
bower install

## Create a link symbolic :
ln -s ~/3ds/uikit-3ds/dist/js/threeds.js ~/3ds/uikit-3ds/doc/client/libs/threeds/js/threeds.js
ln -s ~/3ds/uikit-3ds/dist/css/threeds.css ~/3ds/uikit-3ds/doc/client/libs/threeds/css/threeds.css
ln -s ~/3ds/uikit-3ds/dist/img ~/3ds/uikit-3ds/doc/public/img
ln -s ~/3ds/uikit-3ds/dist/fonts ~/3ds/uikit-3ds/doc/public/fonts

## For windows
mklink /j E:\www\uikit-3ds\dist\js\threeds.js E:\www\uikit-3ds\doc\client\libs\threeds\js\threeds.js
mklink /j E:\www\uikit-3ds\dist\css\threeds.css E:\www\uikit-3ds\doc\client\libs\threeds\css\threeds.css
mklink /j E:\www\uikit-3ds\dist\img E:\www\uikit-3ds\doc\public\img
mklink /j E:\www\uikit-3ds\dist\fonts E:\www\uikit-3ds\doc\public\fonts

## Execute gulp watch
gulp watch
/usr/bin/open -a "/Applications/Google Chrome.app" 'http://localhost:2000/'

## Build a release
gulp build --release 
/usr/bin/open -a "/Applications/Google Chrome.app" 'http://localhost:2000/'

## Generate documentation for directory ./gulp
cd ~/3ds/uikit-3ds/    gulp
yuidoc .  --server
/usr/bin/open -a "/Applications/Google Chrome.app" 'http://localhost:3000/'