import {
  Box,
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAuth } from "../../../providers/ConsumerHooks/useAuth";
import useGetReviewers from "../../../hooks/useGetReviewers";
import { apiRoutes } from "../../../constants";
import { mutate } from "swr";
import axios from "axios";
import { createFetchFormData } from "../../../utils/utils";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const PaperUpload = ({ isOpen, onClose }: Props) => {
  const { user } = useAuth();
  const [paper, setPaper] = useState<File | null>(null);

  const { data, error, isLoading } = useGetReviewers(
    user?.jwt ?? "",
    user?.id ?? 0
  );

  const [paperTitle, setPaperTitle] = useState("");
  const [selectedReviewers, setSelectedReviewers] = useState<number[]>([]);

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPaper(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = createFetchFormData({
      title: paperTitle,
      author: user?.id ?? 0,
      reviewers: selectedReviewers,
      'files.PaperPDF': paper,
      reviewEndDate: new Date(),
    });

    try {
      const response = await axios.post(apiRoutes.papers, body, {
        headers: {
          Authorization: `Bearer Bearer ${user?.jwt}`,
        },
      })

      if (response.status === 200) {
        onClose();
        mutate(apiRoutes.papers);
      }
    } catch (err) {
      console.log("ERRR>>>", err);
    }
  };

  if (isLoading)
    return (
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Paper Upload</ModalHeader>

          <ModalCloseButton />
          <Box
            display="flex"
            flex={1}
            justifyContent="center"
            alignItems="center"
          >
            <Spinner />
          </Box>
        </ModalContent>
      </Modal>
    );

  if (error)
    return (
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Paper Upload</ModalHeader>

          <ModalCloseButton />
          <Box
            display="flex"
            flex={1}
            justifyContent="center"
            alignItems="center"
          >
            Error...
          </Box>
        </ModalContent>
      </Modal>
    );

  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Paper Upload</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack padding={3} spacing={4}>
              <Box w="75%">
                <Text>Paper Title</Text>
                <Input
                  type="text"
                  size="md"
                  value={paperTitle}
                  onChange={(e) => {
                    setPaperTitle(e.target.value);
                  }}
                  focusBorderColor="white"
                  backgroundColor="gray.200"
                  color="black"
                  placeholder="Please input the Paper Title..."
                />
              </Box>
              <Box w="75%">
                <Text>Paper Reviewers</Text>
                <Box display="flex" flexDirection="column" flexWrap="wrap">
                  {data?.map((user) => (
                    <Checkbox
                      key={user.id}
                      value={user.id}
                      checked={selectedReviewers.includes(user.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedReviewers([...selectedReviewers, user.id]);
                        } else {
                          setSelectedReviewers(
                            selectedReviewers.filter((id) => id !== user.id)
                          );
                        }
                      }}
                    >
                      {user.username}
                    </Checkbox>
                  ))}
                </Box>
              </Box>
              <Box>
                <Text>Paper PDF</Text>
                <Input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileUpload(e)}
                />
              </Box>
            </VStack>
          </ModalBody>

          <ModalFooter
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Button
              type="submit"
              backgroundColor="green.200"
              color="white"
              _hover={{ backgroundColor: "green.300" }}
            >
              Upload Paper
            </Button>
            <Button
              onClick={() => {
                onClose();
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default PaperUpload;
