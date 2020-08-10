import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import NUSPlannerHeader from "./shared/components/NUSPlannerHeader";
import HomePage from "./places/pages/HomePage";
import LoadingSpinner from "./src/shared/components/LoadingSpinner";
// import CreatePageFiveMods from "./places/pages/CreatePageFiveMods";
// import BookmarkPage from "./places/pages/BookmarkPage";
// import NavButton from "./shared/components/NavButton";
// import CreatePageSixMods from "./places/pages/CreatePageSixMods";
// import CreatePageSevenMods from "./places/pages/CreatePageSevenMods";
// import CreatePageEightMods from "./places/pages/CreatePageEightMods";
// import TimetableInfoPage from "./places/pages/TimetableInfoPage";

const NavButton = React.lazy(() => import("./shared/components/NavButton"));
const BookmarkPage = React.lazy(() => import("./places/pages/BookmarkPage"));
const TimetableInfoPage = React.lazy(() =>
  import("./places/pages/TimetableInfoPage")
);
const CreatePageFiveMods = React.lazy(() =>
  import("./places/pages/CreatePageFiveMods")
);
const CreatePageSixMods = React.lazy(() =>
  import("./places/pages/CreatePageSixMods")
);
const CreatePageSevenMods = React.lazy(() =>
  import("./places/pages/CreatePageSevenMods")
);
const CreatePageEightMods = React.lazy(() =>
  import("./places/pages/CreatePageEightMods")
);

const App = () => {
  return (
    <Router>
      <main>
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <NUSPlannerHeader />
              <HomePage />
            </Route>

            <Route path="/create/modules" exact>
              <NUSPlannerHeader>
                <NavButton to="/">HOME</NavButton>
              </NUSPlannerHeader>
              <CreatePageFiveMods />
              <style>{"body { background-color : #dae3f2; }"}</style>
            </Route>

            <Route path="/create/sixmodules" exact>
              <NUSPlannerHeader>
                <NavButton to="/">HOME</NavButton>
              </NUSPlannerHeader>
              <CreatePageSixMods />
              <style>{"body { background-color : #dae3f2; }"}</style>
            </Route>

            <Route path="/create/sevenmodules" exact>
              <NUSPlannerHeader>
                <NavButton to="/">HOME</NavButton>
              </NUSPlannerHeader>
              <CreatePageSevenMods />
              <style>{"body { background-color : #dae3f2; }"}</style>
            </Route>

            <Route path="/create/eightmodules" exact>
              <NUSPlannerHeader>
                <NavButton to="/">HOME</NavButton>
              </NUSPlannerHeader>
              <CreatePageEightMods />
              <style>{"body { background-color : #dae3f2; }"}</style>
            </Route>

            <Route path="/create/timetableInformation/:setModulesId">
              <NUSPlannerHeader>
                <NavButton alertHome>HOME</NavButton>
              </NUSPlannerHeader>
              <TimetableInfoPage />
              <style>{"body { background-color : #dae3f2; }"}</style>
            </Route>

            <Route path="/bookmark" exact>
              <NUSPlannerHeader>
                <NavButton to="/">HOME</NavButton>
              </NUSPlannerHeader>
              <BookmarkPage />
              <style>{"body { background-color : #e2f0da; }"}</style>
            </Route>

            <Redirect to="/" />
          </Switch>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
