import { Model } from '@nozbe/watermelondb'
import { action, field } from '@nozbe/watermelondb/decorators'

export default class UserAlarm extends Model {
    static table = 'user_alarms'

    @field('title') title
    @field('is_snooze') isSnooze
    @field('snooze_time') snoozeTime
    @field('datetime') datetime
}