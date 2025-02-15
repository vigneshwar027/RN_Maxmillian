# React native

React:

- Is a JS library to just build UI

  it is not dependent on react native.

The react library just build the UI, it is platform incompatible, it is the react DOM that translates the react components to a web

Similarly in RN,

Whatever you write inside a JSX is translated to the respective platform codes.

But what about the plain JS logics that you write outside the JSX??
They are not complied by RN at all, the RN runs a parallel JS thread that processes JS code and then talks to the real native component built by the RN via a translation bridge. this part is taken care by the RN itself.

Creating RN project

    we can it using both EXPO CLI or RN cliche

    Expo CLI helps u give a expo driven RN project it also includes many packages and APIs that raw RN lacks.

    1. install Node JS (coz it gives us the package manager too which we will use to setup  Expo projects)

    2. npx create-expo-app project_name --template blank

    using --template blank is optional, but it will gives u a minimal project so u can learn all.

Folder structure:

package.json - contains all the dependencies
package-lock.json - this is the folder that registers/locks the package versions as this is helpful in copying the project with the same version.
node modules - has all the 3rd party libraries
babel.config.js - config of how JSX is transpiled to platform spcific code.
assets - static files for the app

Starting the app:

use "npm start"

this will create and run an development server to build our apps.

NOTE : U can run two emulators that is android and ios at the same time.

when u npm start, the project starts the root from the functional element in the "app.js" sheet that is exported by default.

Any component u wanna use should be imported 1st from the react native.

Text strings can always only be rendered within a text component.
A view component can only hold other component and can not directly handle a raw text inside it that is not enclosed by any other component.

U can use JS anywhere outside of return () block, it can be even inside the function block but cannot be inside a return () that returns a component.

unlike web, here button is a self closing component, which takes props such a title, etc.,

while defining colors in stylesheet, we could use strings like red yellow or hexacodes too.

u can use either a short or also a long version of the hexa

padding: spacing inside the element
margin: spacing outside the element

it is fine to write the stylesheet at the bottom and call it at the top, as the styles gets executed only after the components are loaded.

also u can simply decalre a dictionary instead of a stylesheet and still call it in the inline styling, but we prefer stylesheet coz it helps in autocompletion and validation as well.

by default u can use all the flex properties in views component.

by default the flex dorection of the view will be column.

wherever we give numbers in stylesheet properties we may also give percentage, but while using percentage it should be denoted as a string like '10%'

NOTE:
Justify-content - aligns the item within the container along the main axis

alignItem - aligns items within the container along the cross axis

The above both aligns the item inside them and they dont align themselves

the default behaviour of align items is stretch

Usually in react native the child views within the parent view does not expand vertically upto the parent's width and height and u have to assign specifically to the individual child views.

this means if u give a width and height to the parent view,
considering the default row direction as column, the height and width provided is 100 in the parent view,

you can see the child view taking the widht as 100 automatically
but it will not the inherit the height given by it's parent view.

for that too happen u wanna specify to that individual view.

note the when the row direction changes the height and the width gets interchanged.

what is flex ?

  Remember, this is defining how much of parent container's space a component a take.

what is flex : 1
  when this is given the child element takes the height and width of the parent component after leaving the least that is required for it's sibling component, if both of the siblings has flex :1 in it then the parent's space is equally shared within themselves.

  the flex property can be used by any that is inside a flexbox which is a view, also a view itself can also use a flex property

while using onpress prop of a button component, u should not call the function u just wanna refer it as calling the function in the component will execute it while rendering the component itself.

In List:

"..." operator spread the items in the given list.

eg: when a = [1,2,3], [... , 7] ==> [1,2,3,7]

Note: when u wanna use JS inside a JSX u should wrap that with {}, and when u wanna write a JSX inside a JS it can only be used inside a return

Also note,when u write a JS inside a component u wanna use a {} but again if u use a JSX inside this, then again u wanna use a {} since that is wrapped by a JSX

eg:
    names  = ['vignesh','arun']
    `<View>`
    {names.map((name) => {
      `<Text>` {name}`</Text>` # in this line if u see we wrap the name again with the {} because again it got wrapped under the jsx `<Text>`
    })}
    `</View>`

NOTE: not all the components we create can be flawlessly translated to it's equivalent native components.

for eg: border radius that u set in Text component will apply to Android but not to the IOS, in such instance we wanna do a work around. in this case, we just apply these stylings to a more versatile component View.

NOTE: Unlike CSS or WEB, The stylings dont get inherited from the parent component to the child components , which means any stylings that u apply to a parent component will not automatically inherited by the child ones, hence dedicated stylings should be written for the child components

