import { IGraph } from './IGraph';

export interface IDistance {
  [key: string]: number;
}

export interface IDistanceResponse {
  graph: IGraph;
  distances: IDistance;
}
