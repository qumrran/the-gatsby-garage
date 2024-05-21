import React from "react";
import { Link } from "gatsby";

export const CallToActionButton = ({label, destination}) => {
    return <Link to={destination} className="inline-block cursor-pointer bg-yellow-500 hover:bg-yellow-400 transition-colors py-2 px-4 font-bold uppercase no-underline rounded">{label}</Link>
}