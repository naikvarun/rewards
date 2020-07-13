import React from 'react';
import AwardsInfo from "./awards/AwardsInfo";
import NominationForm from "./Nomination";

const HomePage = () => {
    return (
        <div>
            <div >
                <AwardsInfo />
            </div>
            <div className="mt-2">
                <NominationForm />
            </div>
        </div>
    )
}
export default HomePage;