ScrollView:

  it is just like a view but when it components are wrapped within it, then it allows the components to be scrollable.

  but there is a downside this scrollable, which is scrollview does not do a lazy-loading, whereby in case where you render a array of 1000 items, then it starts rendering all.

  a best alternative to this flatlist.

  a flatlist is also like scroll view but it does lazy-loading that helps alot in optimisation.

  key difference,

  flatlist is autoclosing tag

  u pass the value(data) and a function(renderItem) how a component should be rendered using this value.

  in the renderItem when u receive the data, the data that u passed dont comes plainly as it is sent, but it is wrapped as object

  it is mandatory to provide a key for the list of components that is rendered via a scrollview or flatlist, but the advantage with the flatlist is that it automatically checks for the key from the object you pass in the data prop. incase there is no such "key" available within the object that is passed, then u can use the keyextractor prop to tell RN which one is the key.

  Note: the flatlist can also handle the primitive datatypes like str or int when passed to it in addition to the object.

  Note: u dont have to use commas between the prop in the component

  It is a convention to name components in Caps in starting to say react it is a custom component.

  in order to make any component pressable/clickable u wanna wrap that with pressable component this is helpful in making a onpress event for components other than buttons .

  In JS if ur writing function in one line then a {} and also a return keyword is not necessary for the function to return something, whereas while using the {} make sure to include the return keyword.

  NOte: By default the view or text does not provide extra space than what it is needed for it's children or the text in it.

  Button is a self closing component and it does not take style as prop coz it is already styled and u can't influence it further, if u wanna style more then u wanna go for button pressable component.

  Note : when u move all the components to the component section you should move all the necessary values and function and state variable pertaining to component to it.

  Though u cant directly apply styles to the button, u can modify it's width and height by simply wrapping it in a View but if u wanna change the text color then u wanna go for pressable

  The Image component from the RN is a self closing comp and also the using the source prop for it, you dont directly give the asset path but instead wrap that inside a require function from the core JS

  the statusBar compoment from the expo is a sibling component and cannot be used at the root level.

  Debugging the app:

  in the terminal click ? to see the available options

  m - opens dev menu in emulator

  react-devtools:

  npm install -g react-devtools

  after installing this u can use it for seeing the full app tree and set values if needed.

  this can be initiated in a different terminal while app is in server,

  still it is upto to use it,

just hit "react-devtools" in a different terminal to run it

  also RN has a dedicated documentations that speaks about the debugging

## Chapter 2

  Though a view does not have any sibling to it, it will not take up whole available space until explicitly we demand it to.

  and we can impose it by applying the flex, which speaks about the ratio it will take among the siblings.

  eg1:
  `<View flex:1>` # this will take the complete 1 out of 1 part which is 100 percent
  `</View>`

eg2:

  `<View flex:1>` # this will take the complete 1 out of 5 parts
  `</View>`
  `<View flex:4>` # this will take the complete 4 out of 5parts
  `</View>`

  Adding Shadows:

  To add shadows we have property like

  elevation -  but this is only available for android and not for the ios

  u have to use:
    shadowColor
    shadowRadius
    shadowOffset

  u can use elevation and shadowProps together to support both android and IOS

Passing array of style properties

  any component in RN accepts both single style property or also an array of properties

  style = {styles.some_object}

  or

  style = {[styles.some_object,styles.some_other_object]}

Any params you pass to a custom component function is received as a dictionary.

  eg:
    `<CustomButon
    text = 'some button  text'
    on_press = some_func
    />`

    function CustomButon(props){`<Text>`props.text`</Text>`
    }

    or

    function CustomButon({props}){`<Text>`text`</Text>`
    }

overflow: hidden

  this is will ensure that any effect haooening in the inside container is not overflowing outside the outer container.

Note:
  If you want the siblings to take equal space without using justify or align items or hard coding the width or height, just wrap those siblings individually into  a view and assign them a flex value to inherit the parent container's space

  ImageBackground is a built in component of RN that renders the image in the background.

  checking out the folders

1. ../ --> means you wanna checkout or go one folder upwards.
2. ./ --> means that in the same folder. denoting that it is in same folder using "./" is mandatory in RN.

  For TextInput, Even if the keyboardtype is numeric, the value it rennders is always a string.

  Note: Very important: If any state variable changes,then the whole component where this state variable is declared will re rerun to reflect the most recent change.


.bind() operation:
    you will definitely in a position where you cant call a function because you are referring that inside a DOM but wanna a pass values to it, this is a the time where you use .bind() keyword.

    eg.

    function some_operation(the_param){
        console.log(this)
        someoperation_on_param(the_param)
    }


    <CustomButton on_presshandler = {some_operation}> // if u see here you can pass value like some_operation(some_param) coz this will invoke the function while rendering.

    so the only option is <CustomButton on_presshandler = {some_operation.bind(some_param)}>

    while doing so the bind operation creates a copy of function with it's preset params.

