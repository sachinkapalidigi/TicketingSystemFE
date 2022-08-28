import React, { useEffect } from "react";
import IssueCard from "../../components/IssueCard/IssueCard";
import Navbar from "../../components/Navbar";
import { getTags } from "../../utils/apis/tags";

const Issues = () => {

    useEffect(()=>{
        getTags().then((res)=> console.debug(res)).catch((err)=>console.debug(err));
    }, [])

  return (
    <div className="">
      <Navbar />
      <div>Search & Create issue section</div>
      <section
        x-data="xData()"
        className="bg-gray-100 dark:bg-gray-900 py-10 px-12  min-h-screen"
      >
        <div className="grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
        </div>
      </section>
    </div>
  );
};

export default Issues;
