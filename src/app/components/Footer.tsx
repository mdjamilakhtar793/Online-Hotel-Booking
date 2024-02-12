"use client";
import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="bg-light text-center text-white">
      <div
        className="text-center text-blue-500 p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <a className="text-blue-500" href="https://jamil-dev-org.vercel.app/">
          jamil-dev-org
        </a>
      </div>
    </MDBFooter>
  );
}
