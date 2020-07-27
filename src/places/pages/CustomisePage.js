import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./CustomisePage.css";
import ShowClassesSet from "../components/Customisation/ShowClassesSet";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/ErrorModal";
import LoadingSpinner from "../../shared/components/LoadingSpinner";

const CustomisePage = () => {
  const [loadedModuleSet, setLoadedModuleSet] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const setModulesId = useParams().setModulesId;
  useEffect(() => {
    const fetchModuleSet = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/create/${setModulesId}`
        );
        setLoadedModuleSet(responseData.setModules);
      } catch (err) {}
    };
    fetchModuleSet();
  }, [sendRequest, setModulesId]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && loadedModuleSet && (
        <div>
          <h2 className="center">This is to customise your timetable.</h2>
          <li className="center">
            Select your desired/required timeslots for each Module and click on
            'CREATE' to proceed.
          </li>
          <br />
          <ShowClassesSet items={loadedModuleSet} />
        </div>
      )}
    </React.Fragment>
  );
};

export default CustomisePage;
