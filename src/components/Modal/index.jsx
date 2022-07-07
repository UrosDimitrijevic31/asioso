import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import YoutubeEmbed from "../EmbedVideo";
import "./index.scss";

const ModalForVideo = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <YoutubeEmbed
                    embedId="BWGfU_nkJSQ
                "
                />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalForVideo;
