import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <section>
                <h2>What is the purpose of React Router</h2>
               <div className="">
               <p>React Router is an API for React applications. Most current code is written with React Router 3, although version 4 has been released. React Router uses dynamic routing.</p>
               <h4>Why use React Router?</h4>
               <p>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>
               <p>By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>
               <h4>Using React Router</h4>
               <p>First, install React Router, using either yarn or npm.</p>
               <p>Note that in the documentation and in the API, the actual component is called Browser Router . Some people prefer to simply refer to the component as Router, so you may see it aliased or choose to alias it in code, in which case it will be referred to as as long as it as been imported with an alias.</p>
               <p>When not using React Router, App is often the highest parent component in React apps. With React Router, however, the Router component needs to be the highest parent. This just lets all of the component use the power of Router, because as a parent, it passes down all of its props to its children, and thus the entire application.</p>
               </div>
            </section>
            <section>
                <h2>How does Context Api Works</h2>
                <div className="">
                    <p>The React Context API was been around as an experimental feature for a while now but finally became safe to use in production last year, solving one major problem React problem — prop drilling. In this article, Toptal Freelance Javascript Developer Boris Yordanov will introduce us to the API and illustrate it with two basic web store apps, one built with the Context API and one without it.</p>
                    <p>The React Context API has been around as an experimental feature for a while now, but only in React's version 16.3.0 did it become safe to use in production. The article below will show you two basic web store apps, one built with the Context API and one without it.</p>
                    <p>This new API solves one major problem–prop drilling. Even if you’re not familiar with the term, if you’ve worked on a React.js app, it has probably happened to you. Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components. Component will receive props indirectly and you, the React Developer will have to ensure everything works out right.</p>
                </div>
            </section>
            <section>
                <h2>useRef Hook in React</h2>
                <div className="">
                    <p>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. </p>
                    <p>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
                </div>
            </section>
        </div>
    );
};

export default Blog;