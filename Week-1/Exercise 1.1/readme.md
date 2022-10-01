
## Deep dive into inner workings of a Web Browser

A Web browser is a software which allows a user to connect and consume data from the **Internet (world wide web)** in the form of Text , images and audio/video which is all organised in the form of a Web pages
the primary functionality of a browser is to enable connecting to a website/webpage using a unique identification address known as **URL (Uniform Resource Locator)** and parse and display the recevied HTML/CSS/JS bundle in the form of human readable webpages

### High-level components of a Web Browser

![browser-component](https://user-images.githubusercontent.com/71548636/193416836-fcb9aa1c-8b6e-41e9-8568-f0fb2b929340.PNG)

  1.  **The User Interface**: Client facing component of a browser where in the user can consume content such Text, images , videos  and interact with page whith interactions such as "Click" , "Scroll" , "Select" etc
  
  2.  **The Browser Engine**: Bridge between the User interface and the rendering engine which allows for the the inputs performed on the User-interface be translated to render-engine so that updated UI can ge generated

  3. **The Rendering Engine**: Rendering Engine is reponsible for generating or rendering the Web page on the screen, the HTML/XML files along with the image files are interpreted and the engine draws them on the screen as various UI elements such as Headdings , tables , images etc based on the CSS styling provided with the bundle 

  4. **Networking**: Networking components handles all the HTTP/FTP requests performed by the browser its responsible for handling all the network requests to fetch data and upload data which includes HTML/CSS bundles, images etc, the network component may implement a cache of retrieved files in order to reduce network traffic. 

  5.  **JavaScript Interpreter:** It is the component of the browser which interprets and executes the javascript code embedded in a website. The interpreted results are sent to the rendering engine for display. If the script is external then first the resource is fetched from the network. Parser keeps on hold until the script is executed.
  
  6.  **UI Backend**: UI backend is used for drawing basic widgets like windows , scrolls-bars action boxes. This backend exposes a generic interface that is not platform specific. It underneath uses operating system user interface methods.

  7.  **Data Persistence/Storage:**  This is a persistence layer. Browsers support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem. It is a small database created on the local drive of the computer where the browser is installed. It manages user data such as cache, cookies, bookmarks and preferences.
  
  #### HTML/CSS Parcing 
  Parcing is the process of reading through the HTML/CSS document character by character and converting them into browser native tokens which are interpreted by the browser as a Html elements , same applies for CSS which is converted into CSS properties for specific elements, the last leg of Parcing is to create a DOM tree which is the relation ship between all the Html elements
