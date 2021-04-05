import React, { useState, useEffect, useMemo, memo } from "react";
import { useSelector, useDispatch } from "react-redux";

function Loader() {
    return (
        <>
            <div className="loaderReact">
                <div
                    className="spinner-border text-primary"
                    style={{ width: "500px", height: "500px" }}
                    role="status"
                >
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </>
    );
}

export default Loader = memo(Loader);
