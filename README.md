# Personal Portfolio Page

### built with React, Tailwind CSS and React-Spring

![overview](https://kochannek.com/customSVG.gif)

[Live Version](https://kochannek.com/)

### About

While there are no fancy technical things to implement (like User Authentication, API calls or Database implementation), I made sure to make it as visually appealing as I could - although I am not a design-savvy person at all. After a certain amount of research, I stumbled upon React-Spring, which is amazing albeit rather complicated - so you'll find various animations throughout the page like springs, trails and transitions.
Ever since my last project ('Make Me Awesome'), TailwindCSS has kind of grown on me so I used it again. What I like about Tailwind is that it doesn't come with pre-opinionated components like Bootstrap so there's more room for creative freedom.

The entire page is open source under the MIT License and free for everyone to use and adjust to their personal needs. If there are any suggestions, just open a Pull Request.

## Technologies used

**Frontend / UI:**

- React, Hooks, React Router, React Context, HOC's
- Tailwind CSS
- React-Icons

**Animations:**

- React-Spring (Hooks API)
- Tailwind Transitions

## Features

- Hooks
- tsParticles custom SVG Hero Component
- Book Reader with realistic page flipping (react-pageflip)
- Multilanguage Support
- Dark / Light Mode
- Smooth Animations with React-Spring
- Serverless Contact Form via Formspree and ReCaptcha spam prevention
- Easy to customize
- Fully responsive (obviously)

## Customization

If someone thinks that it's worth cloning, the Portfolio is relatively easy to customize. The main Components to customize are:

### **assets/data/Booklist.js**
Assuming most people didn't write books, you can delete this one including _pages/BookPreviewer.js_.

### **assets/data/ProjectList.js**

![defaultProject](https://kochannek.com/defaultProject.gif)

ProjectList uses _/components/DefaultProject.js_ that accepts several props:

| Prop | Type |
| ------------- |:-------------:|
|**name (Heading)** | string or MultiLanguage Text Component |
| **imageFront** | image |
| **imageBack** | image |
| **githubLink** | string |
| **liveVersionLink** | string |
| **hasLoginCredentials** | bool (Popover is shown or not) |
| **userLogin** | string (**hasLoginCredentials** must be true) |
| **passwordLogin** | string (**hasLoginCredentials** must be true) |
| **projectShortDescription** | string |
| **aboutProjectText** | JSX element |
| **features** | string |
| **techStack** | array of objects |
| **techStack** -> {name} | string |
| **techStack** -> {logo} | image / React-Icon |
| **techStack** -> {subtexts} | array of strings |

There is one exception in ProjectList: _CustomProjects/PortfolioPage.js_

As this is the current page the user is on, I made a slightly different version of DefaultProject without the LiveVersion Link and a different onHover animation. If you dont need this, you can delete it or use _DefaultProject.js_ for the current page.

### **assets/data/SkillList.js**

This Array of Objects is used in the "Skills" section of the /about page. It's fairly self-explanatory in the following Format: 

| key | value |
| ------------- |:-------------:|
| **name** | string |
| **logo** | JSX element or image |

### **components/MultiLanguage/languages**

Currently available: English (default) and german. Obviously you can set this to any other language. If you do this, you must adjust the /MultiLanguage/Dictionary.js according to your needs. Also, need to change the flag icons in the Navbar accordingly.

The language files are in JSON Format and contain almost every Text on the Website, so most of the work will be done here.


### **components/Navigation/AnimatedLogo** 

Currently the inner part of the gradient circle contains the first letter of my last name. Assuming that not everyone's last name starts with a "K", you have to adjust the SVG.

### **pages/About**

Obviously, this section is highly individual and while the main text can be adjusted in the dictionary JSON files, the "Passions" area must be manually customized.

## TL;DR

Customizable Portfolio Page. Hopefully looks pretty. Any issues? Open Pull Request.
Very happy with the result!
