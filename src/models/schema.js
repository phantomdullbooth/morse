/* /////////////////////// IMPORTS ///////////////////////
/////////////////////// IMPORTS ////////////////////// */

import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
    version: 2,
    tables: [
        tableSchema({
            name: "ualarms",
            columns: [
                { name: 'title', type: 'string' },
                // { name: 'spacetime', type: 'number'},
                // { name: 'frequency', type: 'string'}
            ]
        })
    ]
})