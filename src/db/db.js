import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import alarms from '../models/schema'
import UserAlarm from '../models/UserAlarm'

const adapter = new SQLiteAdapter({
    schema: alarms,
    // synchronous: true
})

const database = new Database({
    adapter,
    modelClasses: [ UserAlarm ],
    actionsEnabled: true
})

export default database