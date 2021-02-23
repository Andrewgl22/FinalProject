import Header from './components/Header';
import JobForm from './components/JobForm';
import Dashboard from './views/Dashboard';
import DevSignUp from './views/DevSignUp';
import JobPost from './views/JobPost';
import './App.css';
import {Router} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import html from './static/html.png'
import css from './static/css.png'
import js from './static/js.png'
import ruby from './static/ruby.png'
import java from './static/java.png'
import python from './static/python.png'
import swift from './static/swift.png'
import angular from './static/angular.png'
import bootstrap from './static/bootstrap.png'
import django from './static/django.png'
import jquery from './static/jquery.png'
import react from './static/react.png'
import node from './static/node.png'
import vue from './static/vue.png'
import React, {useState} from 'react';

function App() {

  const [enumObj, setEnumObj] = useState({
    html: html,
    css: css,
    js: js,
    ruby: ruby,
    java: java,
    python: python,
    swift: swift,
    angular: angular,
    bootstrap: bootstrap,
    django: django,
    jquery: jquery,
    react: react,
    node: node,
    vue: vue
  })


  return (
    <div className="App">
      <Header />
      <Router>
        <DevSignUp path="/*" enumObj={enumObj}/>
        <Dashboard path='/dashboard/*' enumObj={enumObj} />
        <JobForm path='/addJob' />
        <JobPost path='/jobpost/:id' enumObj={enumObj} />
      </Router>
    </div>
  );
}

export default App;
