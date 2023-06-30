import { header } from "./components/header";
import { home } from "./views/home";
import './scss/style.css'

document.querySelector('header').innerHTML = header.template

document.querySelector('main').innerHTML = home.template
home.script()