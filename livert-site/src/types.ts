export interface ScheduleItem {
    date: string;
    location: string;
    time: string;
  }
  
  export interface VideoItem {
    id: string;
    title: string;
    description: string;
  }
  
  export interface GalleryImage {
    id: number;
    fileName: string;
    alt: string;
    title?: string;
  }