import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import InfoBoxSet from "../components/InfoBoxes/InfoBoxSet";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/ErrorModal";
import LoadingSpinner from "../../shared/components/LoadingSpinner";

const TimetableInfoPage = () => {
  const [loadedTimetableInfo, setLoadedTimetableInfo] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const timetableId = useParams().timetableId;

  useEffect(() => {
    const fetchModuleSet = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/create/results/${timetableId}`
        );
        setLoadedTimetableInfo(responseData.timetableInfo);
      } catch (err) {}
    };
    fetchModuleSet();
  }, [sendRequest, timetableId]);

  const clashesWarning = () => {
    if (loadedTimetableInfo && loadedTimetableInfo.clashes)
      return (
        <h3 className="center" style={{ color: "red" }}>
          Do note that there are some clashes. Please manually resolve them.
        </h3>
      );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedTimetableInfo && (
        <div>
          <h2 className="center">This is the result!</h2>
          {clashesWarning()}
          <InfoBoxSet items={loadedTimetableInfo} />
        </div>
      )}
    </React.Fragment>
  );
};

export default TimetableInfoPage;
