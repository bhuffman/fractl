import firebase from 'firebase'
import moment from 'moment'

class Firebase {
  constructor() {
    firebase.initializeApp({
      apiKey: process.env.REACT_APP_FIREBASE_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DBURL,
      projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    });
  }

  async recentAuthorSearches() {
    const names = await firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/searchHistory`).limitToLast(5).once('value')
    if (names.val()) return Object.values(names.val()).reverse()
    return []
  }

  async recentKeywordSearches() {
    const names = await firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/keywordSearchHistory`).limitToLast(5).once('value')
    if (names.val()) return Object.values(names.val()).reverse()
    return []
  }

  async setToken(token) {
    await firebase.auth().signInWithCustomToken(token);
  }

  async updateProfile(profile) {
    if (!firebase.auth().currentUser) return;
    await firebase.auth().currentUser.updateProfile({
      displayName: profile.name,
      photoURL: profile.picture,
    });
  }

  async signOut() {
    await firebase.auth().signOut();
  }

  async addRecentSearch(page,value) {
    // const author = firebase.auth().currentUser.displayName;
    let endpoint
    switch(page){
      case 'authors':
        endpoint = 'searchHistory'
        break
      case 'keywords':
        endpoint = 'keywordSearchHistory'
        break
      default:
        endpoint = 'searchHistory'
    }
    firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/${endpoint}`).push(value)
  }

  async getAuthorList() {
    const list = await firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/authorLists`).once('value')
    if (!list.val()) return {};
    return await list.val()
  }

  async removeAuthorList(list) {
    const base64list = Buffer.from(list).toString('base64')
    firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/authorLists/${base64list}`).set(null)
  }

  async removeAuthor(author, list="uncategorized") {
    const base64author = Buffer.from(author).toString('base64')
    const base64list = Buffer.from(list).toString('base64')
    firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/authorLists/${base64list}/names/${base64author}`).set(null)
  }

  async addAuthorToList(author,list="uncategorized") {
    const base64author = Buffer.from(author).toString('base64')
    const base64list = Buffer.from(list).toString('base64')
    firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/authorLists/${base64list}/lastupdated`).set(moment().unix())
    firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/authorLists/${base64list}/names/${base64author}`).set(moment().unix())
  }
}

const firebaseClient = new Firebase();
export {firebaseClient};