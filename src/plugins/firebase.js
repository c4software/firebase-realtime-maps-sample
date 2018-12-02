import firebaseConfig from "../config/firebase";
import firebase from "firebase/app";
import "firebase/database";
import Vue from "vue";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();

Vue.prototype.$db = db;
