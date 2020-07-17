import React from 'react';
import AwardsInfo from "./awards/AwardsInfo";
import NominationForm from "./Nomination";
import NominationList from "./NominationsList";

const HomePage = () => {
    return (
        <div>
            <div >
                <AwardsInfo />
            </div>
            <div className="mt-2">
                <NominationForm />
            </div>
            <div className="mt-3">
                <NominationList />
            </div>
        </div>
    )
}
export default HomePage;
