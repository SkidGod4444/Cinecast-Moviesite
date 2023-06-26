import {
    Toaster
} from 'react-hot-toast';

export default function ToastN() {
    return (
        <Toaster
            position="bottom-right"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
                // Duration of toast display
                duration: 3000,
            }}
        />
    )
}