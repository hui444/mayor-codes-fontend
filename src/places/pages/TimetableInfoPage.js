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

  console.log(loadedTimetableInfo);
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedTimetableInfo && (
        <InfoBoxSet items={loadedTimetableInfo} />
      )}
    </React.Fragment>
  );
};

export default TimetableInfoPage;
