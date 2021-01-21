import { Model } from '@nozbe/watermelondb'
import { action, field } from '@nozbe/watermelondb/decorators'
import { Alarms } from '../views/alarms/Alarms'

export default class UserAlarm extends Model {
    static table = 'user_alarms'

    @field('title') title
    // @field('spacetime') spacetime
    // @field('frequency') frequency

    @action async addNewAlarm(title) {
        try {
            return await this.collections.get('user_alarms').create(alarm => {
                alarm.title = title
                // alarm.spacetime.set(date)
            })
        } catch (error) {
            console.error(error)
        }
    }

    // @action async getAllAlarms() {
    //     console.log(this.collections.get('user_alarms'))
    // }
}