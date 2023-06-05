export interface Podcast {
  id?: number;
  title: string;
  text: string;
  link: string;
  date?: string;
}

export interface PodcastSchema {
  podcasts: Podcast[];
  newPodcast: Podcast;
}
