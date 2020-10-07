import React , {useState} from 'react';
import EditModal from './EditModal';

function Portal() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <>
        <div>
            <p  onClick = {() => setIsOpen(true)} > Edit </p>
        </div>
        <EditModal open = {isOpen} onClose = {()=> setIsOpen(false)}/>
    </>
    )
}

export default Portal
