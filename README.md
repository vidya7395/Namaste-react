# Namaste React
    All the react code and assignments 


# Structure
/**
 * HeaderComponent
 *  -Logo
 *  -Search
 *  -Cart
 * RestaurantComponent
 *  -container
 *  -card
 */


# Two types of Export/Import
- Default export/import
- import Component from "path";


- named export/import
- import {Component} from "path";


# React Hook
- (Normal JS Utility functions)
- Two very important hooks
  - UseState()  - Super powerful State Variables in react
  - useEffect() - 


# CODE OPTIMIZING
- Chunking
- Code Splitting
- Dynamic bundling
- LAZY LOADING
- On demand loading
- Logical separation of bundle - independent app
- Dynamic Import

# EP -09 OPTIMIZING APP
- Custom hooks
- lazy loading

# EP - 10 Jo dikhta hai wo bikta hai
- Various way to style app
  - scss and css not a preferred way
  - recommended way - styled component
  - other framework
    - material UI
    - styled components
    - bootstrap
    - ant design
    - tailwind css
## Tailwind
- Generic css framework
- Potscss
  - a tool to transform css with javascript and     tailwind   css uses this
  - parcel use postcssrc to understand tailwind
  - in postcssrc we define that we are using tailwind
  - postcssrc is a way that our project understand how we are using tailwind
  - ## PROS 
    - Just use in single file not back and forth    between files
    - it will only include the css which is required
    - lightweight
    - 
  - ## CONS
    - Lots of css to apply makes our code look ugly,class name goes so long , so js code looks ugly


## EP - 11 Data is the new oil
- ## Control and uncontrolled component 
      - Any component which is controlled by parent is called controlled component and if the component has its own state then it is call un controlled component
- ## Lifting state up

## EP - 12 Redux Toolkit 
 - Install @reduxjs/toolkit and react-redux
 - Build  our store
 - Connect our store to our app
 - Slice (cartSlice)
 - dispatch(action)
 - read data using selector
 - ### History of redux(older redux)
   - Earlier- vanilla redux, => there was a big problem with state,it gives warning, don't mutate state
  we cannot modify state
  - How then we modify it, we create the copy of state and then modify the state
  
  - ### Redux toolkit (newer version)
    - WE HAVE To mutate the state and redux uses IMMER library to work with immutable state


    