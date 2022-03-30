import React from "react";
import PeopleContent from "../component/PeopleContent";
import PeopleTable from "../component/PeopleTable";
import Header from "../component/PeopleHeader";

const People = () => {
    return (
        <div>
            <Header />
            <PeopleContent />
            <PeopleTable />
        </div>
    );
}

export default People;