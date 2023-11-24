"use client";

import React, { use, useEffect, useState } from "react";

import Tablero from "../components/Tablero";

export default function CatPage() {
  return (
    <div className='w-screen'>
      <h1>Game Cat</h1>
      <div>
        <Tablero />
      </div>
    </div>
  );
}
