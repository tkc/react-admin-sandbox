import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "./user/reducers";
import menu from "./menu/reducers";
import settings from "./settings/reducers";

// export default history =>
//   combineReducers({
//     router: connectRouter(history),
//     user,
//     menu,
//     settings,
//   });

// import { combineReducers } from "redux";
// import { studies } from "./studies/studies";
// import { studyMeta } from "./studies/study-meta";
// import { studyCadStatus } from "./studies/study-cad-status";
// import { studyAnnotations } from "./study-annotations/study-annotations";
// import { marker } from "./marker/marker";
// import { workSpace } from "./work-space/work-space";
// import { csvUpload } from "./csv-upload/csv-upload";
// import { annotationLabel } from "./annotation-label/annotation-label";
// import { version } from "./version/version";
// // import { user } from "./user/user";
// import { project } from "./project/project";
// import { tools } from "./tools/tools";
// import { dicomUpload } from "./dicom-upload/dicom-upload";
// import { notification } from "./notification/notification";
// import { auth } from "./auth/auth";
// import { studyPage } from "./study-page/study-page";

export const reducers = combineReducers({
  user,
  menu,
  settings,
});

export type State = {
  user: ReturnType<typeof user>;
  menu: ReturnType<typeof menu>;
  settings: ReturnType<typeof settings>;
};
