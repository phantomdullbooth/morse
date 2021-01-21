/* /////////////////////// IMPORTS ///////////////////////
/////////////////////// IMPORTS ////////////////////// */

import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
    version: 6,
    tables: [
        tableSchema({
            name: "user_alarms",
            columns: [
                { name: 'title', type: 'string' },
                { name: 'spacetime', type: 'number'},
                { name: 'frequency', type: 'string'}
            ]
        })
    ]
})