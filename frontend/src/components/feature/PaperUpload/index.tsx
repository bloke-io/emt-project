import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"

type Props = {
    isOpen: boolean;
    onClose: () => void;
}

const PaperUpload = ({ isOpen, onClose }: Props) => {
    return <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Paper Upload</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                Implement this
            </ModalBody>

            <ModalFooter>
                <Button onClick={() => { onClose() }}>Close</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
};

export default PaperUpload;