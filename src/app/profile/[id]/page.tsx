import React from "react";

function page({ params }: any) {
  return <div>profile page {params.id}</div>;
}

export default page;
