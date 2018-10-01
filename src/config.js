import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { getConfig } from './firebase-config'

export const appName = 'groceries-f3ff5'

firebase.initializeApp(getConfig(appName))
