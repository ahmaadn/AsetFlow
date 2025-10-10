/**
 * Mendefinisikan tipe umum dari sebuah aset untuk memudahkan kategorisasi.
 */
export enum GeneralAssetType {
  IMAGE = "image",
  VIDEO = "video",
  AUDIO = "audio",
  DOCUMENT = "document",
  UNKNOWN = "unknown",
}

/**
 * Pemetaan dari MIME type spesifik ke GeneralAssetType.
 * Kunci adalah string MIME type, dan nilainya adalah enum GeneralAssetType.
 */
export const mimeTypeMapping: Readonly<Record<string, GeneralAssetType>> = {
  // --- Gambar (Image) ---
  "image/jpeg": GeneralAssetType.IMAGE,
  "image/png": GeneralAssetType.IMAGE,
  "image/gif": GeneralAssetType.IMAGE,
  "image/svg+xml": GeneralAssetType.IMAGE,
  "image/webp": GeneralAssetType.IMAGE,
  "image/bmp": GeneralAssetType.IMAGE,
  "image/tiff": GeneralAssetType.IMAGE,

  // --- Video ---
  "video/mp4": GeneralAssetType.VIDEO,
  "video/webm": GeneralAssetType.VIDEO,
  "video/ogg": GeneralAssetType.VIDEO,
  "video/mpeg": GeneralAssetType.VIDEO,
  "video/quicktime": GeneralAssetType.VIDEO, // .mov
  "video/x-msvideo": GeneralAssetType.VIDEO, // .avi
  "video/x-flv": GeneralAssetType.VIDEO,
  "video/x-matroska": GeneralAssetType.VIDEO, // .mkv

  // --- Musik (Audio) ---
  "audio/mpeg": GeneralAssetType.AUDIO, // .mp3
  "audio/ogg": GeneralAssetType.AUDIO,
  "audio/wav": GeneralAssetType.AUDIO,
  "audio/aac": GeneralAssetType.AUDIO,
  "audio/webm": GeneralAssetType.AUDIO,
  "audio/flac": GeneralAssetType.AUDIO,
  "audio/midi": GeneralAssetType.AUDIO,

  // --- Dokumen (Document) ---
  "application/pdf": GeneralAssetType.DOCUMENT,

  // Microsoft Office (Legacy)
  "application/msword": GeneralAssetType.DOCUMENT, // .doc
  "application/vnd.ms-excel": GeneralAssetType.DOCUMENT, // .xls
  "application/vnd.ms-powerpoint": GeneralAssetType.DOCUMENT, // .ppt

  // Microsoft Office (OpenXML)
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    GeneralAssetType.DOCUMENT, // .docx
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
    GeneralAssetType.DOCUMENT, // .xlsx
  "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    GeneralAssetType.DOCUMENT, // .pptx

  // Teks dan Lainnya
  //   "text/plain": GeneralAssetType.DOCUMENT, // .txt
  //   "text/csv": GeneralAssetType.DOCUMENT,
  //   "text/html": GeneralAssetType.DOCUMENT,
  //   "application/json": GeneralAssetType.DOCUMENT,
  //   "application/xml": GeneralAssetType.DOCUMENT,

  // Arsip
  //   "application/zip": GeneralAssetType.DOCUMENT,
  //   "application/x-rar-compressed": GeneralAssetType.DOCUMENT,
  //   "application/x-7z-compressed": GeneralAssetType.DOCUMENT,
};

export const supportedMimeTypes = Object.keys(mimeTypeMapping);

/**
 * Fungsi utilitas untuk mendapatkan tipe general dari sebuah MIME type.
 * @param mimeType String MIME type dari file (contoh: 'image/png').
 * @returns GeneralAssetType yang sesuai, atau UNKNOWN jika tidak ditemukan.
 */
export function getAssetTypeFromMime(mimeType: string): GeneralAssetType {
  return mimeTypeMapping[mimeType.toLowerCase()] || GeneralAssetType.UNKNOWN;
}
