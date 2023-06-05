export interface RoadmapItem {
  id?: number;
  name: string;
  date: string;
  tasks: RoadmapTask[];
}

export interface RoadmapTask {
  id?: number;
  name: string;
  isReady: boolean;
}

export interface RoadmapSchema {
  items: RoadmapItem[];
  newRoadmapItem: RoadmapItem;
}
