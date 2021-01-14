/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import locations from './models/locations'

const adapter = new SQLiteAdapter({
    locations,
    dbName: 'locations',
    synchronous: true
})

const database = new Database({
    adapter,
    modelClasses: [

    ],
    actionsEnabled: true,
})

AppRegistry.registerComponent(appName, () => App);
