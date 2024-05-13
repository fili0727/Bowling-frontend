import { styled } from '@mui/system'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'

export const StyledDialogTitle = styled(DialogTitle)({
    backgroundColor: '#f5f5f5',
    color: '#333',
    fontSize: '3vh',
    textAlign: 'center',
})

export const StyledDialogContent = styled(DialogContent)({
    padding: '0vh 10vh 0vh 10vh',
})

export const StyledButton = styled(Button)({
    margin: '10px',
})

export const StyledDialogActions = styled(DialogActions)({
    justifyContent: 'center',
    padding: '0 ',
    margin: '0',
    scale: '0.7',
})
