import { Model } from '@nozbe/watermelondb'
import { action, field } from '@nozbe/watermelondb/decorators'

export default class UserAlarm extends Model {
    static table = 'ualarms'

    @field('title') title
    // @field('spacetime') spacetime
    // @field('frequency') frequency

    // @action async addNewAlarm(title) {
    //     return await this.collections.get('ualarms').create(alarm => {
    //         alarm.title.set(title)
    //     })
    // }

    // @action async getAllAlarms() {
    //     console.log(this.collections.get('ualarms'))
    // }
}