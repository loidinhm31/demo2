export enum DocumentType {
  PDF = "PDF",
  WORD = "WORD",
  WORD_DOCX = "WORD_DOCX",
  EXCEL = "EXCEL",
  EXCEL_XLSX = "EXCEL_XLSX",
  POWERPOINT = "POWERPOINT",
  POWERPOINT_PPTX = "POWERPOINT_PPTX",
  TEXT_PLAIN = "TEXT_PLAIN",
  RTF = "RTF",
  CSV = "CSV",
  XML = "XML",
  JSON = "JSON"
}

export interface Document {
  id: string;
  filename: string;
  originalFilename: string;
  filePath: string;
  fileSize: number;
  mimeType: string;
  documentType: DocumentType;
  content?: string;
  major: string;
  courseCode: string;
  courseLevel: string;
  category: string;
  tags?: string[];
  extractedMetadata?: Record<string, string>;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
  deleted: boolean;
}

export interface DocumentUploadResponse {
  success: boolean;
  data: Document;
}

export interface DocumentSearchResponse {
  content: Document[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}