export type PaperPDF = {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: string | null;
    height: string | null;
    formats: string | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: Date,
    updatedAt: Date;
}