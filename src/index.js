/* eslint-disable no-unused-vars */
import "regenerator-runtime";
import * as bootstrap from "bootstrap";
import lozad from "lozad";
import "./styles/style.scss";
import "./script/component/jumbotron-hero";
import "./script/component/random-image";
import main from "./script/view/main";

const observer = lozad();
observer.observe();
main();
