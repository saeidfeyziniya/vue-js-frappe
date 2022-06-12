
# How to use VueJs in frappe

## Steps
 - create a ```src``` folder in your app, its folder name is optional but its must be next to www amd public directory
  ```
  three
   - your app
     - public
     - www
     - ...
     - src (this is your custom directory- its name can be deffrent)
       - your custom vue js
     - hooks.py
     - ...
  ```
 - ```cd src```
 - create a ```vue-cli``` project with ```router``` "you must use router with hashtag" for this ,see https://router.vuejs.org/guide/essentials/history-mode.html
 - config your ```vue.confing.js``` like this repository
 - run ```npm run build```
## How it works

when you build your vue-cli project it builds for your a ```index.html``` file in ```www / vue-cli``` directory and your project assets as js , css in ```public / assets``` directory.


## How use it
 - run ```build start``` for running frappe
 - go to ```localhost:8000/vue-cli``` 
 - next you can see ```localhost:8000/vue-cli#/``` automatically
 - it works now

also you can cline this repositry in you custom folder and install it with npm
