import { LoginPage } from "pages/LoginPage";
import { MainLayout } from "widgets/layouts/MainLayout";
import { StatusPage } from "pages/StatusPage";
import { SupportTicketsPage } from "pages/SupportTicketsPage";
import { NewsPage } from "pages/NewsPage";
import { AppRoutes, routes } from "shared/const/router";
import { CustomRouteProps } from "shared/types/router";
import { NewsList } from "entities/News";
import { CreateNews } from "features/CreateNews";
import { PartnersListPage } from "pages/PartnersListPage";
import { CoinListPage } from "pages/CoinListPage";
import {
  BlogsCategory,
  MediaPage,
  PodcastsCategory,
  VideoCategory,
} from "pages/MediaPage";
import { CareerAnswersPage } from "pages/CareerAnswersPage";
import { StatusChangesPage } from "pages/StatusChangesPage";
import { StatusChangesForm } from "../../../../features/StatusChangesForm";
import { PodcastForm } from "../../../../features/PodcastForm";
import { RoadmapManage } from "../../../../pages/RoadmapManage";
import { RoadmapList } from "../../../../entities/RoadmapItem";
import { RoadmapForm } from "../../../../features/RoadmapForm";
import { BlogForm } from "../../../../features/BlogForm";

export const routeConfig: CustomRouteProps[] = [
  {
    path: routes[AppRoutes.LOGIN](),
    element: <LoginPage />,
  },
  {
    path: routes[AppRoutes.MAIN_LAYOUT](),
    element: <MainLayout />,
    children: [
      {
        path: routes[AppRoutes.SUPPORT_TICKERS](),
        element: <SupportTicketsPage />,
      },
      {
        path: routes[AppRoutes.STATUS_CHANGES](),
        element: <StatusChangesPage />,
        children: [
          {
            path: routes[AppRoutes.CREATE_STATUS_CHANGE](),
            element: <StatusChangesForm />,
          },
          {
            path: routes[AppRoutes.EDIT_STATUS_CHANGE](":id"),
            element: <StatusChangesForm />,
          },
        ],
      },
      {
        path: routes[AppRoutes.CAREER_ANSWERS](),
        element: <CareerAnswersPage />,
      },
      {
        path: routes[AppRoutes.STATUS](),
        element: <StatusPage />,
      },
      {
        path: routes[AppRoutes.MEDIA](),
        element: <MediaPage />,
        children: [
          {
            path: routes[AppRoutes.VIDEO_CATEGORY](),
            element: <VideoCategory />,
          },
          {
            path: routes[AppRoutes.PODCASTS_CATEGORY](),
            element: <PodcastsCategory />,
          },
          {
            path: routes[AppRoutes.CREATE_PODCAST](),
            element: <PodcastForm />,
          },
          {
            path: routes[AppRoutes.EDIT_PODCASTS](":id"),
            element: <PodcastForm />,
          },
          {
            path: routes[AppRoutes.BLOGS_CATEGORY](),
            element: <BlogsCategory />,
          },
          {
            path: routes[AppRoutes.EDIT_BLOG](":id"),
            element: <BlogForm />,
          },
          {
            path: routes[AppRoutes.CREATE_BLOG](),
            element: <BlogForm />,
          },
        ],
      },
      {
        path: routes[AppRoutes.ROADMAP](),
        element: <RoadmapManage />,
        children: [
          {
            path: routes[AppRoutes.ROADMAP_LIST](),
            element: <RoadmapList />,
          },
          {
            path: routes[AppRoutes.CREATE_ROADMAP](),
            element: <RoadmapForm />,
          },
          {
            path: routes[AppRoutes.EDIT_ROADMAP](":id"),
            element: <RoadmapForm />,
          },
        ],
      },
      {
        path: routes[AppRoutes.PARTNERS_LIST](),
        element: <PartnersListPage />,
      },
      {
        path: routes[AppRoutes.COIN_LIST](),
        element: <CoinListPage />,
      },
      {
        path: routes[AppRoutes.NEWS](),
        element: <NewsPage />,
        children: [
          {
            path: routes[AppRoutes.NEWS_LIST](),
            element: <NewsList />,
          },
          {
            path: routes[AppRoutes.CREATE_NEWS](),
            element: <CreateNews />,
          },
          {
            path: routes[AppRoutes.EDIT_NEWS](":id"),
            element: <CreateNews />,
          },
        ],
      },
    ],
  },
];
