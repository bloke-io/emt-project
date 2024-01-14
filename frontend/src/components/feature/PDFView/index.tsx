import { Box, Button, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGetPaper from "../../../hooks/useGetPaper";
import { useAuth } from "../../../providers/ConsumerHooks/useAuth";
import { Page, Document, pdfjs } from "react-pdf";
import { useMemo, useState } from "react";
import { apiUrl } from "../../../constants";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDFView = () => {
  const { paperId } = useParams();
  const { user } = useAuth();

  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  }

  const changePage = (offset: number) => {
    setPageNumber(pageNumber + offset);
  }

  const previousPage = () => {
    changePage(-1);
  }

  const nextPage = () => {
    changePage(1);
  }
  const {
    data: paper,
    error,
    isLoading,
  } = useGetPaper(user?.jwt ?? "", paperId ?? "");

  const pdfUrl = useMemo(() => {
    if(!paper) return '';

    const url = paper.PaperPDF.url

    return `${apiUrl}${url}`
  }, [paper]);

  if (isLoading) return <Box><Spinner /></Box>;
  if (error) return <Box>Error...</Box>;

  return (
    <Box padding={4} paddingTop={0} display="flex" flexDirection="column">
      <Box mt={2} display="flex" flexDirection="column" alignItems="flex-start">
        <Heading>Title: {paper?.title}</Heading>
        <Text>Author: {paper?.author.username}</Text>
      </Box>
      <Box mt={4} display="flex" flexDirection="row" justifyContent="center">
        <Box
          display="flex"
          flex={2}
          flexDirection="column"
          justifyContent="center"
        >
          <Box display="flex" flexDirection="column" gap={3} alignItems="center">
            <Box display="flex" gap={3}>
              <Button
                type="button"
                isDisabled={pageNumber === 1}
                onClick={previousPage}
              >
                Previous
              </Button>
              <Button
                type="button"
                isDisabled={numPages === 1 || pageNumber === numPages}
                onClick={nextPage}
              >
                Next
              </Button>
            </Box>
            <Box display="flex">
              <p>
                Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
              </p>
            </Box>
          </Box>
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={1000}
            />
          </Document>
        </Box>
        <Box display="flex" flex={1}>
          <Heading>Comments</Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default PDFView;
