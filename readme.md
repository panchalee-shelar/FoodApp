(chrome extention - json viewer, cors allow extention)
Config-driven UI -

# https://emojipedia.org use this url for add emoji in code

extentions - 
    -react dev tool

# add to github
    create repo
    command - git init
            git remote add origin add https path
            git add .
            git commit -m
            

# For Study
    optional chaining, cors, Shimmer UI, monolith, microservices

#connect vs to github remotly & always push code on github
npm in not stand for node package manager it can stand for anything , npm basically manage all pacakages
1. npm init
    add project name
    description
    entry point
    test command as 'jest'
    keywords
    author
    etc.
2. install package like parcel (npm install -D parcel)
    in package there is 2 dependencies 1. is normal & 2. is dev dependencies - dev dependencies required in development phase when we develop anything & normal depencies use for production phase

#gitignore - it used to ignore file or when we don't upload large file on github or production. git read this file & ignore that file 

3. install react (npm i react)
4. install reactDom (npm i react-dom)
5. start the app using command like 'npx parcel index.html', if you faild to build app then remove main from the package.json & check the code properly then run command once again. (don't forget to import react & react-dom/client in ur app)

# parcel
    - Dev build
    - local server
    - HMR = Hot Module Replacement
    - File watching algorithum - written in c++
    - Caching - faster builds
    - Image optimization
    - Minification
    - Bundling
    - compress
    - consistent  hashing
    - code splitting
    - differential bundling - support older browsers
    - Diagnostic
    - error handling
    - HTTPs
    - Tree shaking - remove unused code
    - different dev & prod bundles

## IMP 
    We will be creating scripts instead of using “npx parcel
    index.html”. We can create different scripts for starting our
    project in Development and Production.
    In package.json , in the script section write the following
    command.
    ("scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"})
    To run this command use 'npm run start' or 'npm start'

Functional Comp :
    # a function which reture some JXS code is called functional comp
    # use camelcase exp EdgdComp

props - pass properties to the componant or pass argument to the function(componenet)

# when you fetch data dynamically using map then always gives the key for that particular data item$
# In React we don't use (it's not recommanded) index as key in any itrating loop instaed of index use unique id as key(best practice)

# when you have to export or import multiple comp or cdn link then use 'export' before that function or variable its called name export
# 2 types of expoert & impoert , named & default expoer import


# React Hook
(normal utility js function)
useStae()
useeffect()
when useState update then react re-render the changes (comp)
# Whenever state variable update, react triggers reconcilation cycle (re-render the component)

# Reconciliation algorithum (React Fiber) - comes in react 16
# Diff algorithum - it check the difference between previous virtual dom & updated virtual dom & according render the channges in real dom
Virtual dom is representation of actual dom

# useEffect(callback, dependency array) -> 2 argument
    when component render then ussEffect hook call 
# CORS issue - when we call api from one origin to another origin then browser not allow or gives an cors error or block that api call that the cors policy (if mismatched origin or domain) -- use cors allow extention

# we use Shimmer UI when we refresh page first we can see empty space then load all cards, to fix this user experience we can use shimmer UI just before load all the data from api - it use for best practice & best user experience (we can add loader also)

# Whenever state variable update, react triggers reconcilation cycle (re-render the component)

# how to handle cors error without using plugin - use corsproxy.in (https://thingproxy.freeboard.io/fetch/)

Hooks - useEffect(callback, dependency array) - # if no dependency array useEffect called on every render of component
useEffect(()=>{},[]) - empty array - render once when page load or component render
useEffect(()=>{},[anything]) - render or called hook when that 'anything' will updated

# Rounting 
    1. install router (npm i react-router-dom);
    2. create configuration (createBrowserRouter([list of path (object)]))
    3. useRouteError() hook is special hook give by react-router-dom, it show specifi error 
# for navigation or redirection from one page to another never use ancher tag (a) coz it's render whole page instaed of a use 'Link' tag from react-router-dom

# 2 type of routing in web application
1. server side routing - if we have mltiple pages index, contact etc then a tag get or fetch the data from contact or any particular page and render it on our html page it render whole page  OR we call network call get or fetch data from server side data
2. client side routing - when we go to other tab like about, contact we don't make any api call, it's simply render our component on html page 

# when you use map() always use key

# Optimizing code 
    - when our application contain large services like (makemytrip) services, delivery, order etc then the files of bundler get large which is not recommended in optimizing in this we can use code splitting or chukking . for this we use lazy function of react & import it separately we we click on that particular tab or services

# CSS
    -bootstrap
    - tailwing
    - styled component
    - chakra ui
    - material ui
    - ant design etc

# tailwind 
    extention - tailwind css intellisence