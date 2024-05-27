import { useState } from 'react'
import ScheduleMaintenanceDialog from '../components/maintenance/ScheduleMaintenanceDialog'
import '../styling/maintenance.css'
import { Fade } from '@mui/material'

export default function MaintenanceScheduling() {
    const [dialogVisible, setDialogVisible] = useState(false)

    function toggleDialog() {
        setDialogVisible(true)
    }

    return (
        <Fade in={true} timeout={1000}>
            <div className="maintenance-container">
                <div className="maintenance-header">
                    <h1>Maintenance Scheduling</h1>
                </div>
                <div className="maintenance-content">
                    <div className="maintenance-buttons">
                        <div className="schedule-maintenance-button">
                            <button onClick={toggleDialog}>
                                Schedule maintenance
                            </button>
                        </div>
                        <div className="see-maintenance-button">
                            <button>See upcoming maintenance</button>
                        </div>
                    </div>
                </div>
                {dialogVisible && (
                    <ScheduleMaintenanceDialog
                        setDialogVisible={setDialogVisible}
                        dialogVisible={dialogVisible}
                    />
                )}
            </div>
        </Fade>
    )
}
