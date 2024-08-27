import { motion } from 'framer-motion'

const ModalLogout = ({ visible, message, onClose, onLogout }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-success"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div>
                    <p>{message}
                    <button style={{ marginLeft: '20px' }}
                        onClick={onLogout}>
                        Presionar para salir
                    </button>
                    </p>
                </div>
                <button
                    className="close-btn-success"
                    onClick={onClose}>
                    X
                </button>
            </motion.div>
        </div>
    );
};

export default ModalLogout;