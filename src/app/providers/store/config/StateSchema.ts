import { CryptoTableSchema } from "features/CryptoTable";
import { NewsSchema } from "entities/News";
import { RoadmapSchema } from "entities/RoadmapItem";
import { ReportSchema } from "entities/StatusReport";
import { PodcastSchema } from "../../../../entities/Podcast";
import { BlogSchema } from "../../../../entities/Blog";

export interface StateSchema {
  cryptoTable: CryptoTableSchema;
  news: NewsSchema;
  roadmap: RoadmapSchema;
  reports: ReportSchema;
  podcasts: PodcastSchema;
  blogs: BlogSchema;
}
