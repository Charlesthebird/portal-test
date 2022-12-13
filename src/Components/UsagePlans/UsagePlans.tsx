import { useParams } from "react-router-dom";

function UsagePlans() {
  const { apiId } = useParams();
  //
  // Render
  //
  return (
    <div>
      Overview of Usage Plans
      {apiId !== undefined && (
        <>
          <br />
          Could show specific plans for api: {apiId}
        </>
      )}
    </div>
  );
}

export default UsagePlans;
