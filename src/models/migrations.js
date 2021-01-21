import { schemaMigrations, addColumns } from '@nozbe/watermelondb/Schema/migrations'

export default schemaMigrations({
    migrations: [
        {
            toVersion: 6,
            steps: [
                addColumns({
                    table: 'user_alarms',
                    columns: [
                        { name: 'frequency', type: 'string'}
                    ]
                })
            ]
        }
    ]
})