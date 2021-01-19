import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from '../models/schema'
import UserAlarm from '../models/UserAlarm'

const adapter = new SQLiteAdapter({
    schema
})

const database = new Database({
    adapter,
    modelClasses: [ UserAlarm ],
    actionsEnabled: true
})

export default database