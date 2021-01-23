import { schemaMigrations, addColumns } from '@nozbe/watermelondb/Schema/migrations'

export default schemaMigrations({
    migrations: [
        {
            toVersion: 13,
            steps: [
                addColumns({
                    table: 'user_alarms',
                    columns: [
                        { name: 'datetime', type: 'string'}
                    ]
                })
            ]
        }
    ]
})