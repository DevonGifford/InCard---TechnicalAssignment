<!-- Introduction Text -->
<div align="center">
    <h1>InCard Take-Home Assaignment</h1>
    <h3>React/Next app handeling Authenticaton <h3>
    <h3> 
      <a href='https://incard-technical-assaignment-devon-gifford.vercel.app/', target='_blank'>
        <h5>live demo</h5>
      <a/>
    </h3>
        <h6>
            built with <a href="https://nextjs.org/" >NextJS</a> &
            hosted by <a href="https://vercel.com/">Vercel</a> 
        </h6>
</div>

---

<h3 align='center'>
Tech Used in this Project
<h3>
<p align='center'>
    <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=ts,nextjs,tailwind" /><br>
        <img src="https://next-auth.js.org/img/logo/logo-sm.png" width=50 alt="Next-Auth">
        <img src="https://img.stackshare.io/service/40157/default_ac6bddce398a038cb30e3dfd23eaab10c84cfc78.jpg" width=50 alt="React-Hot-Toast" >
        <img src="https://avatars.githubusercontent.com/u/139895814?s=280&v=4" width=50 alt="ShadCN UI Library"><br>
        <img src="https://skillicons.dev/icons?i=vercel,github,jest" />
    </a>
</p>

---

<!-- Logo -->
<div align=center>
    <img src="/public/github/homepage-demo.png" alt="Demo-Home" title="DemoImage-home" width="400" height="300"> 
    <img src="/public/github/loginpage-demo.png" alt="Demo-Login" title="DemoImage-login" width="400" height="300"> 
    <img src="/public/github/dashboardpage-demo.png" alt="Demo-Dashbaord" title="DemoImage-dashboard" width="400" height="300">     
   
</div>

<br>


<!-- -------------------------------------------------------------------------- -->

<h1 align='center'> Welcome & Introductory </h1>

<!-- -------------------------------------------------------------------------- -->

### Introduction:

<!-- -------------------------------------------------------------------------- -->
<hr/>


I was tasked with building a web application to manage basic authentication.  I opted to use <strong>Next.js</strong> to fulfill the requirement of supporting both <em>server-side</em> and <em>client-side</em> rendering.</br> The project is developed with <strong>TypeScript</strong>, ensuring strong typing and code quality. For testing, I utilized <strong>Jest</strong> and <strong>React Testing Library (RTL)</strong> to ensure the reliability of the application.

Authentication and session management were implemented using the <strong>NextAuth</strong> library, providing a secure user experience. Additionally, the app integrates <strong>React-Hot-Toast</strong> for user-friendly notifications.<br>
The completed project is hosted on Vercel, showcasing the deployment of the application.

</br>

#### **You can use the following credentials for a successful login:**

**⚠ Please Note: This was part of a take home technical assaignment and is just a proof of concept.**

Username:
```shell
incard
```

Password:
```shell
incard
```

<br/>



<!-- -------------------------------------------------------------------------- -->

<br>

### 🔑 Key-Required Features of this project:

<!-- -------------------------------------------------------------------------- -->
<hr>

<!-- Small container -->
<details>
<summary> Click here to expand</summary>
<br/>

<div>

##### REQUIRED FEATURES: 
<hr>

✅ Consist of at least two pages - <em>(login and a home page)</em>

✅ Should be functional - <em>(login should take users to the home page etc.)</em> 

✅ Should Handle errors - <em>(incorrect details entered or session expired etc.)</em>

✅ Implement basic testing, minimum of 2-3 unit tests

✅ Deploy the app


</br>

##### STRETCH FEATURES: 
<hr>

✅ Supports both SSR & CSR

✅ Session should be persistent <em>(page reload should not result in login page)</em>

✅ Session expired should be redirected back to the login page.

✅ Website is fully responsive 

</br>

##### BONUS FEATURES:
<hr>

✅ Landing/Home page

✅ Protected & Un-protected Server/Client side page's.  

✅ Replicate the basic styling of incard's current website layout

✅ Interactive NavBar with Hamburger menu

<br/>

---

<!-- CLOSING DIV -->
</details>
<br/>




### 🎯 Known issues and potential improvements:

<!-- -------------------------------------------------------------------------- -->
<hr>

<!-- Small container -->
<details>
<summary> Click here to expand</summary>
<br/>


#### Known issues: 

💥 Need to throw an error or push user to sign-in page, if session time has elapsed and user try's to manually update their session  


</br>

#### Future Features & Improvements: 

💥  adding user roles

💥  auto signing out functionality after session expiration has elapsed

💥  fleshing out user data & update the SSR page 

💥  adding user profile picture 

💥  adding some loaders and spinners on buttons - small things to improve UI and responsivness feel 


<!-- CLOSING DIV -->
</details>
<br/><br>



<!-- SECTION CLOSING DIV -->
</details>
<br><br>

<!-- -------------------------------------------------------------------------- -->

<h1 align='left'> Testing Results 🧪</h1>
<hr>

<!-- -------------------------------------------------------------------------- -->


<details>
<summary> Click here to expand </summary>
<br/>


<img src="/public/github/code-coverage-demo.png" alt="Demo-Dashbaord" title="DemoImage-dashboard" width="800" height="600"> 

<!-- CLOSING DIV -->
</details>

<br><br>
