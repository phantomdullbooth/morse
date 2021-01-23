/* /////////////////////// IMPORTS ///////////////////////
/////////////////////// IMPORTS ////////////////////// */

import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
    version: 13,
    tables: [
        tableSchema({
            name: "user_alarms",
            columns: [
                { name: 'title', type: 'string' },
                { name: 'frequency', type: 'string'},
                { name: 'time', type: 'string'},
                { name: 'is_snooze', type: 'boolean'},
                { name: 'snooze_time', type: 'number'},
                { name: 'datetime', type: 'string'}
            ]
        })
    ]
})