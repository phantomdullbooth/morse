/* /////////////////////// IMPORTS ///////////////////////
/////////////////////// IMPORTS ////////////////////// */

import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default alarms = appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: "user_alarms",
            columns: [
                { name: 'title', type: 'string', isOptional: true },
                { name: 'spacetime', type: 'number'},
                { name: 'frequency', type: 'string'}
            ]
        })
    ]
})