/** the response type of /api/gcs/:fileId/info */
export interface FileInfo {
  /** file ID */
  id: string;
  /** project name the file belongs to */
  projectName: string;
  /** extracted text from the file (OCR text for images, body text for PDFs, etc.) */
  text?: string;
  /** original filename when uploaded */
  originalname?: string;
  /** content type of the file */
  contentType?: string;
  /** file size in bytes */
  size?: number;
}
