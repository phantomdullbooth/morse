import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from '../models/schema'
import UserAlarm from '../models/UserAlarm'

import migrations from '../models/migrations'

const adapter = new SQLiteAdapter({
    schema,
    migrations
})

const database = new Database({
    adapter,
    modelClasses: [ UserAlarm ],
    actionsEnabled: true
})

export default database