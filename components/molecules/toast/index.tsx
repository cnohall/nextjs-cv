import Image from 'next/image';
import Link from 'next/link';
import { Toast, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function BootstrapToast(props) {
    const {setShowToast} = props;
    const closeToast = () => {
        setShowToast(false);
    };
    const { title, comment, body, idx } = props.message || {};
    return (
        <Toast className="position-fixed top-5" style={{zIndex:11}} bg={'light'} key={idx}>
            <Toast.Header onClick={closeToast}>
            {/* <Image src="/" className="rounded me-2" alt="" /> */}
            <strong className="me-auto">{title}</strong>
            <small>{comment}</small>
            </Toast.Header>
            <Toast.Body>
                {body}
            </Toast.Body>
        </Toast>
    );
}