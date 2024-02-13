import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Spin from "../components/Spin";
import useFetch from "../hooks/useFetch";

function CurrencyScreen() {
  const { constData } = useFetch();
  const { uuid } = useParams();

  // Filter constData to get the current currency
  const currentCurrency = useMemo(() => {
    if (!uuid || !Array.isArray(constData?.coins)) return null;
    return constData?.coins.find((item) => item.uuid === uuid);
  }, [uuid, constData]);

  return (
    <div>
      {JSON.stringify(currentCurrency)}
      {!constData?.coins && (
        <div className="w-full flex justify-center items-center my-20">
          <Spin />
        </div>
      )}
    </div>
  );
}

export default CurrencyScreen;
