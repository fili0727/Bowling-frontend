import BookingLocation from '../BookingLocation'
import OpeningHours from '../OpeningHours'

export default interface StationDialogProps {
    station: BookingLocation
    openingHours: OpeningHours[]
    open: boolean
    onClose: () => void
    isEditing: boolean
    setEditDate: (date: string) => void
}
