import React from 'react'
import { Modal } from 'react-native'

export function NewAlarmModal() {
    return (
        <Modal
            animationType="slide"
            presentationStyle="pageSheet"
            visible={isModalOpen}>
            <AddAlarm setIsModalOpen={setIsModalOpen} />
        </Modal>
    )
}