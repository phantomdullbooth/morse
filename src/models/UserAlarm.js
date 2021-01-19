import { Model } from '@nozbe/watermelondb'
import { action, field } from '@nozbe/watermelondb/decorators'

export default class UserAlarm extends Model {
    static table = 'user_alarms'

    @field('title') title
    @field('spacetime') spacetime
    @field('frequency') frequency

    @action async addNewAlarm(title) {
        return await this.collections.get('alarms').create(alarm => {
            alarm.title.set(this)
        })
    }
}